import Overlay from 'react-bootstrap/Overlay'
import { useState, useRef} from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/esm/Col';
import { Instagram, GitHub, Linkedin} from 'react-feather';

// returns team cards with data
const TeamCards = ({data}) => {   
    
    // handles hover state
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
    
    return(
        data.map((person) => {
            return (
                <Card cariant="top" style={{ width: '20rem', height:'60vh', margin: 50, color:'white', background:'transparent', border:'none' }}>
                    <Card.Img style={{ borderRadius:'50%', width:'70%', display:'block', margin:'auto'}} src={person.photo} />
                    <Card.Body>
                        <Card.Title>
                            <div style={{ textAlign:'center', fontWeight:'bold', fontSize:'30px', paddingBottom:'10px' }}>{person.name}</div>
                            <div style={{ textAlign:'center', fontSize:'20px' }}>{person.work}</div>
                            <hr style={{ color:'white', backgroundColor:'white', height:'2px' }}/>
                        </Card.Title>
                        <Card.Text>
                            <div style={{ textAlign:'center', fontSize:'16px', paddingBottom:'10px' }}>
                                {person.oneLiner}
                            </div>
                            <Row className="justify-content-center align-items-center" style={{ marginLeft: 25 }}>
                                <Col xs={4} md={4} className='my-3' style={{ }}>
                                    <a target="_blank" rel="noreferrer" href={person.instagram}>
                                        <Instagram onMouseEnter={() => onHover(person.id+1)} onMouseLeave={noHover} size={30} color={ hover && index===(person.id+1) ? '#009dff' : '#e3e5e5' }/>
                                    </a>
                                </Col>
                                <Col xs={4} md={4} className='my-3' style={{ }}>
                                    <a target="_blank" rel="noreferrer" href={person.linkedin}>
                                        <Linkedin onMouseEnter={() => onHover(person.id+2)} onMouseLeave={noHover} size={30} color={ hover && index===(person.id+2) ? '#009dff' : '#e3e5e5' }/>
                                    </a>
                                </Col>
                                <Col xs={4} md={4} className='my-3'>
                                    <a target="_blank" rel="noreferrer" href={person.github}>
                                        <GitHub onMouseEnter={() => onHover(person.id+3)} onMouseLeave={noHover} size={30} color={ hover && index===(person.id+3)? '#009dff' : '#e3e5e5' }/>
                                    </a>
                                </Col>
                            </Row>
                        </Card.Text>
                    </Card.Body>
                </Card>
            );
            }
        )
    )
}

// renders find us button and overlay
const FindUs = ({data}) => {

    // handles overlay state
    const [show, setShow] = useState(false);
    const target = useRef(null);
    
    return (
        <>
            <Button style={{ 
                color: '#009dff', 
                backgroundColor: 'transparent', 
                border: 'none', 
                fontSize:'20px'
                }} ref={target} onClick={() => setShow(!show)}
            >
                Find us
            </Button>
            <Overlay target={target.current} show={show}>
                {({ arrowProps, show: _show, popper, ...props }) => (
                    <Row {...props}
                        style={{
                            backgroundColor: 'rgba( 0, 0, 0, 0.87)',
                            marginLeft: '-5px',
                            placement: 'left-start',
                            width:'100%',
                            position:'fixed',
                            color: 'white',
                            zIndex:'1',
                            ...props.style,
                        }} 
                        className='p-md-5 align-items-center justify-content-center'
                    >
                        <TeamCards data={data}/>
                    </Row>
                )}
            </Overlay>
        </>
    );
  }

  export default FindUs;