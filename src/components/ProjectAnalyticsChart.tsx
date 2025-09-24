import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";

// 1. We now accept data as a prop
interface ChartProps {
  data: { name: string; pvi: number }[];
}

export function ProjectAnalyticsChart({ data }: ChartProps) {
  return (
    <Card>
      <CardHeader>
        {/* 2. The title and description are updated to reflect P-RVI */}
        <CardTitle className="text-lg font-semibold">P-RVI Trend</CardTitle>
        <p className="text-sm text-muted-foreground">
          Portfolio-wide risk index over the last 6 months
        </p>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            {/* 3. The BarChart now uses the 'data' from props */}
            <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis 
                // 4. The dataKey for the X-axis is now 'name' (for the month)
                dataKey="name" 
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
              />
              <YAxis 
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
              />
              {/* 5. We now have only ONE bar, representing the P-RVI score */}
              <Bar 
                dataKey="pvi" 
                fill="hsl(var(--primary))" 
                radius={[4, 4, 0, 0]}
                name="P-RVI Score"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
        {/* 6. The old legend for "On Time" vs "Delayed" is no longer needed and has been removed. */}
      </CardContent>
    </Card>
  );
}