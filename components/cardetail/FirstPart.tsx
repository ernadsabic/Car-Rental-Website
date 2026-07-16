import { Button } from "../ui/button";
import { Car } from "@/constants/Cars";
import Image from "next/image";

interface Props {
  car: Car;
}

const FirstPart = ({ car }: Props) => {
  return (
    <div className="grid grid-cols-1 shadow-md md:grid-cols-[2fr_1fr] gap-2 min-h-125 md:rounded-tl-md  mb-20">
      <div className="relative overflow-hidden md:rounded-tl-md md:rounded-bl-md">
        <Image
          src={car.imageUrl}
          alt={car.brand}
          fill
          className="object-cover"
        />
        <div className="flex flex-col gap-4 absolute bottom-8 left-8 z-20">
          <h1 className="text-4xl text-white">
            {car.brand} {car.model}
          </h1>
          <p className="text-gray-300">
            Timeless design meets relentless performance.
          </p>
        </div>
        <div className="absolute inset-0 bg-black/30 z-10 "></div>
      </div>
      <div className="bg-[#EFF4FF] p-10 md:rounded-tr-md md:rounded-br-xl">
        <h3 className="text-2xl mb-8">Quick Specs</h3>
        <div className="flex flex-col gap-4 mb-8">
          <div className="bg-white shadow-md p-6 flex items-center gap-6 rounded-md ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-trending-up-icon lucide-trending-up text-[#BC0035]"
            >
              <path d="M16 7h6v6" />
              <path d="m22 7-8.5 8.5-5-5L2 17" />
            </svg>
            <div className="flex flex-col">
              <h4 className="text-sm text-gray-600">ACCELERATION</h4>
              <p className="font-bold text-lg tracking-wider">
                0-100 km/h in {car.acceleration0100}s
              </p>
            </div>
          </div>
          <div className="bg-white shadow-md p-6 flex items-center gap-6 rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-zap-icon lucide-zap text-[#BC0035]"
            >
              <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
            </svg>
            <div className="flex flex-col">
              <h4 className="text-sm text-gray-600">POWER</h4>
              <p className="font-bold text-lg tracking-wider">
                {car.horsePower} HP
              </p>
            </div>
          </div>
          <div className="bg-white shadow-md p-6 flex items-center gap-6 rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-circle-check-big-icon lucide-circle-check-big text-[#BC0035]"
            >
              <path d="M21.801 10A10 10 0 1 1 17 3.335" />
              <path d="m9 11 3 3L22 4" />
            </svg>
            <div className="flex flex-col">
              <h4 className="text-sm text-gray-600">TOP SPEED</h4>
              <p className="font-bold text-lg tracking-wider">
                {car.topSpeed} km/h
              </p>
            </div>
          </div>
        </div>
        <Button
          variant="outline"
          className="w-full bg-transparent border-black py-6"
        >
          View Full Specification
        </Button>
      </div>
    </div>
  );
};

export default FirstPart;
