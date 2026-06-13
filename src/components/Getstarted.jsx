import { useState, useEffect } from "react";

const Getstarted = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    console.log("Getstarted mounted");
  }, []);

  return (
    <div className="bg-white min-h-screen">
      {/* Fixed debug overlay to ensure visibility */}
      <div className="fixed top-20 right-6 z-[9999]">
        <div className="bg-red-500 text-white px-3 py-2 rounded shadow">GETSTARTED MOUNTED</div>
      </div>
      {/* Debug banner to verify page is rendering */}
      <div className="w-full py-8 flex justify-center">
        <span className="bg-yellow-300 text-black font-bold px-4 py-2 rounded-lg shadow">GETSTARTED PAGE RENDERED</span>
      </div>

      {/* Page header removed — use global Navbar's Get Started CTA to open the form */}

      {/* Rest of your landing page content here */}
      <main className="max-w-6xl mx-auto p-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Get Started with ClickEngine</h1>
        <p className="text-slate-700 mb-6">Fill the form to connect with our team — we’ll guide you through the next steps.</p>
        <button
          onClick={() => setIsModalOpen(true)}
          className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-md font-semibold shadow"
        >
          Open Contact Form
        </button>
      </main>

      {/* Contact Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl relative animate-fade-in">
            {/* Close button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Form content */}
            <div className="p-6 md:p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-slate-900">Let's grow together</h3>
                <p className="text-gray-500 text-sm mt-1">Fill the form and we’ll get back to you within 24h.</p>
              </div>

              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email address</label>
                  <input
                    type="email"
                    placeholder="hello@agency.com"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone number</label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">How can we help?</label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your project..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-2.5 rounded-lg transition shadow-md"
                >
                  Send message →
                </button>
              </form>

              <p className="text-center text-xs text-gray-400 mt-4">
                We respect your privacy. No spam, ever.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Optional fade-in animation */}
      <style>{`
        .animate-fade-in {
          animation: fadeIn 0.2s ease-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
};

export default Getstarted;