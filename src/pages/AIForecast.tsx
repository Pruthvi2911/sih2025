import { useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Download, TrendingUp, Clock, DollarSign, CheckCircle, XCircle } from "lucide-react";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";

// 🔹 Mock project data (you can replace this later with API/DB)
const projects: Record<string, any> = {
  "substation-bangalore": {
    name: "Substation 110kV Bangalore",
    type: "Substation",
    location: "Bangalore, Karnataka",
    timeline: "18 months",
    timelineRisk: [
      { name: "On Time", value: 28, color: "hsl(var(--success))" },
      { name: "Delay Risk", value: 72, color: "hsl(var(--destructive))" }
    ],
    costData: [
      { category: "Original Budget", amount: 125000000 },
      { category: "Predicted Cost", amount: 140000000 },
      { category: "Cost Overrun", amount: 15000000 }
    ],
    hotspots: [
      { type: "error", title: "Vendor Material Shortages", desc: "Transformer supplier facing 6-week delay in production" },
      { type: "warning", title: "Monsoon Impact Risk", desc: "Construction activities may be affected during June-September" },
      { type: "warning", title: "Regulatory Approval Delays", desc: "Environmental clearance pending from Karnataka State Pollution Control Board" },
    ],
    recommendations: [
      "Consider Alternate Vendors for Transformers",
      "Add 20% Buffer Time for Monsoon Season",
      "Expedite Permit Follow-up with Local Authority"
    ]
  },
  "overhead-assam": {
    name: "Overhead Line Assam",
    type: "Overhead Line",
    location: "Guwahati, Assam",
    timeline: "24 months",
    timelineRisk: [
      { name: "On Time", value: 60, color: "hsl(var(--success))" },
      { name: "Delay Risk", value: 40, color: "hsl(var(--destructive))" }
    ],
    costData: [
      { category: "Original Budget", amount: 80000000 },
      { category: "Predicted Cost", amount: 88000000 },
      { category: "Cost Overrun", amount: 8000000 }
    ],
    hotspots: [
      { type: "warning", title: "Land Acquisition Issues", desc: "Delays expected due to disputes with local landowners" },
      { type: "error", title: "Labor Strike Risk", desc: "Union strike could delay work by up to 4 weeks" },
    ],
    recommendations: [
      "Negotiate early with landowners",
      "Hire local contractors to reduce strike risks"
    ]
  }
};

export default function AIForecast() {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projectId ? projects[projectId] : null;

  if (!project) {
    return <p className="text-center text-muted-foreground">Project not found</p>;
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">AI Forecast Results</h1>
          <p className="text-muted-foreground">Predictive analysis for {project.name}</p>
        </div>
        <Button>
          <Download className="h-4 w-4 mr-2" />
          Download Forecast Report (PDF)
        </Button>
      </div>

      {/* Project Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-success" />
            Project Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <p className="text-sm text-muted-foreground">Project Name</p>
              <p className="font-semibold">{project.name}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Type</p>
              <p className="font-semibold">{project.type}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Location</p>
              <p className="font-semibold">{project.location}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Timeline</p>
              <p className="font-semibold">{project.timeline}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Risk Analysis Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Timeline Risk */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-warning" />
              Predicted Timeline Risk
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold text-destructive">
                  {project.timelineRisk[1].value > 50 ? "High Risk of Delay" : "Moderate Risk"}
                </span>
                <Badge variant="destructive">{project.timelineRisk[1].value}% Probability</Badge>
              </div>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={project.timelineRisk}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {project.timelineRisk.map((entry: any, index: number) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Cost Risk */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-warning" />
              Predicted Cost Risk
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold text-destructive">Cost Overrun</span>
                <Badge variant="destructive">80% Confidence</Badge>
              </div>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={project.costData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="category" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                    <YAxis
                      stroke="hsl(var(--muted-foreground))"
                      fontSize={12}
                      tickFormatter={(value) => `₹${(value / 10000000).toFixed(0)}Cr`}
                    />
                    <Bar dataKey="amount" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Key Hotspots */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-warning" />
            Key Hotspots Identified
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {project.hotspots.map((h: any, i: number) => (
              <div
                key={i}
                className={`flex items-start gap-3 p-3 rounded-lg border ${
                  h.type === "error" ? "bg-destructive/10 border-destructive/20" : "bg-warning/10 border-warning/20"
                }`}
              >
                {h.type === "error" ? (
                  <XCircle className="h-5 w-5 text-destructive mt-0.5" />
                ) : (
                  <AlertTriangle className="h-5 w-5 text-warning mt-0.5" />
                )}
                <div>
                  <p className={`font-semibold ${h.type === "error" ? "text-destructive" : "text-warning"}`}>
                    {h.title}
                  </p>
                  <p className="text-sm text-muted-foreground">{h.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* AI Recommendations */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-primary" />
            AI Recommendations
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {project.recommendations.map((rec: string, i: number) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-primary/10 border border-primary/20">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-semibold">{rec}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
