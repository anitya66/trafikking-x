import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

export default function ConfirmDialog({

  open,

  onOpenChange,

  title,

  description,

  confirmText = "Confirm",

  cancelText = "Cancel",

  onConfirm,

  loading = false,

}) {

  return (

    <AlertDialog
      open={open}
      onOpenChange={onOpenChange}
    >

      <AlertDialogContent>

        <AlertDialogHeader>

          <AlertDialogTitle>

            {title}

          </AlertDialogTitle>

          <AlertDialogDescription>

            {description}

          </AlertDialogDescription>

        </AlertDialogHeader>

        <AlertDialogFooter>

          <AlertDialogCancel>

            {cancelText}

          </AlertDialogCancel>

          <AlertDialogAction
            onClick={onConfirm}
            disabled={loading}
          >

            {loading
              ? "Please wait..."
              : confirmText}

          </AlertDialogAction>

        </AlertDialogFooter>

      </AlertDialogContent>

    </AlertDialog>

  );

}