import { Link } from "react-router-dom";

const LuxuryButton = ({ label, to }: { label: string; to: string }) => {
  return (
    <Link
      to={to}
      className="group relative inline-flex items-center justify-center overflow-hidden border border-gold-500 px-8 py-4 text-gold-500 hover:text-black transition-all duration-500"
    >
      <span className="relative z-10 flex items-center gap-3">
        {label}

        <span className="transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </span>

      <div className="absolute inset-0 origin-left scale-x-0 bg-gold-500 transition-transform duration-500 group-hover:scale-x-100" />
    </Link>
  );
};

export default LuxuryButton;
