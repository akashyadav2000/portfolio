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
            <p>Passionate and driven web developer with a solid foundation in the MERN stack, including MongoDB, Express.js, React.js, and Node.js. Experienced in building responsive and visually captivating web applications. Eager to contribute to innovative projects and continuously expand my expertise by learning GSAP and Three.js for more advanced web development.
            </p>
            <p>My passion for Web development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project. Ready to take on new challenges and make a positive impact in the field of web development</p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>Html-Css</p><hr className='skill-line' />
            </div>
            <div className="about-skill">
              <p>JavaScript</p><hr className='skill-line' />
            </div>
            <div className="about-skill">
              <p>React JS</p><hr className='skill-line' />
            </div>
            <div className="about-skill">
              <p>Node JS</p><hr className='skill-line' />
            </div>
            <div className="about-skill">
              <p>Express JS</p><hr className='skill-line' />
            </div>
            <div className="about-skill">
              <p>MongoDB</p><hr className='skill-line' />
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
