// Seo.jsx
import { useState } from "react";

const Seo = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.service) {
      alert('❌ Please fill in your name, email, and select a service.');
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      alert(
        `✨ Thank you ${formData.name}! Our SEO experts will contact you within 24 hours.\n\nWe specialize in organic growth, keyword strategy, and data-driven SEO.`
      );
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      });
      setIsSubmitting(false);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50/30 py-28">
      {/* Simple classic header */}
      <div className="container mx-auto px-5 lg:px-8 text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Search Engine <span className="text-indigo-600">Optimization</span>
        </h1>
        <p className="text-gray-500 mt-2 max-w-xl mx-auto">
          Data‑driven SEO strategies that boost rankings, traffic, and revenue.
        </p>
      </div>

      {/* Two‑Column Layout */}
      <div className="container mx-auto px-5 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-start">
          {/* LEFT COLUMN: SEO Services with bullet points */}
          <div className="bg-white rounded-3xl shadow-xl border border-gray-200 p-6 md:p-8">
            <div className="flex items-center gap-3 border-b border-gray-200 pb-5 mb-6">
              <i className="fas fa-chart-line text-3xl text-indigo-600"></i>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">What We Deliver for SEO</h2>
            </div>
            <div className="space-y-5">
              <SeoItemBullet
                title="Technical SEO Audit & Fixes"
                description="Crawlability, site speed, structured data, mobile optimization, and Core Web Vitals."
              />
              <SeoItemBullet
                title="Keyword Research & Strategy"
                description="High‑intent keywords, competitor gap analysis, and topic clustering."
              />
              <SeoItemBullet
                title="On‑Page SEO Optimization"
                description="Meta tags, headings, internal linking, image optimization, and content structure."
              />
              <SeoItemBullet
                title="Off‑Page SEO & Link Building"
                description="Quality backlinks, digital PR, guest posts, and authority building."
              />
              <SeoItemBullet
                title="Local SEO & Google Maps"
                description="Google Business Profile optimization, local citations, review management."
              />
              <SeoItemBullet
                title="SEO Reporting & Analytics"
                description="Monthly performance dashboards, rank tracking, and actionable insights."
              />
            </div>
          </div>

          {/* RIGHT COLUMN: Contact Form (no placeholders) */}
          <div
            id="contactFormSection"
            className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-6 md:p-8"
          >
            <div className="text-center mb-6">
              <h3 className="text-2xl font-extrabold text-gray-800">Let's Boost Your Rankings</h3>
              <p className="text-gray-500 mt-1">Tell us about your website — we'll create a custom SEO roadmap.</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition bg-white"
                  placeholder=""
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-400 transition bg-white"
                  placeholder=""
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-400 transition bg-white"
                  placeholder=""
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Service Interested In *</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-3 rounded-xl border border-gray-300 bg-white focus:ring-2 focus:ring-indigo-400"
                >
                  <option value="">Select service</option>
                  <option>Technical SEO Audit</option>
                  <option>Keyword Research</option>
                  <option>On‑Page SEO</option>
                  <option>Link Building</option>
                  <option>Local SEO</option>
                  <option>Full SEO Package</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Project Brief / Message</label>
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-400 transition bg-white"
                  placeholder=""
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-indigo-700 to-purple-700 hover:from-indigo-800 hover:to-purple-800 text-white font-bold py-3.5 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 text-lg disabled:opacity-70"
              >
                <i className="fas fa-paper-plane"></i>
                {isSubmitting ? 'Sending...' : 'Get Free SEO Consultation'}
              </button>
              <p className="text-xs text-center text-gray-400 mt-3">
                We reply within 12 hours. No spam, guaranteed.
              </p>
            </form>
            <div className="mt-6 flex justify-center gap-3 text-indigo-500 text-sm">
              <i className="fab fa-whatsapp"></i> +91 98765 43210 &nbsp;|&nbsp;
              <i className="far fa-clock"></i> 24/7 Support
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Simple bullet point component (no circles, same indigo dot)
const SeoItemBullet = ({ title, description }) => (
  <div className="flex gap-3">
    <div className="text-indigo-500 text-xl mt-0.5">•</div>
    <div>
      <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

export default Seo;