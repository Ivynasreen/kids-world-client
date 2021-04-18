import React from 'react';

const FacilitiesInfo = ({facility}) => {
    return (
            <div className = "col-md-3 text-center">
                <img style = {{height: '50px'}}src = {facility.image} alt = ""/>
                <h4 className = "mt-3 mb-3 text-brand">{facility.title}</h4>
                <p className = "text-secondary">Lorem ipsum is simply dummy text and printing in the way has been given.</p>
            </div>
    );
};

export default FacilitiesInfo;