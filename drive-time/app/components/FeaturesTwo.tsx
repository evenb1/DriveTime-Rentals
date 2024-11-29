import Image from "next/image";
import driver from "@/public/driver.jpg";

const FeaturesTwo = () => {
  return (
    <section className="p-0 flex flex-row my-8 bg-slate-100">
      {/* Text Section */}
      <div className="flex flex-col items-start p-10 m-auto lg:p-28 pr-0 ">
        <h1 className="text-slate-900 mb-1 font-light font-montserrat text-4xl lg:text-5xl">
          We Care About Your <br />
          Comfort And Safety
        </h1>
        <h3 className="text-blue-400 mb-2 font-inter font-light text-lg">
          Experienced Drivers
        </h3>
        <p className="text-slate-900 text-lg  w-2/3 lg:text-xl font-extralight">
        We prioritize your peace of mind with experienced drivers and top-tier vehicles, delivering a smooth, secure, and enjoyable travel experience.
        </p>
      </div>

      {/* Image Section */}
      <div className=" flex px-0"
      
      >
        <div className="relative w-full items-end justify-end">
          <Image src={driver} className="object-contain" alt="chauffer" />
        </div>
      </div>
    </section>
  );
};

export default FeaturesTwo;
