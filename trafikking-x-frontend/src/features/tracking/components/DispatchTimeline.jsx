import TimelineItem from "./TimelineItem";

export default function DispatchTimeline({
  timeline = [],
}) {

  if (timeline.length === 0) {

    return (

      <p className="text-sm text-muted-foreground">

        No tracking events available.

      </p>

    );

  }

  return (

    <div>

      {timeline.map((event, index) => (

        <TimelineItem
          key={index}
          title={event.title}
          description={event.description}
          timestamp={event.timestamp}
          isLast={index === timeline.length - 1}
        />

      ))}

    </div>

  );

}