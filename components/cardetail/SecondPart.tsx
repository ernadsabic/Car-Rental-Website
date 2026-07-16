import { Car } from "@/constants/Cars";
import Image from "next/image";
import {
  TrendingUp,
  Fuel,
  Settings,
  Armchair,
  CheckCircle,
} from "lucide-react";
import RentForm from "./RentForm";

interface Props {
  car: Car;
}
const features = [
  "GPS Navigation",
  "Bluetooth Audio",
  "Heated Seats",
  "Apple CarPlay",
  "Parking Sensors",
  "Cruise Control",
];

const SecondPart = ({ car }: Props) => {
  const performanceCard = [
    { label: "Power", value: `${car.horsePower} hp` },
    { label: "Top Speed", value: `${car.topSpeed} km/h` },
    { label: "Engine", value: `${car.engine}` },
  ];
  const interiorCard = [
    { label: "Luggage", value: `${car.luggage}` },
    { label: "Category", value: `${car.category}` },
    { label: "Climate Control", value: `Dual Zone` },
  ];
  const quickSpecs = [
    {
      label: `0-100 km/h in ${car.acceleration0100}s`,
      icon: <TrendingUp size={24} />,
    },
    { label: car.fuel, icon: <Fuel size={24} />, capitalize: true },
    { label: car.transmission, icon: <Settings size={24} />, capitalize: true },
    {
      label: `${car.seats} Seats`,
      icon: <Armchair size={24} />,
      capitalize: true,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-8 mb-20">
      {/* LEFT SIDE  */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap gap-4 mb-10">
          {quickSpecs.map((spec, index) => (
            <div
              key={index}
              className="flex gap-2 items-center bg-[#F1F5F9] py-2 px-4 rounded-sm"
            >
              <div>{spec.icon}</div>
              <p className={spec.capitalize ? "capitalize" : ""}>
                {spec.label}
              </p>
            </div>
          ))}
        </div>
        {/* ////// */}
        <div className="flex flex-col gap-4 mb-10">
          <h2 className="text-2xl">Overview</h2>
          <p className="max-w-3xl text-gray-600 leading-relaxed tracking-wide">
            {car.overview}
          </p>
        </div>
        {/* ///// */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="p-6 bg-[#EFF4FF] rounded-md shadow-md">
            <div className="flex gap-2 items-center mb-8">
              <Image
                src={"/icons/performance.png"}
                alt="performance"
                width={16}
                height={16}
              />
              <h4 className="font-bold">Engine & Performance</h4>
            </div>

            <div className="flex flex-col gap-4">
              {performanceCard.map((p, index) => (
                <div
                  className="flex justify-between border-b pb-2 last:border-none"
                  key={index}
                >
                  <p className="text-gray-600">{p.label}</p>
                  <p className="font-bold">{p.value}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="p-6 bg-[#EFF4FF] rounded-md shadow-md">
            <div className="flex gap-2 items-center mb-8">
              <Image
                src={"/icons/car-seat.png"}
                alt="performance"
                width={16}
                height={16}
              />
              <h4 className="font-bold">Interior & Comfort</h4>
            </div>
            <div className="flex flex-col gap-4">
              {interiorCard.map((i, index) => (
                <div
                  className="flex justify-between border-b pb-2 last:border-none"
                  key={index}
                >
                  <p className="text-gray-600">{i.label}</p>
                  <p className="font-bold">{i.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* ////// */}
        <div className="flex flex-col gap-6 ">
          <h1 className="text-2xl">Features</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((f, index) => (
              <div className="flex gap-2 items-center" key={index}>
                <CheckCircle className="size-6 text-[#BC0035]" />
                <p className="text-gray-600">{f}</p>
              </div>
            ))}
          </div>
        </div>
        {/* ////// */}
      </div>
      {/* END OF LEFT SIDE  */}
      <RentForm car={car} />
    </div>
  );
};

export default SecondPart;
