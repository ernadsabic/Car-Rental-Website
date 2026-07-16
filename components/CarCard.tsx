import { Car } from "@/constants/Cars";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

interface Props {
  car: Car;
}
const CarCard = ({ car }: Props) => {
  return (
    // GRID DIV
    <div className="grid grid-cols-1 md:grid-cols-2  rounded-md bg-white shadow-md">
      {/* image wrapper  */}
      <div className="relative overflow-hidden rounded-tr-md rounded-tl-md md:rounded-tr-none md:rounded-bl-md h-64 md:h-full">
        <Image
          src={car.imageUrl}
          alt={car.brand}
          fill
          className="object-cover"
        />
      </div>

      {/* info-right wrapper   */}
      <div className="py-6 px-6">
        <div className="flex flex-col gap-6 pb-10 border-b-2 mb-8">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl">
              {car.brand} {car.model}
            </h2>
            <p className="text-black text-2xl tracking-wide font-medium">
              ${car.pricePerDay}
              <span className="text-sm text-gray-600">/day</span>
            </p>
          </div>
          <p className="max-w-lg text-gray-600">{car.description}</p>
          <div className="flex gap-2 capitalize text-neutral-600">
            <p className="px-2.5 py-1 bg-[#E5EEFF] rounded-md">
              {car.transmission}
            </p>
            <p className="px-2.5 py-1 bg-[#E5EEFF] rounded-md">
              {car.seats} Seats
            </p>
            <p className="px-2.5 py-1 bg-[#E5EEFF] rounded-md">{car.fuel}</p>
          </div>
        </div>

        {/* CTA BUTTON  */}
        <div className="flex gap-4">
          <Button
            asChild
            variant="default"
            className="flex-1 py-6 cursor-pointer shadow-md"
          >
            <Link href={`/cars/${car.id}`}>Book This Ride</Link>
          </Button>
          <Button
            asChild
            variant={"outline"}
            className="py-6 border-[#454545] cursor-pointer shadow"
          >
            <Link href="/about">Details</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
