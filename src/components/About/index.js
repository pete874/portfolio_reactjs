import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';

const About = () => {

    //usestate for letterclasses
    const [letterClass, setLetterClass] = useState('text-animate')

    //classname change on state change and 4sec delay. This is for letter hover effect
    useEffect(() => {
        setTimeout(() => {
            setLetterClass("text-animate-hover")
        }, 4000);
    }, [])

    return (
        <>
       <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A','b','o','u','t',' ','m','e']}
                        idx={15}
                    />
                </h1>
                <p> I'm an IT enthusiast from Vantaa. I have been a passionate IT enthusiast since childhood. I have over 20year of experience from different linux
                    distroes, running home servers, building computers etc.
                    First home server that I installed, when I was around 15year old, was Debian based linux without any UI(terminal only), and was controlled through SSH terminal connection from desktop.
                    I hosted my own Quake(1) and IRC Bouncer servers there and information technology has been my every day hobby since.
                </p>
                <p>I graduated with a degree in Information and Communications Technology, specializing in software development, in 2024.</p>
                <p>The current skills I possess include the fundamentals of Azure, Google Cloud, Javascript, ReactJS, React Native, Python, NodeJS, Java, Filemaker, 4th Dimension(programming language), HTML, CSS, SASS, C#(.NET), SQL and NoSQL</p> <br/> <br/>
                <hr></hr>
                <p>Achievements:</p>
                <p>Dota 2 - 3509MMR</p>
                <p>Overwatch 1 - Grandmaster 4009CH</p>
                <p>Apex Legends - Master</p>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faAngular} color="#DD0031" />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color="#F06429" />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                    </div>
                </div>
            </div>
       </div> 
       <Loader type='ball-pulse' />
       </>
    )
};

export default About