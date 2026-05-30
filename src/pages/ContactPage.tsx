import { useState } from "react";
import FadeIn from "../components/shared/FadeIn";
import SubHeading from "../components/ui/SubHeading";
import { Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";
import usePostContact from "../features/contact/hooks/contact.hooks";

const ContactPage = () => {
  const { mutate } = usePostContact();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate(form, {
      onSuccess: () => {
        setForm({ name: "", email: "", phone: "", message: "" });
        setSuccessMessage(true);
        setTimeout(() => setSuccessMessage(false), 5000);
      },
    });
  };

  return (
    <section className="min-h-screen bg-white pt-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left Side: Info */}
          <div className="space-y-12 content-center">
            <div className="space-y-6">
              <SubHeading title="Contact Us" />
              <FadeIn delay={0.2}>
                <h1 className="text-xl md:text-3xl font-medium text-black leading-tight">
                  Let's Build Your <br />
                  <span className="text-gold-500">Future Together.</span>
                </h1>
              </FadeIn>
              <FadeIn delay={0.4}>
                <p className="text-gray-600 max-w-md text-sm leading-relaxed">
                  Whether you have a question about our projects, need a
                  consultation, or just want to say hi, we're here to help.
                </p>
              </FadeIn>
            </div>

            <div className="space-y-8 grid grid-cols-3">
              {[
                {
                  icon: MapPin,
                  title: "Our Office",
                  detail: "Calicut, Kerala, India",
                },
                { icon: Phone, title: "Call Us", detail: "+91 98765 43210" },
                { icon: Mail, title: "Email Us", detail: "info@pbdinfra.com" },
              ].map((item, idx) => (
                <FadeIn
                  key={idx}
                  delay={0.5 + idx * 0.1}
                  className="flex items-start space-x-6"
                >
                  <div className="flex justify-center bg-zinc-50 p-4 border border-zinc-100 shadow-sm rounded-none">
                    <item.icon className="text-gold-500 " size={24} />
                  </div>
                  <div className="pt-3">
                    <h3 className="font-medium text-center text-black uppercase tracking-wider text-xs mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-center text-xs">
                      {item.detail}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Right Side: Form */}
          <FadeIn
            direction="up"
            delay={0.8}
            className="bg-zinc-50 p-10 border border-zinc-100 shadow-sm rounded-none"
          >
            <form className="space-y-8" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-xs uppercase tracking-widest font-bold text-gray-500"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full bg-white border border-zinc-200 px-4 py-3 text-sm focus:border-gold-500 outline-none transition-colors rounded-none"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-xs uppercase tracking-widest font-bold text-gray-500"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full bg-white border border-zinc-200 px-4 py-3 text-sm focus:border-gold-500 outline-none transition-colors rounded-none"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="phone"
                  className="text-xs uppercase tracking-widest font-bold text-gray-500"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  minLength={10}
                  maxLength={10}
                  required
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full bg-white border border-zinc-200 px-4 py-3 text-sm focus:border-gold-500 outline-none transition-colors rounded-none"
                  placeholder="+91 00000 00000"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-xs uppercase tracking-widest font-bold text-gray-500"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={form.message}
                  onChange={handleChange}
                  className="w-full bg-white border border-zinc-200 px-4 py-3 text-sm focus:border-gold-500 outline-none transition-colors rounded-none resize-none"
                  placeholder="How can we help you?"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white font-bold uppercase tracking-[0.2em] py-4 text-xs hover:bg-gold-500 transition-colors duration-500 rounded-none"
              >
                Send Message
              </button>

              {/* Inline Success Message */}
              <div
                className={`mt-5 flex items-center gap-3 border px-5 py-4 transition-all duration-500 ${
                  successMessage
                    ? "opacity-100 translate-y-0 border-gold-500 bg-gold-500/5"
                    : "opacity-0 -translate-y-2 border-transparent pointer-events-none h-0 mt-0 py-0 overflow-hidden"
                }`}
              >
                <CheckCircle2 className="h-5 w-5 text-gold-500 shrink-0" />
                <p className="text-sm text-neutral-700">
                  Your message has been sent successfully. We'll get back to you
                  shortly.
                </p>
              </div>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
