import SubHeader from "@/components/subheader/SubHeader";

export default function Privacy() {
  return (
    <section>
      <SubHeader>Privacy Policy</SubHeader>
      <div className="mx-4 my-2 text-sm sm:mx-[15%] sm:my-[5%] sm:text-2xl text-justify">
        <p>
          Advanced Lifescience values the privacy and security of our clients.
          To uphold your right to privacy, we have established the following
          Privacy Policy:
        </p>
        <br />
        <p>
          We do not share your email address with any third-party organization
          under any circumstances. Additionally, we do not gather any personal
          data that discloses racial or ethnic origins, political views,
          religious beliefs, or philosophical opinions.
        </p>
        <br />
        <p>
          When you visit our website, we may collect general information that
          does not personally identify you. This includes data such as the
          number of visitors to our site, the pages viewed, and the type of
          browser used. These details help us analyze trends, enhance website
          functionality, and improve the overall user experience.
        </p>
        <br />
        <p>
          Occasionally, we notify our customers about new product launches,
          updates, announcements, and technical webinars. If you prefer not to
          receive such communications, you can opt-out at any time by contacting
          us at support@altplnepal.com.
        </p>
        <br />
        <div className="text-center text-2xl sm:text-3xl font-medium uppercase text-gray-700 tracking-widest relative mb-10">
          Product Disclaimer
          <div className="mt-3 mx-auto h-[3px] w-24 bg-dashed bg-repeat-x bg-[length:6px_3px] bg-[#0870bd] relative before:content-[''] before:absolute before:w-3 before:h-3 before:rounded-full before:bg-yellow-400 before:-top-1 before:left-1/2 before:-translate-x-1/2 before:shadow-md" />
        </div>
        <p>
          Images shown on our product pages are for illustrative purposes only.
          Equipment displayed in product visuals, such as accessories for
          combination units, is not included unless explicitly stated.
        </p>
        <br />
        <p>
          New products may include customizable options, such as variations in
          chair types or colors. Please reach out to discuss the available
          choices and find the best fit for your needs.
        </p>
      </div>
    </section>
  );
}
