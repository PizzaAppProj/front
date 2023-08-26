import { FC } from "react";

interface SkeletonProps {
  width: number;
  height: number;
}

export const Skeleton: FC<SkeletonProps> = ({ width, height }) => {
  return (
    <div
      className="rounded-full bg-gray-200 animate-pulse"
      style={{ width, height }}
    ></div>
  );
};
