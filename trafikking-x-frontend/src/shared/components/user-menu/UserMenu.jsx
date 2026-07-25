import {
  User,
  Settings,
  LogOut,
  UserCircle2,
} from "lucide-react";

import {
  Menu,
  MenuContent,
  MenuItem,
  MenuLabel,
  MenuSeparator,
  MenuTrigger,
} from "@/components/ui/menu";

import { Button } from "@/components/ui/button";

import { getCurrentUser } from "@/shared/utils/auth";

import { getCurrentRole } from "@/shared/utils/role";

import { useNavigate } from "react-router-dom";

export default function UserMenu({
  onLogout,
}) {
  const user = getCurrentUser();

  const role = getCurrentRole();

  const navigate = useNavigate();

  return (
    <Menu>

      <MenuTrigger
        render={
          <Button
            variant="ghost"
            className="gap-2"
          />
        }
      >
        <UserCircle2 className="h-6 w-6" />

        <span>
          {user?.fullName ?? "Operator"}
        </span>

      </MenuTrigger>

      <MenuContent className="w-72">

        <MenuLabel>

          <div className="flex items-center gap-3">

            <UserCircle2 className="h-10 w-10 text-primary" />

            <div>

              <p className="font-semibold">

                {user?.fullName}

              </p>

              <p className="text-xs text-muted-foreground">

                {role}

              </p>

              <p className="text-xs text-muted-foreground">

                {user?.email}

              </p>

            </div>

          </div>

        </MenuLabel>

        <MenuSeparator />

        <MenuItem
          onClick={() =>
            navigate("/account/profile")
          }
        >

          <User className="h-4 w-4" />

          Profile

        </MenuItem>

        <MenuItem
          onClick={() =>
            navigate("/settings")
          }
        >

          <Settings className="h-4 w-4" />

          Settings

        </MenuItem>

        <MenuSeparator />

        <MenuItem onClick={onLogout}>

          <LogOut className="h-4 w-4 text-red-500" />

          <span className="text-red-500">
            Logout
          </span>

        </MenuItem>

      </MenuContent>

    </Menu>
  );
}