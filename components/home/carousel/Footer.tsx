import { FaFacebook, FaSquareXTwitter, FaLinkedin } from "react-icons/fa6";

export default function Footer() {
  return (
    <section className="bg-[#DBDBDB] w-full p-[90px] bottom-0">
      <div className="flex justify-center items-center font-bold text-lg m-2">
        Find us at:
      </div>
      <div className="flex justify-center items-center gap-3">
        <FaFacebook fontSize={30} />
        <FaSquareXTwitter fontSize={30} />
        <FaLinkedin fontSize={30} />
      </div>
    </section>
  );
}
