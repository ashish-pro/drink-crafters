import { twMerge } from "tailwind-merge";
type Props = React.PropsWithChildren<{
  toolTipText: string;
  className?: string;
}>;

export default function Tooltip({ toolTipText, className, children }: Props) {
  return (
    <div className={twMerge("tooltip", className)} data-tip={toolTipText}>
      {children}
    </div>
  );
}
