import { faqs } from "@/constants/Faqs";
import Faqlist from "../Faqlist";

const Faq = () => {
  return (
    <div>
      <section className="py-16 md:py-20 w-full   bg-linear-to-b from-[#101415] to-[#1f2628]">
        <div className="container mx-auto px-8 py-4 flex flex-col md:flex-row gap-4">
          <div className="flex flex-col gap-2 md:gap-4 mb-10 md:mb-12 max-w-sm">
            <h4 className="uppercase text-[#648374] tracking-widest">Information</h4>
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-white  leading-tight">
              Frequently Asked Questions
            </h1>
            <p className="max-w-xs text-gray-500">
              Find quick answers to the most common questions about our
              services, the finest luxury vehicles, insurance, and procedures.
            </p>
          </div>
          <div className="flex flex-col gap-2 md:gap-4 flex-1">
            {faqs.map((f) => (
              <Faqlist question={f.question} answer={f.answer} key={f.id} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;
