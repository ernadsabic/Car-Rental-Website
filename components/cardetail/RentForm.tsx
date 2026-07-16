"use client";
import { Car } from "@/constants/Cars";
import { CheckCircle, MapPin, XCircle } from "lucide-react";
import { Button } from "../ui/button";
import { checkoutCarAction } from "@/lib/actions/checkoutCarAction";
import { useState } from "react";
interface Props {
  car: Car;
}
interface Bookings {
  car_id: string;
  pickupDate: string;
  returnDate: string;
}

const RentForm = ({ car }: Props) => {
  const [dates, setDates] = useState({ pickupDate: "", returnDate: "" });

  const handleInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setDates((prev) => ({ ...prev, [name]: value }));
  };

  const hasDates =
    dates.pickupDate !== "" &&
    dates.returnDate !== "" &&
    dates.pickupDate < dates.returnDate;

  const pickUpDateMs = Date.parse(dates.pickupDate);
  const returnDateMs = Date.parse(dates.returnDate);

  const bookings: Bookings[] =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("bookings") || "[]")
      : [];

  const singleCarBookings = bookings.filter((b) => b.car_id === car.id);

  const hasSomeOverlap = singleCarBookings.some((b) => {
    const bookedPickupMs = Date.parse(b.pickupDate);
    const bookedReturnMs = Date.parse(b.returnDate);

    return pickUpDateMs <= bookedReturnMs && returnDateMs >= bookedPickupMs;
  });

  const pickUp = "Horizon Company";
  const startDateStr = dates.pickupDate;
  const endDateStr = dates.returnDate;

  const startDate = new Date(startDateStr);
  const endDate = new Date(endDateStr);

  const milisecondsDif = endDate.getTime() - startDate.getTime();
  const msInDay = 24 * 60 * 60 * 1000;
  const totalDays = milisecondsDif > 0 ? Math.ceil(milisecondsDif / msInDay) : 0;
  

  const rentPrice = car.pricePerDay * totalDays || 0;
  const totalToPay = totalDays > 0 ? rentPrice + 120 + 50 : 0;

  const handleRent = async () => {
    if (!hasDates || hasSomeOverlap) return;
    const existingBookings: Bookings[] = JSON.parse(
      localStorage.getItem("bookings") || "[]"
    );
    const newBooking = {
      car_id: car.id,
      pickupDate: startDateStr,
      returnDate: endDateStr,
    };

    localStorage.setItem(
      "bookings",
      JSON.stringify([...existingBookings, newBooking])
    );
    await checkoutCarAction({
      car,
      startDateStr,
      endDateStr,
      totalDays,
      totalToPay,
    });
  };
  return (
    <div className="p-10 bg-white shadow-md rounded-md">
      <div className="flex items-center justify-between mb-8">
        <div className="flex flex-col gap-2">
          <p className="text-3xl md:text-5xl font-bold">${car.pricePerDay}</p>
          <p className="text-gray-600">/ day</p>
        </div>
        <div className="flex gap-2 items-center">
          {!hasDates ? (
            <p className="text-gray-400">Please select valid dates</p>
          ) : !hasSomeOverlap ? (
            <>
              <CheckCircle size={16} className="text-[#06bc00]" />
              <p className="text-[#06bc00]">Avaliable now</p>
            </>
          ) : (
            <>
              <XCircle size={16} className="text-[#BC0035]" />
              <p className="text-[#BC0035]">Not avaliable</p>
            </>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-2 mb-6">
        <label>Pickup Location</label>
        <div className="flex items-center gap-4 rounded-sm border border-gray-400 p-4">
          <MapPin className="size-6 text-[#45464D]" />
          <p>{pickUp}</p>
        </div>
      </div>
      <div className="flex justify-between gap-4 pb-12 border-b mb-6">
        <div className="flex flex-col gap-2">
          <p>Pickup Date</p>
          <input
            name="pickupDate"
            onChange={handleInput}
            type="date"
            className="p-4 border border-gray-400 rounded-sm"
            value={dates.pickupDate}
          />
        </div>
        <div className="flex flex-col gap-2">
          <p>Return Date</p>
          <input
            name="returnDate"
            onChange={handleInput}
            type="date"
            className="p-4 border border-gray-400 rounded-sm"
            value={dates.returnDate}
          />
        </div>
      </div>
      <div className="flex flex-col gap-2 pb-4 border-b mb-6">
        <div className="flex justify-between">
          <p className="text-gray-600">
            ${car.pricePerDay} x {totalDays ? totalDays : 0} days
          </p>
          <p className="font-bold">${rentPrice}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-600">Collision Damage Waiver</p>
          <p className="font-bold">$120</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-600">Premium Delivery Fee</p>
          <p className="font-bold">$50</p>
        </div>
      </div>
      <div className="flex justify-between font-bold text-xl mb-6">
        <p>Total:</p>
        <p>${totalToPay}</p>
      </div>
      <Button
        className="bg-[#BA0035] p-6 w-full mb-6 cursor-pointer transition-colors duration-200 ease"
        onClick={handleRent}
        disabled={hasSomeOverlap || !hasDates}
      >
        Rent now
      </Button>
      <p className="text-center text-gray-600 text-sm">
        Free cancellation up to 48 hours before pickup.
      </p>
    </div>
  );
};

export default RentForm;
