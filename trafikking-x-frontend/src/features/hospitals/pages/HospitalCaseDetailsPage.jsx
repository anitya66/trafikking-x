import {
  AlertTriangle,
  Loader2,
} from "lucide-react";

import {
  useNavigate,
  useParams,
} from "react-router-dom";

import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

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
        "Hospital case updated successfully."
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

      <div className="space-y-6">

        <div className="flex items-center justify-center rounded-3xl border bg-card p-20">

          <div className="text-center">

            <Loader2 className="mx-auto h-10 w-10 animate-spin text-primary" />

            <h2 className="mt-6 text-xl font-bold">

              Loading Hospital Case

            </h2>

            <p className="mt-2 text-muted-foreground">

              Fetching patient information...

            </p>

          </div>

        </div>

      </div>

    );

  }

  if (isError) {

    return (

      <div className="rounded-3xl border border-red-500/20 bg-red-500/5 p-10">

        <div className="flex items-start gap-4">

          <div className="rounded-2xl bg-red-500/10 p-3">

            <AlertTriangle className="h-7 w-7 text-red-500" />

          </div>

          <div>

            <h2 className="text-2xl font-bold text-red-500">

              Failed To Load Hospital Case

            </h2>

            <p className="mt-2 text-muted-foreground">

              We couldn't retrieve this hospital case.
              Please refresh the page or try again later.

            </p>

          </div>

        </div>

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

      <div className="grid gap-8 xl:grid-cols-3">

        <div className="xl:col-span-2">

          <HospitalCaseTimeline
            status={hospitalCase.status}
          />

        </div>

        <div>

          <HospitalCaseActions
            hospitalCase={hospitalCase}
            loading={updateMutation.isPending}
            onUpdate={(status) =>
              updateMutation.mutate(status)
            }
          />

        </div>

      </div>

    </div>

  );

}