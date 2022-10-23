import { MDXProvider } from "@mdx-js/react";
import { FC, ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const ServiceLayout: FC<IProps> = ({ children }) => {
  return <MDXProvider>{children}</MDXProvider>;
};

export default ServiceLayout;
