import Link from 'next/link'
export default function Hero() {
    return (
        <div className="hero-bg">
            <div style={{ margin: "auto", maxWidth: "1000px", height: "100vh" }} className="flex">
                <div className="hero-text">
                    <h1 className='title'>Build mobile & web application</h1>
                    <p className="sub-title color-white">____ Md Jahidul islam Milon</p>

                    <img src="/dash.png" alt="" className="img-w100p onlyMobile" />
                    <Link href="/contact" >
                        <a className="btn-outline">Contact Me Now </a>
                    </Link>

                </div>
                <div className="hero-img">
                    <img src="/hero-img.png" alt="" className="img-w100p" />
                </div>
            </div>
        </div >
    )
}
