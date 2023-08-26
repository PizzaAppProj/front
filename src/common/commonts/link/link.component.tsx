import { FC, PropsWithChildren } from "react";

interface LinlProps {
  url: string;
}

export const Link: FC<LinlProps & PropsWithChildren> = ({ url, children }) => {
  return (
    <a
      href={url}
      className="relative after:content-[''] after:block after:absolute after:w-full after:h-px font-semibold  hover:after:bg-amber-400"
    >
      {children}
    </a>
  );
};
