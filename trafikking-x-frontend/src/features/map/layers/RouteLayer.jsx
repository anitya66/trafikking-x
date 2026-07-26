import { Polyline } from "react-leaflet";

import { useRoute } from "../hooks/useRoute";

export default function RouteLayer({

  start,

  end,

}) {

  const {

    data,

    isLoading,

  } = useRoute(

    start,

    end

  );

  if (

    isLoading ||

    !data

  ) {

    return null;

  }

  const coordinates =

    data.geometry.coordinates.map(

      ([lng, lat]) => [

        lat,

        lng,

      ]

    );

  return (

    <Polyline

      positions={coordinates}

      pathOptions={{

        color: "#06b6d4",

        weight: 6,

        opacity: 0.9,

      }}

    />

  );

}