export default function AboutUs() {
  return (
    <section className="bg-white text-neutral-800">
      <div className="bg-gradient-to-r from-[#0044cc] to-[#0088ff] px-6 md:px-36 py-2 shadow-md">
        <h1 className="text-4xl md:text-5xl font-semibold text-white tracking-tight">
          About Advanced Lifescience
        </h1>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16 space-y-20 text-base md:text-lg leading-8">
        <p className="text-justify">
          Welcome to Advanced Lifescience, the leading provider of ophthalmic
          equipments in the Nepali market with an experience of more than three
          decades, trusted by government hospitals, private hospitals, medical
          colleges, NGOS, INGOS, healthcare institutions and ophthalmic
          societies all over Nepal. With extensive knowledge of ophthalmic
          markets and years of industry expertise, we are committed to
          empowering vision care professionals with innovative tools and
          reliable support.
        </p>

        <Section title="Who We Are">
          At Advanced Lifescience, we pride ourselves on being a dedicated
          provider of premium ophthalmic equipment. We specialize in the sales,
          distribution, and after-sales service of cutting-edge products, backed
          by a skilled team of engineers and technicians. From seamless
          demonstrations and installations to repairs and ongoing support, we
          prioritize customer satisfaction and quality to make ophthalmic
          technology more accessible in Nepal.
        </Section>

        <Section title="Our Mission">
          Our mission is to make ophthalmic equipment and technology accessible
          to surgeons and vision care professionals in Nepal, improving eye
          health nationwide. By offering affordable, high-quality solutions, we
          aspire to enhance the quality of vision care services and positively
          impact Nepalese communities.
        </Section>

        <Section title="What We Do">
          <p className="mb-4">
            We provide end-to-end guidance for establishing partial or full
            ophthalmic setups, assisting with:
          </p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Initial planning and budgeting</li>
            <li>Final installation and quality assurance</li>
            <li>Ongoing support and maintenance</li>
          </ol>
          <p className="mt-4">
            Through partnerships with leading manufacturers from Europe, North
            America, and Asia, we ensure that our products meet the highest
            international standards and certifications.
          </p>
        </Section>

        <Section title="Why Choose Us">
          <p className="mb-4">
            With industry-leading expertise and a deep understanding of
            ophthalmology, we deliver customized solutions tailored to your
            specific needs.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Industry-leading experience: Decades of knowledge in the
              ophthalmic industry.
            </li>
            <li>
              Premium products: Featuring the latest technology and excellent
              craftsmanship.
            </li>
            <li>
              Competitive pricing: Affordable solutions without compromising
              quality.
            </li>
            <li>
              Dedicated support: Seamless and reliable client support from start
              to finish.
            </li>
            <li>
              Global partnerships: Access to world-class manufacturers and
              technology.
            </li>
          </ul>
          <p className="mt-4">
            By combining affordability with uncompromised quality, we provide
            the best value to help you achieve your goals efficiently and
            effectively.
          </p>
        </Section>

        <Section title="Our Commitment">
          <p className="mb-4">
            At Advanced Lifescience, we listen to our clients, understand their
            priorities, and align with their vision to build long-term
            partnerships. We are committed to helping you enhance productivity
            and deliver exceptional diagnostic and treatment experiences.
            Together, we can improve the overall state of eye health in Nepal.
          </p>
          <p>
            Choose Advanced Lifescience as your trusted partner for innovative
            ophthalmic solutions and unparalleled service. Let us help you
            achieve your goals while improving the lives of those in need of
            better vision care.
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
      <h2 className="text-center text-3xl font-semibold text-[#8b229b] mb-4">
        {title}
        <div className="mt-3 mx-auto h-[3px] w-24 bg-dashed bg-repeat-x bg-[length:6px_3px] bg-[#0870bd] relative before:content-[''] before:absolute before:w-3 before:h-3 before:rounded-full before:bg-yellow-400 before:-top-1 before:left-1/2 before:-translate-x-1/2 before:shadow-md" />
      </h2>
      <div className="text-justify">{children}</div>
    </div>
  );
}
