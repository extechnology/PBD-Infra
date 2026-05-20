const Parallax = () => {
  return (
    <div className="fixed inset-0 -z-10 h-screen w-full overflow-hidden">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1800&auto=format&fit=crop"
        alt="Parallax Background"
        className="h-full w-full object-cover"
      />

      {/* Optional Dark Overlay */}
      <div className="absolute inset-0 bg-black/80" />
    </div>
  );
};

export default Parallax;
