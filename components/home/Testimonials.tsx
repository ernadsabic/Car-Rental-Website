"use client";
import Image from "next/image";
import { Button } from "../ui/button";
import { useState } from "react";
import { testimonials } from "@/constants/Testimonials";

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  function nextReview() {
    if (index < testimonials.length - 1) {
      setIndex((prev) => prev + 1);
    } else setIndex(0);
  }

  function previousReview() {
    if (index > 0) {
      setIndex((prev) => prev - 1);
    } else setIndex(testimonials.length - 1);
  }

  const t = testimonials[index];
  return (
    <div>
      <section className="py-16 md:py-20  w-full bg-[#FAFAFA]">
        <div className="container mx-auto px-8 py-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12">
            <div className="flex flex-col gap-4 md:gap-6">
              <Image
                src="/icons/open.png"
                alt="Quotation"
                width={64}
                height={64}
              />
              <p className="pb-8 border-b text-4xl leading-snug ">
                {t.reviewText}
              </p>
              <div className="flex gap-2 items-center justify-between ">
                <div className="flex flex-col gap-1">
                  <h4 className="text-xl font-medium">{t.name}</h4>
                  <p className="text-gray-600 text-sm">{t.profession}</p>
                </div>
                <div className="flex gap-2 items-center">
                  <Button
                    onClick={previousReview}
                    size={"icon"}
                    variant={"outline"}
                    className="rounded-full inline-flex items-center justify-center w-10 h-10 cursor-pointer bg-white border-[#F4F4F4]"
                  >
                    <Image
                      src="/icons/left-arrow.png"
                      alt="Previous"
                      width={20}
                      height={20}
                    />
                  </Button>
                  <Button
                    onClick={nextReview}
                    size={"icon"}
                    variant={"default"}
                    className="rounded-full inline-flex items-center justify-center w-10 h-10 cursor-pointer bg-[#4F9EB8]"
                  >
                    <Image
                      src="/icons/right-arrow.png"
                      alt="Next"
                      width={20}
                      height={20}
                    />
                  </Button>
                </div>
              </div>
            </div>
            <div className="relative h-96 md:h-full overflow-hidden rounded-tl-[50px] rounded-br-[50px] shadow-lg">
              <Image
                src={t.image}
                alt={t.name}
                fill
                className="object-cover "
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
