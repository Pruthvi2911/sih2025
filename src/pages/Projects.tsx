import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";

const projects = [
  { id: 1, name: "Substation 110kV Bangalore", type: "Substation", location: "Bangalore, Karnataka", timeline: "18 months" },
  { id: 2, name: "Overhead Line Assam", type: "Overhead Line", location: "Guwahati, Assam", timeline: "12 months" },
  { id: 3, name: "Underground Cable Mumbai", type: "Cable", location: "Mumbai, Maharashtra", timeline: "24 months" },
];

export default function Projects() {
  const navigate = useNavigate();

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold text-foreground">Projects</h1>
      <p className="text-muted-foreground">Select a project to view detailed AI Forecast analytics</p>

      <div className="space-y-4">
        {projects.map((project) => (
          <Card 
            key={project.id}
            onClick={() => navigate(`/ai-forecast/${project.id}`)}
            className="p-4 flex justify-between items-center hover:bg-muted/40 cursor-pointer transition"
          >
            <div>
              <h2 className="font-semibold text-lg">{project.name}</h2>
              <p className="text-sm text-muted-foreground">
                {project.type} • {project.location} • {project.timeline}
              </p>
            </div>
            <button className="px-4 py-2 text-sm border rounded-md hover:bg-muted">
              View Details
            </button>
          </Card>
        ))}
      </div>
    </div>
  );
}
