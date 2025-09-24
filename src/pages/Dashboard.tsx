import { StatsCard } from "@/components/StatsCard";
import { ProjectProgressWidget } from "@/components/ProjectProgressWidget";
import { ProjectAnalyticsChart } from "@/components/ProjectAnalyticsChart";
import { TeamCollaboration } from "@/components/TeamCollaboration";
import { AIInsights } from "@/components/AIInsights";
import { DollarSign, Zap, Clock, TrendingUp } from "lucide-react";
import { useQuery } from '@tanstack/react-query';
import { getDashboardStats } from '@/lib/api';

const Dashboard = () => {
  const { data: stats, isLoading, isError } = useQuery({
    queryKey: ['dashboardStats'],
    queryFn: getDashboardStats
  });

  if (isLoading) {
    return <div>Loading dashboard data...</div>;
  }

  if (isError) {
    return <div>Error loading dashboard data. Please try again later.</div>;
  }

  return (
    <div className="space-y-6">
      {/* Header Cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Total Projects"
          value={stats?.total_projects || 0}
          change="+5 this month"
          trend="up"
          variant="primary"
          icon={<Zap className="h-5 w-5" />}
        />
        <StatsCard
          title="Ongoing Projects"
          value={stats?.ongoing_projects || 0}
          icon={<Clock className="h-5 w-5 text-info" />}
        />
        <StatsCard
          title="Completed Projects"
          value={stats?.completed_projects || 0}
          variant="success"
          icon={<TrendingUp className="h-5 w-5" />}
        />
        <StatsCard
          title="Budget Overrun"
          value={`${stats?.budget_overrun || '0%'}`}
          trend="down"
          variant="danger"
          icon={<DollarSign className="h-5 w-5" />}
        />
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <ProjectAnalyticsChart />
        </div>
        <div>
          <ProjectProgressWidget />
        </div>
      </div>

      {/* Bottom Grid */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <TeamCollaboration />
        <AIInsights />
      </div>
    </div>
  );
};

export default Dashboard;