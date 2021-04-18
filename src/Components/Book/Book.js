import React, {  useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { useForm } from "react-hook-form";
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCreditCard} from '@fortawesome/free-solid-svg-icons';
import {faPaypal} from  '@fortawesome/free-brands-svg-icons';
import PaymentProcess from '../PaymentProcess/PaymentProcess';
import { useParams } from 'react-router';


const Book = () => {
    const { register, handleSubmit} = useForm();
    const {name} = useParams();
    const [services , setServices] = useState([]);
    const selectedServices = services.find(service => service.name == name)
        // console.log(selectedServices);

        useEffect (() => {
            fetch('http://localhost:5200/services')
            .then(res =>res.json())
            .then(data => setServices(data))
        }, [])


    const onSubmit = data => {
        data.service= selectedServices.name;
        data.price = selectedServices.cost;

        fetch('http://localhost:5200/addBooking', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then(res => console.log('server side response', res))
    }
    return (
        <section className="container-fluid row">
            <Sidebar></Sidebar>
            <div style={{ position: "absolute", right: 0}}className = "col-md-10 p-5 ms-5">
            <h5 className = "text-danger">Book</h5>
            <h3>{selectedServices?.name}</h3>
            <h6>{selectedServices?.cost}</h6>
            <br/>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <br></br>
                    <div class="form-group">
                        <input type="text" class="form-control" name = "name" placeholder ="Enter Your Name" ref = {register}/>
                    </div>
                    <br/>
                    <div class="form-group">
                        <input type="number" class="form-control" name = "phone" placeholder ="Enter Your Phone Number" ref = {register}/>
                    </div>
                    <br/>
                    <div class="form-group">
                        <input type="text" class="form-control" name = "email" placeholder ="Enter Your Email" ref = {register}/>
                    </div>
                    <br/>
                    <small>Pay With</small>
                    <br/>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                        <label class="form-check-label" for="inlineRadio1"><FontAwesomeIcon style = {{color: '#192a56'}}icon={faCreditCard} /> Credit Card</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                        <label class="form-check-label" for="inlineRadio2"><FontAwesomeIcon style = {{color: '#192a56'}}  icon={faPaypal} /> Paypal</label>
                    </div>
                    <br/>
                    <button type="submit" className = "btn btn-danger mt-4">
                        Submit
                    </button>
                    <div className = "mt-5">
                        <PaymentProcess />
                    </div>
                </form>
            </div>
        </section>
        
    );
};

export default Book;