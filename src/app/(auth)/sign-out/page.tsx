"use client";

import { signOut } from "next-auth/react";
import { Button } from "../../../components/ui/button";

export default function SignOut() {
  return (
    <>
      <Button
        onClick={() => signOut}
        className="w-full bg-red-500 hover:bg-red-700"
      >
        SignOut
      </Button>
    </>
  );
}
