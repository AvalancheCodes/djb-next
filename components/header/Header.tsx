import { FC } from "react";
import { useRouter } from "next/router";
import TopNav from "@/components/header/top-nav/TopNav";

const Header: FC = () => {
  const router = useRouter();
  console.log(router.route);

  return (
    <>
      <header
        className={`${
          router.route === "/" ? "navbar-dark navbar-transparent" : ""
        } navbar-sticky`}
      >
        {/*<TopNav />*/}
        <TopNav />
        <div className="divider-light opacity-1"></div>
      </header>
    </>
  );
};

export default Header;
