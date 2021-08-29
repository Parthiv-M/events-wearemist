import React from 'react';

const EventCard = () => {
    const ShStyle = {
        color: "#FFFFFF",
        fontFamily: "Roboto",
        fontSize: "2.1875rem",
        fontWeight: "bold",
      };
    return (
        <Container >
      <Row >
        <Col lg={4} >
          <Container >
            <img
              src="40.png"
              style={{ width: "425px", height: "425px" }}
              alt=""
            />
          </Container>
        </Col>
        <Col lg={8}   style={{ backgroundColor: "#11161E" }}>
          <Container>
            <h1
              class={"subtitlea"}
              style={{
                color: "#6EE6B6",
                fontFamily: "Roboto",
                fontSize: "3rem",
              }}
            >
              WebDev Webinar
            </h1>
            <p
              style={{
                color: "#FFFFFF",
                fontFamily: "Roboto",
                fontSize: "1.875rem",
              }}
            >
              Internal Event
            </p>
          </Container>
          <Container  >
            <Row>
              <Col>
                <h1 class={"subtitle"} style={ShStyle}>
                  Venue
                </h1>
                <p
                  style={{
                    color: "#FFFFFF",
                    fontFamily: "Roboto",
                    fontSize: "2.1875rem",
                  }}
                >
                  Teams
                </p>
              </Col>
              <Col>
                <h1 class={"subtitle"} style={ShStyle}>
                  Speakers
                </h1>
                <p
                  style={{
                    color: "#FFFFFF",
                    fontFamily: "Roboto",
                    fontSize: "2.1875rem",
                  }}
                >
                  Parthiv and Aviral
                </p>
              </Col>
            </Row>
          </Container>
          <Container>
            <h1 class={"subtitle"} style={ShStyle}>
              Date and Time
            </h1>
            <Row>
              <Col>
                <p
                  style={{
                    color: "#FFFFFF",
                    fontFamily: "Roboto",
                    fontSize: "2.1875rem",
                  }}
                >
                  Aug 11th, 21:00{" "}
                  <span
                    style={{
                      height: "50px",
                      width: "50px",
                      borderRadius: "50%",
                      color: "#12141A",
                      fontFamily: "Roboto",
                      fontSize: "1.5rem",
                      background: "#6EE6B6",
                      padding: "0.5rem 0.5rem 0.5rem 0.75rem",
                      marginLeft: "2rem",
                      marginRight: "2rem",
                    }}
                  >
                    To
                  </span>
                  Aug 11th, 23:00
                </p>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
    );
}

export default EventCard;