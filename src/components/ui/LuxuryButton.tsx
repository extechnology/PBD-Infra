const LuxuryButton = ({ label }: { label: string }) => {
  return (
    <button className="group relative overflow-hidden border border-gold-500 px-8 py-4 text-gold-500 hover:text-black transition-all duration-500">
      <span className="relative z-10 flex items-center gap-3">
        {label}
        <span className="group-hover:translate-x-1 transition-transform duration-300">
          →
        </span>
      </span>

      {/* Hover Fill */}
      <div className="absolute inset-0 bg-gold-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
    </button>
  );
};

export default LuxuryButton;
