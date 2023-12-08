import React from "react";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import useRipple from "use-ripple-hook";

type CustomLinkProps = {
  children: React.ReactNode;
  className?: string;
  pathTo: string;
  RippleColor?: string;
  onClick?: () => void;
};

export default function CustomLink({
  children,
  className,
  pathTo,
  onClick,
  RippleColor = "hsl(var(--b3) / 0.4)",
}: CustomLinkProps) {
  const [ripple, event] = useRipple({ color: RippleColor });
  return (
    <Link
      ref={ripple}
      onMouseDown={event}
      to={pathTo}
      onClick={onClick}
      className={twMerge("btn place-content-center", className)}
    >
      {children}
    </Link>
  );
}
