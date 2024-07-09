import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { SignOutButton } from "@clerk/clerk-react";
import Sidebar from "components/Sidebar";

export default function Main() {
  return (
    <div className="flex h-screen bg-background">
      <aside className="fixed inset-y-0 left-0 z-10 flex h-full w-16 flex-col bg-background border-r">
        <Sidebar />
      </aside>
      <main className="flex-1 p-6 bg-background min-h-screen ml-16">
        <div className="mb-6">
          <h1 className="text-2xl font-bold">Dashboard</h1>
        </div>
        <div className="grid grid-cols-1 gap-6 mb-6 md:grid-cols-4">
          <div className="p-4 bg-primary rounded-lg">
            <div className="flex justify-between mb-4">
              <h2 className="text-lg font-semibold text-primary-foreground">
                All Contacts
              </h2>
              <Badge
                variant="default"
                className="bg-primary-foreground text-primary"
              >
                15
              </Badge>
            </div>
            <div className="flex -space-x-2">
              <Avatar>
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>AB</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>CD</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>EF</AvatarFallback>
              </Avatar>
            </div>
          </div>
          <div className="p-4 bg-secondary rounded-lg">
            <div className="flex justify-between mb-4">
              <h2 className="text-lg font-semibold text-secondary-foreground">
                Subscribed
              </h2>
              <Badge
                variant="default"
                className="bg-secondary-foreground text-secondary"
              >
                4
              </Badge>
            </div>
            <div className="flex -space-x-2">
              <Avatar>
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>GH</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>IJ</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>KL</AvatarFallback>
              </Avatar>
            </div>
          </div>
          <div className="p-4 bg-primary rounded-lg">
            <div className="flex justify-between mb-4">
              <h2 className="text-lg font-semibold text-primary-foreground">
                Pending Approval
              </h2>
              <Badge
                variant="default"
                className="bg-primary-foreground text-primary"
              >
                15
              </Badge>
            </div>
            <div className="flex -space-x-2">
              <Avatar>
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>AB</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>CD</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>EF</AvatarFallback>
              </Avatar>
            </div>
          </div>
          <div className="p-4 bg-secondary rounded-lg">
            <div className="flex justify-between mb-4">
              <h2 className="text-lg font-semibold text-secondary-foreground">
                Blocked
              </h2>
              <Badge
                variant="default"
                className="bg-secondary-foreground text-secondary"
              >
                4
              </Badge>
            </div>
            <div className="flex -space-x-2">
              <Avatar>
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>GH</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>IJ</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>KL</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="p-4 bg-white rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <Input
                type="search"
                placeholder="Search Contact"
                className="w-full"
              />
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>FJ</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-lg font-semibold">Felicity Jane</h3>
                  <p className="text-sm text-muted-foreground">
                    felicityjane@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>H</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-lg font-semibold">Hannah</h3>
                  <p className="text-sm text-muted-foreground">
                    hannah@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>CGK</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-lg font-semibold">Christopher GK</h3>
                  <p className="text-sm text-muted-foreground">
                    christophergk@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>ML</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-lg font-semibold">Madeleine Lisa</h3>
                  <p className="text-sm text-muted-foreground">
                    lisamadeleine@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>Y</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-lg font-semibold">Yvonne</h3>
                  <p className="text-sm text-muted-foreground">
                    yvonnehill@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>HE</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-lg font-semibold">Hemmings Edmunds</h3>
                  <p className="text-sm text-muted-foreground">
                    edmundshemmings@gmail.com
                  </p>
                </div>
              </div>
            </div>
            <Button variant="default" className="w-full mt-4">
              Add New Contact
            </Button>
          </div>
          <div className="col-span-2 p-4 bg-white rounded-lg shadow-md">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Contact Details</h2>
              <Button variant="outline" size="sm">
                ...
              </Button>
            </div>
            <div className="flex space-x-6">
              <Avatar className="w-24 h-24">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>EC</AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-2">
                <div className="flex items-center space-x-2">
                  <h3 className="text-xl font-semibold">Elizabeth Claire</h3>
                  <Button variant="outline" size="icon">
                    <FilePenIcon className="w-4 h-4" />
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground">
                  elizabeth@gmail.com
                </p>
                <p className="text-sm text-muted-foreground">+1 902 234 567</p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <BuildingIcon className="w-4 h-4 text-muted-foreground" />
                    <p className="text-sm">ABC Industries Pvt Ltd</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPinIcon className="w-4 h-4 text-muted-foreground" />
                    <p className="text-sm">New York, United States</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text.
                </p>
              </div>
            </div>
            <Tabs defaultValue="meeting" className="mt-6">
              <TabsList>
                <TabsTrigger value="meeting">Meeting</TabsTrigger>
                <TabsTrigger value="activity">Activity</TabsTrigger>
                <TabsTrigger value="notes">Notes</TabsTrigger>
                <TabsTrigger value="timeline">Timeline</TabsTrigger>
              </TabsList>
              <TabsContent value="meeting">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold">June 2022</h4>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="icon">
                        <CalendarIcon className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="icon">
                        <ChevronLeftIcon className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="icon">
                        <ChevronRightIcon className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <ClockIcon className="w-4 h-4 text-muted-foreground" />
                      <p className="text-sm">
                        10:00 AM - Mobile Application Release
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <ClockIcon className="w-4 h-4 text-muted-foreground" />
                      <p className="text-sm">12:00 PM - General Meeting</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <ClockIcon className="w-4 h-4 text-muted-foreground" />
                      <p className="text-sm">3:00 PM - Client Visit</p>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="activity">
                <p>Activity content goes here...</p>
              </TabsContent>
              <TabsContent value="notes">
                <p>Notes content goes here...</p>
              </TabsContent>
              <TabsContent value="timeline">
                <p>Timeline content goes here...</p>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  );
}

function BuildingIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01" />
      <path d="M16 6h.01" />
      <path d="M12 6h.01" />
      <path d="M12 10h.01" />
      <path d="M12 14h.01" />
      <path d="M16 10h.01" />
      <path d="M16 14h.01" />
      <path d="M8 10h.01" />
      <path d="M8 14h.01" />
    </svg>
  );
}

function CalendarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  );
}

function ChevronLeftIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function ChevronRightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function ClockIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function FilePenIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z" />
    </svg>
  );
}

function MapPinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
