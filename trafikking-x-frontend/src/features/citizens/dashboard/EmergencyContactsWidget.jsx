import {
  HeartHandshake,
  Phone,
  ArrowRight,
  User,
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

      <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <CardHeader className="relative">

        <CardTitle className="flex items-center gap-2">

          <HeartHandshake className="h-5 w-5 text-red-500" />

          Emergency Contacts

        </CardTitle>

      </CardHeader>

      <CardContent className="relative">

        {isLoading ? (

          <div className="space-y-3">

            {[1, 2, 3].map((item) => (

              <div
                key={item}
                className="h-14 animate-pulse rounded-xl bg-muted"
              />

            ))}

          </div>

        ) : contacts.length === 0 ? (

          <div className="rounded-xl border border-dashed p-8 text-center">

            <Phone className="mx-auto mb-4 h-10 w-10 text-muted-foreground" />

            <h3 className="text-lg font-semibold">

              No Contacts Added

            </h3>

            <p className="mt-2 text-sm text-muted-foreground">

              Add trusted emergency contacts to notify them quickly during an emergency.

            </p>

            <div className="mt-6 flex justify-end">

              <Button
                variant="outline"
                size="sm"
                onClick={() => navigate("/citizen/contacts")}
              >

                Add Contact

                <ArrowRight className="ml-2 h-4 w-4" />

              </Button>

            </div>

          </div>

        ) : (

          <div className="space-y-4">

            {contacts.slice(0, 3).map((contact) => (

              <div
                key={contact.id}
                className="flex items-center justify-between rounded-xl border p-4 transition hover:border-primary/30"
              >

                <div className="flex items-center gap-3">

                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">

                    <User className="h-5 w-5 text-primary" />

                  </div>

                  <div>

                    <h4 className="font-medium">

                      {contact.contactName}

                    </h4>

                    <p className="text-sm text-muted-foreground">

                      {contact.relationship.replaceAll("_", " ")}

                    </p>

                  </div>

                </div>

                {contact.primaryContact && (

                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">

                    Primary

                  </span>

                )}

              </div>

            ))}

            <div className="flex justify-end">

              <Button
                variant="outline"
                size="sm"
                onClick={() => navigate("/citizen/contacts")}
              >

                View All

                <ArrowRight className="ml-2 h-4 w-4" />

              </Button>

            </div>

          </div>

        )}

      </CardContent>

    </Card>
  );

}