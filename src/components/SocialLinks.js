import React from 'react';
import { socialLinks } from '../data';

const SocialLinks = ({ parentClass, itemClass}) => {
  return (
    <ul className={parentClass}>
        {socialLinks.map((icon) => {
          const { id, href, img } = icon;
          return (
            <li key={id}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={itemClass}
              >
                <i className={img}></i>
              </a>
            </li>
          );
        })}
      </ul>
  )
}

export default SocialLinks