import { useState, useEffect } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "../@/components/ui/avatar";
import { Switch } from "../@/components/ui/switch";
import { Label } from "../@/components/ui/label";
import { Input } from "../@/components/ui/input";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "../@/components/ui/tabs";
import { Badge } from "../@/components/ui/badge";
import "../app/globals.css";
import { SignedIn, SignOutButton, UserButton } from "@clerk/clerk-react";

export default function Home() {
  const [selectedChat, setSelectedChat] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(() => {
    const savedState = localStorage.getItem("isSidebarOpen");
    return savedState ? JSON.parse(savedState) : false;
  });

  const handleChatClick = (chatId: string) => {
    setSelectedChat(chatId);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    localStorage.setItem("isSidebarOpen", JSON.stringify(isSidebarOpen));
  }, [isSidebarOpen]);

  return (
    <>
      <div className="flex h-screen">
        <aside className="w-1/4 bg-white p-4 border-r">
          <div className="flex flex-col items-center">
            <Avatar className="w-24 h-24 mb-4">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>NC</AvatarFallback>
            </Avatar>
            <h2 className="text-xl font-semibold">Natasya Ciel</h2>
            <p className="text-muted-foreground">@Nata_ciel</p>
            <div className="flex items-center mt-2">
              <Switch id="active" defaultChecked />
              <Label htmlFor="active" className="ml-2">
                Active
              </Label>
            </div>
          </div>
          <div className="mt-6">
            <div className="relative">
              <Input placeholder="Search Contact" className="pl-10" />
              <SearchIcon className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
            </div>
          </div>
          <div className="mt-6">
            <h3 className="text-lg font-semibold">Chats</h3>
            <Tabs defaultValue="latest" className="mt-2">
              <TabsList>
                <TabsTrigger value="latest">Latest</TabsTrigger>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="group">Group</TabsTrigger>
              </TabsList>
              <TabsContent value="latest">
                <div className="mt-4 space-y-4">
                  <div
                    className={`flex items-center p-2 rounded-lg cursor-pointer ${
                      selectedChat === "tamara"
                        ? "bg-blue-200"
                        : "bg-white hover:bg-blue-100"
                    }`}
                    onClick={() => handleChatClick("tamara")}
                  >
                    <Avatar className="w-10 h-10 mr-3">
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>T</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h4 className="font-semibold">Tamara</h4>
                      <p className="text-sm text-muted-foreground">Typing...</p>
                    </div>
                    <div className="text-xs text-muted-foreground">11:24</div>
                    <CircleIcon className="ml-2 h-4 w-4 text-green-500" />
                  </div>
                  <div
                    className={`flex items-center p-2 rounded-lg cursor-pointer ${
                      selectedChat === "fashion_lover"
                        ? "bg-blue-200"
                        : "bg-white hover:bg-blue-100"
                    }`}
                    onClick={() => handleChatClick("fashion_lover")}
                  >
                    <Avatar className="w-10 h-10 mr-3">
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>FL</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h4 className="font-semibold">FASHION LOVER</h4>
                      <p className="text-sm text-muted-foreground">
                        Sasha: Be Right Back!!!
                      </p>
                    </div>
                    <div className="text-xs text-muted-foreground">9:30</div>
                  </div>
                  <div
                    className={`flex items-center p-2 rounded-lg cursor-pointer ${
                      selectedChat === "zahra"
                        ? "bg-blue-200"
                        : "bg-white hover:bg-blue-100"
                    }`}
                    onClick={() => handleChatClick("zahra")}
                  >
                    <Avatar className="w-10 h-10 mr-3">
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>Z</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h4 className="font-semibold">Zahra</h4>
                      <p className="text-sm text-muted-foreground">Morning!</p>
                    </div>
                    <div className="text-xs text-muted-foreground">07:02</div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </aside>
        <main
          className={`flex-1 flex flex-col transition-all duration-300 ${
            isSidebarOpen ? "ml-0" : "ml-1/4"
          }`}
        >
          <header className="flex items-center justify-between p-4 border-b">
            <h2 className="text-xl font-semibold cursor-pointer" onClick={toggleSidebar}>
              Tamara
            </h2>
            <div className="flex items-center space-x-4">
              <VideoIcon className="h-6 w-6 text-muted-foreground hover:text-blue-500" />
              <PhoneIcon className="h-6 w-6 text-muted-foreground hover:text-blue-500" />
            </div>
          </header>
          <div className="flex-1 p-4">
            <div className="flex flex-col space-y-4">
              <div className="flex justify-center">
                <Badge variant="secondary">Today</Badge>
              </div>
              <div className="flex flex-col space-y-2">
                <div className="self-start bg-gray-200 p-2 rounded-lg">
                  <p>How are you?</p>
                  <span className="text-xs text-muted-foreground">11:24</span>
                </div>
                <div className="self-end bg-blue-100 p-2 rounded-lg">
                  <p>I'm Good !!</p>
                  <span className="text-xs text-muted-foreground">11:24</span>
                </div>
                <div className="self-end bg-blue-100 p-2 rounded-lg">
                  <p>How bout you?</p>
                  <span className="text-xs text-muted-foreground">11:24</span>
                </div>
              </div>
            </div>
          </div>
          <footer className="p-4 border-t">
            <div className="flex items-center space-x-2">
              <MoveHorizontalIcon className="h-6 w-6 text-muted-foreground hover:text-blue-500" />
              <Input placeholder="Type Here" className="flex-1" />
              <SendIcon className="h-6 w-6 text-blue-500 hover:text-blue-700" />
            </div>
          </footer>
        </main>
        {isSidebarOpen && (
          <aside className="w-1/4 bg-white p-4 border-l">
            <div className="flex flex-col items-center">
              <Avatar className="w-24 h-24 mb-4">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>T</AvatarFallback>
              </Avatar>
              <h2 className="text-xl font-semibold">Tamara</h2>
              <p className="text-muted-foreground">@Tamara_Cia</p>
            </div>
            <div className="mt-6 space-y-4">
              <div>
                <h3 className="text-sm font-semibold">Phone</h3>
                <p className="text-muted-foreground">+62 838 3441 0809</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold">Description</h3>
                <p className="text-muted-foreground">Available</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold">Email</h3>
                <p className="text-muted-foreground">Tamara@gmail.com</p>
              </div>
            </div>
            <div className="mt-6">
              <h3 className="text-sm font-semibold">Shared File</h3>
              <div className="space-y-2 mt-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <FileTextIcon className="h-6 w-6 text-blue-500" />
                    <p className="text-sm">Document</p>
                  </div>
                  <p className="text-xs text-muted-foreground">10MB</p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <ImageIcon className="h-6 w-6 text-pink-500" />
                    <p className="text-sm">Images</p>
                  </div>
                  <p className="text-xs text-muted-foreground">120MB</p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <VideoIcon className="h-6 w-6 text-green-500" />
                    <p className="text-sm">Videos</p>
                  </div>
                  <p className="text-xs text-muted-foreground">510MB</p>
                </div>
              </div>
            </div>
            <div className="mt-6 text-right text-xs text-muted-foreground">
              640MB
            </div>
          </aside>
        )}
      </div>
      <SignedIn>
        <div className="flex items-center space-x-4">
          <UserButton />
          <SignOutButton>
            <button className="bg-red-500 text-white py-2 px-4 rounded">
              Sign Out
            </button>
          </SignOutButton>
        </div>
      </SignedIn>
    </>
  );
}

function CircleIcon(props: React.SVGProps<SVGSVGElement>) {
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
    </svg>
  );
}

function FileTextIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10 9H8" />
      <path d="M16 13H8" />
      <path d="M16 17H8" />
    </svg>
  );
}

function ImageIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <circle cx="9" cy="9" r="2" />
      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
    </svg>
  );
}

function MoveHorizontalIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <polyline points="18 8 22 12 18 16" />
      <polyline points="6 8 2 12 6 16" />
      <line x1="2" x2="22" y1="12" y2="12" />
    </svg>
  );
}

function PhoneIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function SendIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  );
}

function VideoIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
      <rect x="2" y="6" width="14" height="12" rx="2" />
    </svg>
  );
}
