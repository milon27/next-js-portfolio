import About from "./About";
import Hero from "./Hero";
import Body from './../Body';
import Skill from './Skill';
import SocialIcon from "../layout/SocialIcon";

export default function Home({ about }) {
    return (
        <div>
            <Hero />
            <Body className="about">
                <About about={about} />
            </Body>
            <Body className="skills">
                <Skill />
                <SocialIcon />
            </Body>
        </div>
    )
}

