import ContactForm from "@/components/ContactForm";

const Contact = () => {
  return (
    <section className="py-16 md:py-20 w-full bg-[#FAFAFA] min-h-screen grid grid-cols-1 grid-rows-1 items-center">
      <div className="col-start-1 row-start-1 whitespace-nowrap text-center font-bold text-[11vw] tracking-wide text-[#DFE0E5] z-0">
        <h1>GET IN TOUCH</h1>
      </div>
      <div className="col-start-1 row-start-1 container mx-auto px-8 py-8 z-10 ">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 mb-20">
          <div className="flex flex-col gap-20">
            <div className="space-y-4">
              <h1 className="text-5xl max-w-md">
                We're here to elevate your journey.
              </h1>
              <p className="max-w-sm text-gray-600">
                Our concierge team is available 24/7 for bespoke vehicle
                inquiries and international business partnerships.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="text-[#BA005C] uppercase font-bold">Inquiries</h4>
              <p className="font-bold text-lg">horizon@company.com</p>
            </div>
            <div className="flex flex-col gap-2 items-end">
              <h4 className="text-[#BA005C] uppercase font-bold">Call Us</h4>
              <p className="font-bold text-lg">+1 (888) HORIZON-COMPANY</p>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="text-[#BA005C] uppercase font-bold">
                Main Office
              </h4>
              <p className="text-lg">742 Park Avenue, Manhattan, NY 10021</p>
            </div>
          </div>
          <ContactForm />
        </div>
        <div className="w-full h-96 focus:outline-none">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3179781.471090181!2d-110.55483759694852!3d38.89527580995475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa453a1765804b35d%3A0x4dd075b6948f2c03!2sHorizon%20Company%20LLC!5e0!3m2!1shr!2sba!4v1782934875277!5m2!1shr!2sba"
            className="h-full w-full rounded"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
