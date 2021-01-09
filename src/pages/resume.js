import Footer from "../components/Footer";
import Header from "../components/Header";
import Body from './../components/Body';

export default function Resume() {
    return (
        <div>
            <Header title="Resume" />
            <div className="page_head">
                <h1>Resume</h1>
            </div>
            <Body>
                <img src="/resume.svg" className="img-w100p" />
            </Body>
            <Footer />
        </div>
    )
}
