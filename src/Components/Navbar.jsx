import React, { useEffect, useState } from 'react'
import { navLinks } from '../constants'

const Navbar = () => {

    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        // create an event listener for when the user scrolls
        const handleScroll = () => {
          // check if the user has scrolled down at least 10px
          // if so, set the state to true
          const isScrolled = window.scrollY > 10;
          setScrolled(isScrolled);
        };
    
        // add the event listener to the window
        window.addEventListener("scroll", handleScroll);
    
        // cleanup the event listener when the component is unmounted
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);
  return (
    <div>
        <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
            <div className="inner">
                <a className='logo' href='#hero'>
                    Mohamed Sayed | MS
                </a>

                <nav className='desktop'>
                    <ul>
                        {navLinks.map(({ link, name }) => (
                            <li key={name} className='group'>
                                <a href={link}>
                                    <span>{name}</span>
                                    <span className='underline '></span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <a href="#contact" className='contact-btn group'>
                    <div className='inner'>
                        <span>Contact me</span>
                    </div>
                </a>
            </div>
        </header>
    </div>
  )
}

export default Navbar