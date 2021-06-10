import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMobileAlt } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function contact() {
    return (
        <div className='contact-wrapper page-wrapper'>
            <h3>Contact Info</h3>

            <h4><FontAwesomeIcon icon={faEnvelope} />Email</h4>
            <span>ajonzy@gmail.com</span>

            <h4><FontAwesomeIcon icon={faMobileAlt} />Phone</h4>
            <span className="multi-line">(385)-445-4601</span>
            <span>Feel free to text!</span>

            <h4><FontAwesomeIcon icon={faGithub} />Github</h4>
            <span><a href="https://github.com/ajonzy">github.com/ajonzy</a></span>

            <h4><FontAwesomeIcon icon={faLinkedin} />LinkedIn</h4>
            <span><a href="https://www.linkedin.com/in/ajonzy/">linkedin.com/in/ajonzy</a></span>
        </div>
    )
}