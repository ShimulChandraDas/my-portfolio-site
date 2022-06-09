import React from 'react'

import CSS3 from '../../../Assets/skills/css3.png'
import Javascript from '../../../Assets/skills/Javascript.png'

function Skills() {
    return (
        <div >
            <h2 className='text-5xl text-center pt-32 uppercase font-extrabold'>My Skills </h2>
            <div className='grid grid-cols-2  mt-10 lg:grid-cols-4'>
                <div class="avatar ">
                    <div class="w-24 rounded-2xl bg-base-100 shadow-2xl p-3 m-5 ">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png" alt='' />
                    </div>
                </div>
                <div class="avatar ">
                    <div class="w-24 rounded-2xl bg-base-100 shadow-2xl p-3 m-5">
                        <img src={CSS3} alt='' />
                    </div>
                </div>
                <div class="avatar ">
                    <div class="w-24  rounded-2xl bg-base-100 shadow-2xl p-3 m-5">
                        <img src={Javascript} alt='' />
                    </div>
                </div>
                <div class="avatar ">
                    <div class="w-24  rounded-2xl bg-base-100 shadow-2xl p-3 m-5">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png" alt='' />
                    </div>
                </div>
                <div class="avatar ">
                    <div class="w-24 rounded-2xl bg-base-100 shadow-2xl p-3 m-5 m-5 ">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png" alt='' />
                    </div>
                </div>
                <div class="avatar ">
                    <div class="w-24 rounded-2xl bg-base-100 shadow-2xl p-3 m-5">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png" alt='' />
                    </div>
                </div>
                <div class="avatar ">
                    <div class="w-24  rounded-2xl bg-base-100 shadow-2xl p-3 m-5">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png" alt='' />
                    </div>
                </div>
                <div class="avatar ">
                    <div class="w-24  rounded-2xl bg-base-100 shadow-2xl p-3 m-5">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png" alt='' />
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Skills