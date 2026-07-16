"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
type StateType = {
  pickUp: string;
  startDate: string;
  endDate: string;
};

const HeroForm = () => {
  const [formValue, setFormValue] = useState<StateType>({
    pickUp: "",
    startDate: "2026-12-22",
    endDate: "2027-01-22",
  });

  const router = useRouter();
  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormValue((prev) => ({ ...prev, [name]: value }));
  }
  function handleSubmit(e: React.SubmitEvent) {
    e.preventDefault();

    if (!formValue.startDate || !formValue.endDate || !formValue.pickUp) return;

    const params = new URLSearchParams({
      pickUp: formValue.pickUp,
      startDate: formValue.startDate,
      endDate: formValue.endDate,
    }).toString();

    router.push(`/cars?${params}`);
  }
  console.log(formValue);
  return (
    <div className="container mx-auto px-8 py-4  absolute -bottom-16 z-20 left-0 right-0 ">
      <form
        onSubmit={handleSubmit}
        className="w-full  whitespace-nowrap bg-white text-black overflow-hidden border p-8 flex flex-col md:flex-row md:items-center md:justify-between md:gap-8 gap-6 shadow-2xl"
      >
        <div className="lg:flex-1 relative">
          <input
            type="text"
            placeholder="Your destination"
            className="outline-none border-b-2 border-[#799e8d] w-full h-full py-2 pr-8"
            name="pickUp"
            value={formValue.pickUp}
            onChange={handleInput}
          ></input>
          <img
            src={"/icons/location.png"}
            alt="Destination icon"
            width={16}
            height={16}
            className="absolute right-2 top-1/2 -translate-y-1/2"
          />
        </div>

        <div className="relative flex flex-col lg:flex-1">
          <button className="border py-2 px-3 inline-flex items-center justify-between gap-2 text-gray-400">
            PICK-UP DATE
            <img
              src="/icons/calendar.png"
              alt="Calendar"
              width={16}
              height={16}
            />
          </button>
          <input
            onChange={handleInput}
            type="date"
            name="startDate"
            className="opacity-0 absolute inset-0 px-3 py-2"
            value={formValue.startDate}
          />
        </div>
        <div className="relative flex flex-col lg:flex-1">
          <button className="border py-2 px-3 inline-flex items-center justify-between gap-2 text-gray-400">
            RETURN DATE
            <img
              src="/icons/calendar.png"
              alt="Calendar"
              width={16}
              height={16}
            />
          </button>
          <input
            onChange={handleInput}
            type="date"
            name="endDate"
            className="opacity-0 absolute inset-0 px-3 py-2"
            value={formValue.endDate}
          />
        </div>

        <Button
          type="submit"
          variant="default"
          className="bg-[#648374] rounded-none cursor-pointer text-white hover:bg-[#2D3A34] px-4 lg:px-9 py-5 inline-flex items-center gap-2"
        >
          Find a car
          <img src="/icons/search.png" alt="Search" width={16} height={16} />
        </Button>
      </form>
    </div>
  );
};

export default HeroForm;
