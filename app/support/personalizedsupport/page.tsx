import SubHeader from "@/components/subheader/SubHeader";

export default function PersonalizedSupport() {
  return (
    <section className="bg-white text-neutral-800">
      <SubHeader>Personalized Support</SubHeader>

      <div className="max-w-6xl mx-auto px-6 py-16 space-y-20 text-base md:text-lg leading-8">
        <Section title="Hands-On Product Learning">
          We enhance every purchase by offering a comprehensive education
          program that includes practical, hands-on training and continuous
          support.
        </Section>

        <Section title="Expert Assistance">
          Setting up a new facility or adding an extra room? Let us help. We
          provide end-to-end services, including project planning, electrical
          design, room layout, and workflow optimization.
        </Section>

        <Section title="Shipping & Setup">
          Every purchase from Advanced Lifescience is backed by a team of highly
          skilled technicians who offer meticulous support. We collaborate
          closely to ensure timely delivery and installation, enabling your
          operations to begin within the planned timeframe.
        </Section>

        <Section title="Online Assistance">
          We provide remote support options for both maintenance needs and
          product demonstrations.
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
