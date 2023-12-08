import { twMerge } from "tailwind-merge";

type BluePatternProps = {
  containerClassName: string;
  elementClassName: string;
  clipingPath: string;
};

export default function BlurPattern({
  containerClassName,
  elementClassName,
  clipingPath,
}: BluePatternProps) {
  return (
    <div
      className={twMerge(
        "absolute pointer-events-none inset-x-0 -z-10 transform-gpu overflow-hidden opac blur-3xl ",
        containerClassName
      )}
      aria-hidden="true"
    >
      <div
        className={twMerge(
          "relative aspect-[1155/678] w-[36.125rem] -translate-x-1/2 opacity-30 sm:w-[72.1875rem]",
          elementClassName
        )}
        style={{
          clipPath: clipingPath,
        }}
      />
    </div>
  );
}
