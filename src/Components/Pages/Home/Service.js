import React from 'react'

function Service() {
    return (
        <div>
            <h2 className='text-5xl text-center pt-20 uppercase font-extrabold'>My Service </h2>

            <div className='grid grid-cols-1 lg:grid-cols-4'>

                <div class="card w-96 bg-base-100 mt-10  shadow-2xl image-full">
                    <figure><img src="https://i.ibb.co/S0ZZ50z/19362653.jpg" alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class=" text-center text-2xl font-bold">Web Design</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions justify-center">
                            <button class="btn btn-primary">hire Me</button>
                        </div>
                    </div>
                </div>
                <div class="card w-96 bg-base-100 mt-10  shadow-2xl image-full">
                    <figure><img src="https://5.imimg.com/data5/SELLER/Default/2021/3/JB/CY/CQ/83906125/website-developer-500x500.jpg" alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="text-center text-2xl font-bold">Web Development</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions justify-center">
                            <button class="btn btn-primary">hire Me</button>
                        </div>
                    </div>
                </div>
                <div class="card w-96 bg-base-100 mt-10 shadow-2xl image-full">
                    <figure><img src="https://i.ibb.co/9bz8VnM/4380747.jpg" alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="text-center text-2xl font-bold">Backend Development</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions justify-center">
                            <button class="btn btn-primary">hire Me</button>
                        </div>
                    </div>
                </div>
                <div class="card w-96 bg-base-100 mt-10 shadow-2xl image-full">
                    <figure><img src="https://i.ibb.co/w4Mx53m/20943640.jpg" alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="text-center text-2xl font-bold">Bug Fixing</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions justify-center">
                            <button class="btn btn-primary">hire Me</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service