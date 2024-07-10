/**
 * v0 by Vercel.
 * @see https://v0.dev/t/QuC6HjiHd6d
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Sidebar from "components/Sidebar";

export default function Profile() {
  return (
    <div className="flex h-screen bg-background">
      <aside className="fixed inset-y-0 left-0 z-10 flex h-full w-16 flex-col bg-background border-r">
        <Sidebar />
      </aside>
      <main className="flex-1 flex flex-col items-center w-full min-h-screen p-6 bg-background ml-16">
        <div className="flex flex-col md:flex-row gap-6 w-full max-w-6xl">
          <div className="w-full md:w-1/3">
            <Card className="p-4 bg-white shadow-md">
              <Avatar className="w-32 h-32 mx-auto">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>JR</AvatarFallback>
              </Avatar>
              <div className="mt-4 text-center">
                <h2 className="text-xl font-bold">Jeremy Rose</h2>
                <p className="text-muted-foreground">Product Designer</p>
                <p className="text-muted-foreground flex items-center justify-center">
                  <MapPinIcon className="w-4 h-4 mr-1" />
                  New York, NY
                </p>
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-semibold">Work</h3>
                <div className="mt-2">
                  <div className="flex justify-between items-center">
                    <p>Spotify New York</p>
                    <Badge>Primary</Badge>
                  </div>
                  <p className="text-muted-foreground">170 William Street</p>
                  <p className="text-muted-foreground">New York, NY 10038-78 212-312-51</p>
                </div>
                <div className="mt-4">
                  <div className="flex justify-between items-center">
                    <p>Metropolitan Museum</p>
                    <Badge variant="secondary">Secondary</Badge>
                  </div>
                  <p className="text-muted-foreground">525 E 68th Street</p>
                  <p className="text-muted-foreground">New York, NY 10651-78 156-187-60</p>
                </div>
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-semibold">Skills</h3>
                <ul className="list-disc list-inside text-muted-foreground">
                  <li>Branding</li>
                  <li>UI/UX</li>
                  <li>Web - Design</li>
                  <li>Packaging</li>
                  <li>Print & Editorial</li>
                </ul>
              </div>
            </Card>
          </div>
          <div className="w-full md:w-2/3">
            <Card className="p-4 bg-white shadow-md">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold">Jeremy Rose</h2>
                  <p className="text-muted-foreground">Product Designer</p>
                  <p className="text-muted-foreground flex items-center">
                    <MapPinIcon className="w-4 h-4 mr-1" />
                    New York, NY
                  </p>
                </div>
                <Button variant="ghost" size="icon">
                  <BookmarkIcon className="w-6 h-6" />
                </Button>
              </div>
              <div className="mt-6 flex items-center">
                <p className="text-2xl font-bold">8,6</p>
                <div className="flex items-center ml-2">
                  <StarIcon className="w-5 h-5 text-yellow-500" />
                  <StarIcon className="w-5 h-5 text-yellow-500" />
                  <StarIcon className="w-5 h-5 text-yellow-500" />
                  <StarIcon className="w-5 h-5 text-yellow-500" />
                  <StarIcon className="w-5 h-5 text-muted-foreground" />
                </div>
              </div>
              <div className="mt-6 flex gap-4">
                <Button variant="default">
                  <MailIcon className="w-4 h-4 mr-2" />
                  Send message
                </Button>
                <Button variant="secondary">
                  <UserIcon className="w-4 h-4 mr-2" />
                  Contacts
                </Button>
                <Button variant="ghost" className="ml-auto">
                  Report user
                </Button>
              </div>
              <div className="mt-6 flex border-b">
                <Button variant="ghost" className="flex-1 border-b-2 border-transparent">
                  Timeline
                </Button>
                <Button variant="ghost" className="flex-1 border-b-2 border-primary">
                  About
                </Button>
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-semibold">Contact Information</h3>
                <div className="mt-2">
                  <p className="text-muted-foreground">Phone:</p>
                  <a href="#" className="text-primary">
                    +1 123 456 7890
                  </a>
                </div>
                <div className="mt-2">
                  <p className="text-muted-foreground">Address:</p>
                  <p>525 E 68th Street</p>
                  <p>New York, NY 10651-78 156-187-60</p>
                </div>
                <div className="mt-2">
                  <p className="text-muted-foreground">E-mail:</p>
                  <a href="#" className="text-primary">
                    hello@jeremyrose.com
                  </a>
                </div>
                <div className="mt-2">
                  <p className="text-muted-foreground">Site:</p>
                  <a href="#" className="text-primary">
                    www.jeremyrose.com
                  </a>
                </div>
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-semibold">Basic Information</h3>
                <div className="mt-2">
                  <p className="text-muted-foreground">Birthday:</p>
                  <p>June 5, 1992</p>
                </div>
                <div className="mt-2">
                  <p className="text-muted-foreground">Gender:</p>
                  <p>Male</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}

function BookmarkIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
    </svg>
  );
}

function MailIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
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

function StarIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function UserIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
