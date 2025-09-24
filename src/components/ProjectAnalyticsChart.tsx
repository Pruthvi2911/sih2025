import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, Legend } from "recharts";
import { useQuery } from '@tanstack/react-query';
import { getProjectAnalytics } from '@/lib/api';

export function ProjectAnalyticsChart() {
  const { data: chartData, isLoading, isError } = useQuery({
    queryKey: ['projectAnalytics'],
    queryFn: getProjectAnalytics
  });

  if (isLoading) return <div>Loading Chart...</div>;
  if (isError) return <div>Error loading chart data.</div>;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Project Analytics</CardTitle>
        <p className="text-sm text-muted-foreground">Monthly Overrun Trends</p>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData?.datasets[0].data.map((_, i) => ({
                name: chartData.labels[i],
                'Cost Overrun %': chartData.datasets[0].data[i],
                'Timeline Overrun %': chartData.datasets[1].data[i],
            }))} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis 
                dataKey="name" 
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
              />
              <YAxis 
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
              />
              <Tooltip />
              <Legend />
              <Bar 
                dataKey="Cost Overrun %" 
                fill="hsl(var(--destructive))" 
                radius={[4, 4, 0, 0]}
              />
              <Bar 
                dataKey="Timeline Overrun %" 
                fill="hsl(var(--warning))" 
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}