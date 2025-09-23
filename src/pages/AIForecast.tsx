import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { AlertTriangle, Download, TrendingUp, Clock, DollarSign, CheckCircle, XCircle } from "lucide-react";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";

const timelineData = [
  { name: "On Time", value: 28, color: "hsl(var(--success))" },
  { name: "Delay Risk", value: 72, color: "hsl(var(--destructive))" }
];

const costData = [
  { category: "Original Budget", amount: 125000000 },
  { category: "Predicted Cost", amount: 140000000 },
  { category: "Cost Overrun", amount: 15000000 }
];

export default function AIForecast() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">AI Forecast Results</h1>
          <p className="text-muted-foreground">Predictive analysis for Substation 110kV Bangalore</p>
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
              <p className="font-semibold">Substation 110kV Bangalore</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Type</p>
              <p className="font-semibold">Substation</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Location</p>
              <p className="font-semibold">Bangalore, Karnataka</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Timeline</p>
              <p className="font-semibold">18 months</p>
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
                <span className="text-lg font-semibold text-destructive">High Risk of 2-Month Delay</span>
                <Badge variant="destructive">72% Probability</Badge>
              </div>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={timelineData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {timelineData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="flex justify-center gap-6">
                {timelineData.map((item) => (
                  <div key={item.name} className="flex items-center gap-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-sm">{item.name}: {item.value}%</span>
                  </div>
                ))}
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
                <span className="text-lg font-semibold text-destructive">+12% Cost Overrun</span>
                <Badge variant="destructive">80% Confidence</Badge>
              </div>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={costData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis 
                      dataKey="category" 
                      stroke="hsl(var(--muted-foreground))"
                      fontSize={12}
                      angle={-45}
                      textAnchor="end"
                      height={80}
                    />
                    <YAxis 
                      stroke="hsl(var(--muted-foreground))"
                      fontSize={12}
                      tickFormatter={(value) => `₹${(value / 10000000).toFixed(0)}Cr`}
                    />
                    <Bar 
                      dataKey="amount" 
                      fill="hsl(var(--primary))" 
                      radius={[4, 4, 0, 0]}
                    />
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
            <div className="flex items-start gap-3 p-3 rounded-lg bg-destructive/10 border border-destructive/20">
              <XCircle className="h-5 w-5 text-destructive mt-0.5" />
              <div>
                <p className="font-semibold text-destructive">Vendor Material Shortages</p>
                <p className="text-sm text-muted-foreground">Transformer supplier facing 6-week delay in production</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg bg-warning/10 border border-warning/20">
              <AlertTriangle className="h-5 w-5 text-warning mt-0.5" />
              <div>
                <p className="font-semibold text-warning">Monsoon Impact Risk</p>
                <p className="text-sm text-muted-foreground">Construction activities may be affected during June-September</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg bg-warning/10 border border-warning/20">
              <Clock className="h-5 w-5 text-warning mt-0.5" />
              <div>
                <p className="font-semibold text-warning">Regulatory Approval Delays</p>
                <p className="text-sm text-muted-foreground">Environmental clearance pending from Karnataka State Pollution Control Board</p>
              </div>
            </div>
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
            <div className="flex items-start gap-3 p-3 rounded-lg bg-primary/10 border border-primary/20">
              <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <p className="font-semibold">Consider Alternate Vendors for Transformers</p>
                <p className="text-sm text-muted-foreground">Identify backup suppliers from approved vendor list to mitigate supply chain risk</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg bg-primary/10 border border-primary/20">
              <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <p className="font-semibold">Add 20% Buffer Time for Monsoon Season</p>
                <p className="text-sm text-muted-foreground">Adjust project timeline to account for weather-related construction delays</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg bg-primary/10 border border-primary/20">
              <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <p className="font-semibold">Expedite Permit Follow-up with Local Authority</p>
                <p className="text-sm text-muted-foreground">Engage regulatory consultant to fast-track environmental clearance process</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}