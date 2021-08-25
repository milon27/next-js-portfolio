export default function About() {
    return (
        <>
            <div className="flex flex-wrap my-3" style={{ position: 'relative' }}>
                <div className="flex justify-content-center-m flex-half">
                    <img className="mepic" src="/about.png" />
                </div>
                <div className="flex-half color-white" style={{
                    alignSelf: "center"
                }}>
                    <h1>About Me</h1>
                    <p style={{ lineHeight: "25px", textAlign: "justify" }}>I am doing my internship on Software Engineering in the Department of Computer Science and Engineering at IUBAT. I have more than 2 years of Android and Web Development experience on the marketplaces Fiverr and Upwork (completed 150+ projects). Currently, I am working with Android, React native, React JS, Next JS, Node JS, MySQL, Firebase, WordPress and Woo-commerce.</p>
                </div>
                <img src="dark-circle.svg" style={{ position: "absolute", right: 0, bottom: "-50%", width: "40%" }} alt="" />
                <img src="dark-circle-light.png" style={{ position: "absolute", right: 0, bottom: "-50%", width: "40%" }} alt="" />
            </div>
        </>
    )
}
