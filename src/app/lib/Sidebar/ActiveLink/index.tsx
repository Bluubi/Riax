'use client'

import {ComponentProps} from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";

type ActiveLinkProps = ComponentProps<'a'> & {
    path: string,
    label: string
}

const ActiveLink = ({path, label}: ActiveLinkProps) => {

    const pathName = usePathname();
    const activeStyle = (pathName === path) ? 'text-gray-100'  : ''

    return <Link href={path} className={activeStyle}>{label}</Link>
}

export default ActiveLink;
