import { useNavigate, useParams } from "react-router-dom";

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

      <div className="flex h-60 items-center justify-center">

        Loading...

      </div>

    );

  }

  if (isError) {

    return (

      <div className="rounded-xl border border-red-500/20 bg-red-500/10 p-6 text-red-400">

        Failed to load police case.

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