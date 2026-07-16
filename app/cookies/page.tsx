export default function CookiePolicy() {
    return (
      <main className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight sm:text-4xl">Cookie Policy</h1>
          <p className="text-gray-500 mt-3">How Horizon Company uses tracking technologies to improve your experience.</p>
          <p className="text-xs font-mono text-gray-400 mt-2">Last updated: July 9, 2026</p>
        </div>
  
        <div className="text-gray-600 space-y-12">
          <p className="text-base text-center max-w-3xl mx-auto leading-relaxed">
            This Cookie Policy explains how <strong>Horizon Company</strong> uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them.
          </p>
  
          <div className="border-t border-gray-200 pt-10">
            <h2 className="text-xl font-bold text-gray-900 mb-4">What Are Cookies?</h2>
            <p className="leading-relaxed">
              Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
            </p>
          </div>
  
          <div className="border-t border-gray-200 pt-10">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Types of Cookies We Use</h2>
            
            <div className="grid gap-px bg-gray-200 sm:grid-cols-2 rounded-lg overflow-hidden border border-gray-200">
              <div className="bg-white p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Essential Cookies</h3>
                <p className="text-sm text-gray-600 leading-relaxed">These cookies are strictly necessary to provide you with services available through our website, such as remembering your car rental dates and vehicle selection while browsing.</p>
              </div>
              
              <div className="bg-white p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Performance & Analytics</h3>
                <p className="text-sm text-gray-600 leading-relaxed">These cookies help us understand how our website is being used, allowing us to track performance, find errors, and improve the user experience (e.g., Google Analytics).</p>
              </div>
              
              <div className="bg-white p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Functional Cookies</h3>
                <p className="text-sm text-gray-600 leading-relaxed">These are used to recognize you when you return to our website so we can remember your custom preferences, such as your selected language or currency settings.</p>
              </div>
  
              <div className="bg-white p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Security Cookies</h3>
                <p className="text-sm text-gray-600 leading-relaxed">We utilize these cookies to identify and prevent potential security risks, ensuring your booking sessions and personal details remain locked down.</p>
              </div>
            </div>
          </div>
  
          <div className="border-t border-gray-200 pt-10">
            <h2 className="text-xl font-bold text-gray-900 mb-4">How Can You Control Cookies?</h2>
            <p className="leading-relaxed">
              You have the right to decide whether to accept or reject cookies. You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website, though your access to some functionality and areas of our website may be restricted.
            </p>
          </div>
  
          <div className="border-t border-gray-200 pt-10">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Updates to This Policy</h2>
            <p className="leading-relaxed">
              We may update this Cookie Policy from time to time in order to reflect changes to the cookies we use or for other operational, legal, or regulatory reasons. Please re-visit this Cookie Policy regularly to stay informed.
            </p>
          </div>
  
          <div className="text-center pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500">Need more technical details? Contact us directly via <a href="mailto:privacy@horizoncompany.com" className="text-blue-600 hover:underline font-medium">privacy@horizoncompany.com</a></p>
          </div>
        </div>
      </main>
    );
  }