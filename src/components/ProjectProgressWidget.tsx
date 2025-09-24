import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Completed", value: 41, color: "hsl(var(--success))" },
  { name: "In Progress", value: 32, color: "hsl(var(--info))" },
  { name: "Pending", value: 18, color: "hsl(var(--warning))" },
  { name: "Delayed", value: 9, color: "hsl(var(--destructive))" },
];

export function ProjectProgressWidget() {
  const totalProjects = data.reduce((sum, item) => sum + item.value, 0);
  const completedPercentage = ((data[0].value / totalProjects) * 100).toFixed(0);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Project Progress</CardTitle>
        <p className="text-sm text-muted-foreground">
          Overall project completion status
        </p>
      </CardHeader>
      <CardContent>
        <div className="relative flex flex-col items-center">
          {/* Pie Chart */}
          <div className="h-64 w-full">
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={data}
                  dataKey="value"
                  cx="50%"
                  cy="50%"
                  outerRadius={90}
                  innerRadius={60}
                  labelLine={false}
                  isAnimationActive={true}
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Center Text */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <div className="text-3xl font-bold text-primary">
              {completedPercentage}%
            </div>
            <div className="text-sm text-muted-foreground">Completed</div>
          </div>

          {/* Legend (custom, clean) */}
          <div className="grid grid-cols-2 gap-3 mt-6 w-full">
            {data.map((item) => (
              <div
                key={item.name}
                className="flex items-center justify-between text-sm"
              >
                <div className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <span className="text-muted-foreground">{item.name}</span>
                </div>
                <span className="font-medium">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
