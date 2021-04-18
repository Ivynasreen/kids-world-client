import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faGripHorizontal, faPlus, faUser, faShoppingCart, faHome } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../App';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('https://salty-beyond-72419.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [])

    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4 btn btn-danger" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/book/name" className="text-white" style={{ textDecoration: 'none' }}>
                        <FontAwesomeIcon icon={faShoppingCart} /> <span>Book</span>
                    </Link>
                </li>
                <li>
                    <Link to="/bookingList" className="text-white" style={{ textDecoration: 'none' }}>
                        <FontAwesomeIcon icon={faLock} /> <span>Booking List</span>
                    </Link>
                </li>
                <li>
                    <Link to="/review" className="text-white" style={{ textDecoration: 'none' }}>
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Review</span>
                    </Link>
                </li>
                <li>
                    <Link to="/" className="text-white">
                        <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                    </Link>
                </li>
                {isAdmin && <div>
                    <li>
                        <Link to="/addService" className="text-white" style={{ textDecoration: 'none' }}>
                            <FontAwesomeIcon icon={faPlus} /> <span>Add Service</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/makeAdmin" className="text-white" style={{ textDecoration: 'none' }}>
                            <FontAwesomeIcon icon={faUser} /> <span>Make Admin</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/manageService" className="text-white" style={{ textDecoration: 'none' }}>
                            <FontAwesomeIcon icon={faGripHorizontal} /> <span>Manage Service</span>
                        </Link>
                    </li>
                </div>}
            </ul>
        </div>
    );
};

export default Sidebar;