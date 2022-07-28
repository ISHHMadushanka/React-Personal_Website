import React from 'react'
import './about.css'
import ME from '../../assets/me-about.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {ImFolderOpen} from 'react-icons/im'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
  <div className="about__me">
    <div className="about__me-image">
      <img src={ME} alt="About Image" />
    </div>
  </div>

  <div className="about__content">
    <div className="about__cards">
      <article className="about__card">
        <FaAward className='about__icon'/>
        <h5>Experience</h5>
        <small>1+ Years Working</small>
      </article>

      <article className="about__card">
        <FiUsers className='about__icon'/>
        <h5>Clients</h5>
        <small>2+ Worldwide</small>
      </article>

      <article className="about__card">
        <ImFolderOpen className='about__icon'/>
        <h5>Projects</h5>
        <small>10+ Completed</small>
      </article>
    </div>

    <p>
      I'm P.G. Ishara Madushanka. I am currently studying in the second term of my final year at Sabaragamuwa University. I came to the IT industry after coming to university. I learned many things beyond theory. I completed my internship at LK Domain Registry. I am a knowledge seeker and very eager to learn new things. I work as a Fullstack Developer in the Software Engineering field. 
    </p>

<a href="#contact" className='btn btn-primary'>Let's Talk</a>
  </div>

      </div>
    </section>
  )  
}

export default About