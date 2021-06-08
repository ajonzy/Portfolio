import React from 'react'

import Profile from "../../../static/assets/images/profile.jpg"

export default function about() {
    return (
        <div className='about-wrapper page-wrapper'>
            <h3>About Me</h3>

            <img src={Profile} alt=""/>

            <p>For over two years I have been an instructor an Bottega University, having the amazing opportunity to teach students how to code. Every day I have have been immersed in the coding process, spanning all the way from simple variables, data types, and functions; to building out APIs, utilizing popular frameworks, and building fully responsive apps. It's a truly rewarding experience to watch a new student with no prior experience join my class, start with the basics and diligently work their way up, graduate, and find employment in their dream industry.</p>

            <p>It's now my turn.</p>

            <p>I am now seeking a new opportunity to advance my career. I bring with me a <span>solid understanding of coding foundations</span>, <span>best practices</span>, and <span>industry standards</span> using languages such as <span>HTML</span>, <span>CSS</span>, <span>JavaScript</span>, and <span>Python</span>. I have experience building <span>full-stack applications</span> with libraries such as <span>React</span> and <span>Flask</span>. I've utilized many different <span>databases</span> to handle information, including <span>SQL</span>, <span>MongoDB</span>, and <span>Redis</span>. And I've done all this while <span>communicating effictively</span> so that my students could follow along and in turn replicate these skills on their own.</p>

            <p>And I am so excited about what new skills I'll learn in the future!</p>
        </div>
    )
}