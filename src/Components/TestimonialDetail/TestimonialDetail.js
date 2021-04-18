import React from 'react';

const TestimonialDetail = (props) => {
    const {description,name,designation ,imageURL} = props.testimonial;
    return (
            <div className="col-md-4">
                <div className="card shadow-sm">
                    <div className="d-flex align-items-center mb-2">
                        <img className="mx-3 mt-3" src={imageURL} alt="" width="70"/>
                        <div className = "mt-3 text-center">
                            <h6 className="text-danger text-center">{name}</h6>
                            <small className = "text-uppercase text-brand" style= {{fontWeight : "bold"}}>{designation}</small>
                        </div>
                    </div>
                    <div className="card-body">
                        <p className="card-text">{description}</p>
                    </div>
                </div>
            </div>
    );
};

export default TestimonialDetail;