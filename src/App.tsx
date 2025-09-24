import { useEffect, useState } from 'react';
import './App.css'; // We will create the styles for this

// NEW IMPORTS: Icons for our stats cards
import { AlertTriangle, ClipboardList } from 'lucide-react'; 

// Import your actual components
import { StatsCard } from './components/StatsCard'; 
import { ProjectAnalyticsChart } from './components/ProjectAnalyticsChart';
import { ProjectList } from './components/ProjectList';

// Define the structure of our data to match the JSON
interface DrishtiData {
  kpis: {
    overallPortfolioPVI: number;
    projectsAtRisk: number;
  };
  pviTrend: { name: string; pvi: number }[];
  projects: { id: string; name: string; pviScore: number; riskLevel: string }[];
}

function App() {
  const [data, setData] = useState<DrishtiData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('/data/data.json')
      .then((res) => res.json())
      .then((fetchedData) => {
        setData(fetchedData);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div className="loading-container"><h1>Loading DRISHTI Dashboard...</h1></div>;
  }
  
  if (!data) {
    return <div className="loading-container"><h1>Error loading data.</h1></div>;
  }

  return (
    <main className="dashboard-layout">
      <header className="dashboard-header">
        <h1>DRISHTI Dashboard</h1>
        <p>Project Risk Intelligence & Strategy Matrix</p>
      </header>
      
      {/* UPDATED STATSCARDS: Now using variant, trend, and icon props */}
      <section className="kpi-grid">
        <StatsCard 
          title="Overall Portfolio P-RVI" 
          value={data.kpis.overallPortfolioPVI} 
          description="High Risk Portfolio"
          variant="danger"
          trend="up"
          icon={<AlertTriangle className="h-5 w-5" />}
        />
        <StatsCard 
          title="Projects at Risk" 
          value={data.kpis.projectsAtRisk} 
          description="Projects with P-RVI > 60"
          variant="warning"
          icon={<ClipboardList className="h-5 w-5" />}
        />
      </section>
      
      <section className="charts-grid">
        <ProjectAnalyticsChart data={data.pviTrend} />
        <Card>
          <CardHeader>
            <CardTitle>High-Risk Projects</CardTitle>
          </CardHeader>
          <CardContent>
            <ProjectList projects={data.projects} />
          </CardContent>
        </Card>
      </section>
    </main>
  );
}

// Dummy components to avoid breaking the App if they are not yet fully integrated
const Card = ({ children, ...props }: { children: React.ReactNode, [key: string]: any }) => <div {...props} className="bg-card text-card-foreground border rounded-lg shadow-sm">{children}</div>;
const CardHeader = ({ children }: { children: React.ReactNode }) => <div className="p-6 pb-4">{children}</div>;
const CardContent = ({ children }: { children: React.ReactNode }) => <div className="p-6 pt-0">{children}</div>;
const CardTitle = ({ children }: { children: React.ReactNode }) => <h3 className="font-semibold text-lg">{children}</h3>;

export default App;