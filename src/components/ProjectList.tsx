import { Avatar, AvatarFallback } from "@/components/ui/avatar"; // Assuming path is correct

interface Project {
  id: string;
  name: string;
  pviScore: number;
  riskLevel: string;
}

export function ProjectList({ projects }: { projects: Project[] }) {
  const getRiskColor = (level: string) => {
    if (level === 'High') return 'bg-red-500 text-white';
    if (level === 'Medium') return 'bg-yellow-500 text-white';
    return 'bg-green-500 text-white';
  };

  return (
    <div className="space-y-6">
      {projects.map((project) => (
        <div className="flex items-center" key={project.id}>
          <Avatar className="h-9 w-9">
            <AvatarFallback className={getRiskColor(project.riskLevel)}>
              {project.riskLevel.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{project.name}</p>
            <p className="text-sm text-muted-foreground">{project.id}</p>
          </div>
          <div className="ml-auto font-medium">{project.pviScore} P-RVI</div>
        </div>
      ))}
    </div>
  );
}