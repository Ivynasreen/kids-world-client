import React, { useEffect, useState } from 'react';
import ServiceDetail from '../ServiceDetail/ServiceDetail';


const Services = () => {
    const[services , setServices] = useState([]);

    useEffect(()=> {
        fetch('http://localhost:5200/services')
        .then(res=> res.json())
        .then(data=> setServices(data))
    }, []) 
    return (
        <section className ="mt-5 pt-5">
            <div className = "text-center">
                <h5 className = "text-danger text-uppercase"style={{fontWeight : "bold"}}>Services</h5>
                <h2 className = "text-brand">Services We Provide</h2>
            </div>
            <div className = "d-flex justify-content-center">
                <div className = "row w-75 mt-5">
                    {
                        services.map(service=><ServiceDetail service = {service}></ServiceDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;