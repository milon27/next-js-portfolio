import About from "./About";
import Hero from "./Hero";
import Body from './../Body';
export default function Home() {
    return (
        <div>
            <Hero />
            <Body>
                <About />
            </Body>
        </div>
    )
}
