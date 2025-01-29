"use client";

import { UserButton } from "@/features/auth/components/user-button";
import { useGetWorkspaces } from "@/features/workspaces/api/use-get-workspaces";
import { useCreateWorkspaceModal } from "@/features/workspaces/store/use-create-worrkspace-modal";
import { useEffect, useMemo } from "react";

export default function Home() {

  return (
    <div className="flex flex-row">
      <UserButton />
    </div>
  );
}
