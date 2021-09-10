import { React } from 'react';
import mistLogo from './../assets/logoLight.png';
import { Instagram, Facebook, Linkedin, GitHub, Twitter, Mail } from "react-feather";

// footer component
const Footer = () => {
    return (
        <footer style={{ height: "auto" }}>
            <div className="mx-auto row p-md-5 py-5" style={{ minHeight: "20vh", backgroundColor: "#111827" }}>
                <div className="col-md-4 col-12 m-auto text-center">
                    <img src={mistLogo} className="w-25" alt="MIST"/>
                    <p className="text-white inter-font font-weight-bold mt-2">Manipal, India</p>
                </div>
                <div className="col-md-4 col-6 d-flex m-auto flex-column align-items-center">
                    <div>
                        <p className="m-0 text-light" style={{ fontSize: "1.2rem" }}>More of MIST</p>
                        <a href="https://wearemist.in" target="_blank" rel="noreferrer">
                            <p className="m-0">Our website</p>
                        </a>
                        <a href="https://blogs.wearemist.in" target="_blank" rel="noreferrer">
                            <p className="m-0">Blog</p>
                        </a>
                        <a href="https://events.wearemist.in/creators" target="_blank" rel="noreferrer">
                            <p className="m-0">Meet the creators</p>
                        </a>
                    </div>
                </div>
                <div className="col-md-4 col-6 d-flex m-auto flex-column align-items-center">
                    <div>
                        <p className="m-0 text-light" style={{ fontSize: "1.2rem" }}>About MIST</p>
                        <a href="mailto:sudo@wearemist.in" target="_blank" rel="noreferrer">
                            <p className="m-0">Contact Us</p>
                        </a>
                        <a href="mailto:sudo@wearemist.in?subject=Partner With Us" target="_blank" rel="noreferrer">
                            <p className="m-0">Partner with us</p>
                        </a>
                        <a href="https://wearemist.in/privacypolicy" target="_blank" rel="noreferrer">
                            <p className="m-0">Privacy Policy</p>
                        </a>
                    </div>
                </div>
            </div>
            <div className="mx-auto d-flex justify-content-center align-items-center p-4" style={{ minHeight: "12vh", backgroundColor: "#1F2937" }}>
                <div className="m-auto d-flex flex-column align-items-center justify-content-center">
                    <p style={{ color: "#6ee7b7", fontSize: "1.4rem" }}>Connect with us</p>
                    <div className="row justify-content-center align-items-center social-links">
                        <a href="https://www.instagram.com/sudo.mist/" className="col-md-1 col-4 text-center mx-md-4 mb-md-0 mb-3" target="_blank" rel="noreferrer"><Instagram /></a>
                        <a href="https://www.facebook.com/wearemist.in/" className="col-md-1 col-4 text-center mx-md-4 mb-md-0 mb-3" target="_blank" rel="noreferrer"><Facebook /></a>
                        <a href="https://www.linkedin.com/company/manipal-information-security-team" className="col-md-1 col-4 text-center mx-md-4 mb-md-0 mb-3" target="_blank" rel="noreferrer"><Linkedin /></a>
                        <a href="https://github.com/ManipalInformationSecurityTeam/" className="col-md-1 col-4 text-center mx-md-4" target="_blank" rel="noreferrer"><GitHub /></a>
                        <a href="https://twitter.com/sudo_mist" className="col-md-1 col-4 text-center mx-md-4" target="_blank" rel="noreferrer"><Twitter /></a>
                        <a href="mailto:sudo@wearemist.in" className="col-md-1 col-4 text-center mx-md-4" target="_blank" rel="noreferrer"><Mail /></a>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center align-items-center text-light" style={{ minHeight: "8vh", fontSize: "1.1rem", backgroundColor: "#374151" }}>
                <p className="m-auto text-center">Manipal Information Security Team, Manipal</p>
            </div>
        </footer>
    );    
}
export default Footer;
