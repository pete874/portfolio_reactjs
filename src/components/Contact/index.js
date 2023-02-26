import { useEffect, useState } from 'react';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Loader from 'react-loaders';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
    
    //usestate for letterclasses
    const [letterClass, setLetterClass] = useState('text-animate')

    //classname change on state change and 4sec delay. This is for letter hover effect
    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass("text-animate-hover")
        }, 4000);
    }, [])

    return (
        <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                        idx={15}
                    />
                </h1>
                <div className='contact-links-container'>
                    <a className="contact-links" id="linkedin" target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/petri-nurmi-766529235">
                        <FontAwesomeIcon icon={faLinkedin} color="#fff" />
                    </a>
                        
                         
                    <a className="contact-links" id="github" target="_blank" rel='noreferrer' href="https://github.com/pete874">
                        <FontAwesomeIcon icon={faGithub} color="#fff" />
                    </a>
                </div>
                <p id='mail'>
                    pete874@hotmail.com
                </p>
            </div>
         </div>
         <Loader type='ball-pulse' />
        </>
    )
}

export default Contact