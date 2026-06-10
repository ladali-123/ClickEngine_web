import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", location: "", message: "", agree: false });
  const [submitted, setSubmitted] = useState(false);

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value });

  const submit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: "", email: "", phone: "", location: "", message: "", agree: false });
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-slate-50 px-[7%] py-10 lg:py-14">

      <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-orange-400/5 blur-3xl pointer-events-none" />
      <div className="absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-blue-400/5 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-10 text-center">
          <span className="mb-3 inline-block text-xs font-bold uppercase tracking-widest text-orange-500">
            We're Here For You
          </span>
          <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 lg:text-4xl">
            Drop us a message and we'll{" "}
            <span className="bg-gradient-to-r from-blue-500 to-orange-500 bg-clip-text text-transparent">
              get back shortly.
            </span>
          </h2>
        </div>

        {/* Two column layout */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">

          {/* LEFT — Form */}
          <div className="w-full lg:w-[55%]">
            {submitted && (
              <div className="mb-5 rounded-xl bg-green-50 border border-green-200 px-5 py-3 text-sm font-medium text-green-700">
                ✅ Message sent! We'll get back to you within 24 hours.
              </div>
            )}

            <form onSubmit={submit} className="flex flex-col gap-4">
              {/* Row 1 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  name="name" value={form.name} onChange={handle}
                  placeholder="Your Name" required
                  className="w-full rounded-xl border border-slate-200 bg-white px-5 py-3.5 text-sm text-slate-700 placeholder-slate-400 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all"
                />
                <input
                  name="email" value={form.email} onChange={handle}
                  placeholder="Your Email" type="email" required
                  className="w-full rounded-xl border border-slate-200 bg-white px-5 py-3.5 text-sm text-slate-700 placeholder-slate-400 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all"
                />
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  name="phone" value={form.phone} onChange={handle}
                  placeholder="Phone Number"
                  className="w-full rounded-xl border border-slate-200 bg-white px-5 py-3.5 text-sm text-slate-700 placeholder-slate-400 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all"
                />
                <input
                  name="location" value={form.location} onChange={handle}
                  placeholder="Location"
                  className="w-full rounded-xl border border-slate-200 bg-white px-5 py-3.5 text-sm text-slate-700 placeholder-slate-400 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all"
                />
              </div>

              {/* Message */}
              <textarea
                name="message" value={form.message} onChange={handle}
                placeholder="Your Message" rows={5}
                className="w-full rounded-xl border border-slate-200 bg-white px-5 py-3.5 text-sm text-slate-700 placeholder-slate-400 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all resize-none"
              />

              {/* Checkbox */}
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox" name="agree" checked={form.agree} onChange={handle} required
                  className="mt-0.5 h-4 w-4 cursor-pointer accent-blue-500"
                />
                <span className="text-sm text-slate-500 leading-relaxed">
                  By submitting the form, I agree to the{" "}
                  <span className="text-blue-500 font-medium cursor-pointer hover:underline">Privacy Policy</span>
                  {" "}and Website{" "}
                  <span className="text-blue-500 font-medium cursor-pointer hover:underline">Terms of Use</span>
                </span>
              </label>

              {/* Submit */}
              <button
                type="submit"
                className="w-fit mt-1 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700  px-10 
                py-3.5 text-sm font-bold text-white shadow-md shadow-orange-200 hover:-translate-y-0.5
                 hover:shadow-lg hover:shadow-orange-200 transition-all duration-200 border-none cursor-pointer"
              >
                Send Enquiry
              </button>
            </form>
          </div>

          {/* RIGHT — Illustration (Floating Card Removed) */}
          <div className="w-full lg:w-[45%] flex items-center justify-center">
            <div className="relative w-full max-w-md">

              {/* Background Glow */}
              <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-blue-200/40 blur-3xl" />
              <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-orange-200/40 blur-3xl" />

              {/* Main Card */}
              <div className="relative overflow-hidden rounded-[32px] bg-white shadow-[0_25px_60px_rgba(0,0,0,0.12)] border border-white/60">

                {/* Contact Image */}
                <img
                  src="https://i.pinimg.com/1200x/3a/6e/e4/3a6ee4248bb838b83e01c3832ef25ade.jpg"
                  alt="Customer Support"
                  className="h-[430px] w-full object-cover transition duration-700 hover:scale-105"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-7 text-white">

                  <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur-md px-4 py-2 text-xs font-semibold border border-white/20">
                    <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                    Available 24/7
                  </span>

                  <h3 className="text-3xl font-bold leading-tight">
                    Let's Build Something Amazing Together
                  </h3>

                  <p className="mt-3 text-sm text-white/80 leading-relaxed">
                    Whether you have a project idea, business query, or need
                    digital marketing support, our team is ready to help.
                  </p>

                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}