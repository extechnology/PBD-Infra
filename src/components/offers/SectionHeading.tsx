interface Props {
  title: string;
  subtitle?: string;
}

const SectionHeading = ({ title, subtitle }: Props) => {
  return (
    <div className="text-center mb-16">
      <p className="text-yellow-500 tracking-[5px] uppercase text-sm mb-3">
        PBD Infrastructure
      </p>

      <h2 className="text-4xl md:text-5xl text-black font-medium mb-5">{title}</h2>

      {subtitle && (
        <p className="max-w-3xl mx-auto text-zinc-400 leading-8">{subtitle}</p>
      )}
    </div>
  );
};

export default SectionHeading;
