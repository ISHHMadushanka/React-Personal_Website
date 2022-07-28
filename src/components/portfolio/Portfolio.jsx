import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'


// DO NOT USE THE IMAGES IN PRODUCTION //

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'React Js personal portfolio for CV Resume',
    github: 'https://github.com/ISHHMadushanka/personal-portfolio.git',
    demo: 'https://www.isharamadushanka.tk/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Secure File Storage on Cloud Using Hybrid Cryptography',
    github: 'https://github.com/ISHHMadushanka/Secure-File-Storage-on-Cloud-using-Hybrid-Cryptography.git',
    demo: 'http://hostingonherokuu.herokuapp.com/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'My first personal portfolio using HTML, CSS, JavaScript',
    github: '#',
    demo: 'https://isharamadushanka.ml/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'My second React js personal portfolio',
    github: 'https://github.com/ISHHMadushanka/React-Personal_Website.git',
    demo: '#'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Auto name list generator website',
    github: 'https://github.com/ISHHMadushanka/Name-List-Generator-Web-Application.git',
    demo: '#'
  },
  {
    id: 6,
    image: IMG6,
    title: 'My IM Wordpress company google website',
    github: '#',
    demo: 'https://im-wordpress-web-design.business.site/'
  }
] 

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {
          data.map(({id, image, title, github, demo}) => {
            return(

<article key={id} className='portfolio__item'>
          <div className="potyfolio__item-image">
           <img src={image} alt={title} />

          </div>
            <h3>{title}</h3>
            <div className='portfolio__item-cta'>
            <a href={github} className='btn' target='_blank'>Github</a>
            <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>      
            </div>
        </article>
            )
          })
        }

      </div>
    </section>
  )
}

export default Portfolio