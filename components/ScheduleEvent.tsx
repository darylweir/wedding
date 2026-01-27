interface ScheduleEventProps {
  time: string;
  title: string;
  description: string;
}

export default function ScheduleEvent({ time, title, description }: ScheduleEventProps) {
  return (
    <div className="flex gap-6">
      <div className="flex-shrink-0 w-24 sm:w-28">
        <p className="text-white/80 text-sm sm:text-base font-medium">
          {time}
        </p>
      </div>
      <div className="flex-1">
        <h3 className="text-white text-lg sm:text-xl font-semibold mb-1">
          {title}
        </h3>
        <p className="text-white/80 text-sm sm:text-base leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
