import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { MapPin, ChevronRight } from "react-feather";

const Carousel = (props) => {
    return (
        <OwlCarousel className='owl-theme' loop margin={10} nav items={1} center dots={false} 
                autoplayHoverPause={true} autoplaySpeed={2000}
                autoplay={true} navText={['<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left"><polyline points="15 18 9 12 15 6"></polyline></svg>',
                '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>']}
            >
            {
                props.data.map((event) => {
                    return (
                        <div key={event._id} className="item my-4 position-relative">
                            <div className="owl-image mx-auto">
                                <img className='mx-auto z-1 border-0 rounded h-md-75 w-md-75 h-100 w-100' src={event.image} alt={event.name}/>
                            </div>
                            <div className="navitem mx-auto z-2 py-3" style={{ bottom: 0, right: 0, left: 0 }}>
                                <div className='d-flex flex-column justify-content-center'>
                                    <p className="name pb-2 emphasis-heading text-center" style={{ fontSize: "1.7rem" }}>
                                        {event.name}
                                    </p>
                                    <div className="text-md-center d-flex flex-wrap justify-content-center mb-md-2 mb-3" style={{ fontSize: "1.3rem" }}>
                                        {
                                            event.speakers.map((speaker, index) => {
                                                return (
                                                    <p key={index} className="m-0">
                                                        {speaker}
                                                        {
                                                            (event.speakers.length > 1 && index !== event.speakers.length - 1)  ? <span className="mx-1" style={{ color: "#6EE6B6" }}>|</span> : ""
                                                        }
                                                    </p>
                                                )
                                            })
                                        }
                                    </div>
                                    <div className="d-flex flex-md-row flex-column align-items-center justify-content-center" style={{ fontSize:'0.8rem' }}>
                                        <p className="my-auto" style={{ fontSize: "1.2rem" }}>
                                            {new Date(event.startDate).getHours()}:{parseInt(new Date(event.startDate).getMinutes()) === 0 ? "00" : new Date(event.startDate).getMinutes()}, {new Date(event.startDate).toDateString().split("").slice(4).join("")}
                                        </p>
                                        <div className="d-flex my-md-auto my-2 mx-2 align-items-center justify-content-center p-2" style={{ borderRadius: "50%", backgroundColor: "#6EE6B6" }}>
                                            <p className="text-center m-auto text-dark">TO</p>
                                        </div>
                                        <p className="my-auto" style={{ fontSize: "1.2rem" }}>
                                        {new Date(event.endDate).getHours()}:{parseInt(new Date(event.endDate).getMinutes()) === 0 ? "00" : new Date(event.endDate).getMinutes()}, {new Date(event.endDate).toDateString().split("").slice(4).join("")}
                                        </p>
                                    </div>
                                    <div className="d-flex flex-wrap justify-content-center mt-3">
                                        {
                                            event.tags.map((tag, index) => {
                                                return <div key={index} className='mr-2 my-auto py-1 px-2' style={{ borderRadius:'50px', color: "#6EE6B6", border: "1px solid #6EE6B6" }}>
                                                    {tag}
                                                </div>
                                            })
                                        }
                                        {
                                            event.isInternal 
                                            &&
                                            <div className='m-1 py-1 px-2' style={{ borderRadius:'50px', color: "#6EE6B6", border: "1px solid #6EE6B6" }}>
                                                Internal
                                            </div>
                                        }
                                    </div>
                                    <div className="mt-3">
                                        <div className="d-flex flex-wrap p-0 align-items-center justify-content-center">
                                            {
                                                event.venue 
                                                &&
                                                <p className="p-2 rounded bg-dark mx-1" style={{ color: "#6EE6B6", width: "fit-content" }}>
                                                    <span className="mx-1 my-auto"><MapPin size={18} color='#6EE6B6'/></span>
                                                    {event.venue}
                                                </p> 
                                            }
                                            {
                                                event.platform 
                                                &&
                                                <p className="p-2 rounded border border-dark mx-1" style={{ color: "#6EE6B6", width: "fit-content" }}>
                                                    {event.platform}
                                                </p>
                                            }
                                            {
                                                event.registerLink
                                                &&
                                                <a href={event.registerLink} className="text-dark mx-1" style={{ cursor: "pointer" }}>
                                                    <p className="p-2 rounded" style={{ backgroundColor: "#6EE6B6", width: "fit-content" }}>
                                                        Register yourself 
                                                        <span><ChevronRight size={19}/></span>
                                                    </p>
                                                </a>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </OwlCarousel>
    );
}

export default Carousel;