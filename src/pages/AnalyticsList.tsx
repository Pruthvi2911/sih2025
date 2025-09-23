    import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";

const projects = [
  {
    id: "substation-bangalore",
    name: "Substation 110kV Bangalore",
    type: "Substation",
    location: "Bangalore, Karnataka",
    color: "bg-purple-100 text-purple-600",
  },
  {
    id: "overhead-assam",
    name: "Overhead Line Assam",
    type: "Overhead Line",
    location: "Guwahati, Assam",
    color: "bg-orange-100 text-orange-600",
  },
  {
    id: "underground-mumbai",
    name: "Underground Cable Mumbai",
    type: "Underground Cable",
    location: "Mumbai, Maharashtra",
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: "tower-gujarat",
    name: "Transmission Tower Gujarat",
    type: "Transmission Tower",
    location: "Ahmedabad, Gujarat",
    color: "bg-green-100 text-green-600",
  },
];

export default function AnalyticsList() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Analytics</h1>
        <p className="text-muted-foreground">
          Select a project below to view its analytics dashboard
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
              to={`/analytics/${p.id}`}
              className="px-4 py-2 rounded-lg border border-primary text-primary hover:bg-primary hover:text-primary-foreground text-sm font-medium"
            >
              View Analytics
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}
