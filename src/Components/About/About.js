import React from 'react';
import about from '../../images/about1.jpg';

const About = () => {
    return (
            <section className = "my-5 pt-5 mt-5">
                <div className = "container">
                    <div className="row mb-5">
                        <div className="col-md-5">
                            <img className = "img-fluid" src={about} alt=""/>
                        </div>
                        <div className="col-md-7 align-self-center">
                        <h5 className = "text-danger text-uppercase"style={{fontWeight : "bold"}}>about us</h5>
                            <h3 className = "text-brand">20 Years of Experience <br />In Teaching Sector</h3>
                            <p className = "text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum repellendus distinctio amet quidem aliquid, maiores enim qui cumque quaerat natus dolore deleniti maxime, officiis numquam sunt quis ea ipsam facere?
                            Facilis reprehenderit saepe facere accusantium maxime exercitationem labore, necessitatibus beatae iure, doloribus, recusandae inventore nisi minus optio! Perspiciatis nobis in repellendus quia facilis laboriosam reiciendis id, alias fugiat, voluptatem eos!
                            </p>
                            <button className = "btn btn-danger text-white">Read More</button>
                        </div>
                    </div>
                </div>
            </section>
    );
};

export default About;