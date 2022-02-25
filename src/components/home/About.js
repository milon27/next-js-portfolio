import { motion, useViewportScroll, useTransform } from "framer-motion";
import Link from 'next/link'

export default function About({ about }) {
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
                    <p style={{ lineHeight: "25px", textAlign: "left", opacity: 0.8 }}>{about}</p>
                    <Link href="/portfolio" >
                        <a><b><u>View My Work</u></b></a>
                    </Link>
                </div>
                {/* <img src="dark-circle.svg" style={{ position: "absolute", right: 0, bottom: "-50%", width: "40%" }} alt="" />
                <img src="dark-circle-light.png" style={{ position: "absolute", right: 0, bottom: "-50%", width: "40%" }} alt="" /> */}
            </div>
        </>
    )
}
