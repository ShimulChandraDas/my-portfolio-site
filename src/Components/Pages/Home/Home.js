import React from 'react'
import Projects from '../Projects'
import Banner from './Banner'
import Service from './Service'
import Skills from './Skills'
import Contact from './Contact'
import Testimonial from './Testimonial'

function Home() {
    return (
        <div className='bg-slate-200'>
            <Banner />
            <Skills />
            <Service />
            <Projects />
            <Contact />
            <Testimonial />




        </div>
    )
}

export default Home