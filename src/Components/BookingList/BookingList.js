import React, {useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Sidebar from '../Sidebar/Sidebar';

const BookingList = () => {
    const [bookings , setBookings] = useState([]);
    const [loggedInUser , setLoggedInUser] = useContext(UserContext);
    useEffect(()=> {
        fetch('https://salty-beyond-72419.herokuapp.com/bookings')
        .then(res => res.json())
        .then(data=> setBookings(data))
    }, [])
    // console.log(bookings)

    useEffect(() => {
        fetch('https://salty-beyond-72419.herokuapp.com/order', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])
    
    const changeStatus=(e , id)=> {
        console.log(id)
        fetch(`https://salty-beyond-72419.herokuapp.com/update/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(e.target.value)
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    alert("updated")
                }
            })
    }

    return (
        <section className="container-fluid row"> 
            <Sidebar></Sidebar>
            <div style={{ position: "absolute", right: 0}}className = "col-md-10 p-5 ms-5">
                <h4>Booking List</h4>
                <br/>
                    <table className = "table table-borderLess">
                    <thead>
                        <tr>
                            <th className="text-secondary text-left">Sr No</th>
                            <th className="text-secondary">Name</th>
                            <th className="text-secondary">Phone</th>
                            <th className="text-secondary">Email</th>
                            <th className="text-secondary">Service</th>
                            <th className="text-secondary">Pay With</th>
                            <th className="text-secondary">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map((booking, index) => 
                                
                            <tr>
                                <td>{index + 1}</td>
                                <td>{booking.name}</td>
                                <td>{booking.phone}</td>
                                <td>{booking.email}</td>
                                <td>{booking.service}</td>
                                <td>Credit Card</td>
                                <td> 
                                    <select onClick = {(e) =>changeStatus(e, booking._id)}>
                                        <option disabled={true}>Select</option>
                                        <option>Pending</option>
                                        <option>Ongoing</option>
                                        <option>Done</option>
                                    </select>
                                </td>
                            </tr>
                            )    
                        }
                    </tbody>
                </table>
            </div>
        </section>
        
    );
};

export default BookingList;