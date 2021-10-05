import React, { useEffect, useState } from 'react';
import EventCard from '../components/EventCard';
import Footer from '../components/Footer';
import { useParams } from 'react-router-dom';
import Loader from '../components/Loader';
import PaginationBlock from '../components/PaginationBlock';

// renders upcoming, past or current events
const EventsPage = () => {
    
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [pages, setPages] = useState();
    const { type, page } = useParams();

    const SERVER_URL = process.env.REACT_APP_SERVER_URL;

    useEffect(() => {
        async function fetchData() {
            let pagesArray = [];
            const resPast = await fetch(`${SERVER_URL}/api/events?path=past&page=${page}`);
            const pastEvents = await resPast.json();
            const resCurrent = await fetch(`${SERVER_URL}/api/events?path=current&page=${page}`);
            const currentEvents = await resCurrent.json();
            const resUpcoming = await fetch(`${SERVER_URL}/api/events?path=upcoming&page=${page}`);
            const upcomingEvents = await resUpcoming.json();
            if(type === "past") {                
                setData(pastEvents.data.filter(val => !currentEvents.data.map(curr => curr._id).includes(val._id)));
                for(let i = 0; i < Math.ceil(pastEvents.length / 6); i++){
                    pagesArray.push(i);
                }
                setPages(pagesArray);
            } else if (type === "current") {
                setData(currentEvents.data);
                for(let i = 0; i < Math.ceil(currentEvents.length / 6); i++){
                    pagesArray.push(i);
                }
                setPages(pagesArray);
            } else if (type === "upcoming") {
                setData(upcomingEvents.data.filter(val => !currentEvents.data.map(up => up._id).includes(val._id)));
                for(let i = 0; i < Math.ceil(upcomingEvents.length / 6); i++){
                    pagesArray.push(i);
                }
                setPages(pagesArray);
            }
            setLoading(false);
        }
        fetchData();
        window.scrollTo(0, 0);
    }, [type, page, SERVER_URL]);
    
    return (
        <div>
            {
                loading 
                ? 
                <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
                    <Loader />
                </div> 
                : 
                <div className="" style={{ minHeight: "100vh" }}>
                    <div className="my-5 container w-100 p-4">
                        <div className="row m-0 p-0">
                            <p className="text-white w-100 emphasis-heading" style={{ fontSize: "2.3rem" }}>{data[0].name}</p>
                            <div className="col-md-6 col-12 m-0 p-0">
                                <img className="img-fluid w-100 rounded" src={data[0].image} alt='abc'/>
                            </div>
                            <div className="col-md-6 col-12 d-flex flex-column m-md-0 my-2 px-md-3 px-0">
                                <p className="green-underline pb-1 font-weight-bold" style={{ width: "fit-content", fontSize: "1.5rem", color: "#6EE6B6" }}>
                                    What is it?
                                </p>
                                <p className="text-white" style={{ fontSize: "1.2rem" }}>
                                    {data[0].description}
                                </p>
                                <div className="d-flex flex-wrap mt-2">
                                    {
                                        data[0].tags.map((tag, index) => {
                                            return <p key={index} className='m-1 py-1 px-2' style={{ width: "fit-content", borderRadius:'50px', color: "#6EE6B6", border: "1px solid #6EE6B6" }}>
                                                {tag}
                                            </p>
                                        })
                                    }
                                    {
                                        data[0].isInternal 
                                        ?
                                        <div className='m-1 py-1 px-2' style={{ borderRadius:'50px', color: "#6EE6B6", border: "1px solid #6EE6B6" }}>
                                            Internal
                                        </div>
                                        : ""
                                    }
                                </div>
                                {
                                    data[0].registerLink 
                                    &&
                                    <a href={data[0].registerLink} target="_blank" rel="noreferrer">
                                        <p className="px-2 my-2" style={{ color: "#6EE6B6", fontSize: "1.4rem" }}>Register Now</p>
                                    </a>
                                }
                            </div>
                        </div>
                        <div className="row my-3">
                            <div className="col-md-4">
                                <p className="green-underline pb-1 font-weight-bold" style={{ width: "fit-content", fontSize: "1.5rem", color: "#6EE6B6" }}>Date and Time</p>
                                <p className="text-white" style={{ fontSize: "1.2rem" }}>
                                    {new Date(data[0].startDate).getHours()}:{new Date(data[0].startDate).getMinutes()}, {new Date(data[0].startDate).toDateString().split("").slice(4).join("")} 
                                    {" "}-{" "} 
                                    {new Date(data[0].endDate).getHours()}:{new Date(data[0].endDate).getMinutes()}, {new Date(data[0].endDate).toDateString().split("").slice(4).join("")}
                                </p>
                            </div>
                            {
                                data[0].speakers.length !== 0 
                                &&
                                <div className="col-md-4">
                                    <p className="green-underline pb-1 font-weight-bold w-50" style={{ fontSize: "1.5rem", color: "#6EE6B6" }}>Speakers</p>
                                    <p className="text-white" style={{ fontSize: "1.2rem" }}>
                                        {
                                            data[0].speakers.map((speaker, index) => {
                                                return <p className="text-white">{speaker}</p>
                                            })
                                        }
                                    </p>
                                </div>
                            }
                            {
                                data[0].venue 
                                &&
                                <div className="col-md-4">
                                    <p className="green-underline pb-1 font-weight-bold w-25" style={{  fontSize: "1.5rem", color: "#6EE6B6" }}>Venue</p>
                                    <p className="text-white" style={{ fontSize: "1.2rem" }}>
                                        {data[0].venue}
                                    </p>
                                </div> 
                            }
                        </div>
                    </div>
                    {
                        data.length > 1 
                        &&
                        <>
                            <div className="container mx-auto w-100 text-white my-5">
                                <h2 className="text-white text-center emphasis-heading blue-gradient-text my-5">Other {type.split("")[0].toUpperCase() + type.split("").slice(1).join("")} Events</h2>
                                {
                                    data.slice(1, data.length).map((details) => {
                                        return <EventCard data={details} key={details._id}/>       
                                    })
                                }
                            </div>
                            <PaginationBlock pages={pages} current={page} type={type}/> 
                        </>
                    }
                </div>
            }
            <Footer />
        </div>
    );
}

export default EventsPage;