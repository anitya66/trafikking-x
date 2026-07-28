import {
  ArrowRight,
  Building2,
  HeartPulse,
  MapPin,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

import { useHospitals } from "@/features/hospitals";

export default function NearbyHospitalsWidget() {
  const navigate = useNavigate();

  const {
    data,
    isLoading,
  } = useHospitals({
    page: 0,
    size: 3,
  });

  const hospitals = data?.content ?? [];

  return (
    <Card className="group relative overflow-hidden">

      {/* Hover Glow */}

      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <CardHeader className="relative">

        <CardTitle className="flex items-center gap-3">

          <Building2 className="h-5 w-5 text-primary" />

          <span>Nearby Hospitals</span>

        </CardTitle>

      </CardHeader>

      <CardContent className="relative">

        {isLoading ? (

          <div className="space-y-4">

            {[1, 2, 3].map((item) => (

              <div
                key={item}
                className="h-20 animate-pulse rounded-2xl bg-muted"
              />

            ))}

          </div>

        ) : hospitals.length === 0 ? (

          <div className="rounded-2xl border border-dashed p-10 text-center">

            <Building2 className="mx-auto mb-5 h-12 w-12 text-muted-foreground" />

            <h3 className="text-xl font-semibold">

              No Hospitals Found

            </h3>

            <p className="mt-3 text-sm leading-6 text-muted-foreground">

              Browse registered hospitals available
              in your emergency response network.

            </p>

            <Button
              variant="outline"
              className="mt-8"
              onClick={() =>
                navigate("/citizen/hospitals")
              }
            >

              View Hospitals

              <ArrowRight className="ml-2 h-4 w-4" />

            </Button>

          </div>

        ) : (

          <div className="space-y-4">

            {hospitals.map((hospital) => (

              <div
                key={hospital.id}
                className="group/item rounded-2xl border border-border bg-card/50 p-5 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10"
              >

                <div className="flex items-start justify-between gap-4">

                  <div className="min-w-0 flex-1">

                    <h4 className="truncate text-base font-semibold">

                      {hospital.hospitalName}

                    </h4>

                    <div className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">

                      <MapPin className="h-4 w-4 shrink-0" />

                      <span className="truncate">

                        {hospital.city}

                      </span>

                    </div>

                  </div>

                  {hospital.emergencyAvailable && (

                    <div className="rounded-full bg-red-500/10 p-2">

                      <HeartPulse className="h-5 w-5 text-red-500" />

                    </div>

                  )}

                </div>

                <div className="mt-5 border-t border-border pt-4">

                  <div className="flex items-center justify-between">

                    <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">

                      Emergency Service

                    </span>

                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        hospital.emergencyAvailable
                          ? "bg-green-500/10 text-green-500"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {hospital.emergencyAvailable
                        ? "Available"
                        : "Unavailable"}
                    </span>

                  </div>

                </div>

              </div>

            ))}

            <Button
              variant="outline"
              className="mt-2 w-full"
              onClick={() =>
                navigate("/citizen/hospitals")
              }
            >

              View All Hospitals

              <ArrowRight className="ml-2 h-4 w-4" />

            </Button>

          </div>

        )}

      </CardContent>

    </Card>
  );
}