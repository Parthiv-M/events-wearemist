import React, { useEffect, useState } from 'react'; 
import Footer from '../components/Footer';
import Loader from "./../components/Loader";
import Carousel from "./../components/Carousel";
import EventCard from '../components/EventCard';
import { Link } from 'react-router-dom';

const LandingPage = () => {

    const [loading, setLoading] = useState(true);
    const [upcoming, setUpcoming] = useState();
    const [current, setCurrent] = useState();
    const [past, setPast] = useState();

    const SERVER_URL = process.env.REACT_APP_SERVER_URL;

    useEffect(() => {
        async function fetchData() {
            const resPast = await fetch(`${SERVER_URL}/api/events?path=past&page=0`);
            const pastEvents = await resPast.json();
            setPast(pastEvents.data);
            const resCurr = await fetch(`${SERVER_URL}/api/events?path=current&page=0`);
            const currentEvents = await resCurr.json();
            setCurrent(currentEvents.data);
            const resUpcoming = await fetch(`${SERVER_URL}/api/events?path=upcoming&page=0`);
            const upcomingEvents = await resUpcoming.json();
            setUpcoming(upcomingEvents.data);
            setLoading(false);
        }
        fetchData();
    }, [SERVER_URL]);

    return (
        <div>
            <div className="mx-auto py-md-5 p-4" style={{ width: "65%" }}>
                <h1 className='text-white pb-0 mb-0 emphasis-heading display-4'>Events</h1>
                <h6 className='text-muted emphasis-heading' style={{ fontSize: "1.3rem" }}>Events by MIST</h6>
                <div className='text-white-50 my-3 mb-5'>
                    <p style={{ fontSize: "1.2rem" }}>
                        Are you busy with your quest for knowledge, yet want to stay updated with the recent happenings in cyberspace? We bring to 
                        you the website that monitors all of MIST's activities and keeps track of their schedule ensuring you don't miss out on 
                        the incredible events and ventures we plan for tech enthusiasts.
                    </p>
                </div>
            </div>
            {
                loading ? 
                <div style={{ minHeight: "100vh" }} className="d-flex justify-content-center align-items-center">
                    <Loader />
                </div> 
                :
                <>
                {
                    current.length !== 0 
                    &&
                    <div style={{ minHeight: "100vh" }}>
                        <div className='container text-center p-5' style={{color:'white'}}>
                                <h2 className='text-primary blue-gradient-text emphasis-heading'>Ongoing Events</h2>
                                <Carousel data={current}/>
                        </div>
                    </div>
                }
                {
                    upcoming.length !== 0 
                    &&
                    <div style={{ minHeight: "75vh" }}>
                        <div className="container mx-auto text-center text-white">
                            <h2 className="text-primary blue-gradient-text emphasis-heading mb-5">Upcoming Events</h2>
                            {
                                upcoming.filter(val => !current.map(curr => curr._id).includes(val._id)).slice(0,3).map((event) => {
                                    return <EventCard key={event._id} data={event}/>
                                })
                            }
                            <Link to="/events/upcoming/0">
                                <button className="view-more font-weight-bold px-4 py-3 my-3" style={{ border: "1px solid #6EE6B6", borderRadius: "40px" }}>
                                    VIEW MORE
                                </button>
                            </Link>
                        </div>
                    </div>
                }    
                {
                    past.length !== 0 
                    &&
                    <div style={{ minHeight: "100vh" }} className="my-4">
                        <div className="container mx-auto text-center text-white">
                            <h2 className="text-primary blue-gradient-text emphasis-heading">Past Events</h2>
                            {
                                past.filter(val => !current.map(curr => curr._id).includes(val._id)).slice(0,3).map((event) => {
                                    return <EventCard key={event._id} data={event}/>
                                })
                            }
                            <Link to="/events/past/0">
                                <button className="font-weight-bold px-4 py-3 my-3 mb-5 view-more" style={{ border: "1px solid #6EE6B6", borderRadius: "40px" }}>
                                    VIEW MORE
                                </button>
                            </Link>
                        </div>
                    </div>
                }
            </>
            }
            <Footer />
        </div>
    );
}

export default LandingPage;