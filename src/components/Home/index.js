import { useEffect, useState } from "react";
import Loader from "react-loaders";
import { Link } from "react-router-dom";
import LogoTitle from "../../assets/images/plogo-s.png";
import AnimatedLetters from "../AnimatedLetters";
import './index.scss';
import Logo from "./Logo";

const Home = () => {

    // reactive data and setter for changing letter classes, so we can add animations and hovers
    const [letterClass, setLetterClass] = useState('text-animate')
    
    const nameArray = ['e', 't', 'r', 'i', ' ', 'N', 'u', 'r', 'm', 'i']
    const jobArray = ['S', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r',]


    // new classNames to each letter after 6000ms(6seconds)
    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass("text-animate-hover")
        }, 6000);
    }, [])



    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i</span>
                <br/>
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>
                <img src={LogoTitle} alt="developer" />
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15}/>
                <br/>
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={25}/>
                </h1>
                <h2>Software developer</h2>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>
            <Logo/>
        </div>
        <Loader type="ball-pulse" />
        </>
    );
}


export default Home