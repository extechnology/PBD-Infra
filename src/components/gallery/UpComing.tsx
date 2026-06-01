import FadeIn from "../shared/FadeIn";
import { Link } from "react-router-dom";
import useUpcomingProjectDetail from "../../features/projects/upcoming-projects/hooks/useUpcomingProjectDetail";

const UpComing = () => {

  const {data:upcomingProjects,}=useUpcomingProjectDetail();


  return (
    <FadeIn>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-4 relative z-10">
        {upcomingProjects?.map((project: any) => (
          <div
            key={project.id}
            className="group flex flex-col h-full bg-white/5 border border-white/20  transition-all duration-300 shadow-soft overflow-hidden"
          >
            {/* Image Section */}
            <Link state={{project:upcomingProjects}} to={`/upcoming/${project.id}`}>
              <div className="w-full aspect-square overflow-hidden relative border-b border-white/20">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-1500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-white/95 via-white/40 to-transparent mix-blend-multiply opacity-80" />

                {/* Coming Soon Badge */}
                {/* <div className="absolute top-6 right-6 bg-gold-500 text-black text-[10px] font-heading tracking-widest uppercase font-bold px-4 py-2 rounded-sm shadow-md">
                Coming Soon
              </div> */}
              </div>
            </Link>

            {/* Text Section */}
            <div className="flex flex-col grow p-8 bg-white/5 group-hover:bg-white/10 transition-colors duration-300">
              <div className="text-gold-500 text-[10px] font-heading tracking-widest uppercase font-semibold mb-2">
                {project?.name}
              </div>
              <h3 className="text-xl font-heading font-medium tracking-wide text-black/90 group-hover:text-gold-500 transition-colors border-b border-white/10 pb-2 w-full">
                {project?.title}
              </h3>
              <p className="text-black/90 text-xs tracking-wider uppercase font-light">
                Location: {project?.location}
              </p>
            </div>
          </div>
        ))}
      </div>
    </FadeIn>
  );
};

export default UpComing;
