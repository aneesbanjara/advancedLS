import { Carousel } from "antd";

export default function FeaturedProducts() {
  return (
    <section>
      <div className=" flex flex-col justify-center items-center gap-10 my-10 px-16 py-5">
        <div className="text-4xl font-bold text-[rgb(138,34,153)]">
          FEATURED PRODUCTS
        </div>
      </div>
      <Carousel>
        <div>
          <h3 className="m-0 h-[160px] text-white leading-[160px] text-center bg-[#364d79]">
            Product 1
          </h3>
        </div>
        <div>
          <h3 className="m-0 h-[160px] text-white leading-[160px] text-center bg-[#364d79]">
            Product 2
          </h3>
        </div>
        <div>
          <h3 className="m-0 h-[160px] text-white leading-[160px] text-center bg-[#364d79]">
            Product 3
          </h3>
        </div>
        <div>
          <h3 className="m-0 h-[160px] text-white leading-[160px] text-center bg-[#364d79]">
            Product 4
          </h3>
        </div>
      </Carousel>
    </section>
  );
}
