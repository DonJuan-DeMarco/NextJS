import type { ReactNode } from "react";

interface HeadingProps {
  children: ReactNode;
}

export default function Heading({ children }: HeadingProps) {
  return <h1 className="font-bold pb-3 text-2xl font-orbitron">{children}</h1>;
}
