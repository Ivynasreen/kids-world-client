import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const ManageService = () => {
    const[services , setServices] = useState([]);

        useEffect(()=> {
            fetch('https://salty-beyond-72419.herokuapp.com/services')
            .then(res=> res.json())
            .then(data=> setServices(data))
        }, []) 
    
        function deleteService(id) {
            fetch(`https://salty-beyond-72419.herokuapp.com/delete/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(result => {
                if(result) {
                    console.log('result' , result)
                }
            })
        }
    

    return (
        <section className="container-fluid row"> 
            <Sidebar></Sidebar>
            <div style={{ position: "absolute", right: 0}}className = "col-md-10 p-5 ms-5">
                <h4>Manage Service</h4>
                <br/>
                    <table className = "table table-borderLess">
                        <thead>
                            <tr>
                                <th className="text-secondary text-left">Sr No</th>
                                <th className="text-secondary">Image</th>
                                <th className="text-secondary">Name</th>
                                <th className="text-secondary">Cost</th>
                                <th className="text-secondary">Description</th>
                            
                            </tr>
                        </thead>
                        <tbody>
                            {
                                services.map((service, index) => 
                                    
                                <tr>
                                    <td>{index + 1}</td>
                                    <td><img style={{width: '50px'}}src={service.imageURL} alt=""/></td>
                                    <td>{service.name}</td>
                                    <td>{service.cost}</td>
                                    <td>{service.description}</td>
                                    <td><button onClick = {()=> deleteService()}className = "btn btn-danger">Delete</button></td>
                                </tr>
                                )    
                            }
                        </tbody>
                    </table>
                </div>
            </section>
    );
};

export default ManageService;