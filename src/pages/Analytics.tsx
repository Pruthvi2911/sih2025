import { useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, DollarSign, Clock, Users, BarChart3 } from "lucide-react";
import {
  AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, PieChart, Pie, Cell
} from "recharts";

// 🔹 Mock per-project analytics data
const analyticsData: Record<string, any> = {
  "substation-bangalore": {
    name: "Substation 110kV Bangalore",
    delayTrends: [
      { month: "Jan", delays: 2, onTime: 8 },
      { month: "Feb", delays: 3, onTime: 7 },
      { month: "Mar", delays: 1, onTime: 9 },
      { month: "Apr", delays: 4, onTime: 6 },
      { month: "May", delays: 2, onTime: 8 },
    ],
    costEscalation: [
      { type: "Substation", original: 100, escalated: 112 },
    ],
    projectTypes: [
      { name: "Substations", value: 100, color: "hsl(var(--primary))" },
    ],
    vendorPerformance: [
      { vendor: "TechPower Ltd", score: 85, projects: 5 },
      { vendor: "GridSolutions", score: 92, projects: 3 },
    ]
  },
  "overhead-assam": {
    name: "Overhead Line Assam",
    delayTrends: [
      { month: "Jan", delays: 1, onTime: 6 },
      { month: "Feb", delays: 2, onTime: 5 },
      { month: "Mar", delays: 3, onTime: 4 },
    ],
    costEscalation: [
      { type: "Overhead Line", original: 80, escalated: 88 },
    ],
    projectTypes: [
      { name: "Overhead Lines", value: 100, color: "hsl(var(--success))" },
    ],
    vendorPerformance: [
      { vendor: "ElectroMax", score: 88, projects: 4 },
      { vendor: "VoltaGrid", score: 82, projects: 2 },
    ]
  }
};

export default function Analytics() {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projectId ? analyticsData[projectId] : null;

  if (!project) {
    return <p className="text-center text-muted-foreground">Project not found</p>;
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">
          Analytics - {project.name}
        </h1>
        <p className="text-muted-foreground">
          Detailed analytics and performance insights
        </p>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Delay Trends */}
        <Card>
          <CardHeader>
            <CardTitle>Project Delay Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={project.delayTrends}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                  <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                  <Area type="monotone" dataKey="onTime" stackId="1" stroke="hsl(var(--success))" fill="hsl(var(--success))" fillOpacity={0.6} />
                  <Area type="monotone" dataKey="delays" stackId="1" stroke="hsl(var(--destructive))" fill="hsl(var(--destructive))" fillOpacity={0.6} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Cost Escalation */}
        <Card>
          <CardHeader>
            <CardTitle>Cost Escalation</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={project.costEscalation}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="type" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                  <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                  <Bar dataKey="original" fill="hsl(var(--primary))" radius={[2, 2, 0, 0]} />
                  <Bar dataKey="escalated" fill="hsl(var(--warning))" radius={[2, 2, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Project Type Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Project Type Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={project.projectTypes} cx="50%" cy="50%" outerRadius={100} dataKey="value" label={({ name, value }) => `${name}: ${value}%`}>
                    {project.projectTypes.map((entry: any, index: number) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Vendor Performance */}
        <Card>
          <CardHeader>
            <CardTitle>Vendor Performance Scores</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {project.vendorPerformance.map((vendor: any) => (
                <div key={vendor.vendor} className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium">{vendor.vendor}</span>
                      <Badge variant={vendor.score >= 85 ? "default" : vendor.score >= 75 ? "secondary" : "destructive"}>
                        {vendor.score}%
                      </Badge>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary rounded-full h-2" style={{ width: `${vendor.score}%` }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
