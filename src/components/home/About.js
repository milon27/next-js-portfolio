export default function About() {
    return (
        <>
            <div className="flex flex-wrap my-3" style={{ position: 'relative' }}>
                <div className="flex-half">
                    {/* <img className="img-w100p" src="/about-2.svg" /> */}
                    <img style={{ width: "70%" }} src="/skills.png" />
                </div>
                <div className="flex-half color-white" style={{
                    alignSelf: "center"
                }}>
                    <h1>About Me</h1>
                    <p>I am doing my intership on Software Engineering in dept of Computer Science and Engineering in IUBAT. I have more than 2 years of Android and Web Development experience in the Fiverr and Upwork marketplace(completed 150+ projects). Currently, I am working with Android, React native, React JS,Next JS,Node JS, MySQL, Firebase, WordPress, and Woo-commerce.</p>
                </div>
                <img src="dark-circle.svg" style={{ position: "absolute", right: 0, bottom: "-50%", width: "40%" }} alt="" />
            </div>
        </>
    )
}
