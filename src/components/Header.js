import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import Switcher from './switcher/Switcher';

export default function Header({ title, color = "light" }) {

    const [lightmode, setLightMode] = useState(true)

    const openMenu = (e) => {
        const menu = document.getElementById('mob-menu')
        menu.classList.toggle("open");

        const icon = e.target
        if (e.target.tagName.toLowerCase() == 'i') {
            if (icon.classList.contains("fa-bars")) {
                icon.classList.remove("fa-bars")
                icon.classList.add("fa-close")
            } else {
                icon.classList.remove("fa-close")
                icon.classList.add("fa-bars")
            }
        }
    }

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta name="description" content="milon27 - Full stack Mobile and Web developer."></meta>
                <meta name="robots" content="index, follow" />

                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />

                <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet" />

                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap" rel="stylesheet" />

                <link rel="icon" href="/fav.svg" />
            </Head>
            {/* header */}
            <header className="flex justify-content-space align-items-center py-2">
                <Link href="/">
                    <a>
                        <img className="img-w150" src="/logo.svg" />
                    </a>
                </Link>


                <div className="openMenu" onClick={openMenu}>
                    <i className="fa fa-bars"></i>
                </div>

                <nav id="mob-menu" className={color === "light" ? "nav-links" : "nav-links-dark"} >
                    <Link href="/">
                        <a className="mx-1">Home</a>
                    </Link>
                    <Link href="/portfolio">
                        <a className="mx-1">Portfolio</a>
                    </Link>
                    <Link href="/contact">
                        <a className="mx-1">Contact</a>
                    </Link>
                    <Link href="/resume">
                        <a className="mx-1">Resume</a>
                    </Link>
                    <Switcher state={lightmode} onChange={() => {
                        setLightMode(old => {
                            let theme = !old
                            // if (theme) {
                            //     document.body.classList.toggle("light-theme");
                            // } else {
                            //     document.body.classList.toggle("dark-theme");
                            // }
                            return theme
                        })

                        document.body.classList.toggle("light-theme");

                        // const currentTheme = localStorage.getItem("theme");
                        // if (currentTheme == "dark") {
                        //     document.body.classList.toggle("dark-theme");
                        // } else if (currentTheme == "light") {
                        //     document.body.classList.toggle("light-theme");
                        // }
                        // if (prefersDarkScheme.matches) {
                        //     document.body.classList.toggle("light-theme");
                        //     var theme = document.body.classList.contains("light-theme")
                        //         ? "light"
                        //         : "dark";
                        // } else {
                        //     document.body.classList.toggle("dark-theme");
                        //     var theme = document.body.classList.contains("dark-theme")
                        //         ? "dark"
                        //         : "light";
                        // }
                        // localStorage.setItem("theme", theme);


                    }} />
                </nav>
            </header>
        </>
    )
}

