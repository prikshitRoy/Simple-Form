"use client";

import { Button } from "../ui/button";
import SignOut from "@/app/(auth)/sign-out/page";
import SignUp from "../../app/(auth)/sign-up/page";

import Link from "next/link";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export function HomeHeader({ isUserLogged }: { isUserLogged: boolean }) {
  console.log("isUserLogged", isUserLogged);
  return (
    <div className="mr-4 hidden md:block">
      <div className="border-b">
        <div className="flex h-16 items-center px-32">
          <div className="flex items-baseline cursor-pointer px-1">
            <h4 className="font-bold tracking-tight cursor-pointer">
              SimpleForms
            </h4>
            <div className="ml-8 text-sm font-medium transition-colors hover:text-foreground/80 text-foreground/60 cursor-pointer">
              <Link href={""}>Documentation</Link>
            </div>
          </div>

          <div className="ml-auto flex items-center space-x-6 text-sm font-medium">
            {/* {!isUserLogged ? <SignUp /> : <SignOut />} */}
            <div className="flex items-center">
              <Link
                href={"https://github.com/prikshitRoy/Simple-Form"}
                target="_blank"
              >
                <Button variant="outline">
                  <GitHubLogoIcon className="h-4 w-4" />
                  <span className="ml-2 text-xs">STAR US</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
