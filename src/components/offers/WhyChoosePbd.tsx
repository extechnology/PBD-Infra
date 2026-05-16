import SectionHeading from "./SectionHeading";

const points = [
  "20+ years of proven construction expertise",
  "200+ successfully completed projects",
  "3000+ satisfied customers across Kerala",
  "Experienced engineers and skilled workforce",
  "Modern construction technologies",
  "Transparency and long-term value creation",
];

const WhyChoosePBD = () => {
  return (
    <section className="py-28 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          title="Why Only PBD?"
          subtitle="Trusted construction and infrastructure solutions built with precision, transparency, and premium execution."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {points.map((point, index) => (
            <div
              key={index}
              className="border border-zinc-800 p-7 hover:border-yellow-500 transition duration-300"
            >
              <div className="flex gap-5 items-start">
                <div className="w-3 h-3 rounded-full bg-yellow-500 mt-2" />

                <p className="text-zinc-300 leading-7">{point}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoosePBD;
