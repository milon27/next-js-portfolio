import Footer from "../components/Footer";
import Header from "../components/Header";
import Body from './../components/Body';

export default function Contact() {
    return (
        <div className="page">
            <Header title="contact" />
            <div className="page_head">
                <h1>Contact Me On</h1>
            </div>
            <Body style={{ height: '63vh' }} className="color-white">
                <div className="contact text-center ">
                    <p><a href="https://www.fiverr.com/milon27"><b>fiverr.com</b></a></p>

                    <p><a href="https://www.upwork.com/freelancers/~016439d0a1aaceb84d"><b>upwork.com</b></a></p>
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

            </Body>
            <Footer />
        </div>
    )
}
