import React from 'react';

const EventCard = (props) => {
    const data  = props.data;
    return (
        <div className="my-3" style={{ backgroundColor: "#13141b" }}>
            <div className="row">
                <div className="col-md-4 col-12">
                    <img className="h-100 w-100 rounded" src={data.image} alt={data.name}></img>
                </div>
                <div className="col-md-8 col-12 p-md-1 px-4 my-md-0 my-2 rounded">
                    <div className="flex-column px-md-3 px-1">
                        <div className="text-left">
                            <div className="d-flex flex-md-row flex-column flex-wrap w-100">
                                <p className="emphasis-heading white-underline my-0 mr-2" style={{ color: "#6EE6B6", fontSize: "1.7rem", width: "fit-content" }}>
                                    {data.name}
                                </p>
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
                                &&
                                <div className="col-md-6 col-12">
                                    <p className="emphasis-heading text-left green-underline m-0 w-50" style={{ fontSize: "1.7rem" }}>
                                        Venue
                                    </p>
                                    <p className="my-1 text-left" style={{ fontSize: "1.4rem" }}>
                                        {data.venue}
                                    </p>
                                </div> 
                            }
                            {
                                data.platform 
                                &&
                                <div className="text-left col-md-6 col-12">
                                    <p className="emphasis-heading green-underline m-0 w-75" style={{ fontSize: "1.7rem" }}>
                                        Platform
                                    </p>
                                    <p className="my-1 text-left" style={{ fontSize: "1.4rem" }}>
                                        {data.platform}
                                    </p>
                                </div>
                            }
                        </div>
                        {
                            data.speakers.length !== 0 &&
                            <div className="">
                                <p className="emphasis-heading green-underline m-0 text-left w-25" style={{ fontSize: "1.7rem" }}>
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
                        }
                        <div className="text-left">
                            <div className="w-75">
                                <p className="emphasis-heading green-underline m-0" style={{ fontSize: "1.7rem" }}>
                                    Date and Time
                                </p>
                            </div>
                            <div className="d-flex my-2">
                                <p className="my-1 text-left font-weight-bold" style={{ fontSize: "1.2rem" }}>
                                    {new Date(data.startDate).getHours()}:{new Date(data.startDate).getMinutes()}, {new Date(data.startDate).toDateString().split("").slice(4).join("")}
                                </p>
                                <div className="d-flex my-auto mx-2 align-items-center justify-content-center p-2" style={{ borderRadius: "50%", backgroundColor: "#6EE6B6" }}>
                                    <p className="text-center m-auto text-dark">TO</p>
                                </div>
                                <p className="my-1 text-left font-weight-bold" style={{ fontSize: "1.2rem" }}>
                                    {new Date(data.endDate).getHours()}:{new Date(data.endDate).getMinutes()}, {new Date(data.endDate).toDateString().split("").slice(4).join("")}
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
                        <div className="d-flex flex-row my-3" style={{ fontSize: "1rem", }}>
                        {
                            data.tags.map((tag, index) => {
                                return <div key={index} className='m-1 px-2 my-auto' style={{ width: "fit-content", borderRadius:'50px', color: "#6EE6B6", border: "1px solid #6EE6B6" }}>
                                    <p className="my-auto py-1">{tag}</p>
                                </div>
                            })
                        }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EventCard;