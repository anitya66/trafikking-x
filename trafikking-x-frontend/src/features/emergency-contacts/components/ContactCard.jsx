import {
  Phone,
  Star,
  User,
  Pencil,
  Trash2,
  BadgeCheck,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function ContactCard({

  contact,

  onEdit,

  onDelete,

}) {

  return (

    <div className="group rounded-3xl border border-border bg-card/70 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl">

      <div className="flex items-start justify-between">

        <div className="flex items-center gap-4">

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">

            <User className="h-7 w-7 text-primary" />

          </div>

          <div>

            <h3 className="text-lg font-semibold">

              {contact.contactName}

            </h3>

            <p className="text-sm text-muted-foreground">

              {contact.relationship.replaceAll("_", " ")}

            </p>

          </div>

        </div>

        {contact.primaryContact && (

          <Badge className="gap-1">

            <BadgeCheck className="h-3 w-3" />

            Primary

          </Badge>

        )}

      </div>

      <div className="mt-6 space-y-3">

        <div className="flex items-center gap-2 text-sm text-muted-foreground">

          <Phone className="h-4 w-4" />

          {contact.contactPhone}

        </div>

        <div className="flex items-center gap-2 text-sm text-muted-foreground">

          <Star className="h-4 w-4 text-yellow-500" />

          Priority {contact.priority}

        </div>

      </div>

      <div className="mt-8 flex justify-end gap-3">

        <Button
          variant="outline"
          onClick={() => onEdit(contact)}
        >

          <Pencil className="mr-2 h-4 w-4" />

          Edit

        </Button>

        <Button
          variant="destructive"
          onClick={() => onDelete(contact)}
        >

          <Trash2 className="mr-2 h-4 w-4" />

          Delete

        </Button>

      </div>

    </div>

  );

}