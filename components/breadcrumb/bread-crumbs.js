import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const BreadCrumbs = () => {
    const router = useRouter();
    const [breadcrumbs, setBreadcrumbs] = useState(null);

    useEffect(() => {
        const { asPath } = router;
        const pathNames = asPath.split('/').filter((x) => x);
        const paths = pathNames.map((name, index) => {
            const routeTo = `/${pathNames.slice(0, index + 1).join('/')}`;
            const nameToDisplay = name.toLowerCase();
            return { routeTo, nameToDisplay };
        } );
        setBreadcrumbs(paths);
    }, [router]);

    if (!breadcrumbs) {
        return null;
    }

    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li  className="breadcrumb-item">
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
             ); })}</ol>
        </nav>
    );
};

export default BreadCrumbs;