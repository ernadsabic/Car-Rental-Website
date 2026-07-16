"use client";
import CarCard from "./CarCard";
import { useEffect, useState } from "react";
import PaginationControls from "./PaginationControls";
import { carsData } from "@/constants/Cars";
import CarsPageForm from "./CarsPageForm";
interface Props {
  resolvedParams: {
    page?: string;
    startDate?: string;
    endDate?: string;
    pickUpLocation?: string;
  };
}
interface Bookings {
  car_id: string;
  pickupDate: string;
  returnDate: string;
}
const CarsList = ({ resolvedParams }: Props) => {
  const [bookings, setBookings] = useState<Bookings[]>([]);

  useEffect(() => {
    const savedBookings = localStorage.getItem("bookings");
    if (savedBookings) {
      try {
        setBookings(JSON.parse(savedBookings));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const startDate = resolvedParams.startDate || "2026-12-20";
  const endDate = resolvedParams.endDate || "2027-01-20";

  const formPickupMs = Date.parse(startDate);
  const formReturnMs = Date.parse(endDate);

  const unavaliableCars = bookings
    .filter((b) => {
      const bookedPickupMs = Date.parse(b.pickupDate);
      const bookedReturnMs = Date.parse(b.returnDate);

      return formPickupMs <= bookedReturnMs && formReturnMs >= bookedPickupMs;
    })
    .map((b) => b.car_id);

  const filteredCars = carsData.filter((c) => {
    return !unavaliableCars.includes(c.id);
  });

  const pickUpLocation = resolvedParams.pickUpLocation;

  const currentPage = Number(resolvedParams.page) || 1;
  const limit = 3;
  const startIndex = (currentPage - 1) * limit;
  const endIndex = startIndex + limit;

  const cars = filteredCars.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filteredCars.length / limit);
  return (
    <div>
      <CarsPageForm resolvedParams={resolvedParams} />
      <div className="grid grid-cols-1 gap-6 mb-8">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
      <PaginationControls total={totalPages} current={currentPage} />
    </div>
  );
};

export default CarsList;
