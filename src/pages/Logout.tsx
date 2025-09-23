import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, LogOut } from "lucide-react";

export default function Logout() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/5 p-4">
      <Card className="w-full max-w-md text-center">
        <CardHeader>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="p-2 rounded-lg bg-muted">
              <LogOut className="h-8 w-8 text-muted-foreground" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold">Logged Out</CardTitle>
          <CardDescription>
            You have been successfully logged out of POWERGRID AI
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Zap className="h-4 w-4" />
              <span>Thank you for using POWERGRID AI</span>
            </div>
            <Button 
              onClick={() => navigate("/login")} 
              className="w-full"
            >
              Login Again
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}