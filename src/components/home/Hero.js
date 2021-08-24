import Link from 'next/link'
export default function Hero() {
    return (
        <div className="hero-bg">
            <div style={{ margin: "auto", maxWidth: "1000px", height: "100vh" }} className="flex">
                <div className="hero-text">
                    <h5 style={{ fontSize: "20px", marginBottom: "5px" }} className="color-white">This is</h5>
                    <h1 style={{ marginTop: "5px" }}>Md Jahidul <br></br>islam Milon</h1>
                    <h4>Build mobile & web app for you</h4>

                    <img src="/dash.png" alt="" className="img-w100p onlyMobile" />

                    <Link href="/contact" >
                        <a className="btn">Contact Me Now </a>
                    </Link>

                </div>
                <div className="hero-img">
                    <img src="/hero-img.png" alt="" className="img-w100p" />
                </div>
            </div>
        </div >
    )
}
