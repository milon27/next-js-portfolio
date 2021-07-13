import React from 'react'

export default function Skill() {
    return (
        <>
            <div className="port flex flex-wrap my-3 color-white " >
                <div style={{ width: '100%' }}>
                    <h1 style={{ textAlign: 'center' }}>Skills & Experiences</h1>
                </div>
                <div className="flex flex-wrap">
                    <div className="flex-half item">
                        <img className="img-w100p img-circle" src="/app.png" />
                        <h3>Native Android</h3>
                    </div>
                    <div className="flex-half item">
                        <img className="img-w100p img-circle" src="/target.png" />
                        <h3>React/Next Js Web App</h3>
                    </div>
                    <div className="flex-half item">
                        <img className="img-w100p img-circle" src="/phn2.png" />
                        <h3>React Native App</h3>
                    </div>
                    <div className="flex-half item">
                        <img className="img-w100p img-circle" src="/fire.png" />
                        <h3>Wordpress Site</h3>
                    </div>


                    <div className="flex-half item">
                        <img className="img-w100p img-circle" src="/sound.png" />
                        <h3>MySQL, Firebase, MongoDB</h3>
                    </div>
                    <div className="flex-half item">
                        <img className="img-w100p img-circle" src="/cloud.svg" />
                        <h3>AWS(EC2), Digital Ocean</h3>
                    </div>
                    <div className="flex-half item">
                        <img className="img-w100p img-circle" src="/api.png" />
                        <h3>API Development</h3>
                    </div>
                </div>



                <div className="my-5 flex socials">
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
