import Link from "next/link";
import Image from "next/image";

import logoImg from "@/assets/logo.png"
import {montserrat} from "@/app/ui/fonts";
import classes from "./main-header.module.css"
import NavLink from "@/components/nav-link";


export default function MainHeader(){
    return(
        <header className={classes.header}>
            <Link href="/" className={`${classes.logo} ${montserrat.className}`} >
                <Image
                    src={logoImg}
                    alt="foodies logo"
                    width="1024"
                    height="1024"
                    priority
                />
                NextLevel Food
            </Link>
            <nav className={classes.nav}>
                <ul>
                    <li>
                        <NavLink href="/meals">Browse Meals</NavLink>
                    </li>
                    <li>
                        <NavLink href="/community">Foodies Community</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}