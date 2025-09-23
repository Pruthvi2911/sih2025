import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, DollarSign, Clock, Users, BarChart3 } from "lucide-react";
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const delayTrends = [
  { month: "Jan", delays: 2, onTime: 8 },
  { month: "Feb", delays: 3, onTime: 7 },
  { month: "Mar", delays: 1, onTime: 9 },
  { month: "Apr", delays: 4, onTime: 6 },
  { month: "May", delays: 2, onTime: 8 },
  { month: "Jun", delays: 5, onTime: 5 },
];

const costEscalation = [
  { type: "Substation", original: 100, escalated: 112 },
  { type: "Overhead Line", original: 80, escalated: 88 },
  { type: "Underground Cable", original: 150, escalated: 165 },
  { type: "Transmission Tower", original: 60, escalated: 63 },
];

const vendorPerformance = [
  { vendor: "TechPower Ltd", score: 85, projects: 12 },
  { vendor: "GridSolutions", score: 92, projects: 8 },
  { vendor: "PowerTech India", score: 78, projects: 15 },
  { vendor: "ElectroMax", score: 88, projects: 10 },
  { vendor: "VoltaGrid", score: 82, projects: 6 },
];

const projectTypes = [
  { name: "Substations", value: 35, color: "hsl(var(--primary))" },
  { name: "Overhead Lines", value: 30, color: "hsl(var(--success))" },
  { name: "Underground Cables", value: 20, color: "hsl(var(--warning))" },
  { name: "Transmission Towers", value: 15, color: "hsl(var(--destructive))" },
];

export default function Analytics() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Analytics</h1>
        <p className="text-muted-foreground">Comprehensive project analytics and performance insights</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Avg Delay Rate</p>
                <p className="text-2xl font-bold">23%</p>
                <div className="flex items-center gap-1 mt-1">
                  <TrendingDown className="h-4 w-4 text-success" />
                  <span className="text-sm text-success">-5% from last month</span>
                </div>
              </div>
              <Clock className="h-8 w-8 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Cost Overrun</p>
                <p className="text-2xl font-bold">12.5%</p>
                <div className="flex items-center gap-1 mt-1">
                  <TrendingUp className="h-4 w-4 text-destructive" />
                  <span className="text-sm text-destructive">+2% from last month</span>
                </div>
              </div>
              <DollarSign className="h-8 w-8 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Vendor Efficiency</p>
                <p className="text-2xl font-bold">85.2%</p>
                <div className="flex items-center gap-1 mt-1">
                  <TrendingUp className="h-4 w-4 text-success" />
                  <span className="text-sm text-success">+3% from last month</span>
                </div>
              </div>
              <Users className="h-8 w-8 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Success Rate</p>
                <p className="text-2xl font-bold">77%</p>
                <div className="flex items-center gap-1 mt-1">
                  <TrendingUp className="h-4 w-4 text-success" />
                  <span className="text-sm text-success">+8% from last month</span>
                </div>
              </div>
              <BarChart3 className="h-8 w-8 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Delay Trends */}
        <Card>
          <CardHeader>
            <CardTitle>Project Delay Trends</CardTitle>
            <p className="text-sm text-muted-foreground">Monthly comparison of delayed vs on-time projects</p>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={delayTrends}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                  <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                  <Area
                    type="monotone"
                    dataKey="onTime"
                    stackId="1"
                    stroke="hsl(var(--success))"
                    fill="hsl(var(--success))"
                    fillOpacity={0.6}
                  />
                  <Area
                    type="monotone"
                    dataKey="delays"
                    stackId="1"
                    stroke="hsl(var(--destructive))"
                    fill="hsl(var(--destructive))"
                    fillOpacity={0.6}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Cost Escalation */}
        <Card>
          <CardHeader>
            <CardTitle>Cost Escalation by Project Type</CardTitle>
            <p className="text-sm text-muted-foreground">Original budget vs predicted costs (in Crores)</p>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={costEscalation}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis 
                    dataKey="type" 
                    stroke="hsl(var(--muted-foreground))" 
                    fontSize={12}
                    angle={-45}
                    textAnchor="end"
                    height={80}
                  />
                  <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                  <Bar dataKey="original" fill="hsl(var(--primary))" radius={[2, 2, 0, 0]} />
                  <Bar dataKey="escalated" fill="hsl(var(--warning))" radius={[2, 2, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Project Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Project Type Distribution</CardTitle>
            <p className="text-sm text-muted-foreground">Breakdown of projects by type</p>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={projectTypes}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}%`}
                  >
                    {projectTypes.map((entry, index) => (
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
            <p className="text-sm text-muted-foreground">Performance rating based on project delivery</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {vendorPerformance.map((vendor, index) => (
                <div key={vendor.vendor} className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium">{vendor.vendor}</span>
                      <div className="flex items-center gap-2">
                        <Badge variant={vendor.score >= 85 ? "default" : vendor.score >= 75 ? "secondary" : "destructive"}>
                          {vendor.score}%
                        </Badge>
                        <span className="text-sm text-muted-foreground">{vendor.projects} projects</span>
                      </div>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-primary rounded-full h-2 transition-all duration-300"
                        style={{ width: `${vendor.score}%` }}
                      />
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