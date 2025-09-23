import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";

const data = [
  { day: "Mon", delays: 2, onTime: 8, total: 10 },
  { day: "Tue", delays: 1, onTime: 9, total: 10 },
  { day: "Wed", delays: 4, onTime: 6, total: 10 },
  { day: "Thu", delays: 2, onTime: 8, total: 10 },
  { day: "Fri", delays: 3, onTime: 7, total: 10 },
  { day: "Sat", delays: 1, onTime: 4, total: 5 },
  { day: "Sun", delays: 0, onTime: 3, total: 3 },
];

export function ProjectAnalyticsChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Project Analytics</CardTitle>
        <p className="text-sm text-muted-foreground">Weekly project completion trends</p>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis 
                dataKey="day" 
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
              />
              <YAxis 
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
              />
              <Bar 
                dataKey="onTime" 
                fill="hsl(var(--primary))" 
                radius={[4, 4, 0, 0]}
                name="On Time"
              />
              <Bar 
                dataKey="delays" 
                fill="hsl(var(--warning))" 
                radius={[4, 4, 0, 0]}
                name="Delayed"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="flex items-center justify-center gap-6 mt-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-primary"></div>
            <span className="text-sm text-muted-foreground">On Time</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-warning"></div>
            <span className="text-sm text-muted-foreground">Delayed</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}