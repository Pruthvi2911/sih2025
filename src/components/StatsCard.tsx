import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, TrendingDown, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatsCardProps {
  title: string;
  value: string | number;
  change?: string;
  trend?: "up" | "down" | "neutral";
  variant?: "default" | "primary" | "success" | "warning" | "danger";
  icon?: React.ReactNode;
}

export function StatsCard({ 
  title, 
  value, 
  change, 
  trend = "neutral", 
  variant = "default",
  icon 
}: StatsCardProps) {
  const cardClasses = cn(
    "relative overflow-hidden transition-all hover:shadow-md",
    {
      "bg-gradient-to-br from-primary to-primary-light text-primary-foreground": variant === "primary",
      "bg-gradient-to-br from-success to-success/80 text-success-foreground": variant === "success",
      "bg-gradient-to-br from-warning to-warning/80 text-warning-foreground": variant === "warning",
      "bg-gradient-to-br from-destructive to-destructive/80 text-destructive-foreground": variant === "danger",
    }
  );

  const getTrendIcon = () => {
    if (trend === "up") return <TrendingUp className="h-3 w-3" />;
    if (trend === "down") return <TrendingDown className="h-3 w-3" />;
    return null;
  };

  const getTrendColor = () => {
    if (variant !== "default") return "text-current opacity-80";
    if (trend === "up") return "text-success";
    if (trend === "down") return "text-destructive";
    return "text-muted-foreground";
  };

  return (
    <Card className={cardClasses}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <p className={cn(
              "text-sm font-medium",
              variant === "default" ? "text-muted-foreground" : "text-current opacity-80"
            )}>
              {title}
            </p>
            <p className="text-2xl font-bold">{value}</p>
            {change && (
              <div className={cn("flex items-center gap-1 text-xs", getTrendColor())}>
                {getTrendIcon()}
                <span>{change}</span>
              </div>
            )}
          </div>
          {icon && (
            <div className="rounded-lg p-2 bg-white/10">
              {icon}
            </div>
          )}
        </div>
        {variant === "primary" && (
          <ArrowUpRight className="absolute top-4 right-4 h-4 w-4 opacity-60" />
        )}
      </CardContent>
    </Card>
  );
}