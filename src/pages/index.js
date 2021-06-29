import Footer from "../components/Footer";
import Header from "../components/Header";
import Home from "../components/home/Home";

export default function index() {
    return (
        <>
            <Header title="Home" color="dark" />
            <Home />
            <Footer />
        </>
    )

}
