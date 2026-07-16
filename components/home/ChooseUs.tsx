import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

const ChooseUs = () => {
  return (
    <section className="py-16 md:py-20  w-full bg-[#FFFFFF]">
      <div className="container mx-auto px-8 py-4">
        {/* HEADING AND PARAGRAPH  */}
        <div className="flex flex-col text-center gap-4 mb-16 md:mb-24">
          <h1 className="text-5xl text-gray-800">Why Choose Us?</h1>
          <p className="text-gray-600 max-w-lg mx-auto">
            We combine premium vehicles, transparent pricing, and exceptional
            customer service to ensure your journey is perfect.
          </p>
        </div>

        {/* GRID AND IMAGE  */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-4 mb-16 md:mb-24">
          <div className="flex flex-col gap-16">
            <div className="flex flex-col gap-4 items-center">
              <Image
                src="/icons/steering.png"
                alt="Steering Wheel"
                width={32}
                height={32}
              />
              <h3>Premium Vehicle Fleet</h3>
              <p className="max-w-md text-center">
                Choose from a wide range of meticulously maintained vehicles,
                from economical sedans to luxury SUVs, ready for any journey.
              </p>
            </div>
            <div className="flex flex-col gap-4 items-center">
              <Image
                src="/icons/calendar_check.png"
                alt="Steering Wheel"
                width={32}
                height={32}
              />
              <h3>Seamless Booking</h3>
              <p className="max-w-md text-center">
                Enjoy a lightning-fast, hassle-free reservation process. Book
                your perfect car in just a few clicks and hit the road
                instantly.
              </p>
            </div>
          </div>
          <div className="relative h-96 md:h-full shadow-lg rounded-xl overflow-hidden">
            <Image
              alt="Choose us"
              src="/images/choose.jpg"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-16 md:gap-0 md:justify-between">
            <div className="flex flex-col gap-4 items-center">
              <Image
                src="/icons/tag.png"
                alt="Steering Wheel"
                width={32}
                height={32}
              />
              <h3>Transparent Pricing</h3>
              <p className="max-w-md text-center">
                Honest rates with absolutely no hidden fees or surprise charges
                at checkout. What you see is exactly what you pay.
              </p>
            </div>
            <div className="flex flex-col gap-4 items-center">
              <Image
                src="/icons/user_headset.png"
                alt="Steering Wheel"
                width={32}
                height={32}
              />
              <h3>24/7 Roadside Support</h3>
              <p className="max-w-md text-center">
                Drive with total peace of mind knowing our dedicated support
                team is available around the clock, wherever you are.
              </p>
            </div>
          </div>
        </div>
        {/* BUTTON  */}
        <div className="w-full text-center">
          <Button asChild variant="secondary">
            <Link
              href={"/about"}
              className="inline-flex items-center py-6 px-10 cursor-pointer bg-gray-100"
            >
              Learn more
              <Image
                src="/icons/arrow.png"
                alt="Arrow"
                width={16}
                height={16}
              />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
