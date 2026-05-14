import { CheckCircle2, ShieldCheck, Target, Zap } from "lucide-react";
import FadeIn from "../shared/FadeIn";

const OurCommitment = () => {
  const highlights = [
    {
      icon: ShieldCheck,
      title: "Uncompromised Quality",
      desc: "Standards that exceed expectations."
    },
    {
      icon: Target,
      title: "Timely Execution",
      desc: "Delivering projects on schedule."
    },
    {
      icon: Zap,
      title: "Future-Ready",
      desc: "Innovation-driven development."
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <FadeIn direction="right" className="relative group">
            <div className="absolute -inset-4 bg-gold-100/50 rounded-[2rem] -rotate-2 group-hover:rotate-0 transition-transform duration-500"></div>
            <div className="relative overflow-hidden rounded-[2rem] shadow-2xl shadow-gold-900/10">
              <img
                src="/images/image1.webp"
                alt="Construction commitment"
                className="w-full h-[500px] object-cover transform transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-black/90 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/10">
                  <p className="text-white font-bold text-lg mb-1 italic">"Engineering excellence in every brick we lay."</p>
                  <p className="text-gold-500 font-semibold text-sm">— PBD Leadership Team</p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Text Side */}
          <div className="space-y-10">
            <FadeIn delay={200} className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-gold-50 px-4 py-2 rounded-full text-gold-600 text-sm font-bold uppercase tracking-wider border border-gold-200">
                <CheckCircle2 size={16} />
                <span>Our Commitment</span>
              </div>
              <h2 className="text-xl sm:text-3xl font-black text-black leading-tight">
                Dedicated to building trust <span className="text-gold-500">through excellence.</span>
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                At PBD, we are committed to delivering exceptional construction and
                real estate solutions with uncompromised quality, transparency, and
                timely execution. Every project reflects our dedication to engineering
                excellence, customer satisfaction, sustainable development, and
                long-term value creation.
              </p>
            </FadeIn>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {highlights.map((item, idx) => (
                <FadeIn key={idx} delay={400 + idx * 150}>
                  <div className="h-full p-4 bg-gray-50 rounded-2xl border border-gray-100 hover:border-gold-300 hover:bg-white hover:shadow-xl hover:shadow-gold-500/10 transition-all duration-300">
                    <div className="bg-black w-10 h-10 rounded-xl flex items-center justify-center text-gold-500 mb-4 shadow-lg shadow-black/20">
                      <item.icon size={20} />
                    </div>
                    <h4 className="font-bold text-black text-sm mb-1">{item.title}</h4>
                    <p className="text-gray-500 text-xs leading-tight">{item.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default OurCommitment;
