import Overlay from 'react-bootstrap/Overlay'
import { useState, useRef} from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Example() {
    const [show, setShow] = useState(false);
    const target = useRef(null);
  
    const items = [
        {
            name:"Parthiv Menon",
            profession:"Developer, Designer",
            description:"Full stack web developer oozing with enthusiasm",
        },
        {
            name:"Pal Chheda",
            profession:"Developer",
            description:"Chechi: THE BOSS LADY",
        },
        {
            name:"Nithin Chowdary",
            profession:"Designer",
            description:"Cyber Enthusiast with a bit of creativity",
        },
        {
            name:"Aviral Gupta",
            profession:"Developer",
            description:"I make people cry with my jokes",
        },
      ];
      const card = items.map((item) => {
          return(
            <Card style={{ width: '20rem', height:'60vh', margin:'auto', color:'white', background:'transparent', border:'none' }}>
                <div style={{ margin:'auto'}}>
                    <Card.Img style={{borderRadius:'50%', width:'70%', display:'block'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLAFXK2MihEQSj_Udwnn1-lH6BDzU8cjq2JA&usqp=CAU" />
                </div>
                <Card.Body>
                    <Card.Title>
                        <div style={{textAlign:'center', fontStyle:'bold', fontSize:'30px'}}>{item.name}</div>
                        <div style={{textAlign:'center', fontSize:'18px'}}>{item.profession}</div>
                        <hr style={{color:'white', backgroundColor:'white', height:'2px'}}/>
                    </Card.Title>
                    <Card.Text>
                        <div style={{textAlign:'center', fontSize:'15px'}}>
                            {item.description}
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>
          )
      })
        return (
        <>
            <Button variant="primary" style={{margin:'20px', backgroundColor:'black'}} ref={target} onClick={() => setShow(!show)}>
            Click me to see
            </Button>
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

  export default Example;