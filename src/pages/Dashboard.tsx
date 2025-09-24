import { Link } from "react-router-dom";
import { FolderOpen, Clock, Users, AlertTriangle, DollarSign, Import, Plus } from "lucide-react";
import { ProjectAnalyticsChart } from "@/components/ProjectAnalyticsChart";
import { AIInsights } from "@/components/AIInsights";
import { TeamCollaboration } from "@/components/TeamCollaboration";
import { ProjectProgressWidget } from "@/components/ProjectProgressWidget";
import { Button } from "@/components/ui/button";

const Dashboard = () => {
  return (
    <div className="space-y-6 min-h-screen p-6 bg-gray-50">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground">
            Plan, prioritize, and accomplish your projects with ease.
          </p>
        </div>
        <div className="flex gap-3">
          <Button className="bg-green-700 hover:bg-green-800 text-white">
            <Import className="h-4 w-4 mr-2" />
            Import Data
          </Button>
          <Button
            className="bg-green-700 hover:bg-green-800 text-white"
            onClick={() => (window.location.href = "/new-project")}
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Project
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {/* Total Projects */}
        <Link
          to="/projects/all"
          className="rounded-2xl shadow-sm border border-gray-200 bg-gradient-to-br from-green-600 to-green-700 text-white transition hover:brightness-110"
        >
          <div className="p-6 flex flex-col h-full justify-between">
            <div>
              <p className="text-sm opacity-80">Total Projects</p>
              <p className="text-3xl font-bold mt-2">24</p>
              <p className="text-xs mt-1 opacity-80">↑ Increased from last month</p>
            </div>
            <div className="flex justify-end">
              <FolderOpen className="h-6 w-6 opacity-40" />
            </div>
          </div>
        </Link>

        {/* Running Projects */}
        <Link
          to="/projects/running"
          className="rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition hover:bg-green-50"
        >
          <div className="p-6 flex flex-col h-full justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Running Projects</p>
              <p className="text-3xl font-bold mt-2">12</p>
              <p className="text-xs mt-1 text-green-600">↑ Increased from last month</p>
            </div>
            <div className="flex justify-end">
              <Clock className="h-6 w-6 text-gray-400" />
            </div>
          </div>
        </Link>

        {/* Completed Projects */}
        <Link
          to="/projects/completed"
          className="rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition hover:bg-green-50"
        >
          <div className="p-6 flex flex-col h-full justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Completed Projects</p>
              <p className="text-3xl font-bold mt-2">10</p>
              <p className="text-xs mt-1 text-green-600">↑ Increased from last month</p>
            </div>
            <div className="flex justify-end">
              <Users className="h-6 w-6 text-gray-400" />
            </div>
          </div>
        </Link>

        {/* Delayed Projects */}
        <Link
          to="/projects/delayed"
          className="rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition hover:bg-green-50"
        >
          <div className="p-6 flex flex-col h-full justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Delayed Projects</p>
              <p className="text-3xl font-bold mt-2">2</p>
              <p className="text-xs mt-1 text-yellow-600">On Discussion</p>
            </div>
            <div className="flex justify-end">
              <AlertTriangle className="h-6 w-6 text-yellow-400" />
            </div>
          </div>
        </Link>

        {/* Cost Overrun Risk */}
        <Link
          to="/projects/cost"
          className="rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition hover:bg-green-50"
        >
          <div className="p-6 flex flex-col h-full justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Cost Overrun Risk</p>
              <p className="text-3xl font-bold mt-2">8%</p>
              <p className="text-xs mt-1 text-red-600">↓ Decreased from last month</p>
            </div>
            <div className="flex justify-end">
              <DollarSign className="h-6 w-6 text-red-400" />
            </div>
          </div>
        </Link>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <ProjectAnalyticsChart />
        </div>
        <div>
          <ProjectProgressWidget />
        </div>
      </div>

      {/* Bottom Grid */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <TeamCollaboration />
        <AIInsights />
      </div>
    </div>
  );
};

export default Dashboard;
