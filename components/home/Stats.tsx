import Image from "next/image";
import React from "react";

const Stats = () => {
  return (
    <section className="py-16 md:py-20 w-full  border md:flex md:items-center  bg-linear-to-r from-[#101415] to-[#1f2628]">
      <div className="container mx-auto px-8 py-4">
        {/* GRID COLUMNS  */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 place-items-center">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-4">
              <Image
                src="/icons/car-alt.png"
                alt="Car Png"
                width={32}
                height={32}
              />
              <h2 className="text-4xl text-[#E0E3E5]">500+</h2>
            </div>
            <h4 className="text-sm text-gray-400 font-bold tracking-widest">
              VEHICLES
            </h4>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-4">
              <Image
                src="/icons/smile.png"
                alt="Car Png"
                width={32}
                height={32}
              />
              <h2 className="text-4xl text-[#E0E3E5]">10k+</h2>
            </div>
            <h4 className="text-sm text-gray-400 font-bold tracking-widest">
              HAPPY CLIENTS
            </h4>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-4">
              <Image
                src="/icons/support.png"
                alt="Car Png"
                width={32}
                height={32}
              />
              <h2 className="text-4xl text-[#E0E3E5]">24/7</h2>
            </div>
            <h4 className="text-sm text-gray-400 font-bold tracking-widest">
              SUPPORT
            </h4>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-4">
              <Image
                src="/icons/marker.png"
                alt="Car Png"
                width={32}
                height={32}
              />
              <h2 className="text-4xl text-[#E0E3E5]">15+</h2>
            </div>
            <h4 className="text-sm text-gray-400 font-bold tracking-widest">
              LOCATIONS
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
