import Footer from "../components/Footer";
import Header from "../components/Header";
import Body from './../components/Body';

export default function Contact() {
    return (
        <div style={{ background: "#232340" }}>
            <Header title="contact" />
            <div className="page_head">
                <h1>Contact</h1>
            </div>
            <Body style={{ height: '63vh' }}>
                <div className="text-center color-white">
                    <p><a href="https://www.fiverr.com/milon27">fiverr.com</a>: https://www.fiverr.com/milon27</p>
                    <p><a href="https://www.facebook.com/im.milon27">fb</a>: https://www.facebook.com/im.milon27</p>
                    <p><a href="mailto:mdjahidulislammilon@gmail.com">gmail</a>: mdjahidulislammilon@gmail.com</p>
                    <p><a href="https://github.com/milon27">github</a>: https://github.com/milon27</p>
                </div>
            </Body>
            <Footer />
        </div>
    )
}
