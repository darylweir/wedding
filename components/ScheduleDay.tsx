import ScheduleEvent from "./ScheduleEvent";

export interface Event {
  time: string;
  title: string;
  description: string;
}

interface ScheduleDayProps {
  date: string;
  events: Event[];
}

export default function ScheduleDay({ date, events }: ScheduleDayProps) {
  return (
    <div className="mb-16">
      <h2 className="text-3xl sm:text-4xl font-serif italic text-white mb-6">
        {date}
      </h2>
      <div className="bg-[#2a3441] rounded-lg p-6 space-y-6">
        {events.map((event, index) => (
          <ScheduleEvent
            key={index}
            time={event.time}
            title={event.title}
            description={event.description}
          />
        ))}
      </div>
    </div>
  );
}
