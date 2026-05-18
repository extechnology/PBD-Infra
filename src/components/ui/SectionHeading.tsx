interface Props {
  title: string;
  subtitle?: string;
}

const SectionHeading = ({ title, subtitle }: Props) => {
  return (
    <div className="text-center mb-5 md:mb-10">

      <h2 className="text-xl md:text-3xl text-gold-500 font-medium mb-2">{title}</h2>

      {subtitle && (
        <p className="max-w-3xl mx-auto text-zinc-600 leading-8">{subtitle}</p>
      )}
    </div>
  );
};

export default SectionHeading;
