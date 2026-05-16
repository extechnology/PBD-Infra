import FadeIn from "../shared/FadeIn";

const downloads = [
  "Ongoing Projects at Kerala",
  "Completed Projects",
  "Project Design Under Progress",
];

const DownloadSection = () => {
  return (
    <section className="py-28 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <FadeIn>
          <p className="uppercase tracking-[5px] text-gold-500 mb-3">
            Downloads
          </p>

          <h2 className="text-4xl md:text-5xl font-medium mb-14">
            Project Documents
          </h2>
        </FadeIn>

        <div className="space-y-6">
          {downloads.map((item, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="flex items-center justify-between border border-zinc-800 hover:border-gold-500 p-6 transition duration-300">
                <span className="text-lg text-zinc-600">{item}</span>

                <button className="text-gold-500 hover:text-white transition">
                  Download →
                </button>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;

