import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function LoadingButton({
  loading = false,
  loadingText = "Loading...",
  children,
  className = "",
  ...props
}) {
  return (
    <Button
      className={className}
      disabled={loading}
      {...props}
    >
      {loading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          {loadingText}
        </>
      ) : (
        children
      )}
    </Button>
  );
}