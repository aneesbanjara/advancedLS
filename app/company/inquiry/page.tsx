import InquiryForm from "@/components/inquiry/InquiryForm";
import SubHeader from "@/components/subheader/SubHeader";
import { Alert } from "antd";
import Marquee from "react-fast-marquee";

export default function Inquiry() {
  return (
    <section>
      <SubHeader>Inquiry Form</SubHeader>
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
