import React from "react";
import { Car } from "@/constants/Cars";
import { Card, CardContent, CardHeader } from "../ui/card";
import Image from "next/image";
import Link from "next/link";
interface Props {
  similarCars: Car[];
}
const LastPart = ({ similarCars }: Props) => {
  return (
    <div className="flex flex-col gap-10 md:gap-16 mb-10">
      <h1 className="text-2xl">Explore Similar Experiences</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {similarCars.slice(0, 3).map((s) => (
          <Card className="p-4 flex flex-col gap-8 shadow hover:scale-105 hover:shadow-md ease-in-out duration-300 transition-transform" key={s.id}>
            <div className="relative overflow-hidden h-64 rounded-sm">
              <Image
                src={s.imageUrl}
                alt={s.brand}
                fill
                className="object-cover"
              />
            </div>
            <CardHeader className="flex flex-col gap-1 flex-1">
              <h3 className="text-2xl">{`${s.brand} ${s.model}`}</h3>
              <p className="text-gray-600">{s.description}</p>
            </CardHeader>
            <CardContent className="flex justify-between item">
              <p className="text-gray-600">
                <span className="font-bold text-black text-lg md:text-xl">
                  ${s.pricePerDay}
                </span>{" "}
                / day
              </p>
              <Link
                href={`/cars/${s.id}`}
                className="text-[#BC0035] md:text-lg transition-colors duration-200 hover:text-[#bc0035c7]"
              >
                View Details
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default LastPart;
