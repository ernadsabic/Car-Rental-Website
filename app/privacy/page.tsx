export default function PrivacyPolicy() {
    return (
      <main className="max-w-5xl mx-auto px-6 py-16">
        <header className="mb-16 max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 block mb-2">Data Protection</span>
          <h1 className="text-4xl font-extrabold text-gray-950 tracking-tight">Privacy Policy</h1>
          <p className="text-sm text-gray-400 mt-2">Effective Date: July 9, 2026</p>
        </header>
  
        <div className="space-y-12 divide-y divide-gray-100">
          <div className="pt-2 first:pt-0">
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
              At <strong>Horizon Company</strong>, accessible from our website, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Horizon Company and how we use it.
            </p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10">
            <div className="md:col-span-1">
              <h2 className="text-lg font-bold text-gray-900 tracking-tight uppercase">1. Information We Collect</h2>
            </div>
            <div className="md:col-span-2 text-gray-600 space-y-4">
              <p>As a car rental service, we collect personal information necessary to process your bookings and provide our services. This includes:</p>
              <ul className="space-y-2">
                <li><strong className="text-gray-900">Personal Identity:</strong> Name, date of birth, and driver&apos;s license details.</li>
                <li><strong className="text-gray-900">Contact Information:</strong> Email address, phone number, and billing/home address.</li>
                <li><strong className="text-gray-900">Payment Information:</strong> Credit card details processed securely through our gateways.</li>
                <li><strong className="text-gray-900">Vehicle Data:</strong> Telematics data, including vehicle location, mileage, and fuel levels.</li>
              </ul>
            </div>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10">
            <div className="md:col-span-1">
              <h2 className="text-lg font-bold text-gray-900 tracking-tight uppercase">2. How We Use It</h2>
            </div>
            <div className="md:col-span-2 text-gray-600 space-y-3">
              <p>We use the information we collect in various ways, including to:</p>
              <p>• Provide, operate, and maintain our car rental services.</p>
              <p>• Process your reservations, rentals, and payments.</p>
              <p>• Communicate with you regarding your booking, updates, or customer support.</p>
              <p>• Prevent fraudulent activities and ensure vehicle security.</p>
            </div>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10">
            <div className="md:col-span-1">
              <h2 className="text-lg font-bold text-gray-900 tracking-tight uppercase">3. Sharing Data</h2>
            </div>
            <div className="md:col-span-2 text-gray-600">
              <p className="leading-relaxed">
                We do not sell or rent your personal data to third parties. We only share information with trusted service providers who assist us in operating our business (e.g., insurance partners, payment processors, and IT support), or when required by law enforcement.
              </p>
            </div>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10">
            <div className="md:col-span-1">
              <h2 className="text-lg font-bold text-gray-900 tracking-tight uppercase">4. Data Security</h2>
            </div>
            <div className="md:col-span-2 text-gray-600">
              <p className="leading-relaxed">
                We use standard security measures to protect your personal information from unauthorized access, alteration, or disclosure. However, please remember that no method of transmission over the internet is 100% secure.
              </p>
            </div>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10">
            <div className="md:col-span-1">
              <h2 className="text-lg font-bold text-gray-900 tracking-tight uppercase">5. Your Rights</h2>
            </div>
            <div className="md:col-span-2 text-gray-600">
              <p className="leading-relaxed">
                Depending on your location, you have the right to access, correct, or request the deletion of the personal information we hold about you. To exercise these rights, please contact us using the information below.
              </p>
            </div>
          </div>
  
          <div className="pt-12 mt-12">
            <div className="bg-blue-50 border border-blue-100 p-8 rounded-lg max-w-3xl">
              <h3 className="text-base font-bold text-gray-900 uppercase tracking-wide mb-2">Privacy Administration</h3>
              <p className="text-sm text-gray-600 mb-4">For any privacy-related requests or data deletion inquiries, please reach out to our legal department:</p>
              <p className="text-sm font-semibold text-blue-600"><a href="mailto:privacy@horizoncompany.com">privacy@horizoncompany.com</a></p>
            </div>
          </div>
        </div>
      </main>
    );
  }