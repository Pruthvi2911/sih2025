import { Mail, Bell, User, LogOut, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";

export function Header() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-border bg-card px-6">
      {/* Search Bar */}
      <div className="flex items-center gap-4 flex-1 max-w-md">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search projects, tasks..."
            className="w-full rounded-md border border-gray-300 bg-white pl-4 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-3">
        {/* Mail Icon with badge */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="relative">
              <Mail className="h-5 w-5" />
              <Badge className="absolute -top-1 -right-1 h-4 w-4 flex items-center justify-center rounded-full bg-primary text-white text-[10px]">
                3
              </Badge>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-64">
            <DropdownMenuLabel>Messages</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>📩 Project deadline updated</DropdownMenuItem>
            <DropdownMenuItem>📩 Vendor submitted new documents</DropdownMenuItem>
            <DropdownMenuItem>📩 Meeting rescheduled to 3 PM</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Notifications Icon with badge */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <Badge className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-primary"></Badge>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-64">
            <DropdownMenuLabel>Notifications</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>⚡ New AI Forecast available</DropdownMenuItem>
            <DropdownMenuItem>⚡ Budget overrun alert</DropdownMenuItem>
            <DropdownMenuItem>⚡ 2 team members marked tasks complete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* User Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="flex items-center gap-3 ml-4 pl-4 border-l border-border cursor-pointer">
              <div className="text-right">
                <p className="text-sm font-medium text-foreground">Sarah Chen</p>
                <p className="text-xs text-muted-foreground">Project Manager</p>
              </div>
              <Avatar>
                <AvatarImage src="/placeholder-avatar.jpg" alt="Sarah Chen" />
                <AvatarFallback>
                  <User className="h-4 w-4" />
                </AvatarFallback>
              </Avatar>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-48">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" /> Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" /> Settings
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOut className="mr-2 h-4 w-4" /> Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
