import React from 'react'
import './about.css'
import cla from '../images/cla.jpeg'
import cla4 from '../images/cla4.jpeg'
import cla2 from '../images/cla2.jpeg'

const About = (props) => {
    return(
        <div id='about'>
            <h1 style={{color: '#00A2FF'}}>ABOUT</h1>
            <div id='innerAbout'>
                
                <div id='imagesDiv'>
                <div id='claimgDiv'>
                    <img src={cla} id='claImg'/>
                </div>
                <div id='claimgDiv'>
                    <img src={cla2} id='claImg'/>
                </div>
                </div>

                <div id='contentAboutDiv'>
                    <p>Hi there! My name is Claudia, I'm a software engineer with a background in marketing and finance.</p>
                    <p>Born and raised in Milan, Italy, I was fortunate to travel the world at a young age. 
                    The diversity of cultures and people that I came in contact with ignited my curiosity and shaped my passion for understanding new perspectives.</p>
                    
                    <p>Graduating at the top of my class with a Bachelor's Degree in Economics, I went on to earn two Master's Degrees, one in International Business and the other in Marketing Management,
                        where I graduated after defending a dissertation on a software innovation that improves customers experience and drives online sales growth.</p>

                    <p>Following my studies, I moved to New York, where I began working in the Marketing department of Tod's Group, and then as an analyst for Wintrust Life Finance, 
                        a major financial corporation focused on insurance premium financing.<br></br>
                        I then moved to Washington DC where I became involved with the Embassy of Italy and worked as Marketing and Events Coordinator at the Italian Cultural Society, 
                        to promote the Italian language and culture in the DC metro area and school systems.
                    </p>
                    <p>My experience in digital marketing and my curiosity for new technologies, brought me to realize the importance of programming.
                    In 2020 I dedicated myself to the study of software engineering and web-programming. I specialized in building web application using Ruby, Rails, JavaScript, React and everything in between.</p>
                    <p>At the start of 2021 I joined Impact as Associate Frontend Engineer, combining my marketing expertise with my technical skills.</p>



                    <h1 style={{marginTop: '5%', color: '#00A2FF'}}>MY TECHNICAL SKILLS: </h1>
                    <p className='facts'>HTML, CSS, Bootstrap, Semantic</p>
                    <p className='facts'>Ruby, Rails, SQL, Postgres, MVC Architecture</p>
                    <p className='facts'>JavaScript, React, React Router, React Hooks, Redux</p>
                    <p className='facts'>CRUD actions, API usage and integration, Authentication and Authorization, JSON Web Token</p>
                </div>

            </div>

            <div id='factsDiv'>
                <div className='degree'>
                    <i className="fa fa-graduation-cap" aria-hidden="true"></i>
                    <p className='facts'>Software Engineering Diploma</p>
                    <p className='facts'>Ruby, Rails, Javascript, React</p>
                    <p className='facts'>@<a target="_blank" rel="noopener noreferrer" href='https://flatironschool.com/' className='school'>Flatiron School</a></p>
                    <p className='facts'>Washington, DC</p>
                </div>
                <div className='degree'>
                    <i className="fa fa-graduation-cap" aria-hidden="true"></i>
                    <p className='facts'>Master of Science</p>
                    <p className='facts'>Marketing Management</p>
                    <p className='facts'>@<a target="_blank" rel="noopener noreferrer" href='https://www.unibocconi.eu/wps/wcm/connect/bocconi/sitopubblico_en/navigation+tree/home' className='school'>Bocconi University</a></p>
                    <p className='facts'>Milan, Italy</p>
                </div>
                <div className='degree'>
                    <i className="fa fa-graduation-cap" aria-hidden="true"></i>
                    <p className='facts'>Master Degree</p>
                    <p className='facts'>International Business</p>
                    <p className='facts'>@<a target="_blank" rel="noopener noreferrer" href='https://smith.queensu.ca/index.php' className='school'>Smith School of Business</a></p>
                    <p className='facts'>Kingston, ON, Canada</p>
                </div>
                <div className='degree'>
                    <i className="fa fa-graduation-cap" aria-hidden="true"></i>
                    <p className='facts'>Bachelor of Science</p>
                    <p className='facts'>Economics and Management</p>
                    <p className='facts'>@<a target="_blank" rel="noopener noreferrer" href='https://international.unicatt.it/' className='school'>Univeristà Cattolica del Sacro Cuore</a></p>
                    <p className='facts'>Milan, Italy / London, UK</p>
                </div>
            </div>
        </div>
    )
}
export default About 




// <p>Hi there! I'm Claudia, a software engineer based in Boston, MA and Washington, DC.</p>
// <p>Born and raised in Milan, Italy, I was fortunate to travel the world at a young age. The diversity of cultures and people that I came in contact with has shaped my passion for understanding new perspectives. 
//     When I first visited the United States, I quickly became captivated by the technological progress and economical power, which I greatly desired to one day be a part of.  </p>
// <p>Graduating at the top of my class with a Bachelor's Degree in Economics from Catholic University of the Sacred Heart, in Milan, including a study abroad experience in London, U.K., I went on to earn two Master's Degrees.  
//     One in International Business from Queen's University - Smith School of Business, in Kingston, ON, Canada, and the other in Marketing Management from Bocconi University, in Milan, where I graduated after defending a dissertation on software innovation that improves customer experience and drives online sales growth.</p>

// <p>Following my studies, I moved to New York, where I began working in the Marketing department of Tod's Group, and then as an analyst for Wintrust Life Finance, a major financial corporation focused on insurance premium financing.
//     I then moved to Washington DC where I became involved with the Embassy of Italy and worked as Marketing and Events Coordinator at the Italian Cultural Society, to promote the Italian language and culture in the DC metro area and school systems.
// </p>
// <p>My experience in marketing pushed me to understand more about the digital aspect of it, with a focus on the internet and web applications.</p>
// <p>In 2020 I dedicated myself to the study of software engineering and programming. I am now prepared and eager to contribute to the technological innovation that I experienced with such wonder as a young girl. </p>
                   