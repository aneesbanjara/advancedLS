import InquiryForm from "@/components/inquiry/InquiryForm";
import { Alert } from "antd";
import Marquee from "react-fast-marquee";

export default function Inquiry() {
  return (
    <section>
      <div className="flex flex-row justify-start bg-gradient-to-r from-[#ADD8E6] to-[#00008B] text-white px-36 py-8">
        <div className="text-4xl">Inquiry Form</div>
      </div>
      <div className="flex flex-col gap-5 mx-[20%] my-[5%]">
        <Alert
          type="info"
          banner
          message={
            <Marquee pauseOnHover gradient={false}>
              Based in Kathmandu, we provide surgical instruments and equipments
              to eye hospitals across Nepal, ensuring accessible, high-quality
              care nationwide.
            </Marquee>
          }
        />
        <InquiryForm />
      </div>
    </section>
  );
}
