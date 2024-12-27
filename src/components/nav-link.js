'use client'

import Link from "next/link";
import {usePathname} from "next/navigation";

import classes from "./nav-link.module.css"

import clsx from "clsx";

export default function NavLink({href, children}){
    const path = usePathname()
    // console.log(`path: ${path}`)
    // console.log(`href: ${href}`)
    return(
        <Link href={href}
              // className={path.startsWith(href) ? `${classes.link} ${classes.active}`: `${classes.link}`}
            className={clsx(
                classes.link,
                { [classes.active]: path == href }
            )}
        >{children}
        </Link>

    )
}