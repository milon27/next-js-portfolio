import { motion, useViewportScroll, useTransform } from "framer-motion";

export default function About() {
    const { scrollYProgress } = useViewportScroll();
    const rotate = useTransform(scrollYProgress, [0, 1], [100, -100])


    return (
        <>
            <div className="flex flex-wrap my-3" style={{ position: 'relative' }}>
                <div className="flex justify-content-center-m flex-half">


                    <motion.img
                        style={{
                            rotate: rotate
                        }}
                        className="mepic" src="/about.png" />
                </div>
                <div className="flex-half color-white" style={{
                    alignSelf: "center"
                }}>
                    <h1>About Me</h1>
                    <p style={{ lineHeight: "25px", textAlign: "left", opacity: 0.8 }}>I have completed my Bachelor of Science in the Department of Computer Science and Engineering at IUBAT. I have more than 2 years of Mobile and Web Development experience on the marketplaces Fiverr and Upwork (completed 200+ projects). Currently, I am working with Node JS, Android, React native, React JS, Next JS, MySQL, Firebase,MongoDb, Rest API, GraphQl, WordPress and Woo-commerce.</p>
                </div>
                {/* <img src="dark-circle.svg" style={{ position: "absolute", right: 0, bottom: "-50%", width: "40%" }} alt="" />
                <img src="dark-circle-light.png" style={{ position: "absolute", right: 0, bottom: "-50%", width: "40%" }} alt="" /> */}
            </div>
        </>
    )
}
