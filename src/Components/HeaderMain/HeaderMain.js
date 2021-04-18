import React from 'react';
import children from '../../images/children.jpg';

const HeaderMain = () => {
    return (
        <div>
           <main style = {{height :'400px'}}className = "d-flex align-items-center">
            <div className = "col-md-4 offset-md-1">
                <h1 className = "text-brand">The Best School for <br/>Your Kids</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quidem, quisquam reiciendis aliquid quibusdam esse odit ullam! Tempora debitis, labore eius eligendi voluptas eveniet quasi blanditiis ea eaque commodi similique!</p>
                <button className = "btn btn-danger text-white">Enroll Your Child</button>
            </div>
            <div className="col-md-6">
                <img src={children} alt="" className="img-fluid"/>
            </div>
        </main> 
        </div>
    );
};

export default HeaderMain;