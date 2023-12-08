import { twMerge } from "tailwind-merge";

type LoaderProp = {
  LoaderType: "loading-dots" | "loading-spinner" | "loading-ring";
  className?: string;
};
export default function Loader({ LoaderType, className }: LoaderProp) {
  return (
    <span
      className={twMerge(
        `grid loading ${LoaderType} loading-lg lg:w-14 mx-auto pt-36 xl:pt-40`,
        className
      )}
    ></span>
  );
}
