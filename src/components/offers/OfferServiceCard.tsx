interface Props {
  title: string;
  description: string;
  image: string;
}

const OfferServiceCard = ({ title, description, image }: Props) => {
  return (
    <div className="group relative bg-gray-50 rounded-sm border border-zinc-50 hover:border-gold-500/40 transition-all duration-500 overflow-hidden">
      {/* Image */}
      <div className="overflow-hidden h-[400px]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
      </div>

      {/* Content */}
      <div className="p-8">
        <h3 className="text-lg font-medium text-gray-800 mb-5 group-hover:text-gold-500 transition">
          {title}
        </h3>

        <p className="text-gray-700 text-sm leading-7 mb-8">{description}</p>

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
