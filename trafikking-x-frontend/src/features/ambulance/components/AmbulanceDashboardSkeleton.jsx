import { Card, CardContent } from "@/components/ui/card";

export default function AmbulanceDashboardSkeleton() {

  return (

    <div className="space-y-8 animate-pulse">

      <div>

        <div className="h-10 w-80 rounded-lg bg-muted" />

        <div className="mt-3 h-4 w-56 rounded bg-muted" />

      </div>

      <Card>

        <CardContent className="space-y-4 p-8">

          <div className="h-8 w-48 rounded bg-muted" />

          <div className="grid gap-4 md:grid-cols-4">

            {[1,2,3,4].map((item)=>(

              <div
                key={item}
                className="h-28 rounded-2xl bg-muted"
              />

            ))}

          </div>

        </CardContent>

      </Card>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {[1,2,3,4].map((item)=>(

          <Card key={item}>

            <CardContent className="p-6">

              <div className="h-20 rounded-xl bg-muted" />

            </CardContent>

          </Card>

        ))}

      </div>

      <div className="grid gap-6 xl:grid-cols-2">

        {[1,2].map((item)=>(

          <Card key={item}>

            <CardContent className="p-8">

              <div className="space-y-4">

                <div className="h-6 w-48 rounded bg-muted" />

                <div className="h-4 rounded bg-muted" />

                <div className="h-4 rounded bg-muted" />

                <div className="h-4 w-2/3 rounded bg-muted" />

              </div>

            </CardContent>

          </Card>

        ))}

      </div>

    </div>

  );

}