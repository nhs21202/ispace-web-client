import Link from "next/link";
import React, { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  href?: string;
  target?: string;
  className?: string;
}>;

const LinkWrap = ({ href, children, ...props }: Props) => {
  return href ? (
    <Link href={href} {...props}>
      {children}
    </Link>
  ) : (
    children
  );
};

export default LinkWrap;
