import {
  Users,
  GraduationCap,
  FileCheck,
  CreditCard,
  BarChart3,
  UserCog,
  ArrowRight,
} from "lucide-react";

export default function InstituteManagementSystem() {
  const features = [
    {
      icon: <Users className="w-6 h-6 text-white" />,
      title: "Student Management",
      description:
        "Manage student profiles, admissions, attendance and academic records.",
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-white" />,
      title: "Course Management",
      description:
        "Organize courses, batches and academic programs efficiently.",
    },
    {
      icon: <FileCheck className="w-6 h-6 text-white" />,
      title: "Attendance Tracking",
      description:
        "Monitor student and faculty attendance with automated reports.",
    },
    {
      icon: <CreditCard className="w-6 h-6 text-white" />,
      title: "Fee Management",
      description:
        "Track fee collection, invoices and payment history seamlessly.",
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-white" />,
      title: "Reports & Analytics",
      description:
        "Generate detailed academic and operational performance reports.",
    },
    {
      icon: <UserCog className="w-6 h-6 text-white" />,
      title: "Staff Management",
      description:
        "Manage faculty records, schedules and administrative operations.",
    },
  ];

  const process = [
    "Enrollment",
    "Course Setup",
    "Attendance",
    "Fee Tracking",
    "Reports",
  ];

  return (
    <div className="bg-white overflow-hidden">
      {/* Hero */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div>
              <span className="inline-flex px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-5">
                Education ERP Solution
              </span>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-slate-900">
                Institute
                <span className="text-blue-600"> Management </span>
                System
              </h1>

              <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-xl">
                Simplify academic and administrative operations with a
                centralized platform for students, staff, attendance, fees and
                reporting.
              </p>

              <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-7 py-3 rounded-xl flex items-center gap-2 transition">
                Contact Us
                <ArrowRight size={18} />
              </button>
            </div>

            {/* Right Dashboard Mockup */}
            <div className="relative">
              <div className="absolute -top-10 -right-10 h-52 w-52 bg-blue-100 rounded-full blur-3xl"></div>

              <div className="relative bg-white border border-slate-200 rounded-[32px] shadow-2xl p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-semibold text-slate-900">
                    Institute Dashboard
                  </h3>

                  <span className="bg-green-100 text-green-600 text-xs px-3 py-1 rounded-full">
                    Active
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-5">
                  <div className="bg-blue-50 rounded-2xl p-5">
                    <h4 className="text-3xl font-bold text-blue-600">1250+</h4>
                    <p className="text-slate-500 text-sm">Students</p>
                  </div>

                  <div className="bg-cyan-50 rounded-2xl p-5">
                    <h4 className="text-3xl font-bold text-cyan-600">85+</h4>
                    <p className="text-slate-500 text-sm">Faculty</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="h-3 bg-blue-600 rounded-full w-full"></div>
                  <div className="h-3 bg-blue-400 rounded-full w-4/5"></div>
                  <div className="h-3 bg-blue-300 rounded-full w-2/3"></div>
                </div>

                <div className="grid grid-cols-2 gap-3 mt-6">
                  <div className="border rounded-xl p-3 text-center text-sm">
                    Attendance
                  </div>
                  <div className="border rounded-xl p-3 text-center text-sm">
                    Fees
                  </div>
                  <div className="border rounded-xl p-3 text-center text-sm">
                    Courses
                  </div>
                  <div className="border rounded-xl p-3 text-center text-sm">
                    Reports
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-10 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-slate-900">
              Core Features
            </h2>

            <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
              Everything required to manage modern educational institutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {features.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-[24px] border border-slate-200 p-8 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
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
              How It Works
            </h2>
          </div>

          <div className="grid md:grid-cols-5 gap-5">
            {process.map((step, index) => (
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

      {/* Why Choose */}
      <section className="py-10 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white border border-slate-200 rounded-[32px] p-10 lg:p-14">
            <h2 className="text-4xl font-bold text-slate-900 mb-8">
              Why Choose Our Institute Management System?
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Centralized student and faculty management",
                "Automated attendance and fee tracking",
                "Real-time reports and insights",
                "Scalable for schools, colleges and institutes",
                "Easy academic and administrative workflows",
                "Secure and cloud-based platform",
              ].map((item, i) => (
                <div key={i} className="flex gap-3">
                  <div className="w-3 h-3 rounded-full bg-blue-600 mt-2"></div>
                  <p className="text-slate-600">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}