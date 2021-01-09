import Footer from "../components/Footer";
import Header from "../components/Header";
import Body from './../components/Body';

export default function Contact() {
    return (
        <div>
            <Header title="contact" />
            <div className="page_head">
                <h1>Contact</h1>
            </div>
            <Body>
                <div className="text-center ">
                    <p>fiverr.com : https://www.fiverr.com/milon27</p>
                    <p>fb: https://www.facebook.com/im.milon27</p>
                    <p>gmail: mdjahidulislammilon@gmail.com</p>
                    <p>github: https://github.com/milon27</p>
                </div>
            </Body>
            <Footer />
        </div>
    )
}
