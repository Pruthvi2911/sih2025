import { StatsCard } from "@/components/StatsCard";
import { ProjectAnalyticsChart } from "@/components/ProjectAnalyticsChart";
import { AIInsights } from "@/components/AIInsights";
import { TeamCollaboration } from "@/components/TeamCollaboration";
import { ProjectProgressWidget } from "@/components/ProjectProgressWidget";
import { Button } from "@/components/ui/button";
import { Plus, Import, FolderOpen, Users, AlertTriangle, DollarSign, Clock } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="space-y-6 min-h-screen p-6 bg-gray-50">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground">Plan, prioritize, and accomplish your projects with ease.</p>
        </div>
        <div className="flex gap-3">
          <Button className="bg-green-700 hover:bg-green-800 text-white">
            <Import className="h-4 w-4 mr-2" />
            Import Data
          </Button>
          <Button className="bg-green-700 hover:bg-green-800 text-white" onClick={() => window.location.href = "/new-project"}>
            <Plus className="h-4 w-4 mr-2" />
            Add Project
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        <StatsCard
          title="Total Projects"
          value="24"
          change="Increased from last month"
          trend="up"
          variant="primary"
          icon={<FolderOpen className="h-5 w-5" />}
        />
        <StatsCard
          title="Running Projects"
          value="12"
          change="Increased from last month"
          trend="up"
          icon={<Clock className="h-5 w-5 text-info" />}
        />
        <StatsCard
          title="Completed Projects"
          value="10"
          change="Increased from last month"
          trend="up"
          icon={<Users className="h-5 w-5 text-success" />}
        />
        <StatsCard
          title="Delayed Projects"
          value="2"
          change="On Discuss"
          trend="neutral"
          icon={<AlertTriangle className="h-5 w-5 text-warning" />}
        />
        <StatsCard
          title="Cost Overrun Risk"
          value="8%"
          change="Decreased from last month"
          trend="down"
          icon={<DollarSign className="h-5 w-5 text-destructive" />}
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Charts */}
        <div className="lg:col-span-2 space-y-6">
          <ProjectAnalyticsChart />
          <TeamCollaboration />
        </div>

        {/* Right Column - Widgets */}
        <div className="space-y-6">
          <AIInsights />
          <ProjectProgressWidget />
        </div>
      </div>
    </div>
  );
}
