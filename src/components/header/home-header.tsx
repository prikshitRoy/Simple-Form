"use client";

import Link from "next/link";

import UserMenu from "./user-menu";
import AuthHeader from "./auth-header";

export function HomeHeader({ isUserLogged }: { isUserLogged: boolean }) {
  return (
    <div className="hidden md:block top-0 sticky bg-border">
      <div className="border-b">
        <div className="flex h-14 items-center px-3">
          <div className="flex items-baseline cursor-pointer px-1">
            <h4 className="font-bold tracking-tight cursor-pointer">
              SimpleForms
            </h4>
            <div className="ml-8 text-sm font-medium transition-colors hover:text-foreground/80 text-foreground/60 cursor-pointer">
              <Link href={""}>Documentation</Link>
            </div>
          </div>

          <div className="ml-auto flex items-center space-x-6 text-sm font-medium">
            {!isUserLogged ? <AuthHeader /> : <UserMenu />}
          </div>
        </div>
      </div>
    </div>
  );
}
