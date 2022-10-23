import { FC, useMemo } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const BreadCrumbs: FC = () => {
  const router = useRouter();

  const breadcrumbs = useMemo(() => {
    const { asPath } = router;
    const pathNames = asPath.split("/").filter((x) => x);
    return pathNames.map((name, index) => {
      const routeTo = `/${pathNames.slice(0, index + 1).join("/")}`;
      const nameToDisplay = name.toLowerCase();
      return { routeTo, nameToDisplay };
    });
  }, [router]);

  if (!breadcrumbs) {
    return null;
  }

  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link href="/">
            <a className="text-capitalize">home</a>
          </Link>
        </li>
        {breadcrumbs.map((breadcrumb, index) => {
          return (
            <li className="breadcrumb-item" key={index}>
              <Link href={`/${breadcrumb.routeTo}`}>
                <a className="text-capitalize">{breadcrumb.nameToDisplay}</a>
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default BreadCrumbs;
