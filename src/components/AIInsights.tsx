import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, TrendingDown, Users, Clock } from "lucide-react";

const insights = [
  {
    id: 1,
    type: "risk",
    icon: <AlertTriangle className="h-4 w-4" />,
    title: "High Delay Risk Detected",
    description: "Metro Substation Project has 85% probability of delays due to material shortages and permit issues.",
    severity: "high",
    action: "Review vendor contracts"
  },
  {
    id: 2,
    type: "cost",
    icon: <TrendingDown className="h-4 w-4" />,
    title: "Cost Optimization Opportunity",
    description: "Coastal Transmission Line could save 12% on costs by adjusting material procurement timeline.",
    severity: "medium",
    action: "Schedule review meeting"
  },
  {
    id: 3,
    type: "resource",
    icon: <Users className="h-4 w-4" />,
    title: "Resource Allocation Alert",
    description: "Team utilization at 94% capacity. Consider redistributing workload across Q4 projects.",
    severity: "low",
    action: "Resource planning needed"
  }
];

const getSeverityColor = (severity: string) => {
  switch (severity) {
    case "high": return "bg-destructive text-destructive-foreground";
    case "medium": return "bg-warning text-warning-foreground";
    case "low": return "bg-info text-info-foreground";
    default: return "bg-muted text-muted-foreground";
  }
};

export function AIInsights() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <div className="rounded-lg bg-gradient-to-br from-primary to-primary-light p-2">
            <Clock className="h-4 w-4 text-primary-foreground" />
          </div>
          AI Insights
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Real-time project risk analysis and recommendations
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        {insights.map((insight) => (
          <div key={insight.id} className="space-y-2 p-4 rounded-lg border border-border bg-accent/20">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-2">
                <div className="rounded-full p-1 bg-background">
                  {insight.icon}
                </div>
                <h4 className="font-medium text-sm">{insight.title}</h4>
              </div>
              <Badge className={getSeverityColor(insight.severity)} variant="secondary">
                {insight.severity}
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {insight.description}
            </p>
            <p className="text-xs text-primary font-medium">
              → {insight.action}
            </p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}