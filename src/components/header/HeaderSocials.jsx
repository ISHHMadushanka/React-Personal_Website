import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {GrTwitter} from 'react-icons/gr'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/ishara-madushanka/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/ISHHMadushanka" target="_blank"><FaGithub/></a>
        <a href="https://twitter.com/sameer96ishara" target="_blank"><GrTwitter/></a>
    </div>
  )
}

export default HeaderSocials