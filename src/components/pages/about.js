import React from 'react'

import Profile from "../../../static/assets/images/profile.jpg"

export default function about() {
    return (
        <div className='about-wrapper page-wrapper'>
            <h3>About Me</h3>

            <img src={Profile} alt=""/>

            <p>For over two years I have been an instructor an Bottega University, having the amazing opportunity to teach students how to code. Every day I have have been immersed in the coding process, spanning all the way from simple variables, data types, and functions; to building out APIs, utilizing popular frameworks, and building fully responsive apps. It's a truly rewarding experience to watch a new student with no prior experience join my class, start with the basics and diligently work their way up, graduate, and find employment in their dream industry. It's now my turn.</p>

            <p>I am now seeking a new opportunity to advance my career. I bring with me a solid understanding of coding foundations, best practices, and industry standards using languages such as HTML, CSS, JavaScript, and Python. I have experience building full-stack applications with libraries such as React and Flask. I've utilized many different databases to handle information, including SQL, MongoDB, and Redis. And I am so excited about what new skills I'll learn in the future!</p>
        </div>
    )
}