import React, { useEffect } from 'react'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
        }
    }
};

const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
};


export default function Skill() {
    const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    return (
        <>
            <div className="port flex flex-wrap my-3 color-white " >
                <div style={{ width: '100%' }}>
                    <h1 style={{ textAlign: 'center' }}>Skills & Experiences</h1>
                </div>
                <motion.div ref={ref} className="flex flex-wrap"
                    variants={container}
                    initial="hidden"
                    animate={controls}
                >
                    <motion.div className="flex-half item" variants={item}>
                        <img className="img-w100p img-circle" src="/app.png" />
                        <h4>Native Android</h4>
                    </motion.div>
                    <motion.div className="flex-half item" variants={item}>
                        <img className="img-w100p img-circle" src="/target.png" />
                        <h4>React/Next Js Web App</h4>
                    </motion.div>
                    <motion.div className="flex-half item" variants={item}>
                        <img className="img-w100p img-circle" src="/phn2.png" />
                        <h4>React Native App</h4>
                    </motion.div>
                    <motion.div className="flex-half item" variants={item}>
                        <img className="img-w100p img-circle" src="/fire.png" />
                        <h4>Wordpress Site</h4>
                    </motion.div>


                    <motion.div className="flex-half item" variants={item}>
                        <img className="img-w100p img-circle" src="/sound.png" />
                        <h4>MySQL, Firebase, MongoDB</h4>
                    </motion.div>
                    <motion.div className="flex-half item" variants={item}>
                        <img className="img-w100p img-circle" src="/cloud.svg" />
                        <h4>AWS(EC2), Digital Ocean</h4>
                    </motion.div>
                    <motion.div className="flex-half item" variants={item}>
                        <img className="img-w100p img-circle" src="/api.png" />
                        <h4>API Development</h4>
                    </motion.div>
                </motion.div>



                <div className="my-5 flex socials" style={{ marginTop: "50px" }}>
                    <h1>Let's Connect</h1>
                    <div className="icons">

                        <a href="https://www.facebook.com/im.milon27"> <i className="fa fa-facebook-square"></i></a>
                        <a href="mailto:mdjahidulislammilon@gmail.com"><i className="fa fa-envelope"></i></a>
                        <a href="https://github.com/milon27"> <i className="fa fa-github"></i></a>
                        <a href="https://www.youtube.com/channel/UCKxdKrpirqyhstnnPNsABZA"> <i className="fa fa-youtube"></i></a>

                    </div>
                </div>

            </div>
        </>
    )
}
