import Overlay from 'react-bootstrap/Overlay'
import { useState, useRef} from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/esm/Col';
import { Instagram, GitHub, Linkedin} from 'react-feather';

function Credits() {
    const [show, setShow] = useState(false);
    const target = useRef(null);
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
            profession:"Developer, Designer",
            description:"Full Stack Web Developer",
            imgsrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLAFXK2MihEQSj_Udwnn1-lH6BDzU8cjq2JA&usqp=CAU",
            instahref:"https://www.instagram.com/sudo.mist/",
            linkedinhref:"https://www.linkedin.com/company/manipal-information-security-team",
            githubhref:"https://github.com/MIST1819",
        },
        {
            id:'2',
            name:"Pal Chheda",
            profession:"Developer",
            description:"Front-End Web Developer",
            imgsrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLAFXK2MihEQSj_Udwnn1-lH6BDzU8cjq2JA&usqp=CAU",
            instahref:"https://www.instagram.com/sudo.mist/",
            linkedinhref:"https://www.linkedin.com/company/manipal-information-security-team",
            githubhref:"https://github.com/MIST1819",
        },
        {
            id:'3',
            name:"Nithin Chowdary",
            profession:"Designer",
            description:"Cyber Enthusiast with a bit of creativity",
            imgsrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLAFXK2MihEQSj_Udwnn1-lH6BDzU8cjq2JA&usqp=CAU",
            instahref:"https://www.instagram.com/sudo.mist/",
            linkedinhref:"https://www.linkedin.com/company/manipal-information-security-team",
            githubhref:"https://github.com/MIST1819",
        },
        {
            id:'4',
            name:"Aviral Gupta",
            profession:"Developer",
            description:"I make people cry with my jokes",
            imgsrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLAFXK2MihEQSj_Udwnn1-lH6BDzU8cjq2JA&usqp=CAU",
            instahref:"https://www.instagram.com/sudo.mist/",
            linkedinhref:"https://www.linkedin.com/company/manipal-information-security-team",
            githubhref:"https://github.com/MIST1819",
        },
      ];
      const card = items.map((item) => {
          return(
            <Card style={{ width: '20rem', height:'60vh', margin:'auto', color:'white', background:'transparent', border:'none' }}>
                <div style={{ margin:'auto'}}>
                    <Card.Img style={{borderRadius:'50%', width:'70%', display:'block', margin:'auto'}} src={item.imgsrc} />
                </div>
                <Card.Body>
                    <Card.Title>
                        <div style={{textAlign:'center', fontStyle:'bold', fontSize:'30px', paddingBottom:'10px'}}>{item.name}</div>
                        <div style={{textAlign:'center', fontSize:'20px'}}>{item.profession}</div>
                        <hr style={{color:'white', backgroundColor:'white', height:'2px'}}/>
                    </Card.Title>
                    <Card.Text>
                        <div style={{textAlign:'center', fontSize:'16px', paddingBottom:'10px'}}>
                            {item.description}
                        </div>
                        <Row style={{justifyContent:'center'}}>
                            <Col xs={4} md={2} className='my-3' style={{paddingRight:'60px'}}>
                                <a target="_blank" rel="noreferrer" href={item.instahref}>
                                    <Instagram onMouseEnter={() => onHover(item.id+1)} onMouseLeave={noHover} size={30} color={ hover && index===(item.id+1) ? '#009dff' : '#e3e5e5' }/>
                                </a>
                            </Col>
                            <Col xs={4} md={2} className='my-3' style={{paddingRight:'60px'}}>
                                <a target="_blank" rel="noreferrer" href={item.linkedinhref}>
                                    <Linkedin onMouseEnter={() => onHover(item.id+2)} onMouseLeave={noHover} size={30} color={ hover && index===(item.id+2) ? '#009dff' : '#e3e5e5' }/>
                                </a>
                            </Col>
                            <Col xs={4} md={2} className='my-3'>
                                <a target="_blank" rel="noreferrer" href={item.githubhref}>
                                    <GitHub onMouseEnter={() => onHover(item.id+3)} onMouseLeave={noHover} size={30} color={ hover && index===(item.id+3)? '#009dff' : '#e3e5e5' }/>
                                </a>
                            </Col>
                        </Row>
                    </Card.Text>
                </Card.Body>
            </Card>
          )
      })
        return (
        <>
            <Button style={{ color: '#009dff', backgroundColor: 'transparent', border: 'none', fontSize:'20px'}} ref={target} onClick={() => setShow(!show)}>Find us</Button>
            <Overlay target={target.current} show={show}>
            {({ arrowProps, show: _show, popper, ...props }) => (
                <div
                {...props}
                style={{
                    backgroundColor: 'rgba( 0, 0, 0, 0.75)',
                    padding: '10px 20px',
                    margin: 'auto',
                    height:'auto',
                    width:'100vw',
                    position:'fixed',
                    placement:'left-start',
                    color: 'white',
                    zIndex:'1',
                    borderRadius: 3,
                    ...props.style,
                }}
                >
                    <div style={{display:'inline', colour:'white'}}>
                        <Row className='p-md-5 align-items-center justify-content-center'>
                            {card}
                        </Row>
                    </div>
                </div>
            )}
            </Overlay>
        </>
        );
  }

  export default Credits;