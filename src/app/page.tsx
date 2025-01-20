"use client";

import { useAuthActions } from "@convex-dev/auth/react";
import { Button } from "@mui/material";

export default function Home() {
  const { signOut } = useAuthActions();

  return (
    <div>
      Logged in!
      <Button onClick={()=>signOut()}>
        Sign out
      </Button>
    </div>
  );
}
