import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";

const projects = [
  {
    id: "substation-bangalore",
    name: "Substation 110kV Bangalore",
    type: "Substation",
    location: "Bangalore, Karnataka",
    color: "bg-pink-100 text-pink-600",
  },
  {
    id: "overhead-assam",
    name: "Overhead Line Assam",
    type: "Overhead Line",
    location: "Guwahati, Assam",
    color: "bg-yellow-100 text-yellow-600",
  },
];

export default function AIForecastList() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">AI Forecast</h1>
        <p className="text-muted-foreground">
          Select a project below to view its predictive analysis
        </p>
      </div>

      <div className="space-y-3">
        {projects.map((p) => (
          <Card
            key={p.id}
            className="flex items-center justify-between p-4 hover:bg-accent transition cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <div
                className={`h-12 w-12 flex items-center justify-center rounded-full ${p.color}`}
              >
                {p.name.charAt(0)}
              </div>
              <div>
                <p className="font-semibold">{p.name}</p>
                <p className="text-sm text-muted-foreground">
                  {p.type} • {p.location}
                </p>
              </div>
            </div>

            <Link
              to={`/ai-forecast/${p.id}`}
              className="px-4 py-2 rounded-lg border border-primary text-primary hover:bg-primary hover:text-primary-foreground text-sm font-medium"
            >
              View Forecast
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}
