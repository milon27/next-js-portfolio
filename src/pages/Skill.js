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
                        <img className="img-w100p img-circle" src="/android.svg" />
                        <h3>Native Android App</h3>
                    </div>
                    <div className="flex-half item">
                        <img className="img-w100p img-circle" src="/react.svg" />
                        <h3>React Js Web App</h3>
                    </div>
                    <div className="flex-half item">
                        <img className="img-w100p img-circle" src="/next.svg" />
                        <h3>Next Js Web App</h3>
                    </div>
                    <div className="flex-half item">
                        <img className="img-w100p img-circle" src="/wp.svg" />
                        <h3>Wordpress Site</h3>
                    </div>
                </div>
                <div className="my-5 flex socials">
                    <h1>Let's Connect</h1>
                    <div className="icons">

                        <a href="https://www.facebook.com/im.milon27"> <i class="fa fa-facebook-square"></i></a>
                        <a href="mailto:mdjahidulislammilon@gmail.com"><i className="fa fa-envelope"></i></a>
                        <a href="https://github.com/milon27"> <i className="fa fa-github"></i></a>
                        <a href="https://www.youtube.com/channel/UCKxdKrpirqyhstnnPNsABZA"> <i className="fa fa-youtube"></i></a>




                    </div>
                </div>

            </div>
        </>
    )
}
