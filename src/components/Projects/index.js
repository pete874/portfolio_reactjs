import './index.scss'
import Project1 from '../../assets/images/project1.jpg'
import Project2 from '../../assets/images/project2.jpg'
import Project3 from '../../assets/images/project3.jpg'
import Project4 from '../../assets/images/project4.jpg'
import Project5 from '../../assets/images/project5.jpg'
import Project6 from '../../assets/images/project6.jpg'

const Projects = () => {
    return (

        //project divs
        <div className='projects-page'>
            <div className='projects-container'>
                <div className='project' id="project1">
                    <img src={Project1}  alt="P"></img>
                    <div class="hover-items" >
                        <p>My first Portfoliopage</p>
                        <a href='https://github.com/pete874/First_portfoliopage' target={'_blank'}>Github</a> <br></br>
                        <a>Link</a>
                    </div>
                </div>
            <div className='project'>
                <img src={Project2} id="project2" alt="P"></img>
                    <div class="hover-items">
                        <p>Tic-Tac-Toe using Javascript</p>
                        <a href='https://github.com/pete874/ristinolla_js' target={'_blank'}>Github</a> <br></br>
                        <a>Link</a>
                    </div>
            </div>
            <div className='project'>
                <img src={Project3} id="project3" alt="P"></img>
                    <div class="hover-items">
                        <p>Festival page with registration form</p>
                        <a href='https://github.com/pete874/yhteistyo/tree/main/projekti_3-4' target={'_blank'}>Github</a> <br></br>
                        <a>Link</a>
                    </div>                
            </div>
            <div className='project'>
                <img src={Project4} id="project4" alt="P"></img>
                    <div class="hover-items">
                        <p>Calculator with Javascript</p>
                        <a href='https://github.com/pete874/yhteistyo/tree/main/laskin' target={'_blank'}>Github</a> <br></br>
                        <a>Link</a>
                    </div>       
            </div>
            <div className='project'>
                <img src={Project5} id="project5" alt="P"></img>
                    <div class="hover-items">
                        <p>To Do list with Javascript</p>
                        <a href='https://github.com/pete874/yhteistyo/tree/main/Tehtavalista' target={'_blank'}>Github</a> <br></br>
                        <a>Link</a>
                    </div> 
                      
            </div>
            <div className='project'>
                <img src={Project6} id="project6" alt="P"></img>  
                    <div class="hover-items">
                        <p>Countdown timer using Javascript</p>
                        <a href='https://github.com/pete874/countdown-timer' target={'_blank'}>Github</a> <br></br>
                        <a>Link</a>
                    </div>  
            </div>
            </div>
        </div>
    )
}

export default Projects