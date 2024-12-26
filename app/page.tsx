import FeaturedProducts from "@/components/home/FeaturedProducts";
import LatestUpdate from "@/components/home/LatestUpdate";

export default function Home() {
  return (
    <div className="">
      <video preload="none" autoPlay muted loop>
        <source src="./videos/microscope.mp4" type="video/mp4" />
      </video>
      <LatestUpdate />
      <FeaturedProducts />{" "}
    </div>
  );
}
