import React from 'react'

function Contact() {
    return (
        <div>
            <h2 className='text-5xl text-center pt-20 uppercase font-extrabold'>Please Connect with me </h2>
            <>
                <div class="card lg:card-side px-20 bg-base-100 shadow-xl">
                    <figure className='card-body'>
                        <img src="https://growmeda.com/wp-content/uploads/2019/10/hubspot-template-design-service.png" alt="Album" /></figure>
                    <div class="card-body">
                        <h2 class="text-3xl font-bold uppercase text-center ">Please tell me your query</h2>
                        <p>Click the button to listen on Spotiwhy app.</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">Listen</button>
                        </div>
                    </div>
                </div>
            </>

        </div>
    )
}

export default Contact