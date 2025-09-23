import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Upload, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function NewProject() {
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [formData, setFormData] = useState({
    projectName: "",
    projectType: "",
    terrain: "",
    budget: "",
    vendorInfo: "",
    permitsAcquired: false,
    environmentalChallenges: "",
    manpowerAvailable: ""
  });

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Project submitted for estimation!");
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate("/")}
          className="text-gray-600 hover:text-gray-800"
        >
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <div>
          <h1 className="text-3xl font-bold text-foreground">New Project</h1>
          <p className="text-muted-foreground">Create a new project estimation request</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Basic Information */}
            <Card>
              <CardHeader>
                <CardTitle>Basic Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="projectName">Project Name</Label>
                  <Input
                    id="projectName"
                    placeholder="Enter project name"
                    value={formData.projectName}
                    onChange={(e) => handleInputChange("projectName", e.target.value)}
                    required
                    className="bg-gray-50"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Project Type</Label>
                    <Select
                      value={formData.projectType}
                      onValueChange={(value) => handleInputChange("projectType", value)}
                    >
                      <SelectTrigger className="bg-gray-50">
                        <SelectValue placeholder="Select project type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="substation">Substation</SelectItem>
                        <SelectItem value="overhead-line">Overhead Line</SelectItem>
                        <SelectItem value="underground-cable">Underground Cable</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Terrain/Environment</Label>
                    <Select
                      value={formData.terrain}
                      onValueChange={(value) => handleInputChange("terrain", value)}
                    >
                      <SelectTrigger className="bg-gray-50">
                        <SelectValue placeholder="Select terrain type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="plain">Plain</SelectItem>
                        <SelectItem value="hilly">Hilly</SelectItem>
                        <SelectItem value="forest">Forest</SelectItem>
                        <SelectItem value="coastal">Coastal</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="budget">Estimated Budget (USD)</Label>
                  <Input
                    id="budget"
                    type="number"
                    placeholder="Enter estimated budget"
                    value={formData.budget}
                    onChange={(e) => handleInputChange("budget", e.target.value)}
                    required
                    className="bg-gray-50"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="vendorInfo">Vendor Information</Label>
                  <Textarea
                    id="vendorInfo"
                    placeholder="Enter vendor details, contacts, and specifications"
                    value={formData.vendorInfo}
                    onChange={(e) => handleInputChange("vendorInfo", e.target.value)}
                    rows={3}
                    className="bg-gray-50"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Timeline */}
            <Card>
              <CardHeader>
                <CardTitle>Project Timeline</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Start Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          className={cn(
                            "w-full justify-start text-left font-normal bg-gray-50",
                            !startDate && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {startDate ? format(startDate, "PPP") : "Pick a date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={startDate}
                          onSelect={setStartDate}
                          initialFocus
                          className="p-3 pointer-events-auto"
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div className="space-y-2">
                    <Label>End Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          className={cn(
                            "w-full justify-start text-left font-normal bg-gray-50",
                            !endDate && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {endDate ? format(endDate, "PPP") : "Pick a date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={endDate}
                          onSelect={setEndDate}
                          initialFocus
                          className="p-3 pointer-events-auto"
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Project Questionnaire */}
            <Card>
              <CardHeader>
                <CardTitle>Project Assessment</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="permits"
                    checked={formData.permitsAcquired}
                    onCheckedChange={(checked) => handleInputChange("permitsAcquired", checked)}
                  />
                  <Label htmlFor="permits">All necessary permits have been acquired</Label>
                </div>

                <div className="space-y-3">
                  <Label>Known environmental challenges?</Label>
                  <RadioGroup
                    value={formData.environmentalChallenges}
                    onValueChange={(value) => handleInputChange("environmentalChallenges", value)}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="none" id="env-none" />
                      <Label htmlFor="env-none">No significant challenges</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="moderate" id="env-moderate" />
                      <Label htmlFor="env-moderate">Moderate challenges expected</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="high" id="env-high" />
                      <Label htmlFor="env-high">High environmental complexity</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-3">
                  <Label>Adequate manpower available?</Label>
                  <RadioGroup
                    value={formData.manpowerAvailable}
                    onValueChange={(value) => handleInputChange("manpowerAvailable", value)}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="manpower-yes" />
                      <Label htmlFor="manpower-yes">Yes, sufficient resources</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="partial" id="manpower-partial" />
                      <Label htmlFor="manpower-partial">Partial, need additional hiring</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="manpower-no" />
                      <Label htmlFor="manpower-no">No, significant hiring required</Label>
                    </div>
                  </RadioGroup>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* File Upload */}
            <Card>
              <CardHeader>
                <CardTitle>Project Documents</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
                  <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-sm text-muted-foreground mb-2">
                    Drag & drop files here, or click to select
                  </p>
                  <Button className="bg-green-700 hover:bg-green-800 text-white" size="sm">
                    Choose Files
                  </Button>
                  <p className="text-xs text-muted-foreground mt-2">
                    Supports PDF, DOC, XLS, images (max 10MB)
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button type="submit" className="w-full bg-green-700 hover:bg-green-800 text-white">
                  Submit for Estimation
                </Button>
                <Button type="button" className="w-full bg-green-700 hover:bg-green-800 text-white">
                  Save as Draft
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  className="w-full text-gray-600 hover:text-gray-800"
                  onClick={() => navigate("/")}
                >
                  Cancel
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </form>
    </div>
  );
}
