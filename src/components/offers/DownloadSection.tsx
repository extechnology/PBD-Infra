import FadeIn from "../shared/FadeIn";
import SectionHeading from "../ui/SectionHeading";

const downloads = [
  "Ongoing Projects at Kerala",
  "Completed Projects",
  "Project Design Under Progress",
];

const DownloadSection = () => {
  return (
    <section className="pb-20 pt-10 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <FadeIn>
          <p className="uppercase tracking-[5px] text-gold-500 mb-3">
            Downloads
          </p>

          <SectionHeading title="Project Documents" />
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
