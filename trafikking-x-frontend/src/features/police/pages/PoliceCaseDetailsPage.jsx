import { useNavigate, useParams } from "react-router-dom";

import {
  AlertTriangle,
  Shield,
} from "lucide-react";

import { usePoliceCase } from "../hooks/usePoliceCase";
import { useAcceptPoliceCase } from "../hooks/useAcceptPoliceCase";
import { useUpdatePoliceCase } from "../hooks/useUpdatePoliceCase";

import PoliceCaseHeader
  from "../components/case-details/PoliceCaseHeader";

import PoliceCaseInfoCard
  from "../components/case-details/PoliceCaseInfoCard";

import PoliceCaseTimeline
  from "../components/case-details/PoliceCaseTimeline";

import PoliceCaseActions
  from "../components/case-details/PoliceCaseActions";

export default function PoliceCaseDetailsPage() {

  const { id } = useParams();

  const navigate = useNavigate();

  const {

    data: policeCase,

    isLoading,

    isError,

  } = usePoliceCase(id);

  const acceptMutation =
    useAcceptPoliceCase();

  const updateMutation =
    useUpdatePoliceCase();

  if (isLoading) {

    return (

      <div className="flex h-[60vh] flex-col items-center justify-center gap-4">

        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">

          <Shield className="h-8 w-8 animate-pulse text-primary" />

        </div>

        <p className="text-muted-foreground">

          Loading police case...

        </p>

      </div>

    );

  }

  if (isError) {

    return (

      <div className="rounded-3xl border border-red-500/20 bg-red-500/5 p-12 text-center">

        <AlertTriangle className="mx-auto mb-5 h-12 w-12 text-red-500" />

        <h2 className="text-2xl font-bold">

          Failed to Load Police Case

        </h2>

        <p className="mt-3 text-muted-foreground">

          Unable to retrieve the requested police case.

        </p>

      </div>

    );

  }

  return (

    <div className="space-y-8">

      <PoliceCaseHeader

        policeCase={policeCase}

        onBack={() => navigate(-1)}

      />

      <PoliceCaseInfoCard

        policeCase={policeCase}

      />

      <PoliceCaseTimeline

        status={policeCase.status}

      />

      <PoliceCaseActions

        policeCase={policeCase}

        acceptLoading={

          acceptMutation.isPending

        }

        updateLoading={

          updateMutation.isPending

        }

        onAccept={(notes) =>

          acceptMutation.mutate({

            dispatchId:
              policeCase.dispatchId,

            request: {

              notes,

            },

          })

        }

        onUpdate={(payload) =>

          updateMutation.mutate({

            caseId: policeCase.id,

            payload,

          })

        }

      />

    </div>

  );

}