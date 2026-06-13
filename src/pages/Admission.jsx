import {
  Users,
  FileCheck,
  CreditCard,
  BarChart3,
  Bell,
  GraduationCap,
} from "lucide-react";

export default function AdmissionManagement() {
  const features = [
    {
      icon: <Users className="w-6 h-6 text-white" />,
      title: "Student CRM",
      description:
        "Manage all student inquiries and applications from one dashboard.",
    },
    {
      icon: <FileCheck className="w-6 h-6 text-white" />,
      title: "Document Verification",
      description:
        "Verify documents online with secure workflow management.",
    },
    {
      icon: <CreditCard className="w-6 h-6 text-white" />,
      title: "Fee Management",
      description:
        "Track admission fees, payments and pending dues easily.",
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-white" />,
      title: "Analytics & Reports",
      description:
        "Get detailed admission insights and conversion reports.",
    },
    {
      icon: <Bell className="w-6 h-6 text-white" />,
      title: "Notifications",
      description:
        "Send WhatsApp, SMS and Email alerts automatically.",
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-white" />,
      title: "Enrollment Management",
      description:
        "Complete student onboarding and enrollment automation.",
    },
  ];

  return (
    <div className="bg-white overflow-hidden mt-4">
      {/* Hero Section */}
      <section className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div>
              <span className="inline-flex px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-5">
                Smart Education Solution
              </span>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-slate-900">
                Admission
                <span className="text-blue-600"> Management </span>
                System
              </h1>

              <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-xl">
                Simplify student admissions with automated applications,
                document verification, fee tracking and enrollment management.
              </p>

              <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-7 py-3 rounded-xl transition">
                Contact Us
              </button>

              
            </div>

            {/* Right Dashboard */}
            <div className="relative">
              <div className="absolute -top-10 -right-10 h-52 w-52 bg-blue-100 rounded-full blur-3xl"></div>

              <div className="relative bg-white border border-slate-200 rounded-[32px] shadow-2xl p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-semibold text-slate-900">
                    Admission Dashboard
                  </h3>

                  <span className="bg-green-100 text-green-600 text-xs px-3 py-1 rounded-full">
                    Live
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-5">
                  <div className="bg-blue-50 rounded-2xl p-5">
                    <h4 className="text-3xl font-bold text-blue-600">
                      1,240
                    </h4>
                    <p className="text-slate-500 text-sm">
                      Applications
                    </p>
                  </div>

                  <div className="bg-cyan-50 rounded-2xl p-5">
                    <h4 className="text-3xl font-bold text-cyan-600">
                      920
                    </h4>
                    <p className="text-slate-500 text-sm">
                      Verified
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="h-3 bg-blue-600 rounded-full w-full"></div>
                  <div className="h-3 bg-blue-400 rounded-full w-4/5"></div>
                  <div className="h-3 bg-blue-300 rounded-full w-2/3"></div>
                </div>

                <div className="grid grid-cols-2 gap-3 mt-6">
                  <div className="border rounded-xl p-3 text-center text-sm">
                    Applications
                  </div>
                  <div className="border rounded-xl p-3 text-center text-sm">
                    Verification
                  </div>
                  <div className="border rounded-xl p-3 text-center text-sm">
                    Fee Tracking
                  </div>
                  <div className="border rounded-xl p-3 text-center text-sm">
                    Analytics
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-8 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-slate-900">
              Powerful Features
            </h2>

            <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
              Everything you need to manage admissions efficiently.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {features.map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-[24px] border border-slate-200 p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-400 flex items-center justify-center mb-6">
                  {item.icon}
                </div>

                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {item.title}
                </h3>

                <p className="text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-slate-900">
              Admission Process
            </h2>
          </div>

          <div className="grid md:grid-cols-5 gap-5">
            {[
              "Student Inquiry",
              "Application",
              "Verification",
              "Fee Payment",
              "Enrollment",
            ].map((step, index) => (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-3xl p-6 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center mx-auto mb-4 font-semibold">
                  {index + 1}
                </div>

                <h3 className="font-medium text-slate-800">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-[32px] text-white p-10 lg:p-16 text-center">
            <h2 className="text-4xl font-bold mb-4">
              Ready To Digitize Your Admission Process?
            </h2>

            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Automate applications, document verification, fee collection and
              enrollment management from a single platform.
            </p>

            <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}