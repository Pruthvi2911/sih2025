import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Plus } from "lucide-react";

const teamMembers = [
  {
    id: 1,
    name: "Alexandra Chen",
    role: "Senior Engineer",
    avatar: "/placeholder-avatar.jpg",
    task: "Underground Cable Installation",
    status: "completed",
    progress: 100
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    role: "Project Manager",
    avatar: "/placeholder-avatar.jpg", 
    task: "Substation Design Review",
    status: "in-progress",
    progress: 75
  },
  {
    id: 3,
    name: "Sarah Kim",
    role: "Environmental Specialist",
    avatar: "/placeholder-avatar.jpg",
    task: "Environmental Impact Assessment",
    status: "pending",
    progress: 0
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Field Supervisor",
    avatar: "/placeholder-avatar.jpg",
    task: "Equipment Installation Planning",
    status: "in-progress",
    progress: 45
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "completed": return "bg-success text-success-foreground";
    case "in-progress": return "bg-info text-info-foreground";
    case "pending": return "bg-warning text-warning-foreground";
    default: return "bg-muted text-muted-foreground";
  }
};

const getStatusText = (status: string) => {
  switch (status) {
    case "completed": return "Completed";
    case "in-progress": return "In Progress"; 
    case "pending": return "Pending";
    default: return "Unknown";
  }
};

export function TeamCollaboration() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Team Collaboration</CardTitle>
            <p className="text-sm text-muted-foreground">Current team activities and progress</p>
          </div>
          <Button variant="outline" size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Add Member
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {teamMembers.map((member) => (
          <div key={member.id} className="flex items-center gap-4 p-3 rounded-lg border border-border bg-accent/10">
            <Avatar>
              <AvatarImage src={member.avatar} alt={member.name} />
              <AvatarFallback>
                {member.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <h4 className="font-medium text-sm truncate">{member.name}</h4>
                <Badge className={getStatusColor(member.status)} variant="secondary">
                  {getStatusText(member.status)}
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground mb-1">{member.role}</p>
              <p className="text-xs text-foreground">Working on: {member.task}</p>
              
              {member.status === "in-progress" && (
                <div className="mt-2">
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="text-foreground">{member.progress}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-1.5">
                    <div 
                      className="bg-primary h-1.5 rounded-full transition-all duration-300" 
                      style={{ width: `${member.progress}%` }}
                    ></div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}