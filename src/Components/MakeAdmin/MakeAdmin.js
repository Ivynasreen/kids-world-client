import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Sidebar from '../Sidebar/Sidebar';

const MakeAdmin = () => {
    const { register, handleSubmit} = useForm();
    const [info, setInfo] = useState({});
    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const onSubmit = data => {
        const adminData = {
          name: data.name,
          email: data.email
        }
      console.log(data)

    fetch('http://localhost:5200/makeAdmin', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(adminData)
        })
        .then(res => console.log('server side response', res))
    }
    

    return (
        <section className="container-fluid row">
            <Sidebar></Sidebar>
            <div style={{ position: "absolute", right: 0}}className = "col-md-10 p-5 ms-5">
                <h5 className="text-brand">Make Admin</h5>
                <br/>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input onBlur={handleBlur} type="email" className="form-control" name="email" placeholder="Enter email" ref = {register} />
                    </div>
                    <br/>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Name</label>
                        <input onBlur={handleBlur} type="text" className="form-control" name="name" placeholder="Name" ref = {register} />
                    </div>
                    <br/>
                    <button type="submit" className="btn btn-danger">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default MakeAdmin;