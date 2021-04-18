import React from 'react';
import './Footer.css';
import FooterCol from '../FooterCol/FooterCol';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {

    const aboutUs = [
        {name: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", link: "/about"},
    ]
    const services = [
        {name: "Basic English Learning" , link: "/english"},
        {name: "General Science" , link: "/science"},
        {name: "Programming Basic" , link: "/programming"},
        {name: "General Math" , link: "/math"},
        {name: "Graphics Design" , link: "/graphic"},
        {name: "Basic Photography" , link: "/photo"},
        {name: "Basic Entertainment" , link: "/entertainment"}
    ]
    const  facilities= [
        {name: "Digital Library" , link: "/library"},
        {name: "Natural Environment" , link: "/natural"},
        {name: "School Transport" , link: "/transport"},
        {name: "Medical Facilities" , link: "/medical"},
        {name: "Special Learning" , link: "/learning"},
        {name: "Natural Environment" , link: "/learning"},
        {name: "Special Learning" , link: "/learning"}
    ]
    const ourAddress = [
        {name: "H#- 000 (1st floor), Road # 2, Mohakhali" , link: "//google.com/map"},
        {name: "Dhaka, Bangladesh" , link: "//google.com/map"},
       
    ]
    return (
        <section>
            <footer className="footer-area">
                <div className="container pt-5">
                    <div className="row py-5">
                        <FooterCol  key={1} menuTitle="About Us" menuItems={aboutUs} />
                        <FooterCol key={2} menuTitle="Our Facilities" menuItems={facilities}/>
                        <FooterCol key={3} menuTitle="Services" menuItems={services}/>
                        <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress} style = {{color: 'red'}}> 
                            <ul className="social-media list-inline">
                                <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF}  style= {{backgroundColor: 'blue', border: 'none'}}/></a></li>
                                <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                                <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                            </ul>
                            <div className="mt-5">
                                <h6>Call now</h6>
                                <button className="btn btn-danger">+2025550295</button>
                            </div>
                        </FooterCol>
                    </div>
                    <div className="copyRight text-center">
                        <p>Copyright {(new Date()).getFullYear()} | All Rights Reserved</p>
                    </div>
                </div>
            </footer>
        </section>   
    );
};

export default Footer;