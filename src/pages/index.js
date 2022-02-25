import Footer from "../components/Footer";
import Header from "../components/Header";
import Home from "../components/home/Home";
import CF from "../utils/contentful/CF";

export default function index({ about }) {
    return (
        <>
            <Header title="Home" />
            <Home about={about} />
            <Footer />
        </>
    )

}


export const getStaticProps = async (context) => {
    try {
        const res = await CF.getEntry('1sswm4r4OMgj2VUsedLOx9');
        const data = res.fields.about
        return {
            props: { about: data, isFound: true },
            revalidate: 5//in second
        }
    } catch (e) {
        console.log("error-> ", e);
        return {
            props: {
                about: 'I have completed my Bachelor of Science in the Department of Computer Science and Engineering at IUBAT. I have more than 2 years of Mobile and Web Development experience on the marketplaces Fiverr and Upwork (completed 200+ projects). Currently, I am working with Node JS, Android, React native, React JS, Next JS, MySQL, Firebase,MongoDb, Rest API, GraphQl, WordPress and Woo-commerce.'
                , isFound: false
            }
        }
    }

}