import {
  Phone,
  Star,
  User,
  Pencil,
  Trash2,
  BadgeCheck,
  HeartHandshake,
} from "lucide-react";

import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function ContactCard({
  contact,
  onEdit,
  onDelete,
}) {
  return (
    <motion.div
      whileHover={{
        y: -6,
      }}
      transition={{
        duration: 0.25,
      }}
      className="group relative overflow-hidden rounded-3xl border border-border bg-card/80 backdrop-blur-xl"
    >
      {/* Background Glow */}

      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative p-6">

        {/* Header */}

        <div className="flex items-start justify-between">

          <div className="flex items-center gap-4">

            <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-primary/10">

              <User className="h-8 w-8 text-primary" />

            </div>

            <div>

              <h3 className="text-xl font-bold">

                {contact.contactName}

              </h3>

              <p className="mt-1 text-sm text-muted-foreground">

                {contact.relationship.replaceAll("_", " ")}

              </p>

            </div>

          </div>

          {contact.primaryContact && (

            <Badge className="gap-1 rounded-full px-3 py-1">

              <BadgeCheck className="h-3.5 w-3.5" />

              Primary

            </Badge>

          )}

        </div>

        {/* Information */}

        <div className="mt-8 space-y-4">

          <div className="flex items-center justify-between rounded-2xl border border-border bg-background/40 px-4 py-3">

            <div className="flex items-center gap-3">

              <Phone className="h-5 w-5 text-primary" />

              <span className="text-sm">

                {contact.contactPhone}

              </span>

            </div>

          </div>

          <div className="flex items-center justify-between rounded-2xl border border-border bg-background/40 px-4 py-3">

            <div className="flex items-center gap-3">

              <Star className="h-5 w-5 text-yellow-500" />

              <span className="text-sm">

                Priority Level

              </span>

            </div>

            <Badge variant="secondary">

              {contact.priority}

            </Badge>

          </div>

          <div className="flex items-center justify-between rounded-2xl border border-border bg-background/40 px-4 py-3">

            <div className="flex items-center gap-3">

              <HeartHandshake className="h-5 w-5 text-emerald-500" />

              <span className="text-sm">

                Emergency Status

              </span>

            </div>

            <span className="text-sm font-medium text-emerald-500">

              Available

            </span>

          </div>

        </div>

        {/* Footer */}

        <div className="mt-8 flex gap-3">

          <Button
            variant="outline"
            className="flex-1"
            onClick={() => onEdit(contact)}
          >

            <Pencil className="mr-2 h-4 w-4" />

            Edit

          </Button>

          <Button
            variant="destructive"
            className="flex-1"
            onClick={() => onDelete(contact)}
          >

            <Trash2 className="mr-2 h-4 w-4" />

            Delete

          </Button>

        </div>

      </div>

    </motion.div>
  );
}