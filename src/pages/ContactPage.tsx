import { useState } from "react";
import FadeIn from "../components/shared/FadeIn";

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", form);
    // TODO: integrate with backend API
  };

  return (
    <section className="min-h-screen bg-black flex items-center justify-center px-4 py-12 text-white">
      {/* Card container */}
      <FadeIn direction="up" className="w-full max-w-lg">
        <div className="bg-gray-900 border border-gold-500/30 rounded-xl shadow-xl p-8">
          {/* Header */}
          <FadeIn delay={0.1}>
            <h1 className="text-3xl md:text-4xl font-bold text-center text-gold-500">
              Get in Touch
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="mt-4 text-center text-gray-300">
              We’d love to hear from you. Fill in the form below and we’ll get
              back to you shortly.
            </p>
          </FadeIn>

          {/* Form */}
          <FadeIn delay={0.3}>
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-200"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md bg-gray-800 border border-gray-700 focus:border-gold-500 focus:ring-0 text-white px-3 py-2"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-200"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md bg-gray-800 border border-gray-700 focus:border-gold-500 focus:ring-0 text-white px-3 py-2"
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-200"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md bg-gray-800 border border-gray-700 focus:border-gold-500 focus:ring-0 text-white px-3 py-2"
                />
              </div>

              {/* Submit */}
              <div className="text-center">
                <button
                  type="submit"
                  className="inline-block bg-gold-500 text-black font-semibold py-2 px-6 rounded-full hover:bg-gold-400 transition-colors shadow-md shadow-gold-500/30"
                >
                  Send Message
                </button>
              </div>
            </form>
          </FadeIn>
        </div>
      </FadeIn>
    </section>
  );
};

export default ContactPage;
