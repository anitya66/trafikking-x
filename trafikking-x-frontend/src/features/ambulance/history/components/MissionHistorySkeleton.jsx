import { Card, CardContent } from "@/components/ui/card";

export default function MissionHistorySkeleton() {

  return (

    <div className="space-y-6 animate-pulse">

      {[1, 2, 3].map((item) => (

        <Card key={item}>

          <CardContent className="space-y-6 p-6">

            <div className="h-8 w-64 rounded bg-muted" />

            <div className="grid gap-4 md:grid-cols-2">

              {[1,2,3,4].map((i)=>(

                <div
                  key={i}
                  className="h-12 rounded bg-muted"
                />

              ))}

            </div>

            <div className="h-20 rounded bg-muted" />

          </CardContent>

        </Card>

      ))}

    </div>

  );

}