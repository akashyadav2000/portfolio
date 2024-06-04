import React from "react";
import "./Services.css";
import theme_pattern from "/src/assets/Images/theme_pattern.svg";
import Services_Data from "../Data/services";
import Education_Data from "../Data/education";

const Services = () => {
  return (
    <div id="services" className="services">
      <div className="title-box">
        <h1>My Education</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="services-container">
        {Education_Data.map((service, index) => {
          return (
            <div key={index} className="services-format">
              <h2>{service.s_name}</h2>
              <p>{service.s_desc}</p>
              <p>{service.e_name}</p>
              <div className="services-readmore"></div>
            </div>
          );
        })}
      </div>

      <div className="title-box title-servives">
        <h1 className="my-services">My Services</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="services-container">
        {Services_Data.map((service, index) => {
          return (
            <div key={index} className="services-format">
              <h3>{service.s_no}</h3>
              <h2>{service.s_name}</h2>
              <p>{service.s_desc}</p>
              <div className="services-readmore"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
