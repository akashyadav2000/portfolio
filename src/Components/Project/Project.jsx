import React, { useEffect, useState } from 'react';
import './Project.css';
import theme_pattern from '/src/assets/Images/theme_pattern.svg'
import link from '/src/assets/Images/link.svg'
import portfolioData from '../Data/project';


const Project = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(portfolioData);
  }, []);

  return (
    <section className="portfolio" id="portfolio">
      <div className="title-box">
        <h1>My work</h1>
        <img src={theme_pattern} alt="" className='theme_pattern' />
      </div>
      <div className="portfolio-container">
        {data.map(item => (
          <div className="portfolio-box" key={item.name} data-name={item.name}>
            <img src={item.image} alt={item.name} />
            <div className="portfolio-layer">
              <h4>{item.name}</h4>
              <p>{item.description}</p>
              <a href={item.link} title="Open Link" target="_blank">
                <img src={link} alt="link" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
