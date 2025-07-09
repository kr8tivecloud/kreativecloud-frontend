export function ServicePills({ services }: { services: string[] }) {
  return (
    <div className="flex flex-wrap gap-2 sm:gap-3 my-2">
      {services.map((service) => (
        <div
          key={service}
          className="text-sm lg:text-base bg-[#15151D] bg-opacity-60 border border-white/25 py-1 px-2.5 text-white/75"
        >
          {service}
        </div>
      ))}
    </div>
  );
}
