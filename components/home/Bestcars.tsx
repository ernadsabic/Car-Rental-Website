"use client";

import Image from "next/image";
import { carsData } from "@/constants/Cars";
import { useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const Bestcars = () => {
  const [categoryState, setCategoryState] = useState("SUV");
  const categories = ["Sedan", "SUV", "Electric", "Luxury", "Sport"];
  return (
    <div>
      <section className="py-16 md:py-24  w-full bg-white">
        <div className="container mx-auto px-8 py-4">
          {/* HEADING AND PARAGRAPH  */}
          <div className="flex flex-col text-center gap-2 mb-12">
            <h1 className="text-5xl text-gray-800 mb-8">
              Popular Cars Near You
            </h1>
            <p className="text-gray-600">
              Browse cars by category to find what suits you best.
            </p>
          </div>

          {/* CARS CATEGORIES TAB  */}
          <div className="flex flex-col md:flex-row md:justify-around gap-2 py-1 bg-[#F4F2F0] rounded-xl max-w-[80%] mx-auto mb-12">
            {categories.map((cat) => {
              const isActive = categoryState === cat;
              return (
                <button
                  onClick={() => setCategoryState(cat)}
                  className={`inline-flex items-center gap-2 transition-colors duration-200 ease-in-out rounded-xl cursor-pointer px-8 py-4
                            ${
                              isActive
                                ? "bg-[#648374] text-white shadow-md"
                                : "text-[#BFBFBF] hover:bg-slate-200/50 hover:text-slate-700"
                            } 
                    `}
                  key={cat}
                >
                  <Image
                    src="/icons/car_ico.png"
                    alt="car icon"
                    width={16}
                    height={16}
                  />
                  {cat}
                </button>
              );
            })}
          </div>

          {/* CARS IMAGES  */}
          <div className="flex flex-col lg:flex-row gap-4 place-items-center h-screen lg:h-auto mb-8 md:mb-14">
            {carsData
              .filter((car) => car.category === categoryState)
              .map((car) => (
                <div
                  className="group relative w-full  rounded-xl shadow-lg h-125 flex-1 hover:flex-[1.5] transition-[flex] duration-500 overflow-hidden"
                  key={car.id}
                >
                  <Image
                    src={car.imageUrl}
                    alt={`${car.brand} ${car.model}`}
                    fill
                    className="object-cover"
                  />
                  <div className="group-hover:opacity-100 transition-opacity duration-200 absolute opacity-0 z-20 bottom-2 flex flex-col gap-2 md:gap-4  w-full px-4">
                    <h1 className="text-[#FAFAFA] text-xl md:text-2xl">
                      {car.brand} {car.model}
                    </h1>
                    <Button
                      asChild
                      variant="default"
                      className="px-8 py-6 md:px-12 rounded-md shadow-md bg-[#648374] hover:bg-[#51685d] cursor-pointer transition-colors duration-200"
                    >
                      <Link href={`/cars/${car.id}`}>Shop now</Link>
                    </Button>
                  </div>
                  <div className="group-hover:opacity-100 transition-opacity duration-200 absolute inset-0 bg-black/40 z-10 opacity-0"></div>
                </div>
              ))}
          </div>

          {/* CTA BUTTON  */}
          <div className="w-full text-center">
            <Button
              variant="default"
              className="px-8 py-6 md:px-12 rounded-md shadow-md bg-[#648374] hover:bg-[#2D3A34] cursor-pointer transition-colors duration-200"
            >
              <Link href={"/cars"} className="">
                View all Cars
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Bestcars;
