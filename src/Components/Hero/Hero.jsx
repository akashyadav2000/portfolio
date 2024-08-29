import React from 'react'
import './Hero.css'
import pro from '/src/assets/Images/hero-profile.jpg'
import resume from '/src/assets/Images/Akash_Yadav_Resume.pdf'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={pro} alt="" className='profile-img' />
      <h1><span>I'm Akash Yadav,</span> Web developer based in INDIA.</h1>
      <p>MERN Stack Web Developer with a strong foundation in HTML, CSS, JavaScript, React.js, Redux, and Node.js.Proficient in building responsive, user-friendly interfaces and optimizing performance. Bring working knowledge of Express.js and MongoDB, with a keen interest in full-stack development.</p>
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
