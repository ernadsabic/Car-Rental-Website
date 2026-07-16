import { carsData } from "@/constants/Cars";
import FirstPart from "@/components/cardetail/FirstPart";
import SecondPart from "@/components/cardetail/SecondPart";
import LastPart from "@/components/cardetail/LastPart";
import { notFound } from "next/navigation";

interface ParamsType {
  params: Promise<{ id: string }>;
}

export default async function CarDetails({ params }: ParamsType) {
  const { id } = await params;

  const car = carsData.find((c) => c.id === id);

  if (!car) {
    notFound();
  }

  const similar = carsData.filter(
    (c) => c.category === car.category && c.id !== car.id
  );

  return (
    <section className="py-16 md:py-20  w-full bg-[#F8F9FF]">
      <div className="container px-8 py-4 mx-auto">
        <p className="text-gray-600 text-lg mb-10">
          Cars /{" "}
          <span className="text-black font-bold">
            {car.brand} {car.model}
          </span>
        </p>
        <FirstPart car={car} />
        <SecondPart car={car} />
        <LastPart similarCars={similar} />
      </div>
    </section>
  );
}
