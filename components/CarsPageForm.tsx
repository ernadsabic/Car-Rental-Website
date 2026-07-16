"use client";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
interface Props {
  resolvedParams: {
    page?: string;
    startDate?: string;
    endDate?: string;
    pickUpLocation?: string;
  };
}

const CarsPageForm = ({ resolvedParams }: Props) => {
  const [formValues, setFormValues] = useState({
    pickUpDate: "2026-12-20",
    returnDate: "2027-01-20",
  });

  useEffect(() => {
    if (resolvedParams.startDate && resolvedParams.endDate) {
      setFormValues({
        pickUpDate: resolvedParams.startDate,
        returnDate: resolvedParams.endDate,
      });
    }
  }, [resolvedParams.startDate, resolvedParams.endDate]);

  const path = usePathname();
  const router = useRouter();

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleFilter = () => {
    const params = new URLSearchParams();
    params.set("page", "1");
    params.set("startDate", formValues.pickUpDate);
    params.set("endDate", formValues.returnDate);

    router.push(`${path}?${params.toString()}`);
  };
  return (
    <div className="bg-white shadow-md flex flex-col md:flex-row md:items-end  gap-8 p-8 rounded-md mb-10">
    
      <div className="flex flex-col flex-1 gap-2">
        <h4 className="text-gray-600 font-bold">Pick-up Date</h4>
        <input
          value={formValues.pickUpDate}
          onChange={handleInput}
          type="date"
          name="pickUpDate"
          className="w-full bg-[#EFF4FF] py-2 px-4 rounded-md shadow focus:outline-none"
        />
      </div>
      <div className="flex flex-col gap-2 flex-1">
        <h4 className="text-gray-600 font-bold">Return Date</h4>
        <input
          value={formValues.returnDate}
          onChange={handleInput}
          type="date"
          name="returnDate"
          className="w-full bg-[#EFF4FF] py-2 px-4 rounded-md shadow focus:outline-none"
        />
      </div>
      <Button
        onClick={handleFilter}
        variant={"default"}
        className="p-6 shadow cursor-pointer"
      >
        Apply filters
      </Button>
    </div>
  );
};

export default CarsPageForm;
