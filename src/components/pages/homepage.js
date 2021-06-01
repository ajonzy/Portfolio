import React from 'react'
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function homepage() {
    return (
        <div className="homepage-wrapper page-wrapper">
            <div className="header-wrapper">
                <h1 id="title">Alex Jones</h1>
                <h3 id="subtitle">Full-Stack Developer</h3>
            </div>

            <div className="social-media-wrapper">
                <a href="https://github.com/ajonzy" target="_blank">
                    <FontAwesomeIcon icon={faGithub} />
                    <span>Github</span>
                </a>
                <a href="https://www.linkedin.com/in/ajonzy/" target="_blank">
                    <FontAwesomeIcon icon={faLinkedin} />
                    <span>LinkedIn</span>
                </a>
            </div>

            <div className="links-wrapper">
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/resume">Resume</Link>
            </div>
        </div>
    )
}