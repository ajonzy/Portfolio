import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMobileAlt } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function contact() {
    return (
        <div className='contact-wrapper page-wrapper'>
            <h3>Contact Info</h3>

            <h4>Email</h4>
            <span><FontAwesomeIcon icon={faEnvelope} />ajonzy@gmail.com</span>

            <h4>Phone</h4>
            <span><FontAwesomeIcon icon={faMobileAlt} />(385)-445-4601</span>
            <span>Feel free to text!</span>

            <h4>Github</h4>
            <span><FontAwesomeIcon icon={faGithub} /><a href="https://github.com/ajonzy">github.com/ajonzy</a></span>

            <h4>LinkedIn</h4>
            <span><FontAwesomeIcon icon={faLinkedin} /><a href="https://www.linkedin.com/in/ajonzy/">linkedin.com/in/ajonzy</a></span>
        </div>
    )
}