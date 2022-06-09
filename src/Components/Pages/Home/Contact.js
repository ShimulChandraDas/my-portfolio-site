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
            }, (error) => {
                console.log(error.text);
            });

    }
    return (
        <div>
            <h2 className='text-5xl text-center pt-20 uppercase font-extrabold'>Please Connect with me </h2>
            <>
                <div class="card lg:card-side px-20 bg-base-100 shadow-xl">
                    <figure className='card-body'>
                        <img src="https://growmeda.com/wp-content/uploads/2019/10/hubspot-template-design-service.png" alt="Album" />
                    </figure>



                    <div class="card-body bg-slate-100">
                        <h2 class="text-3xl font-bold uppercase text-center">Please tell me your query</h2>
                        <form ref={form} onSubmit={sendEmail}>
                            <label>Name</label>
                            <input type="text" name="to_name" /> <br />
                            <label>Email</label>
                            <input type="email" name="from_name" /> <br />
                            <label>Message</label>
                            <textarea name="message" />
                            <button className='btn btn-primary' type="submit" value="Send" >SEND</button>
                        </form>


                    </div>
                </div>
            </>

        </div>
    )
}

export default Contact