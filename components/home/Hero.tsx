import HeroForm from "../HeroForm";

const Hero = () => {
  // animacije fade in odradio zadnje motion i to
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  return (
    <div>
      {/* TEXT PART  */}
      <section
        id="hero"
        className="relative pt-24 md:pt-0 min-h-[80vh] w-full bg-[url(/images/heroIMG2.jpg)] bg-cover bg-center bg-no-repeat  flex items-start md:items-center"
      >
        <div className="absolute inset-0 bg-black/50 z-10 "></div>
        <div className="container mx-auto px-8 py-4  z-20 text-[#F5F5F7]">
          <div className="flex flex-col gap-4 md:gap-8 mb-8 max-w-3xl">
            <h4 className="text-[#799e8d] font-medium">
              FIND YOUR PERFECT CAR
            </h4>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold">
              Best Cars to make <br />
              Your <span className="text-[#799e8d]">drive easy</span>
            </h1>
            <p className="text-[rgba(255,255,255,.6)] ">
              Premium vehicles for every journey. Choose from our <br />{" "}
              handpicked fleet and hit the road with confidence.
            </p>
          </div>
        </div>
        <HeroForm />
      </section>
    </div>
  );
};

export default Hero;
