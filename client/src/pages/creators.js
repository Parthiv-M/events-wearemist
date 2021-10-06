import React, { useEffect, useState } from "react";
import { Instagram, Linkedin, GitHub } from 'react-feather';
import Footer from "../components/Footer";
import { Link } from 'react-router-dom';

const Creators = () => {
    const [hover, setHover] = useState(false);
    const [index, setIndex] = useState(0);

    const onHover = (index) => {
        setHover(true);
        setIndex(index);
    }
    
    const noHover = () => {
        setHover(false);
        setIndex(0);
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const team =  
    [
        {
            "id": "1",
            "name": "Parthiv Menon",
            "work": "Design and development",
            "photo": "https://live.staticflickr.com/65535/51271572750_fcb2868701_q.jpg",
            "oneLiner": "Full Stack Developer, handling mundanity with creativity",
            "github": "https://github.com/Parthiv-M",
            "linkedin": "https://www.linkedin.com/in/parthivmenon",
            "instagram": "https://www.instagram.com/_.parthiv_/"
        },
        {
            "id": "2",
            "name": "Pal Chheda",
            "work": "Front-end Development",
            "photo": "https://live.staticflickr.com/65535/51277660070_a329e2b62c.jpg",
            "oneLiner": "Front End Developer, with experience in cybersecurity",
            "github": "https://github.com/PalChheda",
            "linkedin": "",
            "instagram": "https://www.instagram.com/pal_chheda"
        },
        {
            "id": "3",
            "name": "Nithin Chowdary",
            "work": "Design",
            "photo": "https://live.staticflickr.com/65535/51277676985_907bf6c921.jpg",
            "oneLiner": "Cyber security enthusiast, with a bit of creativity",
            "github": "https://github.com/nithinchowdary007",
            "linkedin": "https://www.linkedin.com/in/nithin-chowdary-garapati-795432192/",
            "instagram": "https://www.instagram.com/nitin_chowdary7/"
        },
        {
            "id": "4",
            "name": "Aviral Gupta",
            "work": "Front-end Development",
            "photo": "https://live.staticflickr.com/65535/51270542536_d5a7ee1218_q.jpg",
            "oneLiner": "Front End Developer, with a sense of humour",
            "github": "https://github.com/Aviral044",
            "linkedin": "https://www.linkedin.com/in/aviral-gupta-5984b31a0/",
            "instagram": "https://www.instagram.com/aviralgupta044/"
        }
    ];

    const cards = team.map((person, ind) => {
        return(
          <div key={ind} className="col-md-3 mx-0 px-md-5 px-1 my-4 my-md-5">
              <div className='d-flex flex-column justify-content-center align-items-center text-light'>
                  <img style={{ width:'80%', borderRadius:'50%' }} src={person.photo} alt={person.name} />
                  <div className="mt-3" style={{ fontSize: "1.5rem" }}>
                      <p className="emphasis-heading m-0">{person.name}</p>
                  </div>
                  <p className='my-0 py-0 font-weight-bold text-dark' style={{ fontWeight: "200", fontSize:'1.4rem' }}>{person.work}</p>
                  <hr className='my-2 bg-white' style={{ height:'0.1px', width:'70%' }}/>
                  <div className="w-md-75 p-0" style={{ fontSize:'1.2rem' }}>
                    <p>{person.oneLiner}</p>
                  </div>
                  <div className='my-4'>
                      {
                        person.instagram 
                        &&
                        <a target="_blank" rel="noreferrer" href={person.instagram}>
                            <Instagram className='mx-2' onMouseEnter={() => onHover(person.id+1)} onMouseLeave={noHover} size={30} color={ hover && index===(person.id+1) ? '#6EE6B6' : '#e3e5e5' }/>
                        </a>
                      }
                      {
                        person.linkedin
                        &&
                        <a target="_blank" rel="noreferrer" href={person.linkedin}>
                          <Linkedin className='mx-2' onMouseEnter={() => onHover(person.id+2)} onMouseLeave={noHover} size={30} color={ hover && index===(person.id+2) ? '#6EE6B6' : '#e3e5e5' }/>
                        </a>
                      }
                      {
                        person.github
                        &&
                        <a target="_blank" rel="noreferrer" href={person.github}>
                          <GitHub className='mx-2' onMouseEnter={() => onHover(person.id+3)} onMouseLeave={noHover} size={30} color={ hover && index===(person.id+3) ? '#6EE6B6' : '#e3e5e5' }/>
                        </a>
                      }
                  </div>
              </div>
          </div>
        )
    })

    return (
        <>
            <div className='text-center mx-5 mx-auto' style={{ minHeight: "100vh", colour:'white'}}>
                <h2 className='text-white my-5 emphasis-heading' style={{ textTransform: "uppercase" }}>
                    Meet the team
                </h2>
                <div className='row mx-auto w-100 px-5'>
                    {cards}
                </div>
                <div className="container mb-5">
                    <Link to="/">
                        <button className="border-0 p-3 bg-dark text-white font-weight-bold" style={{ borderRadius: "1rem" }}>
                            Back to Events
                        </button>
                    </Link>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Creators;