import React from 'react'
import Project1 from '../../Assets/Projects/Project-1.png'
import Project2 from '../../Assets/Projects/Project-2.png'
import Project3 from '../../Assets/Projects/Project-3.png'

function Projects() {
    return (
        <div>
            <h2 className='text-5xl text-center pt-32 uppercase font-extrabold'>My Exclusive Projects </h2>

            <div className='mt-20 grid grid-cols-1 lg:grid-cols-3 gap-8'>
                <div class="card w-96 bg-base-100 shadow-2xl image-full">
                    <figure><img src={Project1} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="grid grid-cols-3 gap-2 justify-between">
                            <button class="btn btn-secondary">Live Link</button>
                            <button class="btn btn-secondary">Client Code</button>
                            <button class="btn btn-secondary">Server Code</button>
                        </div>
                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-2xl image-full">
                    <figure><img src={Project2} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="grid grid-cols-3 gap-2 justify-between">
                            <button class="btn btn-secondary">Live Link</button>
                            <button class="btn btn-secondary">Client Code</button>
                            <button class="btn btn-secondary">Server Code</button>
                        </div>
                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-2xl image-full">
                    <figure><img src={Project3} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="grid grid-cols-3 gap-2 justify-between">
                            <button class="btn btn-secondary">Live Link</button>
                            <button class="btn btn-secondary">Client Code</button>
                            <button class="btn btn-secondary">Server Code</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects