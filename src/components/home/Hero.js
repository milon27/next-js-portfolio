import Link from 'next/link'
export default function Hero() {
    return (

        <div className="flex hero-bg">
            <div className="hero-text">
                <h1>I am milon27</h1>
                <h4>Build mobile & web app for you</h4>

                <Link href="/contact" >
                    <a className="btn">Contact Me Now </a>
                </Link>

            </div>

        </div>
    )
}
