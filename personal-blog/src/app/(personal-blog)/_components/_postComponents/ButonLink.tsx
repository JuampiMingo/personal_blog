import Link, { LinkProps } from "next/link";
import { FC } from "react";


type ButtonLinkProps = {
    href: string,
    children: React.ReactNode
}

export const ButtonLink: FC<ButtonLinkProps> = ({href, children}) => {
    return (
        <button className="relative w-50 bg-slate-700 text-white rounded-xl self-end">
            <Link className="px-14" href={href}>{children}</Link>
        </button>
    )
}