import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import "../app/globals.css";
import { SignIn } from "@clerk/clerk-react";

export default function Login() {
  return (
    <div className="flex min-h-screen">
      <div className="flex-1 bg-[#d1e7e7] flex flex-col justify-center items-center p-8">
        <div className="mb-8">
          <LogInIcon className="w-16 h-16" />
        </div>
        <h2 className="text-2xl font-semibold text-white mb-4">
          Login to your account
        </h2>
        <div className="relative">
          <img
            src="/placeholder.svg"
            alt="3D Objects"
            className="object-cover"
          />
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-center items-center p-8">
        <SignIn signUpUrl="/register" />
      </div>
    </div>
  );
}

function LogInIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
      <polyline points="10 17 15 12 10 7" />
      <line x1="15" x2="3" y1="12" y2="12" />
    </svg>
  );
}
