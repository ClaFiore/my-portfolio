import React from 'react'
import './about.css'
import cla from '../images/cla.jpeg'

const About = (props) => {
    return(
        <div id='about'>

            <div id='innerAbout'>

                <div id='claimgDiv'>
                    <img src={cla} id='claImg'/>
                </div>
                <div id='contentAboutDiv'>
                    <h1>ABOUT</h1>
                    <p>Hi there! I'm Claudia, a software engineer based in Boston, MA and Washington, DC.</p>
                    <p>I was born and raised in Milan, Italy. Since I was a little girl I have been fascinated by technological advancement
                    and innovation and I grew a desire of, one day, being a part of it. </p>
                    <p>Today, a few years and 3 degrees later, I'm proud to be a Software Engineer, and a Flatiron School graduate.
                    </p>
                </div>

            </div>

            <div id='factsDiv'>
                <div className='degree'>
                    <i class="fa fa-graduation-cap" aria-hidden="true"></i>
                    <p className='facts'>Software Engineering Diploma</p>
                    <p className='facts'>Ruby, Rails, Javascript, React</p>
                    <p className='facts'>@Flatiron School</p>
                    <p className='facts'>Washington, DC</p>
                </div>
                <div className='degree'>
                    <i class="fa fa-graduation-cap" aria-hidden="true"></i>
                    <p className='facts'>Master of Science</p>
                    <p className='facts'>Marketing Management</p>
                    <p className='facts'>@Bocconi University</p>
                    <p className='facts'>Milan, Italy</p>
                </div>
                <div className='degree'>
                    <i class="fa fa-graduation-cap" aria-hidden="true"></i>
                    <p className='facts'>Master Degree</p>
                    <p className='facts'>International Business</p>
                    <p className='facts'>@Smith School of Business</p>
                    <p className='facts'>Kingston, ON, Canada</p>
                </div>
                <div className='degree'>
                    <i class="fa fa-graduation-cap" aria-hidden="true"></i>
                    <p className='facts'>Bachelor of Science</p>
                    <p className='facts'>Economics</p>
                    <p className='facts'>@Catholic University of the Sacred Heart</p>
                    <p className='facts'>Milan, Italy / London, UK</p>
                </div>
            </div>
        </div>
    )
}
export default About 