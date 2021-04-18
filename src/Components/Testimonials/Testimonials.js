import React, { useEffect, useState } from 'react';
import TestimonialDetail from '../TestimonialDetail/TestimonialDetail';


const Testimonials = () => {
    const[review, setReview] = useState([]);

    useEffect(()=> {
        fetch('https://salty-beyond-72419.herokuapp.com/reviews')
        .then(res=> res.json())
        .then(data=> setReview(data))
    }, []) 

    return (
            <section className="testimonial my-5 py-5">
            <div className="container">
                <div className="section-header text-center">
                    <h5 className="text-danger text-uppercase">Our Testimonial</h5>
                    <h2 className = "mb-5 text-brand">What Our Parents <br/> Says </h2>
                </div>
                <div className="row">
                        {
                            review.map(testimonial => <TestimonialDetail testimonial={testimonial} key={testimonial.name}/>)
                        }
                </div>
            </div>
        </section>
    );
};

export default Testimonials;