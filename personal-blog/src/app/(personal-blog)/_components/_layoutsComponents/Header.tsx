import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

type PropsHeader = {
    src: string
}

const Header: FC<PropsHeader> = ({src}) => {
    return (
       <>
         <header className="flex justify-center items-center flex-row bg-slate-300">
            <Link href="/">
            <Image
            src={src}
            width={100}
            height={100}
            alt="Blog Icon"
            ></Image>
            </Link>
            <h4 className="text-balance font-extrabold text-4xl">Personal Blog</h4>
        </header>
        <div className="bg-slate-800 h-1"></div>
       </>
    )
}


export default Header