import React from 'react'
import Shimul from '../../../Assets/Shimul.png'
import TypeAnimation from 'react-type-animation'

function Banner() {
    return (
        <div class="hero h-screen lg:h-[60vh] bg-orange-100 mt-16">
            <div class="hero-content flex-col lg:flex-row">

                <div>

                    <h3 class="text-xl ">Hello, I am</h3>
                    <div className='text-3xl font-bold pt-4 uppercase' style={{ width: '20em' }}>
                        <TypeAnimation
                            cursor={true}
                            sequence={[
                                'Shimul Chandra Das',
                                5000,
                                'I am a Web Developer',
                                3000,
                                'I am a MERN Developer.',
                            ]}
                            wrapper="h2"
                            repeat={3}
                        />
                    </div>
                    <p class="py-6 max-w-xl">I am self-taught web developer. My study background is not CSE but I’m highly focused
                        on programming environment.My core
                        skill is MERN stack developer. I am a quick learner and always ready to learn and explore
                        new technology.</p>
                    <button class="btn btn-primary">Explore Me</button>
                    <button class="btn btn-secondary mx-10"><a href='https://drive.google.com/u/0/uc?id=1HVoO54EMPKV0Y_t4cbiVozNsZ8uRNTvx&export=download' target='_blank' download='resume.pdf' rel="noopener noreferrer"  > Download Resume</a></button>
                </div>
                <div className='h-[50vh] '>
                    <img src={Shimul} alt='shimul' class="h-full" />
                </div>
            </div>
        </div>
    )
}

export default Banner