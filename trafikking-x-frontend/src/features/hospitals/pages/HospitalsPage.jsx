import {
  Activity,
  Ambulance,
  BedDouble,
  HeartPulse,
  Stethoscope,
  Building2,
  ClipboardPlus,
  ShieldCheck,
} from "lucide-react";

import MetricCard from "@/shared/components/MetricCard";

import IncomingPatientsCard from "../components/dashboard/IncomingPatientsCard";
import IncomingAmbulancesCard from "../components/dashboard/IncomingAmbulancesCard";
import AIRecommendationCard from "../components/dashboard/AIRecommendationCard";
import BedOccupancyCard from "../components/dashboard/BedOccupancyCard";
import ICUOccupancyCard from "../components/dashboard/ICUOccupancyCard";

import { useHospitalDashboard } from "../hooks/useHospitalDashboard";

export default function HospitalsPage() {
  const {
    data,
    isLoading,
    isError,
  } = useHospitalDashboard();

  if (isError) {
    return (
      <div className="rounded-2xl border border-red-500/20 bg-red-500/10 p-6 text-red-400">
        Failed to load hospital dashboard.
      </div>
    );
  }

  const metrics = data?.metrics;

  return (
    <div className="space-y-8">

      {/* Header */}

      <div className="space-y-2">

        <h1 className="text-3xl font-black tracking-tight lg:text-5xl">

          Hospital Dashboard

        </h1>

        <p className="max-w-3xl text-base text-muted-foreground lg:text-lg">

          Monitor incoming emergency patients, ambulance arrivals,
          hospital capacity, ICU availability and AI-assisted
          recommendations in one intelligent command center.

        </p>

      </div>

      {/* Metrics */}

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 2xl:grid-cols-4">

        <MetricCard
          title="Emergency Queue"
          value={isLoading ? "--" : metrics?.emergencyQueue}
          subtitle="Waiting Patients"
          trend="+3"
          icon={Activity}
        />

        <MetricCard
          title="Available Beds"
          value={isLoading ? "--" : metrics?.availableBeds}
          subtitle="Ready"
          trend="+5"
          icon={BedDouble}
        />

        <MetricCard
          title="ICU Beds"
          value={isLoading ? "--" : metrics?.availableIcuBeds}
          subtitle="Available"
          trend="+1"
          icon={HeartPulse}
        />

        <MetricCard
          title="Doctors On Duty"
          value={isLoading ? "--" : metrics?.doctorsOnDuty}
          subtitle="Current Shift"
          trend="+2"
          icon={Stethoscope}
        />

        <MetricCard
          title="Incoming Ambulances"
          value={isLoading ? "--" : metrics?.incomingAmbulances}
          subtitle="En Route"
          trend="+1"
          icon={Ambulance}
        />

        <MetricCard
          title="Hospital Capacity"
          value={
            isLoading
              ? "--"
              : `${metrics?.hospitalCapacity}%`
          }
          subtitle="Occupancy"
          trend="+4%"
          icon={Building2}
        />

        <MetricCard
          title="Today's Admissions"
          value={isLoading ? "--" : metrics?.todayAdmissions}
          subtitle="Patients"
          trend="+8"
          icon={ClipboardPlus}
        />

        <MetricCard
          title="Emergency Status"
          value={isLoading ? "--" : metrics?.emergencyStatus}
          subtitle="Operational"
          icon={ShieldCheck}
        />

      </div>

      {/* Main Dashboard */}

      <div className="grid grid-cols-1 gap-6 2xl:grid-cols-12">

        {/* Left Side */}

        <div className="space-y-6 2xl:col-span-8">

          <IncomingPatientsCard
            patients={data?.incomingPatients ?? []}
          />

          <IncomingAmbulancesCard
            ambulances={data?.incomingAmbulances ?? []}
          />

        </div>

        {/* Right Sidebar */}

        <div className="space-y-6 2xl:col-span-4">

          <AIRecommendationCard
            recommendation={data?.aiRecommendation}
          />

          <BedOccupancyCard
            occupancy={data?.bedOccupancy}
          />

          <ICUOccupancyCard
            occupancy={data?.icuOccupancy}
          />

        </div>

      </div>

    </div>
  );
}