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
              <p>Lorem ipsum dolor sit, amet consectetur elit.</p>
            </li>

            <li>
              <HiShieldCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur elit.</p>
            </li>

            <li>
              <HiShieldCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur elit.</p>
            </li>

            <li>
              <HiShieldCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur elit.</p>
            </li>

            <li>
              <HiShieldCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur elit.</p>
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
              <p>Lorem ipsum dolor sit, amet consectetur elit.</p>
            </li>

            <li>
              <HiShieldCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur elit.</p>
            </li>

            <li>
              <HiShieldCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur elit.</p>
            </li>

            <li>
              <HiShieldCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur elit.</p>
            </li>

            <li>
              <HiShieldCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur elit.</p>
            </li>

            <li>
              <HiShieldCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur elit.</p>
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
              <p>Lorem ipsum dolor sit, amet consectetur elit.</p>
            </li>

            <li>
              <HiShieldCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur elit.</p>
            </li>

            <li>
              <HiShieldCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur elit.</p>
            </li>

            <li>
              <HiShieldCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur elit.</p>
            </li>

            <li>
              <HiShieldCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur elit.</p>
            </li>

          </ul>
        </article>

        {/* END OF WEB HOSTING */}


      </div>
    </section>
  )
}

export default Services
