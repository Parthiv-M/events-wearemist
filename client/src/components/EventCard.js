import React from 'react';

const EventCard = (props) => {
    const data  = props.data;
    return (
        <div className="my-3">
            <div className="row">
                <div className="col-md-4 col-12 p-md-0 p-3">
                    <img className="h-100 w-100 rounded" src={data.image} alt={data.name}></img>
                </div>
                <div className="col-md-8 col-12 px-md-0 px-3">
                    <div className="flex-column px-md-4 px-1">
                        <div className="text-left">
                            <div className="d-flex flex-md-row flex-column flex-wrap w-100">
                                <p className="emphasis-heading name my-0 mr-2" style={{ color: "#6EE6B6", fontSize: "1.8rem", width: "fit-content" }}>
                                    {data.name}
                                </p>
                                <div className="d-flex flex-row my-md-0 my-3" style={{ fontSize: "1rem", }}>
                                {
                                    data.tags.slice(0, data.name.split("").length > 20 ? 1 : 2).map((tag, index) => {
                                        return <div key={index} className='m-1 px-2 my-auto' style={{ width: "fit-content", borderRadius:'50px', color: "#6EE6B6", border: "1px solid #6EE6B6" }}>
                                            <p className="my-auto py-2">{tag}</p>
                                        </div>
                                    })
                                }
                                </div>
                            </div>  
                            {
                                data.isInternal 
                                ?
                                <p className="my-1 text-left">
                                    Internal Event
                                </p>
                                : <div className="my-3"></div>
                            }
                        </div>
                        <div className="row">
                            {
                                data.venue 
                                ?
                                <div className="col-md-6 col-12">
                                    <p className="emphasis-heading m-0 w-25" style={{ fontSize: "1.8rem", borderBottom: "1px solid white" }}>
                                        Venue
                                    </p>
                                    <p className="my-1 text-left" style={{ fontSize: "1.4rem" }}>
                                        {data.venue}
                                    </p>
                                </div> 
                                : ""  
                            }
                            {
                                data.speakers.length !== 0 
                                ? 
                                data.speakers.length === 1 
                                ? 
                                <div className="col-md-6 col-12">
                                    <p className="emphasis-heading m-0 w-25" style={{ fontSize: "1.8rem", borderBottom: "1px solid white" }}>
                                        {data.speakers.length > 1 ? "Speakers" : "Speaker"}
                                    </p>
                                    <p className="my-1 text-left" style={{ fontSize: "1.4rem" }}>
                                        {data.speakers[0]}
                                    </p>
                                </div>
                                : 
                                <div className="col-12">
                                    <p className="emphasis-heading m-0 text-left w-25" style={{ fontSize: "1.8rem", borderBottom: "1px solid white" }}>
                                        {data.speakers.length > 1 ? "Speakers" : "Speaker"}
                                    </p>
                                    <div className="d-flex flex-wrap my-1 text-left" style={{ fontSize: "1.4rem" }}>
                                        {
                                            data.speakers.map((speaker, index) => {
                                                return index !== data.speakers.length - 1 ? <p key={index}>{speaker}, </p> : <p key={index}>{speaker}</p>
                                            })
                                        }
                                    </div>
                                </div>
                                : ""
                            }
                        </div>
                        {
                            data.platform 
                            ?
                            <div className="text-left">
                                <p className="emphasis-heading m-0 w-25" style={{ fontSize: "1.8rem", borderBottom: "1px solid white" }}>
                                    Platform
                                </p>
                                <p className="my-1 text-left" style={{ fontSize: "1.4rem" }}>
                                    {data.platform}
                                </p>
                            </div>
                            : ""
                        }
                        <div className="text-left">
                            <p className="emphasis-heading m-0" style={{ width: "75%", fontSize: "1.8rem", borderBottom: "1px solid white" }}>
                                Date and Time
                            </p>
                            <div className="d-flex my-2">
                                <p className="my-1 text-left" style={{ fontSize: "1.2rem" }}>
                                    {new Date(data.startDate).toDateString().split("").slice(4).join("")}
                                </p>
                                <div className="d-flex my-auto mx-2 align-items-center justify-content-center p-2" style={{ borderRadius: "50%", backgroundColor: "#6EE6B6" }}>
                                    <p className="text-center m-auto text-dark">TO</p>
                                </div>
                                <p className="my-1 text-left" style={{ fontSize: "1.2rem" }}>
                                    {new Date(data.endDate).toDateString().split("").slice(4).join("")}
                                </p>
                            </div>
                        </div>
                        {
                            data.registerLink 
                            ? 
                            <div className="text-left m-0 w-25">
                                <a href={data.registerLink} target="_blank" rel="noreferrer">
                                    <p className="p-2 bg-dark rounded w-100 text-center" style={{ color: "#6EE6B6" }}>Register</p>
                                </a>
                            </div>
                            : ""
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EventCard;