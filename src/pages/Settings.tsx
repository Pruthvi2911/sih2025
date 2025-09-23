import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Settings() {
  return (
    <div className="space-y-6 min-h-screen p-6 bg-gray-50">
      <h1 className="text-3xl font-bold text-foreground">Settings</h1>

      <form className="space-y-4 max-w-lg">
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="Enter your email" />
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" placeholder="Enter new password" />
        </div>

        <div className="flex gap-3 pt-4">
          <Button type="submit" className="bg-green-700 hover:bg-green-800 text-white">
            Save Changes
          </Button>
          <Button type="reset" className="bg-green-700 hover:bg-green-800 text-white">
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
}
