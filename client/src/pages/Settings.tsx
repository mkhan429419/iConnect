import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Sidebar from "components/Sidebar";

export default function Settings() {
  return (
    <div className="flex h-screen bg-background">
      <aside className="fixed inset-y-0 left-0 z-10 flex h-full w-16 flex-col bg-background border-r">
        <Sidebar />
      </aside>
      <main className="flex-1 flex flex-col items-center w-full min-h-screen p-6 bg-background ml-16">
        <div className="w-full max-w-4xl p-8 bg-white rounded-lg shadow">
          <h1 className="text-2xl font-bold">Settings</h1>
          <div className="flex items-center mt-6 space-x-4">
            <Button className="px-4 py-2 text-white bg-purple-500 rounded-full">
              Edit Profile
            </Button>
            <Button variant="ghost">Preferences</Button>
            <Button variant="ghost">Security</Button>
            <Button variant="ghost">Data Privacy</Button>
          </div>
          <form className="mt-8 space-y-6">
            <div className="flex items-center space-x-4">
              <Avatar className="w-20 h-20">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>YK</AvatarFallback>
              </Avatar>
              <div className="grid grid-cols-2 gap-4 w-full">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First Name</Label>
                  <Input id="first-name" placeholder="Yoshikage" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last Name</Label>
                  <Input id="last-name" placeholder="Kira" />
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" placeholder="YoshikageKira@gmail.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" placeholder="+84 789 373 568" />
            </div>
            <div className="space-y-2">
              <h2 className="text-lg font-semibold">Personal Address</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="country">Country</Label>
                  <Input id="country" placeholder="Vietnam" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input id="city" placeholder="Hai Phong" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Input id="address" placeholder="Hong Bang" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="zip">Zip Code</Label>
                  <Input id="zip" placeholder="180000" />
                </div>
              </div>
            </div>
            <Button className="w-full py-2 mt-6 text-white bg-purple-500 rounded-full">
              Save Changes
            </Button>
          </form>
        </div>
      </main>
    </div>
  );
}
