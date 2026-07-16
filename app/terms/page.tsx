export default function TermsOfService() {
    return (
      <main className="max-w-4xl mx-auto px-6 py-16">
        <header className="border-b-2 border-gray-900 pb-6 mb-12">
          <h1 className="text-4xl font-black text-gray-900 tracking-tight">TERMS OF SERVICE</h1>
          <p className="text-sm text-gray-500 mt-2 font-mono">REVISION: 07.09.2026</p>
        </header>
  
        <div className="text-gray-700 space-y-12">
          <p className="text-lg text-gray-900 font-medium leading-relaxed">
            Welcome to <strong>Horizon Company</strong>. By accessing our website and renting our vehicles, you agree to comply with and be bound by the following terms and conditions. Please read them carefully.
          </p>
  
          <div className="grid gap-8 border-l-4 border-blue-600 pl-6 my-10">
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">1. Rental Eligibility</h2>
              <p className="text-gray-600 mb-3">To rent a vehicle from Horizon Company, the driver must meet the following requirements:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-600">
                <li>Be at least 21 years of age (young driver fees may apply for drivers under 25).</li>
                <li>Hold a valid driver's license held for at least one full year.</li>
                <li>Provide a valid credit card in the main driver's name.</li>
              </ul>
            </div>
          </div>
  
          <div className="grid gap-8 border-l-4 border-gray-900 pl-6 my-10">
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">2. Booking and Cancellation</h2>
              <p className="text-gray-600">
                All reservations made through our website are subject to availability. Horizon Company reserves the right to cancel a booking in the event of vehicle unavailability or pricing errors. Free cancellation is typically available up to 48 hours before the scheduled rental start time, unless specified otherwise during checkout.
              </p>
            </div>
          </div>
  
          <div className="grid gap-8 border-l-4 border-blue-600 pl-6 my-10">
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">3. Vehicle Use and Restrictions</h2>
              <p className="text-gray-600 mb-3">The renter agrees to use the vehicle responsibly. Prohibited uses include, but are not limited to:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-600">
                <li>Driving under the influence of alcohol, drugs, or medication.</li>
                <li>Using the vehicle for racing, off-roading, or commercial towing.</li>
                <li>Subleasing or allowing unauthorized drivers to operate the vehicle.</li>
                <li>Transporting hazardous or illegal materials.</li>
              </ul>
            </div>
          </div>
  
          <div className="grid gap-8 border-l-4 border-gray-900 pl-6 my-10">
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">4. Fees, Traffic Violations, and Fuel</h2>
              <p className="text-gray-600">
                The renter is fully responsible for all traffic fines, parking tickets, toll fees, and congestion charges incurred during the rental period. Vehicles must be returned with the same level of fuel as when collected, unless a pre-paid fuel option was selected.
              </p>
            </div>
          </div>
  
          <div className="grid gap-8 border-l-4 border-blue-600 pl-6 my-10">
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">5. Limitation of Liability</h2>
              <p className="text-gray-600">
                Horizon Company is not liable for any indirect, incidental, or consequential damages arising out of your use of our website or rental services. Our total liability to you for any claim shall not exceed the amount paid for the rental.
              </p>
            </div>
          </div>
  
          <div className="grid gap-8 border-l-4 border-gray-900 pl-6 my-10">
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">6. Changes to These Terms</h2>
              <p className="text-gray-600">
                We reserve the right to modify these Terms of Service at any time. Any changes will be posted on this page with an updated revision date.
              </p>
            </div>
          </div>
  
          <div className="bg-gray-900 text-white p-8 rounded-none flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mt-16">
            <div>
              <h4 className="text-lg font-bold tracking-wide">HAVE QUESTIONS ABOUT OUR TERMS?</h4>
              <p className="text-gray-400 text-sm mt-1">Our support team is available 24/7 to clear up any legal confusion.</p>
            </div>
            <a href="mailto:support@horizoncompany.com" className="bg-white text-gray-900 px-6 py-3 font-semibold text-sm hover:bg-blue-600 hover:text-white transition-colors whitespace-nowrap">
              CONTACT SUPPORT
            </a>
          </div>
        </div>
      </main>
    );
  }