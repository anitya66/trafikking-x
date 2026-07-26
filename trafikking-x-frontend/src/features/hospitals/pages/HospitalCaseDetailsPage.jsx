import { useNavigate, useParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { toast } from "sonner";

import api from "@/config/axios";

import HospitalCaseHeader
  from "../components/case-details/HospitalCaseHeader";

import HospitalCaseInfoCard
  from "../components/case-details/HospitalCaseInfoCard";

import HospitalCaseTimeline
  from "../components/case-details/HospitalCaseTimeline";

import HospitalCaseActions
  from "../components/case-details/HospitalCaseActions";

export default function HospitalCaseDetailsPage() {

  const { id } = useParams();

  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const {

    data: hospitalCase,

    isLoading,

    isError,

  } = useQuery({

    queryKey: ["hospital-case", id],

    queryFn: async () => {

      const { data } = await api.get(
        `/hospital-cases/${id}`
      );

      return data.data;

    },

  });

  const updateMutation = useMutation({

    mutationFn: async (status) => {

      const { data } = await api.put(

        `/hospital-cases/${id}/status`,

        {

          status,

        }

      );

      return data.data;

    },

    onSuccess: () => {

      toast.success(
        "Hospital case updated."
      );

      queryClient.invalidateQueries({

        queryKey: ["hospital-case", id],

      });

      queryClient.invalidateQueries({

        queryKey: ["hospital-case-history"],

      });

      queryClient.invalidateQueries({

        queryKey: ["hospital-dashboard"],

      });

    },

  });

  if (isLoading) {

    return (

      <div className="flex h-60 items-center justify-center">

        Loading...

      </div>

    );

  }

  if (isError) {

    return (

      <div className="rounded-xl border border-red-500/20 bg-red-500/10 p-6 text-red-400">

        Failed to load hospital case.

      </div>

    );

  }

  return (

    <div className="space-y-8">

      <HospitalCaseHeader

        hospitalCase={hospitalCase}

        onBack={() => navigate(-1)}

      />

      <HospitalCaseInfoCard

        hospitalCase={hospitalCase}

      />

      <HospitalCaseTimeline

        status={hospitalCase.status}

      />

      <HospitalCaseActions

        hospitalCase={hospitalCase}

        loading={updateMutation.isPending}

        onUpdate={(status) =>

          updateMutation.mutate(status)

        }

      />

    </div>

  );

}