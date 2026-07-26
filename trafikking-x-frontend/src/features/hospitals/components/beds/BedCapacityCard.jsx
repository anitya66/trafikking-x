import OccupancyProgress from "./OccupancyProgress";

export default function BedCapacityCard({

  bedOccupancy,

  icuOccupancy,

}) {

  return (

    <div className="space-y-6">

      <OccupancyProgress

        title="Hospital Beds"

        total={bedOccupancy.totalBeds}

        occupied={bedOccupancy.occupiedBeds}

        available={bedOccupancy.availableBeds}

        percentage={bedOccupancy.occupancyPercentage}

      />

      <OccupancyProgress

        title="ICU Beds"

        total={icuOccupancy.totalBeds}

        occupied={icuOccupancy.occupiedBeds}

        available={icuOccupancy.availableBeds}

        percentage={icuOccupancy.occupancyPercentage}

      />

    </div>

  );

}