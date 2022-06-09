import React from 'react'
import Projects from '../Projects'
import Banner from './Banner'
import Service from './Service'
import Skills from './Skills'
import Contact from './Contact'

function Home() {
    return (
        <div className='bg-slate-200'>
            <Banner />
            <Skills />
            <Service />
            <Projects />
            <Contact />



        </div>
    )
}

export default Home