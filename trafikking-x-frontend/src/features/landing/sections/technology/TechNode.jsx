import GlassCard from "@/shared/components/landing/GlassCard";

export default function TechNode({
  tech,
}) {

  const Icon = tech.icon;

  return (
    <GlassCard className="flex flex-col items-center p-6 text-center">

      <div className={`mb-4 ${tech.color}`}>

        <Icon className="h-10 w-10" />

      </div>

      <h3 className="font-bold text-white">

        {tech.title}

      </h3>

    </GlassCard>
  );

}