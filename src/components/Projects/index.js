import './index.scss'
import Project1 from '../../assets/images/project1.jpg'
import Project2 from '../../assets/images/project2.jpg'
import Project3 from '../../assets/images/project3.jpg'
import Project4 from '../../assets/images/project4.jpg'
import Project5 from '../../assets/images/project5.jpg'
import Project6 from '../../assets/images/project6.jpg'
import Project7 from '../../assets/images/project7.jpg'
import Project8 from '../../assets/images/project8.jpg'
import Project9 from '../../assets/images/project9.jpg'
import Project10 from '../../assets/images/project10.jpg'
import Project11 from '../../assets/images/project11.jpg'
import Project12 from '../../assets/images/project12.jpg'
import Project13 from '../../assets/images/project13.jpg'
import Project14 from '../../assets/images/project14.jpg'
import Project15 from '../../assets/images/project15.jpg'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'

const Projects = () => {

    //usestate for projectclass
    const [projectClass, setProjectClass] = useState('hover-items')

    //classname change on state change and 2sec delay. 
    useEffect(() => {
        setTimeout(() => {
            setProjectClass("hover-items1")
        }, 2000);
    }, [])
    
    return (

        
        <>
        <div className='projects-page'>
            <div className='projects-container'>
            <div className='project'>
                    <img src={Project12} id="project1" alt="P"></img>
                    <div className={projectClass} >
                        <p>Portfolio (this.page)</p>
                        <p>React, SASS, Animate.css</p>
                        <a href='https://github.com/pete874/portfolio_reactjs' target={'_blank'} rel={'noreferrer'}>Github</a>
                    </div>
                </div>
                <div className='project'>
                    <img src={Project1} id="project2" alt="P"></img>
                    <div className={projectClass} >
                        <p>Portfolio Website</p>
                        <a href='https://github.com/pete874/First_portfoliopage' target={'_blank'} rel={'noreferrer'}>Github</a> <br></br>
                        <a href='https://pete874.github.io/First_portfoliopage/' target={'_blank'} rel={'noreferrer'}>Test here</a>
                    </div>
                </div>
                <div className='project'>
                    <img src={Project15} id="project3" alt="P"></img>
                    <div className={projectClass} >
                        <p>Movie Api Project(Api wakes up after few sec)</p>
                        <p>MongoDB, Java Spring Boot, ReactJs</p>
                        <a href='https://github.com/pete874/movie_api_react_frontend' target={'_blank'} rel={'noreferrer'}>Github(Frontend)</a> <br></br>
                        <a href='https://github.com/pete874/movie_api_java_backend' target={'_blank'} rel={'noreferrer'}>Github(Backend)</a> <br></br>
                        <a href='https://cheery-bombolone-d49210.netlify.app/' target={'_blank'} rel={'noreferrer'}>Test here</a>
                    </div>
                </div>
                <div className='project'>
                    <img src={Project9} id="project4" alt="P"></img>
                    <div className={projectClass} >
                        <p>Realtime chat</p>
                        <p>React, NodeJS, Socket.io</p>
                        <a href='https://github.com/pete874/realtimechat' target={'_blank'} rel={'noreferrer'}>Github</a> <br></br>
                        <a href='https://jade-praline-d185aa.netlify.app/' target={'_blank'} rel={'noreferrer'}>Test here</a>
                    </div>
                </div>
                <div className='project'>
                <img src={Project13} id="project5" alt="P"></img>  
                    <div className={projectClass}>
                        <p>PC Super Store app</p>
                        <p>C#, SQL</p>
                        <a href='https://github.com/pete874/pc_superstore_app' target={'_blank'} rel={'noreferrer'}>Github</a>
                    </div>  
            </div>
                <div className='project'>
                <img src={Project10} id="project6" alt="P"></img>  
                    <div className={projectClass}>
                        <p>Hotel Management app</p>
                        <p>C#,SQL</p>
                        <a href='https://github.com/pete874/hotel_management' target={'_blank'} rel={'noreferrer'}>Github</a>
                    </div>  
            </div>
            <div className='project'>
                <img src={Project11} id="project7" alt="P"></img>  
                    <div className={projectClass}>
                        <p>Pizza ordering App</p>
                        <p>C#, SQL</p>
                        <a href='https://github.com/pete874/pizza_app' target={'_blank'} rel={'noreferrer'}>Github</a>
                    </div>  
            </div>
            <div className='project'>
                <img src={Project2} id="project8" alt="P"></img>
                    <div className={projectClass}>
                        <p>Tic-Tac-Toe using Javascript</p>
                        <a href='https://github.com/pete874/ristinolla_js' target={'_blank'} rel={'noreferrer'}>Github</a> <br></br>
                        <a href='https://pete874.github.io/ristinolla_js/' target={'_blank'} rel={'noreferrer'}>Test here</a>
                    </div>
            </div>
            <div className='project'>
                <img src={Project3} id="project9" alt="P"></img>
                    <div className={projectClass}>
                        <p>Festival page with registration form</p>
                        <a href='https://github.com/pete874/yhteistyo/tree/main/projekti_3-4' target={'_blank'} rel={'noreferrer'}>Github</a> <br></br>
                        <a href='https://pete874.github.io/yhteistyo/projekti_3-4/' target={'_blank'} rel={'noreferrer'}>Test here</a>
                    </div>                
            </div>
            <div className='project'>
                <img src={Project14} id="project10" alt="P"></img>
                    <div className={projectClass}>
                        <p>Zelda</p>
                        <p>Kaboom.js javascript library</p>
                        <a href='https://github.com/pete874/zelda_kaboomjs' target={'_blank'} rel={'noreferrer'}>Github</a> <br></br>
                        <a href='https://pete874.github.io/zelda_kaboomjs/' target={'_blank'} rel={'noreferrer'}>Test here</a>
                    </div>       
            </div>
            <div className='project'>
                <img src={Project4} id="project11" alt="P"></img>
                    <div className={projectClass}>
                        <p>Calculator with Javascript</p>
                        <a href='https://github.com/pete874/yhteistyo/tree/main/laskin' target={'_blank'} rel={'noreferrer'}>Github</a> <br></br>
                        <a href='https://pete874.github.io/yhteistyo/laskin/' target={'_blank'} rel={'noreferrer'}>Test here</a>
                    </div>       
            </div>
            <div className='project'>
                <img src={Project5} id="project12" alt="P"></img>
                    <div className={projectClass}>
                        <p>To Do list with Javascript</p>
                        <a href='https://github.com/pete874/yhteistyo/tree/main/Tehtavalista' target={'_blank'} rel={'noreferrer'}>Github</a> <br></br>
                        <a href='https://pete874.github.io/yhteistyo/Tehtavalista/' target={'_blank'} rel={'noreferrer'}>Test here</a>
                    </div> 
                      
            </div>
            <div className='project'>
                <img src={Project6} id="project13" alt="P"></img>  
                    <div className={projectClass}>
                        <p>Countdown timer using Javascript</p>
                        <a href='https://github.com/pete874/countdown-timer' target={'_blank'} rel={'noreferrer'}>Github</a> <br></br>
                        <a href='https://pete874.github.io/countdown-timer/' target={'_blank'} rel={'noreferrer'}>Test here</a>
                    </div>  
            </div>
            <div className='project'>
                <img src={Project7} id="project14" alt="P"></img>  
                    <div className={projectClass}>
                        <p>Guess the Number game using Javascript</p>
                        <a href='https://github.com/pete874/yhteistyo/tree/main/arvauspeli' target={'_blank'} rel={'noreferrer'}>Github</a> <br></br>
                        <a href='https://pete874.github.io/yhteistyo/arvauspeli/' target={'_blank'} rel={'noreferrer'}>Test here</a>
                    </div>  
            </div>
            <div className='project'>
                <img src={Project8} id="project15" alt="P"></img>  
                    <div className={projectClass}>
                        <p>Memory game with Javascript</p>
                        <a href='https://github.com/pete874/yhteistyo/tree/main/muistipeli' target={'_blank'} rel={'noreferrer'}>Github</a> <br></br>
                        <a href='https://pete874.github.io/yhteistyo/muistipeli/' target={'_blank'} rel={'noreferrer'}>Test here</a>
                    </div>  
            </div>
            </div>
        </div>
        <Loader type='ball-pulse' />
        </>
    )
}

export default Projects