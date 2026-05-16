interface Props {
  title: string;
  description: string;
  image: string;
}

const OfferServiceCard = ({ title, description, image }: Props) => {
  return (
    <div className="group relative bg-zinc-950 rounded-sm border border-zinc-800 hover:border-gold-500/40 transition-all duration-500 overflow-hidden">
      {/* Image */}
      <div className="overflow-hidden h-[300px]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
      </div>

      {/* Content */}
      <div className="p-8">
        <h3 className="text-2xl font-semibold text-white mb-5 group-hover:text-gold-500 transition">
          {title}
        </h3>

        <p className="text-zinc-400 leading-7 mb-8">{description}</p>

        <button className="text-gold-500 border-b border-gold-500 pb-1 hover:tracking-wider transition-all duration-300">
          View More
        </button>
      </div>

      {/* Hover Glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition pointer-events-none">
        <div className="absolute -top-20 -right-20 w-52 h-52 bg-gold-500/10 blur-[100px]" />
      </div>
    </div>
  );
};

export default OfferServiceCard;
