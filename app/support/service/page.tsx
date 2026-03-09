import SubHeader from "@/components/subheader/SubHeader";

export default function ServiceAndRepairs() {
  return (
    <section className="bg-white text-neutral-800">
      <SubHeader>Service & Repairs</SubHeader>
      <div className="max-w-6xl mx-auto px-6 py-16 space-y-20 text-base md:text-lg leading-8">
        <Section title="Our Commitment to Service">
          <p>
            At Advanced Lifescience, we take pride in SERVICE & REPAIRS as one
            of our core strengths. Our commitment to you extends far beyond the
            point of sale, it lasts throughout the life of your equipment.
          </p>
        </Section>

        <Section title="Skilled Support Team">
          <p>
            With a highly skilled team, we&apos;re here to support you every
            step of the way. We understand the critical role your equipment
            plays in your practice, and we prioritize its upkeep. Our
            technicians deliver thorough maintenance services, including
            cleaning the optics, fine-tuning tracking and elevation mechanisms,
            and ensuring the exterior is spotless all to keep your equipment
            running at its best and minimize downtime.
          </p>
        </Section>
      </div>
    </section>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="text-center text-2xl sm:text-3xl font-medium uppercase text-gray-700 tracking-widest relative mb-10">
        {title}
        <div className="mt-3 mx-auto h-[3px] w-24 bg-dashed bg-repeat-x bg-[length:6px_3px] bg-[#0870bd] relative before:content-[''] before:absolute before:w-3 before:h-3 before:rounded-full before:bg-yellow-400 before:-top-1 before:left-1/2 before:-translate-x-1/2 before:shadow-md" />
      </h2>

      <div className="text-justify text-sm sm:text-2xl">{children}</div>
    </div>
  );
}
