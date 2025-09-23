import { NavLink, useNavigate } from "react-router-dom";
import { 
  LayoutDashboard, 
  FolderOpen, 
  BarChart3, 
  Users, 
  Settings, 
  LogOut,
  Zap,
  Brain
} from "lucide-react";
import { cn } from "@/lib/utils";

const menuItems = [
  { title: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
  { title: "New Project", icon: FolderOpen, href: "/new-project" },
  { title: "AI Forecast", icon: Brain, href: "/ai-forecast" },
  { title: "Analytics", icon: BarChart3, href: "/analytics" },
  { title: "Team", icon: Users, href: "/team" },
  { title: "Settings", icon: Settings, href: "/settings" },
];

export function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/logout");
  };

  return (
    <div className="flex h-full w-64 flex-col bg-card border-r border-border">
      {/* Logo Section */}
      <div className="flex items-center gap-3 p-6 border-b border-border">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-primary-light">
          <Zap className="h-6 w-6 text-primary-foreground" />
        </div>
        <div>
          <h1 className="text-lg font-bold text-foreground">POWERGRID AI</h1>
          <p className="text-xs text-muted-foreground">Project Estimation</p>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 space-y-1 p-4">
        <div className="mb-4">
          <p className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            MENU
          </p>
        </div>

        {menuItems.map((item) => (
          <NavLink
            key={item.href}
            to={item.href}
            end={item.href === "/dashboard"} // exact match only for dashboard
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                isActive
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              )
            }
          >
            <item.icon className="h-4 w-4" />
            {item.title}
          </NavLink>
        ))}

        <div className="mt-8 pt-4 border-t border-border">
          <p className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            GENERAL
          </p>
          <button 
            onClick={handleLogout}
            className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </button>
        </div>
      </nav>
    </div>
  );
}
