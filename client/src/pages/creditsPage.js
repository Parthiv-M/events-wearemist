import Overlay from 'react-bootstrap/Overlay'
import { useState, useRef} from 'react'
import { Instagram, Linkedin, GitHub } from 'react-feather';
import user from '../user.png'

function CreditsPage() {
  
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
    const items = [
        {
            id:'1',
            name:"Parthiv Menon",
            profession:"Design and Development",
            description:"Full stack developer handling mundanity with creativity",
        },
        {
            id:'2',
            name:"Pal Chheda",
            profession:"Front End Development",
            description:"Front end developer with experience in cybersec",
        },
        {
            id:'3',
            name:"Nithin Chowdary",
            profession:"Design",
            description:"Cybersecurity enthusiast with a bit of creativity",
        },
        {
            id:'4',
            name:"Aviral Gupta",
            profession:"Front End Development",
            description:"Developer with a sense of humour",
        },
      ];
      const card = items.map((item) => {
          return(
            <div className="col-sm-3 mx-0 px-3">
                <div className='d-flex flex-column justify-content-center align-items-center text-light'>
                    <img style={{width:'60%', borderRadius:'50%'}}src={user} alt='.' />
                    <div className='font-weight-bold mt-3'>{item.name}</div>
                    <div className='my-0 py-0' style={{fontSize:'10px', color:'grey'}}>{item.profession}</div>
                    <hr className='my-2' style={{height:'0.1px', width:'100%', backgroundColor:'white'}}/>
                    <div style={{fontSize:'11px', height:'1rem'}}>{item.description}</div>
                    <div className='my-4'>
                        <a target="_blank" rel="noreferrer" href="https://www.instagram.com/sudo.mist/">
                            <Instagram className='mx-2' onMouseEnter={() => onHover(item.id+1)} onMouseLeave={noHover} size={15} color={ hover && index===(item.id+1) ? '#6EE6B6' : '#e3e5e5' }/>
                        </a>
                        <a target="_blank" rel="noreferrer" href="https://www.instagram.com/sudo.mist/">
                            <Linkedin className='mx-2' onMouseEnter={() => onHover(item.id+2)} onMouseLeave={noHover} size={15} color={ hover && index===(item.id+2) ? '#6EE6B6' : '#e3e5e5' }/>
                        </a>
                        <a target="_blank" rel="noreferrer" href="https://www.instagram.com/sudo.mist/">
                            <GitHub className='mx-2' onMouseEnter={() => onHover(item.id+3)} onMouseLeave={noHover} size={15} color={ hover && index===(item.id+3) ? '#6EE6B6' : '#e3e5e5' }/>
                        </a>
                    </div>
                </div>
            </div>
          )
      })
        return (
        <>
                    <div className='container text-center' style={{display:'inline', colour:'white'}}>
                        <h2 className='text-white mb-5'>Meet the team</h2>
                        <div className='row mx-5'>
                            {card}
                        </div>
                        <h2 className='newTitle1 w-50'>Hello Nithin, How's Life?</h2>
                        <h2 className='newTitle2 w-50'>Hello Proton, How's Life?</h2>
                    </div>
        </>
        );
  }

  export default CreditsPage;