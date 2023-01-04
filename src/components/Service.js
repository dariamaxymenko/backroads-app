import React from 'react';

const Service = ({ img, title, text }) => {
  return (
    <article className="service">
      <span className="service-icon">
        <i className={img}></i>
      </span>
      <div className="service-info">
        <h4 className="service-title">{title}</h4>
        <p className="service-text">{text}</p>
      </div>
    </article>
  );
};

export default Service;
