import About from "./About";
import Hero from "./Hero";
import Body from './../Body';
import Skill from './Skill';
export default function Home() {
    return (
        <div>
            <Hero />
            <Body className="about">
                <About />
            </Body>
            <Body className="skills">
                <Skill />
            </Body>
        </div>
    )
}
