import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Users, Plus, Mail, Phone, MapPin, Calendar } from "lucide-react";

const teamMembers = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Project Manager",
    email: "rajesh.kumar@powergrid.ai",
    phone: "+91 98765 43210",
    location: "Delhi",
    avatar: "/placeholder.svg",
    status: "active",
    tasksCompleted: 24,
    totalTasks: 30,
    currentProject: "Substation 110kV Bangalore",
    joinDate: "2022-01-15"
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Electrical Engineer",
    email: "priya.sharma@powergrid.ai",
    phone: "+91 98765 43211",
    location: "Mumbai",
    avatar: "/placeholder.svg",
    status: "active",
    tasksCompleted: 18,
    totalTasks: 22,
    currentProject: "Overhead Line Assam",
    joinDate: "2021-08-20"
  },
  {
    id: 3,
    name: "Amit Singh",
    role: "Site Engineer",
    email: "amit.singh@powergrid.ai",
    phone: "+91 98765 43212",
    location: "Bangalore",
    avatar: "/placeholder.svg",
    status: "busy",
    tasksCompleted: 32,
    totalTasks: 35,
    currentProject: "Underground Cable Mumbai",
    joinDate: "2020-03-10"
  },
  {
    id: 4,
    name: "Sneha Patel",
    role: "Quality Analyst",
    email: "sneha.patel@powergrid.ai",
    phone: "+91 98765 43213",
    location: "Ahmedabad",
    avatar: "/placeholder.svg",
    status: "available",
    tasksCompleted: 15,
    totalTasks: 20,
    currentProject: "Transmission Tower Gujarat",
    joinDate: "2023-02-01"
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "active": return "default";
    case "busy": return "destructive";
    case "available": return "secondary";
    default: return "secondary";
  }
};

const getStatusText = (status: string) => {
  switch (status) {
    case "active": return "Active";
    case "busy": return "Busy";
    case "available": return "Available";
    default: return "Unknown";
  }
};

export default function Team() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Team</h1>
          <p className="text-muted-foreground">Manage your project team and track their progress</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add Team Member
        </Button>
      </div>

      {/* Team Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Members</p>
                <p className="text-2xl font-bold">12</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-success/10">
                <Users className="h-6 w-6 text-success" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Active</p>
                <p className="text-2xl font-bold">8</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-warning/10">
                <Users className="h-6 w-6 text-warning" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Busy</p>
                <p className="text-2xl font-bold">3</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-muted">
                <Users className="h-6 w-6 text-muted-foreground" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Available</p>
                <p className="text-2xl font-bold">1</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Team Members Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {teamMembers.map((member) => (
          <Card key={member.id}>
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={member.avatar} />
                    <AvatarFallback>
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">{member.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                  </div>
                </div>
                <Badge variant={getStatusColor(member.status)}>
                  {getStatusText(member.status)}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Contact Info */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span>{member.email}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span>{member.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span>{member.location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span>Joined {new Date(member.joinDate).toLocaleDateString()}</span>
                </div>
              </div>

              {/* Current Project */}
              <div>
                <p className="text-sm font-medium mb-1">Current Project</p>
                <p className="text-sm text-muted-foreground">{member.currentProject}</p>
              </div>

              {/* Task Progress */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-medium">Task Progress</p>
                  <span className="text-sm text-muted-foreground">
                    {member.tasksCompleted}/{member.totalTasks}
                  </span>
                </div>
                <Progress 
                  value={(member.tasksCompleted / member.totalTasks) * 100} 
                  className="h-2"
                />
              </div>

              {/* Actions */}
              <div className="flex gap-2 pt-2">
                <Button size="sm" className="flex-1 bg-green-700 hover:bg-green-800 text-white">
  View Profile
</Button>
<Button size="sm" className="flex-1 bg-green-700 hover:bg-green-800 text-white">
  Assign Task
</Button>

              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}