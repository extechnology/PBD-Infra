const downloads = [
  "Ongoing Projects at Kerala",
  "Completed Projects",
  "Project Design Under Progress",
];

const DownloadSection = () => {
  return (
    <section className="py-28 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <p className="uppercase tracking-[5px] text-yellow-500 mb-3">
          Downloads
        </p>

        <h2 className="text-4xl md:text-5xl font-medium mb-14">
          Project Documents
        </h2>

        <div className="space-y-6">
          {downloads.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between border border-zinc-800 hover:border-yellow-500 p-6 transition duration-300"
            >
              <span className="text-lg text-zinc-600">{item}</span>

              <button className="text-yellow-500 hover:text-white transition">
                Download →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
