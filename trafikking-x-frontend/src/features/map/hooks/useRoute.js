import { useQuery } from "@tanstack/react-query";

import { getRoute } from "../services/routeApi";

export function useRoute(

  start,

  end

) {

  return useQuery({

    queryKey: [

      "route",

      start,

      end,

    ],

    enabled:

      !!start && !!end,

    queryFn: () =>

      getRoute(

        start,

        end

      ),

  });

}