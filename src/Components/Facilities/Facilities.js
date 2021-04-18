import React from 'react';
import study from '../../images/study.png';
import forest from '../../images/forest.png';
import car from '../../images/car.png';
import nurse from '../../images/nurse.png';
import FacilitiesInfo from '../FacilitiesInfo/Facilitiesnfo';



const facilityData = [
    {
        title: 'Digital Library',
        image: study

    },
    {
        title: 'Open Environment',
        image:  forest
    },
    {
        title: 'School Transport',
        image: car
    },
    {
        title: 'Medical Facilities',
        image: nurse
    },
]

const Facilities = () => {
    return (
        <section className ="mt-5 pt-5">
            <div className = "text-center">
                <h5 className = "text-danger text-uppercase"style={{fontWeight : "bold"}}>What We Do</h5>
                <h2 className = "text-brand">Facilities We Provide</h2>
            </div>
            <div className = "d-flex justify-content-center">
                <div className = "row w-75 mt-5">
                    {
                        facilityData.map(facility=><FacilitiesInfo facility = {facility} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Facilities;