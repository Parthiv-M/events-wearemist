import Overlay from 'react-bootstrap/Overlay'
import { useState, useRef} from 'react';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'


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
            <Card style={{ width: '18rem', height:'70vh', margin:'auto' }}>
                <div style={{padding:'30px'}}>
                    <Card.Img style={{borderRadius:'50%'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLAFXK2MihEQSj_Udwnn1-lH6BDzU8cjq2JA&usqp=CAU" />
                </div>
                <Card.Body>
                    <Card.Title><h1>{item.name}</h1></Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
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
                    padding: '100px 20px',
                    margin: 'auto',
                    height:'auto',
                    width:'95vw',
                    position:'static',
                    color: 'white',
                    borderRadius: 3,
                    ...props.style,
                }}
                >
                    <div style={{display:'inline'}}>
                        {card}
                    </div>
                </div>
            )}
            </Overlay>
        </>
        );
  }

  export default Example;