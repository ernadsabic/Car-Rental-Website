import CarsList from "@/components/CarsList";

const Cars = async ({
  searchParams,
}: {
  searchParams: Promise<{
    page?: string;
    startDate?: string;
    endDate?: string;
    pickUpLocation?: string;
  }>;
}) => {
  const resolvedParams = await searchParams;

  
  return (
    <section className="py-16 md:py-20 w-full bg-[#FAFAFA]">
      <div className="container mx-auto px-8 py-4">
        <div className="flex flex-col gap-4 mb-10">
          <h1 className="text-3xl md:text-4xl">Choose Your Perfect Ride</h1>
          <p className="text-gray-600  md:max-w-xl">
            Experience the pinnacle of automotive engineering with our curated
            selection of luxury vehicles for the discerning traveler.
          </p>
        </div>
        <CarsList resolvedParams={resolvedParams} />
      </div>
    </section>
  );
};

export default Cars;
