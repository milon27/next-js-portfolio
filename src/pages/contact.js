import Footer from "../components/Footer";
import Header from "../components/Header";
import SocialIcon from "../components/layout/SocialIcon";
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
                <SocialIcon />

            </Body>
            <Footer />
        </div>
    )
}
