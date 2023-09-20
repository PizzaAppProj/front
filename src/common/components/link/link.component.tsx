import { FC, PropsWithChildren } from "react";

interface HeaderCategpryLinkProps {
  url: string;
}

export const HeaderCategpryLink: FC<
  HeaderCategpryLinkProps & PropsWithChildren
> = ({ url, children }) => {
  return (
    <a
      href={url}
      className="relative after:content-[''] after:block after:absolute after:w-full after:h-px font-semibold  hover:after:bg-amber-400"
    >
      {children}
    </a>
  );
};
