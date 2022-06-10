import React from 'react'
import Project1 from '../../Assets/Projects/Project-1.png'
import Project2 from '../../Assets/Projects/Project-2.png'
import Project3 from '../../Assets/Projects/Project-3.png'

function Projects() {
    return (
        <div>
            <h2 className='text-5xl text-center pt-32 uppercase font-extrabold'>My Exclusive Projects </h2>



            <div className='mt-20 grid grid-cols-1 lg:grid-cols-3 gap-8'>
                {/* <div class="card card-compact w-96  bg-base-100 shadow-xl">
                    <div className='rounded mb-2'>
                        <figure><img src={Project1} alt="project" /></figure>
                    </div>

                    <div class="card-actions justify-center ">
                        <button class="btn btn-primary w-full mx-auto">Details</button>
                    </div>
                </div>
                <div class="card card-compact w-96  bg-base-100 shadow-xl">
                    <div className='rounded mb-2'>
                        <figure><img src={Project1} alt="project" /></figure>
                    </div>

                    <div class="card-actions justify-center ">
                        <button class="btn btn-primary w-full mx-auto">Details</button>
                    </div>
                </div>
                <div class="card card-compact w-96  bg-base-100 shadow-xl">
                    <div className='rounded mb-2'>
                        <figure><img src={Project1} alt="project" /></figure>
                    </div>

                    <div class="card-actions justify-center ">
                        <button class="btn btn-primary w-full mx-auto">Details</button>
                    </div>
                </div> */}





                <div class="card w-96 bg-base-100 shadow-2xl ">
                    <div class="card-body">
                        <figure><img src={Project1} alt="Shoes" /></figure>
                    </div>
                    <button class="btn btn-secondary"> Project Details</button>
                </div>
                <div class="card w-96 bg-base-100 shadow-2xl ">
                    <div class="card-body">
                        <figure><img src={Project2} alt="Shoes" /></figure>
                    </div>
                    <button class="btn btn-secondary">Project Details</button>
                </div>
                <div class="card w-96 bg-base-100 shadow-2xl ">
                    <div class="card-body">
                        <figure><img src={Project3} alt="Shoes" /></figure>
                    </div>
                    <button class="btn btn-secondary">Project Details</button>
                </div>

            </div>
        </div>
    )
}

export default Projects