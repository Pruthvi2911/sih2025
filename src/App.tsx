  import { Toaster } from "@/components/ui/toaster";
  import { Toaster as Sonner } from "@/components/ui/sonner";
  import { TooltipProvider } from "@/components/ui/tooltip";
  import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
  import { BrowserRouter, Routes, Route } from "react-router-dom";
  import { Sidebar } from "@/components/Sidebar";
  import { Header } from "@/components/Header";

  import Dashboard from "./pages/Dashboard";
  import NewProject from "./pages/NewProject";
  import Login from "./pages/Login";
  import Logout from "./pages/Logout";
  import AIForecast from "./pages/AIForecast";
  import Analytics from "./pages/Analytics";
  import Team from "./pages/Team";
  import Settings from "./pages/Settings";
  import NotFound from "./pages/NotFound";

  const queryClient = new QueryClient();

  const App = () => (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Auth Routes (standalone, no sidebar/header) */}
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />

            {/* Main App Routes (with sidebar/header) */}
        <Route path="/*" element={
    <div className="flex h-screen w-full bg-green-700">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden bg-gray-50">
        <Header />
        <main className="flex-1 overflow-auto p-6">
          <Routes>

                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/new-project" element={<NewProject />} />
                        <Route path="/ai-forecast" element={<AIForecast />} />
                        <Route path="/analytics" element={<Analytics />} />
                        <Route path="/team" element={<Team />} />
                        <Route path="/settings" element={<Settings />} />
                        <Route path="*" element={<NotFound />} />
                      </Routes>
                    </main>
                  </div>
                </div>
              }
            />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );

  export default App;
