export async function getRoute(

  start,

  end

) {

  const response = await fetch(

    `https://router.project-osrm.org/route/v1/driving/${start.lng},${start.lat};${end.lng},${end.lat}?overview=full&geometries=geojson`

  );

  const data = await response.json();

  return data.routes?.[0] ?? null;

}