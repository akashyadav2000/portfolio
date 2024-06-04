import React from 'react'
import './About.css'
import theme_pattern from '/src/assets/Images/theme_pattern.svg';
import about_profile from '/src/assets/Images/about-profile.jpg'


const About = () => {
  return (
    <div id='about' className='about'>
      <div className="title-box">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={about_profile} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>Passionate and driven web developer with a strong foundation in front-end technologies. Skilled in HTML, CSS, JavaScript, ReactJS, Redux-toolkit, and React-router with experience in building responsive web applications. Eager to contribute to innovative projects and expand my knowledge in the dynamic field of web development.</p>
            <p>My passion for frontend development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project. Ready to take on new challenges and make a positive impact in the field of web development</p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML</p><hr className='skill-line' />
            </div>
            <div className="about-skill">
              <p>CSS</p><hr className='skill-line' />
            </div>
            <div className="about-skill">
              <p>JavaScript</p><hr className='skill-line' />
            </div>
            <div className="about-skill">
              <p>React JS</p><hr className='skill-line' />
            </div>
            <div className="about-skill">
              <p>Redux</p><hr className='skill-line' />
            </div>
            <div className="about-skill">
              <p>Node JS</p><hr className='skill-line' />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>2+</h1>
          <p>YEARS OF CODING EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>20+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
      </div>
    </div>
  )
}

export default About
