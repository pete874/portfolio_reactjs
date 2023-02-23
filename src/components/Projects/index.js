import './index.scss'
import Project1 from '../../assets/images/project1.jpg'
import Project2 from '../../assets/images/project2.jpg'
import Project3 from '../../assets/images/project3.jpg'

const Projects = () => {
    return (
        <div className='projects-page'>
            <div className='projects-container'>
                <div className='project'>
                    <img src={Project1}></img>
                    <div class="hover-items">
                        <p>My first Portfoliopage</p>
                        <a href='https://github.com/pete874/First_portfoliopage' target={'_blank'}>Github</a> <br></br>
                        <a>Link</a>
                    </div>
                </div>
            <div className='project'>
                <img src={Project2}></img>
                    <div class="hover-items">
                        <p>Tic-Tac-Toe using Javascript</p>
                        <a href='https://github.com/pete874/ristinolla_js' target={'_blank'}>Github</a> <br></br>
                        <a>Link</a>
                    </div>
            </div>
            <div className='project'>
                <img src={Project3}></img>
                    <div class="hover-items">
                        <p>Countdown timer using Javascript</p>
                        <a href='https://github.com/pete874/countdown-timer' target={'_blank'}>Github</a> <br></br>
                        <a>Link</a>
                    </div>                
            </div>
            <div className='project'>
                <img src={Project1}></img>       
            </div>
            <div className='project'>
                <img src={Project1}></img>       
            </div>
            <div className='project'>
                <img src={Project1}></img>       
            </div>
            <div className='project'>
                <img src={Project1}></img>       
            </div>
            </div>
        </div>
    )
}

export default Projects