import FadeIn from "../shared/FadeIn";

interface SubHeadingProps {
  title: string;
}
const subHeading = ({ title }: SubHeadingProps) => {
  return (
    <div>
      <FadeIn>
        <div className="flex items-center space-x-4">
          <div className="w-12 h-px bg-gold-500"></div>
          <p className="text-gold-500 font-medium tracking-[0.2em] uppercase text-xs">
            {title}
          </p>
        </div>
      </FadeIn>
    </div>
  );
};

export default subHeading;
