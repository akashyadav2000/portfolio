import React from 'react'
import './Hero.css'
import pro from '/src/assets/Images/hero-profile.jpg'
import resume from '/src/assets/Images/Akash-Yadav Resume.pdf'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={pro} alt="" className='profile-img' />
      <h1><span>I'm Akash Yadav,</span> Web developer based in INDIA.</h1>
      <p>As a committed front-end developer, I have a lot of experience designing attractive user interfaces and creating seamless web applications. However, I am also looking forward to improving my skills to become a full-stack developer in the future. </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink>
        </div>

        <div className="hero-resume">
          <a href={resume} download>My Resume</a>
        </div>

      </div>
    </div>
  )
}

export default Hero
