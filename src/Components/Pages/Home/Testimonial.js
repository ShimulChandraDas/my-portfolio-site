import React from 'react';
import people1 from '../../../Assets/icons/people1.png';
import people2 from '../../../Assets/icons/people2.png';
import people3 from '../../../Assets/icons/people3.png';

import Review from './Review';

const Testimonial = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Winson Herry',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: "California",
            img: people1
        },
        {
            _id: 2,
            name: 'Winson Herry',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: "California",
            img: people2
        },
        {
            _id: 3,
            name: 'Winson Herry',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: "California",
            img: people3
        },
    ]
    return (
        <section className=' m-20' >

            <h2 className='text-4xl font-bold text-center mb-10  uppercase'>Happy Clients</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>

                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonial;