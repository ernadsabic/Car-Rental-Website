import { evolution } from "@/constants/Evolution";
import Image from "next/image";

const About = () => {
  return (
    <>
      <section className="py-16 md:py-20 w-full  bg-[#FFFFFF] ">
        <div className="container mx-auto px-8 py-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="flex flex-col gap-6">
              <h4 className="uppercase text-[#BA005C]">Our Heritage</h4>
              <h1 className="text-5xl font-bold">The Origin</h1>
              <p className="text-gray-700 text-lg max-w-lg ">
                <b>Horizon</b> was born from a single, uncompromising vision:
                that the journey should be as exquisite as the destination. What
                started with three vintage luxury sedans in a small garage has
                evolved into a global benchmark for automotive excellence.
              </p>
              <p className="text-gray-500 max-w-lg tracking-wide">
                We didn't just want to rent cars; we wanted to curate moments of
                precision, comfort, and prestige. Every vehicle in our fleet is
                a testament to our obsession with quality.
              </p>
            </div>
            <div className="relative aspect-4/3 md:aspect-square lg:aspect-4/3 shadow-xl">
              <Image
                src={"/images/about-main.jpg"}
                alt="About Us Image"
                fill
                className="object-cover z-10 overflow-hidden rounded-lg"
              />
              <div className="absolute -bottom-4 -left-4 bg-white p-6 shadow-xl rounded-lg hidden md:block z-20 border-l-4 border-[#BA005C]">
                <div className="font-display-lg text-[#BA005C] leading-none">
                  12+
                </div>
                <div className="font-label-md text-gray-700">
                  Years of Excellence
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-20 w-full bg-[#EFF4FF] ">
        <div className="container mx-auto px-8 py-4">
          <div className="flex flex-col gap-2 text-center mb-16">
            <h1 className="text-5xl">The Evolution</h1>
            <p className="text-gray-600 max-w-md mx-auto">
              A rhythmic journey through time, charting our growth from a
              boutique collection to a global icon of luxury mobility.
            </p>
          </div>
          <div className="flex flex-col gap-20 relative">
            <div className="absolute left-1/2 -translate-x-1/2 w-px bg-gray-200 h-full"></div>
            {evolution.map((e, index) => {
              let isReverse = index % 2 !== 0;
              return (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row  items-center gap-10 relative ${
                    isReverse ? "md:flex-row-reverse text-left" : "text-right"
                  }`}
                >
                  <div
                    className={`w-4 h-4 rounded-full absolute left-1/2 -translate-x-1/2  animate-pulse  ${
                      isReverse ? "bg-black" : "bg-[#BA005C]"
                    }`}
                  ></div>
                  <div className="flex flex-col gap-2 w-full md:w-1/2">
                    <p className="text-[#BA005C] font-bold">{e.year}</p>
                    <h3 className="text-2xl">{e.title}</h3>
                    <p className="text-gray-600">{e.desc}</p>
                  </div>
                  <div className="relative aspect-video w-full md:w-1/2 overflow-hidden rounded-md shadow-lg">
                    <Image
                      src={e.imgURL}
                      alt={e.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
