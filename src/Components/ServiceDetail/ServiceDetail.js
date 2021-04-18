import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './ServiceDetail.css';



const ServiceDetail = (props) => {
    const { name, description, cost, imageURL } = props.service;
    let history = useHistory();
    const handleBook = name => {
        const url = `services/${name}`;
        history.push(url)
    }
    return (
        <div className="col-md-3 text-center service">
            <img style={{ height: '80px'}} src={imageURL} alt="" />
            <h5 className="mt-3 mb-3 text-brand text-uppercase">{name}</h5>
            <p className="mt-3 mb-3 text-danger" style={{ fontWeight: 'bold' }}>{cost}</p>
            <p className="text-secondary">{description}</p>
            <Link to={`/Book/${name}`}><button className="btn btn-danger" onClick={() => handleBook(name)}>Enroll Now</button></Link>
        </div>

    );
};

export default ServiceDetail;