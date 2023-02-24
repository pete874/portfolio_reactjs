import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';

const About = () => {

    //usestate for letterclasses
    const [letterClass, setLetterClass] = useState('text-animate')

    //classname change on state change and 4sec delay. This is for letter hover effect
    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass("text-animate-hover")
        }, 4000);
    }, [])

    return (
       <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A','b','o','u','t',' ','m','e']}
                        idx={15}
                    />
                </h1>
                <p>Integer ac lacus ut metus ornare maximus. Curabitur venenatis magna tortor. Vestibulum vel nisi a risus suscipit viverra ac eu lacus. Suspendisse in magna neque. Suspendisse in volutpat magna. Duis vel leo varius, tincidunt metus mollis, ultrices odio. Integer molestie fermentum nulla maximus bibendum. Donec interdum elit sed efficitur mollis.</p>
                <p>Curabitur dignissim fermentum lacus a semper. Morbi nisi magna, vulputate in diam sed, sagittis vulputate tortor. Suspendisse elementum convallis leo, tincidunt commodo dui fringilla sit amet. Maecenas sed porttitor justo. Praesent bibendum blandit orci, in placerat lectus pretium id. Duis nec convallis orci. Mauris quis neque nibh.</p>
                <p>Integer egestas, justo pharetra sodales pharetra, libero magna consequat libero, in porta neque lectus sit amet sem. Proin rhoncus maximus auctor. Donec non aliquam neque. Suspendisse risus tellus, aliquam vel magna ut, maximus convallis neque. Praesent ac est enim. Sed vehicula dictum augue, et vehicula metus mattis eu. Suspendisse blandit pulvinar suscipit. Mauris ullamcorper viverra nisl ut laoreet. Curabitur felis mi, vehicula eu odio sed, vehicula fringilla metus.</p>
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
    )
};

export default About