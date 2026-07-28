import {
  HeartHandshake,
  Phone,
  ArrowRight,
  User,
  ShieldCheck,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

import { useEmergencyContacts } from "@/features/emergency-contacts";

export default function EmergencyContactsWidget() {
  const navigate = useNavigate();

  const {
    data: contacts = [],
    isLoading,
  } = useEmergencyContacts();

  return (
    <Card className="group relative overflow-hidden">

      {/* Hover Glow */}

      <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <CardHeader className="relative">

        <CardTitle className="flex items-center gap-3">

          <HeartHandshake className="h-5 w-5 text-red-500" />

          <span>Emergency Contacts</span>

        </CardTitle>

      </CardHeader>

      <CardContent className="relative">

        {/* Loading */}

        {isLoading ? (

          <div className="space-y-4">

            {[1, 2, 3].map((item) => (

              <div
                key={item}
                className="h-20 animate-pulse rounded-2xl bg-muted"
              />

            ))}

          </div>

        ) : contacts.length === 0 ? (

          <div className="rounded-2xl border border-dashed p-10 text-center">

            <Phone className="mx-auto mb-5 h-12 w-12 text-muted-foreground" />

            <h3 className="text-xl font-semibold">

              No Emergency Contacts

            </h3>

            <p className="mt-3 text-sm leading-6 text-muted-foreground">

              Add trusted family members or friends who
              can be notified immediately during an emergency.

            </p>

            <Button
              variant="outline"
              className="mt-8"
              onClick={() =>
                navigate("/citizen/contacts")
              }
            >

              Add Contact

              <ArrowRight className="ml-2 h-4 w-4" />

            </Button>

          </div>

        ) : (

          <div className="space-y-4">

            {contacts.slice(0, 3).map((contact) => (

              <div
                key={contact.id}
                className="group/item rounded-2xl border border-border bg-card/50 p-5 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10"
              >

                <div className="flex items-start justify-between gap-4">

                  <div className="flex items-center gap-4 min-w-0">

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10">

                      <User className="h-6 w-6 text-primary" />

                    </div>

                    <div className="min-w-0">

                      <h4 className="truncate font-semibold">

                        {contact.contactName}

                      </h4>

                      <p className="mt-1 text-sm text-muted-foreground">

                        {contact.relationship.replaceAll("_", " ")}

                      </p>

                    </div>

                  </div>

                  {contact.primaryContact && (

                    <div className="flex shrink-0 items-center gap-2 rounded-full bg-green-500/10 px-3 py-1">

                      <ShieldCheck className="h-3.5 w-3.5 text-green-500" />

                      <span className="text-xs font-semibold text-green-500">

                        Primary

                      </span>

                    </div>

                  )}

                </div>

              </div>

            ))}

            <Button
              variant="outline"
              className="mt-2 w-full"
              onClick={() =>
                navigate("/citizen/contacts")
              }
            >

              View All Contacts

              <ArrowRight className="ml-2 h-4 w-4" />

            </Button>

          </div>

        )}

      </CardContent>

    </Card>
  );
}