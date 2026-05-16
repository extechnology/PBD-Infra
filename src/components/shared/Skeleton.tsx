
interface SkeletonProps {
  className?: string;
}

const Skeleton = ({ className = "" }: SkeletonProps) => {
  return (
    <div
      className={`animate-pulse bg-zinc-800/50 rounded-sm ${className}`}
    />
  );
};

export default Skeleton;
