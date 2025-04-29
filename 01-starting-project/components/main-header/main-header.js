import Link from "next/link";
import Logo from "@/public/logo.png"
import Image from "next/image"

import classes from "./main-header.module.css"
import NavLink from "@/components/main-header/nav-link"
export default function MainHeader() {
    return (
        <header className={classes.header}>
            <Link href="/" className={classes.logo}>
                <Image src={Logo} alt="Logo" width={80} height={80} />
                Next Food Style
            </Link>
            <nav className={classes.nav}>
                <ul>
                    <li>
                        <NavLink href="/meals">Browse Meals</NavLink>
                    </li>
                    <li>
                        <NavLink href="/community">Foodies Commutiy</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}