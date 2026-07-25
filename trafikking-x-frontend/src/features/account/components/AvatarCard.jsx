import { useRef } from "react";
import { Camera, Trash2 } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

import { useUploadAvatar } from "../hooks/useUploadAvatar";
import { useDeleteAvatar } from "../hooks/useDeleteAvatar";

export default function AvatarCard({ profile }) {

  const fileInputRef = useRef(null);

  const uploadAvatar = useUploadAvatar();

  const deleteAvatar = useDeleteAvatar();

  function handleChooseFile() {
    fileInputRef.current?.click();
  }

  function handleFileChange(event) {

    const file = event.target.files?.[0];

    if (!file) return;

    uploadAvatar.mutate(file);

  }

  function handleDeleteAvatar() {

    deleteAvatar.mutate();

  }

  return (

    <div className="rounded-3xl border border-border bg-card p-6">

      <div className="flex flex-col items-center">

        <Avatar className="h-36 w-36">

         <AvatarImage
  src={
    profile?.profileImage
      ? `http://localhost:8080${profile.profileImage}`
      : undefined
  }
/>

          <AvatarFallback className="text-4xl font-bold">

            {profile?.fullName?.charAt(0)}

          </AvatarFallback>

        </Avatar>

        <h3 className="mt-5 text-xl font-semibold">

          {profile?.fullName}

        </h3>

        <p className="text-sm text-muted-foreground">

          {profile?.role}

        </p>

        <div className="mt-6 flex w-full gap-3">

          <Button
            className="flex-1"
            onClick={handleChooseFile}
            disabled={uploadAvatar.isPending}
          >
            <Camera className="mr-2 h-4 w-4" />

            Upload
          </Button>

          <Button
            variant="destructive"
            onClick={handleDeleteAvatar}
            disabled={deleteAvatar.isPending}
          >
            <Trash2 className="h-4 w-4" />
          </Button>

        </div>

        <input
          ref={fileInputRef}
          hidden
          type="file"
          accept="image/*"
          onChange={handleFileChange}
        />

      </div>

    </div>

  );

}