import React from 'react';
import { HashLink } from 'react-router-hash-link';

const Navigation = () => {
    return(
            <ul className="navigationMenu">
                <li><HashLink
                to="/#projects"
                scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}
                >Projects</HashLink></li>
                <li><HashLink
                    to="/#skills"
                    scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}
                    >Skills</HashLink></li>
                <li><HashLink
                    to="/#about"
                    scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}
                    >About</HashLink></li>
                <li><HashLink
                    to="/#contact"
                    scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}
                    >📧</HashLink></li>
            </ul>
    )
}

export default Navigation;

//When you click on a link created with react-router-hash-link it will scroll to the element on the page with the id that matches the #hash-fragment in the link.