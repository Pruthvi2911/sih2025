import { useParams } from "react-router-dom";
import { Card } from "@/components/ui/card";

const projects = {
  running: [
    { id: 1, name: "Substation 110kV Bangalore", status: "Running", manager: "Sarah Chen", timeline: "18 months" },
    { id: 2, name: "Overhead Line Assam", status: "Running", manager: "Rahul Verma", timeline: "24 months" },
  ],
  completed: [
    { id: 3, name: "Transmission Tower Delhi", status: "Completed", manager: "Amit Singh", timeline: "14 months" },
  ],
  delayed: [
    { id: 4, name: "Underground Cable Mumbai", status: "Delayed", manager: "Priya Sharma", timeline: "20 months" },
  ],
  all: [] // optional
};

export default function ProjectsList() {
  const { type } = useParams<{ type: string }>();
  const list = projects[type as keyof typeof projects] || [];

  return (
    <div className="flex gap-6">
      {/* Left side - Project rows */}
      <div className="flex-1 space-y-4">
        {list.map((proj) => (
          <Card
            key={proj.id}
            className="p-4 cursor-pointer hover:bg-green-50 transition"
          >
            <p className="font-semibold">{proj.name}</p>
            <p className="text-sm text-muted-foreground">{proj.manager}</p>
          </Card>
        ))}
      </div>

      {/* Right side - Details (snappy expansion later) */}
      <div className="w-1/3 hidden lg:block">
        <Card className="p-6">
          <h2 className="text-lg font-bold">Project Details</h2>
          <p className="text-sm text-muted-foreground">Click a project to see more info...</p>
        </Card>
      </div>
    </div>
  );
}
