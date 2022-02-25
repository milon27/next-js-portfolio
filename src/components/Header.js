import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Switcher from './switcher/Switcher';
import { motion } from 'framer-motion'
import { FadeInDown } from '../utils/anim/Anim';


export default function Header({ title }) {

    const [theme, setTheme] = useState(() => {
        const theme = (typeof window !== "undefined") ? localStorage.getItem("theme") : 'dark';//light=false,dark=true
        return theme === 'light' ? false : true
    })

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


    useEffect(() => {
        if (theme === false) {
            document.body.classList.add("light-theme");
        } else {
            document.body.classList.remove("light-theme");
        }
    }, [theme])

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta name="description" content="milon27 - Full stack Mobile and Web developer."></meta>
                <meta name="robots" content="index, follow" />

                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />


                <link rel="icon" href="/fav.svg" />
            </Head>
            {/* header */}
            <header className="flex justify-content-space align-items-center ">
                <Link href="/">
                    <a>
                        {/* <img className="img-w150" src="/logo.svg" /> */}
                        <motion.h1
                            initial="init"
                            animate="anim"
                            variants={FadeInDown()}
                            className='text-primary'>Milon27</motion.h1>
                    </a>
                </Link>


                <div className="openMenu" onClick={openMenu}>
                    <i className="fa fa-bars"></i>
                </div>

                <motion.nav
                    initial="init"
                    animate="anim"
                    variants={FadeInDown()}

                    id="mob-menu" className="nav-links-dark" >
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

                    <Switcher state={theme} onChange={() => {
                        setTheme(old => {
                            let theme = !old
                            ///light=false,dark=true
                            if (typeof window !== "undefined") {
                                localStorage.setItem('theme', theme === true ? 'dark' : "light")
                            }
                            return theme
                        })

                        document.body.classList.toggle("light-theme");
                    }} />
                </motion.nav>
            </header>
        </>
    )
}

