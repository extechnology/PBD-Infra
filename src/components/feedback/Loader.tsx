import { BiBuilding } from "react-icons/bi";
import FadeIn from "../shared/FadeIn";

/**
 * Premium loader displayed while pages or data are loading.
 * Uses a golden building icon to reflect the infrastructure theme.
 * The component fills the viewport, centers the animated icon, and
 * applies a subtle background gradient. It fades in when it becomes
 * visible using the shared FadeIn utility.
 */
const Loader = () => {
  return (
    <FadeIn
      direction="none"
      className="fixed inset-0 flex items-center justify-center bg-black/80 z-50"
    >
      <div className="flex flex-col items-center space-y-4">
        {/* Rotating golden building icon */}
        <BiBuilding size={80} className="text-gold-500 animate-spin-slow" />
        <p className="text-white text-lg">Loading...</p>
      </div>
    </FadeIn>
  );
};

export default Loader;
