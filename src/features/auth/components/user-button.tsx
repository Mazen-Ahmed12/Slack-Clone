"use client";

import {
  Avatar,
  IconButton,
  LinearProgress,
  Menu,
  MenuItem,
} from "@mui/material";
import * as React from "react";

import { useCurrentUser } from "../api/use-current-user";
import { useAuthActions } from "@convex-dev/auth/react";

import Logout from "@mui/icons-material/Logout";

export const UserButton = () => {
  const { signOut } = useAuthActions();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const { data, isLoading } = useCurrentUser();

  if (isLoading) {
    return <LinearProgress className="size-4 animate-spin text-gray-500" />;
  }

  if (!data) {
    return null;
  }

  const { image, name } = data;

  const avatarFallback = name!.charAt(0).toUpperCase();

  const tailwindColors = [
    "bg-red-500",
    "bg-blue-950",
    "bg-green-600",
    "bg-yellow-400",
    "bg-cyan-400",
    "bg-slate-600",
    "bg-gray-900",
    "bg-black",
  ];

  const randomClass =
    tailwindColors[Math.floor(Math.random() * tailwindColors.length)];

  return (
    <div>
      <IconButton className=" outline-none relative " onClick={handleClick}>
        <Avatar
          className={`size-10 hover:opacity-75 transition ${randomClass} text-white`}
          alt={name}
          src={image}
        >
           {avatarFallback}
        </Avatar>
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        disableScrollLock={true}
        anchorOrigin={{
          vertical: "top", // Menu will open at the top of the button
          horizontal: "left", // Menu will align to the left of the button
        }}
        className="left-14 !w-60" // Positions the menu to the right of the button
      >
        <MenuItem onClick={() => signOut()}>
          <Logout className="size-4 mr-2" />
          Log Out
        </MenuItem>
        <MenuItem onClick={handleClose}>Menu Item 2</MenuItem>
      </Menu>
    </div>
  );
};
