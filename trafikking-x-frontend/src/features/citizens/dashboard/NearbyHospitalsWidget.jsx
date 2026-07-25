import {
  ArrowRight,
  Building2,
  HeartPulse,
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

      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <CardHeader className="relative">

        <CardTitle className="flex items-center gap-2">

          <Building2 className="h-5 w-5 text-primary" />

          Hospitals

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

        ) : hospitals.length === 0 ? (

          <div className="rounded-xl border border-dashed p-8 text-center">

            <Building2 className="mx-auto mb-4 h-10 w-10 text-muted-foreground" />

            <h3 className="text-lg font-semibold">

              No Hospitals Found

            </h3>

            <p className="mt-2 text-sm text-muted-foreground">

              Browse registered hospitals available in the system.

            </p>

            <div className="mt-6 flex justify-end">

              <Button
                variant="outline"
                size="sm"
                onClick={() => navigate("/citizen/hospitals")}
              >

                View Hospitals

                <ArrowRight className="ml-2 h-4 w-4" />

              </Button>

            </div>

          </div>

        ) : (

          <div className="space-y-4">

            {hospitals.map((hospital) => (

              <div
                key={hospital.id}
                className="rounded-xl border p-4 transition hover:border-primary/30"
              >

                <div className="flex items-center justify-between">

                  <div>

                    <h4 className="font-medium">

                      {hospital.hospitalName}

                    </h4>

                    <p className="text-sm text-muted-foreground">

                      {hospital.city}

                    </p>

                  </div>

                  {hospital.emergencyAvailable && (

                    <HeartPulse className="h-5 w-5 text-red-500" />

                  )}

                </div>

              </div>

            ))}

            <div className="flex justify-end">

              <Button
                variant="outline"
                size="sm"
                onClick={() => navigate("/citizen/hospitals")}
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