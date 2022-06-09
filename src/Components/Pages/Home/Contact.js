import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';



function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_aby3ax2', 'template_7sh73ih', form.current, 'ExXAqjU9tu7QyhGCs')
            .then((result) => {
                console.log(result.text);
                console.log('message sent');
                e.target.reset();
            }, (error) => {
                console.log(error.text);
            });

    }
    return (
        <div className='pt-10 '>
            <h2 className='text-5xl text-center pt-20 uppercase font-extrabold'>Please Connect with me </h2>
            <div className='flex items-center  content-center'>
                <div class="card lg:card-side pt-7 px-20">
                    <figure className=''>
                        <img src="https://growmeda.com/wp-content/uploads/2019/10/hubspot-template-design-service.png" alt="Album" />
                    </figure>



                    <div class="card lg:card-side pt-7 px-20 bg-slate-100">
                        <div class="form-control w-full max-w-xs">
                            <form ref={form} onSubmit={sendEmail}>
                                <h2 class="text-3xl font-bold uppercase text-center">Please tell me your query</h2>
                                <label class="label">
                                    <span class="label-text">Your Name?</span>
                                </label>
                                <input type="text" name="to_name" placeholder="Your Name" class="input input-bordered w-full max-w-xs" />
                                <label class="label">
                                    <span class="label-text">Your Email?</span>
                                </label>
                                <input type="email" name="from_name" placeholder="Your Email?" class="input input-bordered w-full max-w-xs" />
                                <label class="label">
                                    <span class="label-text">Please Explain?</span>
                                </label>
                                <textarea name="message" className='textarea-bordered  w-full max-w-xs' />

                                <button type="submit" class="btn btn-block mt-3 btn-primary">Send</button>
                            </form>

                        </div>


                    </div>
                </div>
            </div>

        </div>
    )
}

export default Contact