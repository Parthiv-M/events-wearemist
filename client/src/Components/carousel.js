import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Badge from 'react-bootstrap/Badge'

const EventsCarousel = () => {

    const items = [
        {
          src: "https://s3-alpha-sig.figma.com/img/eb0a/0f54/a2f897f34533d70093e7e4b3b05c4d0f?Expires=1619395200&Signature=YW8HVNVzmYrrT6qe4-2o4Oz5RDe9o3yjecIgsDxdIMKddKgo3Y4eFAFx3lr4usGSlHhKfY1tCnTzwGjbIcZM95lPYshEAcvdr7bi1nDUOUn4e8JnQS7eUk~9v4FLG~J4FhoxGs7qJBQd01oJgXOqRMrWDKFDdppsqhjS71JdKK4wQForZtTszOoO9cXaixtE~9ikrhUO913R1SZuzgBU6BMSuWKpcYEj071wYGwXvEII-xq9AZ4NBPRh8btBm73pw~6YHD7OSdJNdkGKoJCI-bmdQUhdwVhejbDB-KJjbS314q3Mxr~xWBVRRCNwLt~1EsvN7NE936vaPQJNYSWZhw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
          name:"BlockChain Essentials",
            platform:"Discord",
            speakers:["Yash Aryan"],
            date:"12th April, 2021",
            time:"18:00hr",
            badges:["Blockchain", "Cryptocurrency"],
        },
        {
          src: "https://s3-alpha-sig.figma.com/img/571c/ef50/9b5a1fcbaa72372cbfde73c83b4e913d?Expires=1619395200&Signature=TOA9wKv3ZnyFGMh5jrTOGhv0v-yb5aB8ech8q-4l~3xm8Njoj13R0eZ8RA2uGlGCRFs8T05z~0I1-xAuwjPUnPR1-bOB~DOpdAVGj4kXajCz7ZOFZVLSLTdT7~96v7vT1hxMYwZhIYv5xu06K4u7peiOOycuzlVYEcH1YoOrUMDXYVwIN~PyGoK1s6kAlHkOhhNcQFBuIF1M2ha4w8jcvbn2BwbdI1HDBGH8SWj3GFhUkyfB9l0Tnyrm8zsePL11VoDDpvS3JfaN90zE~SBfYdCbf8ytL4hCAgfGJpW8mpiPdN4Tl-7F7BR7uGafTfZi1oW9V-0Ejj0Skz4L0tYEKA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
          name:"WebDev Webinar",
            platform:"Teams",
            speakers:["Parthiv Menon", "Aviral Gupta"],
            date:"02 April, 2021",
            time:"17:30hr",
            badges:["WebDev"],
        },
        {
          src: "https://s3-alpha-sig.figma.com/img/98d3/5ead/5259ceeeefcbd3ce251a513b50df8fb6?Expires=1619395200&Signature=ekYepV6OUsZgiY5PwLFZOhZTleJEr6-~HX8IXoCJ7lMjwPkEA8d7h5OYSkqX92Nm5uk8qrduGc1297au28MYFM5HT-bhWnirBysSHYUxOf0ukip2jaP382MjgyOlZYsSBni~ZYDJp-OACIims7jdGNo4GnpRDPSeiqWfalebrKgcs58HAhGISJj1HWvjjggTNvIRRBK6yFXiIpKrk1YJzMONDvUq22oqgaaquaQRpFzHKambzvk-WVeqs5uWJnZ6rjUgXYyN~mhJivltwJZ~PlnDTZDx3Wk4F1Y2eocwgE61tHyIgmyOtAWhiZAUEbAx380ox0HAg0JOBfqD4V1wvQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
          name:"Having Fun",
            platform:"House Party",
            speakers:["Nithin Chowdary"],
            date:"01 April, 2021",
            time:"00:00hr",
            badges:["PersonalDevelopment"],
        }
      ];
    const slides = items.map((item) => {
        return (
            <Carousel.Item style={{height:'100vh', width:'96vw', padding:'40px 0', backgroundColor:'#E8E8E8'}}>
                <div style={{textAlign:'center'}}>
                    <img
                    src={item.src}
                    height="400px"
                    width="500px"
                    class="center"
                    />
                </div>
                <Carousel.Caption style={{paddingTop:'50px'}}>
                    <div>
                        <h3 style={{textAlign:'left'}}>
                            {item.name}
                            <span style={{display:'inline-block',width:"100px"}}></span> 
                            <i className='fas fa-map-marker-alt' style={{fontSize:'24px'}}></i>
                            <span style={{display:'inline-block',width:"10px"}}></span> 
                            <span style={{fontSize:'20px'}}>{item.platform}</span>
                        </h3>
                    </div>
                    <hr style={{color:'black', backgroundColor:'black', height:'2px'}}/>
                    <h4 style={{textAlign:'left', color:'#808080'}}>
                            {item.speakers.map((speaker) =>
                            {
                                return(
                                    <>{speaker}<span style={{display:'inline-block',width:"20px"}}></span></>
                                )
                            })}
                            <span style={{fontSize:'20px',  float:'right'}}>{item.date}{' '}{item.time}</span>
                    </h4>
                    <br/>
                    <div style={{textAlign:'left'}}>
                        {
                            item.badges.map((badge) =>
                            {
                                return(
                                    <span style={{fontSize:'30px'}}>
                                        <Badge pill variant="primary" style={{ backgroundColor:'#808080'}}>{badge}</Badge>{ "   "}
                                    </span>
                                )
                            })
                        }
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        );
    })
    return(
        <div className='container'>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Carousel >
                    {slides}
                </Carousel>
            </div>
        </div>
    )
}

export default EventsCarousel;