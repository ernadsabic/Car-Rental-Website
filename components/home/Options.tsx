import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import Link from "next/link";

const cards = [
  {
    image: "/images/deal.webp",
    pre_header: "Pricing",
    header: "Rates that stay honest",
    paragraph: "No hidden fees, no surprises at checkout",
  },
  {
    image: "/images/rent_key.webp",
    pre_header: "Flexibility",
    header: "Rent for a day or a month",
    paragraph: "Adjust your plans whenever the road changes",
  },
  {
    image: "/images/cars.webp",
    pre_header: "Trust",
    header: "Vehicles maintained and ready",
    paragraph: "Every car inspected before you drive it away",
  },
];

const Options = () => {
  return (
    <div>
      <section className="py-16 md:py-20 w-full bg-[#FFFFF]">
        <div className="container mx-auto px-8 py-4">
          <div className="text-center flex flex-col gap-4 md:gap-6 mb-14">
            <h4 className="font-bold text-gray-900">Options</h4>
            <h1 className="text-5xl text-gray-800">
              Cars built for every trip
            </h1>
            <p className="text-gray-600">
              Choose from sedans, SUVs, and trucks for any distance
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
            {cards.map((card) => (
              <Card
                key={card.pre_header}
                className="pt-0 flex flex-col gap-4 md:gap-6 h-full shadow-md hover:scale-105 hover:shadow-xl transition-all duration-300"
              >
                <div className="relative w-full h-96">
                  <Image
                    src={card.image}
                    alt={card.pre_header}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 z-10 "></div>
                </div>
                <CardHeader className="flex-1 px-6">
                  <CardTitle className="flex flex-col gap-4">
                    <h4 className="font-bold text-gray-900">
                      {card.pre_header}
                    </h4>
                    <h1 className="text-3xl text-gray-800">{card.header}</h1>
                    <p className="text-gray-600">{card.paragraph}</p>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Button
                    asChild
                    variant={"ghost"}
                    className="inline-flex items-center text-gray-900 text-md cursor-pointer"
                  >
                    <Link href={"/contact"}>
                      Learn
                      <img src="/icons/arrow.png" alt="Arrow" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Options;
