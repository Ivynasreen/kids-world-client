import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {
    return (
        <section className="container-fluid row">
            <Sidebar></Sidebar>
            <div style={{ position: "absolute", right: 0}}className = "col-md-10 p-5 ms-5">
                <h5 className="text-brand">Dashboard</h5>
            </div>
        </section>
    );
};


export default Dashboard;