export default function About() {
    return (
        <>
            <div className="about flex flex-wrap my-3">
                <div className="flex-half">
                    <img className="img-w100p" src="/about-2.svg" />
                </div>
                <div className="flex-half">
                    <h1>About Me</h1>
                    <p>I am a final year student of Computer Science and Engineering in IUBAT. I have more than 2 years of Android and Web Development experience in the Fiverr and Upwork marketplace. Currently, I am working with Android, React native, MERN stack, MySQL, Firebase, WordPress, and Woo-commerce. I am also practicing competitive programming.</p>
                </div>
            </div>

            <div className="port flex flex-wrap my-3">
                <div className="">
                    <h1>Skills & Experiences</h1>
                </div>
                <div className="flex flex-wrap">
                    <div className="flex-half item">
                        <img className="img-w100p" src="/android.svg" />
                    </div>
                    <div className="flex-half item">
                        <img className="img-w100p" src="/react.svg" />
                    </div>
                    <div className="flex-half item">
                        <img className="img-w100p" src="/next.svg" />
                    </div>
                    <div className="flex-half item">
                        <img className="img-w100p" src="/wp.svg" />
                    </div>
                </div>
                <p>Android - Node JS - React JS - Next JS - Wordpress</p>
            </div>

        </>
    )
}
