import Footer from "../components/Footer";
import Header from "../components/Header";
import Body from './../components/Body';

export default function about() {
    return (
        <div>
            <Header title="About" />
            <div className="page_head">
                <h1>About</h1>
            </div>
            <Body>
                <p>I am a final year student of Computer Science and Engineering in IUBAT. I have more than 2 years of Android and Web Development experience in the Fiverr and Upwork marketplace. Currently, I am working with Android, React native, MERN stack, MySQL, Firebase, WordPress, and Woo-commerce. I am also practicing competitive programming.</p>
            </Body>
            <Footer />
        </div>
    )
}
