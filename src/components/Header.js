import Head from 'next/head';
import Link from 'next/link';

export default function Header({ title }) {

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
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
                <link rel="icon" href="/fav.svg" />
            </Head>
            {/* header */}
            <header className="flex justify-content-space align-items-center py-2">
                <Link href="/">
                    <a>
                        <img className="img-w150" src="/milon27.svg" />
                    </a>
                </Link>


                <div className="openMenu" onClick={openMenu}>
                    <i className="fa fa-bars"></i>
                </div>

                <nav id="mob-menu" className="nav-links">
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

                </nav>
            </header>
        </>
    )
}

