import Link from 'next/link'
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { FadeInDown } from '../../utils/anim/Anim';

export default function Hero() {
    const { scrollYProgress } = useViewportScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0]);

    return (
        <div className="hero-bg">
            <div style={{ margin: "auto", maxWidth: "1000px", height: "100vh" }} className="flex">
                <motion.div
                    initial="init"
                    animate="anim"
                    variants={FadeInDown(0.5)}
                    style={{
                        scale: scale
                    }}
                    className="hero-text">
                    <h1 className='title'>Build Your Mobile & Web Application</h1>
                    <p className="sub-title color-white">👩‍💻 Md Jahidul slam Milon</p>

                    <img src="/hero-img1.png" alt="" className="img-w100p onlyMobile" />
                    <div className='onlyMobile'><p></p></div>
                    <Link href="/contact" >
                        <a className="btn-outline">Contact Me Now </a>
                    </Link>

                </motion.div>
                <motion.div
                    initial={{
                        y: 0,
                    }}
                    animate={{
                        y: [30, 0, 30],
                        transition: {
                            duration: 2.2,
                            ease: "easeInOut",
                            repeat: Infinity,
                        }
                    }}
                    className="hero-img">
                    <motion.img
                        style={{
                            opacity: scale,
                            scale: scale
                        }}
                        src="/hero-img1.png" alt="" className="img-w100p" />
                </motion.div>
            </div>
        </div >
    )
}
