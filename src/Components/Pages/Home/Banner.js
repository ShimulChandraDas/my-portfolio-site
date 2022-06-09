import React from 'react'
import Shimul from '../../../Assets/Shimul.png'

function Banner() {
    return (
        <div class="hero h-screen lg:h-[60vh] bg-orange-100 mt-16">
            <div class="hero-content flex-col lg:flex-row">

                <div>
                    <h3 class="text-3xl ">Hello World,</h3>
                    <h1 class="text-4xl pt-4 ">I am <strong className='uppercase'>Shimul Chandra Das</strong></h1>
                    <p class="py-6 max-w-xl">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button class="btn btn-primary">Explore Me</button>
                </div>
                <div className='h-[60vh] shrink-0'>
                    <img src={Shimul} alt='shimul' class="h-full" />
                </div>
            </div>
        </div>
    )
}

export default Banner