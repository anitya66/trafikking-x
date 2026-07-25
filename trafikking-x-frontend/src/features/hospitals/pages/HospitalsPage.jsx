import { useMemo, useState } from "react";

import {
  Building2,
  Search,
} from "lucide-react";

import PageHeader from "@/shared/components/PageHeader";

import LoadingState from "@/shared/components/LoadingState";
import EmptyState from "@/shared/components/EmptyState";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { useHospitals } from "..";

import HospitalCard from "../components/HospitalCard";
import HospitalDetailsDialog from "../components/HospitalDetailsDialog";

export default function HospitalsPage() {

  const {

    data,

    isLoading,

    isError,

  } = useHospitals({

    page: 0,

    size: 20,

  });

  const hospitals = data?.content ?? [];

  const [search, setSearch] = useState("");

  const [selectedHospital, setSelectedHospital] =
    useState(null);

  const filteredHospitals = useMemo(() => {

    return hospitals.filter((hospital) =>

      hospital.hospitalName
        .toLowerCase()
        .includes(search.toLowerCase()) ||

      hospital.city
        .toLowerCase()
        .includes(search.toLowerCase())

    );

  }, [

    hospitals,

    search,

  ]);

  if (isLoading) {

    return <LoadingState cards={6} />;

  }

  if (isError) {

    return (

      <div className="py-20 text-center text-red-500">

        Failed to load hospitals.

      </div>

    );

  }

  return (

    <div className="space-y-8">

      <PageHeader

        title="Hospitals"

        description="Browse hospitals and emergency medical facilities."

      />

      <div className="relative max-w-md">

        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />

        <Input

          value={search}

          onChange={(e) =>
            setSearch(e.target.value)
          }

          placeholder="Search hospital or city..."

          className="pl-10"

        />

      </div>

            {filteredHospitals.length === 0 ? (

        <EmptyState
          icon={
            <Building2 className="h-14 w-14 text-muted-foreground" />
          }
          title="No Hospitals Found"
          description="Try changing your search keywords."
        />

      ) : (

        <div className="grid gap-6 lg:grid-cols-2">

          {filteredHospitals.map((hospital) => (

            <HospitalCard
              key={hospital.id}
              hospital={hospital}
              onView={setSelectedHospital}
            />

          ))}

        </div>

      )}

      <HospitalDetailsDialog

        open={!!selectedHospital}

        hospital={selectedHospital}

        onOpenChange={(open) => {

          if (!open) {

            setSelectedHospital(null);

          }

        }}

      />    </div>

  );

}