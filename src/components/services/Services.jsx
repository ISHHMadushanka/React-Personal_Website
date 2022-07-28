import React from 'react'
import './services.css'
import {HiShieldCheck} from 'react-icons/hi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>Web Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <HiShieldCheck className='service__list-icon'/>
              <p>E-commerce Platform</p>
            </li>

            <li>
              <HiShieldCheck className='service__list-icon'/>
              <p>Color theory knowledge</p>
            </li>

            <li>
              <HiShieldCheck className='service__list-icon'/>
              <p>Google Analythics & SEO</p>
            </li>

            <li>
              <HiShieldCheck className='service__list-icon'/>
              <p>Web Usability</p>
            </li>

            <li>
              <HiShieldCheck className='service__list-icon'/>
              <p>Photo Composition</p>
            </li>

            <li>
              <HiShieldCheck className='service__list-icon'/>
              <p>Grid & Layout</p>
            </li>

            <li>
              <HiShieldCheck className='service__list-icon'/>
              <p>Mobile Responsiveness</p>
            </li>

          </ul>
        </article>

        {/* END OF WEB DESIGN */}


        <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <HiShieldCheck className='service__list-icon'/>
              <p>Front-end Development</p>
            </li>

            <li>
              <HiShieldCheck className='service__list-icon'/>
              <p>Back-end Development</p>
            </li>

            <li>
              <HiShieldCheck className='service__list-icon'/>
              <p>Full Stack Development</p>
            </li>

            <li>
              <HiShieldCheck className='service__list-icon'/>
              <p>Website Development</p>
            </li>

            <li>
              <HiShieldCheck className='service__list-icon'/>
              <p>Security Development</p>
            </li>

            <li>
              <HiShieldCheck className='service__list-icon'/>
              <p>Database Migration</p>
            </li>

            <li>
              <HiShieldCheck className='service__list-icon'/>
              <p>Wordpress Development</p>
            </li>

            <li>
              <HiShieldCheck className='service__list-icon'/>
              <p>CRM Handling</p>
            </li>

            <li>
              <HiShieldCheck className='service__list-icon'/>
              <p>Error Handling & Deployment</p>
            </li>

          </ul>
        </article>

        {/* END OF WEB DEVELOPEMT */}


        <article className='service'>
          <div className="service__head">
            <h3>Web Hosting</h3>
          </div>

          <ul className='service__list'>
            <li>
              <HiShieldCheck className='service__list-icon'/>
              <p>Domain Registration</p>
            </li>

            <li>
              <HiShieldCheck className='service__list-icon'/>
              <p>Host Server Handling</p>
            </li>

            <li>
              <HiShieldCheck className='service__list-icon'/>
              <p>Email Marketing</p>
            </li>

            <li>
              <HiShieldCheck className='service__list-icon'/>
              <p>SSL Handling</p>
            </li>

            <li>
              <HiShieldCheck className='service__list-icon'/>
              <p>SEO Optimization</p>
            </li>

            <li>
              <HiShieldCheck className='service__list-icon'/>
              <p>Cloud Hosting</p>
            </li>

            <li>
              <HiShieldCheck className='service__list-icon'/>
              <p>Wordpress Hosting</p>
            </li>

          </ul>
        </article>

        {/* END OF WEB HOSTING */}


      </div>
    </section>
  )
}

export default Services
