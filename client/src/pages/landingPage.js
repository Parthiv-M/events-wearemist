import React from 'react';
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';
import trophy from '../trophy.png';
import {MapPin} from 'react-feather';

const LandingPage = () => {
    return (
        <div className='container text-center' style={{color:'white'}}>
            <h1 className='text-white pb-0 mb-0'>Events</h1>
            <h6 className='text-muted fw-light'>Events by MIST</h6>
            <div className='text-white-50 my-4'>This page keeps a tab of all the events Manipal Information Security Team conducts for 
                cybersecurity enthusiasts and technology nerds. Keep track of our events to stay abreast 
                with the latest in the cyber world</div>
            <h2 className='text-primary'>Ongoing Events</h2>
            <OwlCarousel className='owl-theme h-50' loop margin={10} nav items={1} center dots={false} 
            autoplayHoverPause={true} autoplaySpeed={2000}
            autoplay={true} navText={['<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left"><polyline points="15 18 9 12 15 6"></polyline></svg>',
            '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>']}
            >
                <div className='item my-4 position-relative card'>
                    <img className='mx-auto z-1 border-0' src={trophy} style={{height:'auto', width:'80vmin'}} alt='abc'/>
                    <div className='navitem mx-auto z-2 py-2' style={{bottom:'0.7rem', right:'0', left:'0rem', height:'auto', width:'80vmin'}}>
                        <div className='d-flex flex-column justify-content-center'>
                            <h5><span className='pb-1 title' >BlockChain Essentials</span></h5>
                            <div style={{fontSize:'0.8rem'}}>by Yash Aryan</div>
                            <div className='mt-3' style={{fontSize:'0.8rem'}}>12th April, 2021  18:00hr   -  12th April,2021 20:00hr</div>
                            <div className='d-flex flex-wrap justify-content-center mt-2'>
                                <div className='mx-1 mb-1 px-1 tag' style={{borderRadius:'50px'}}>Cryptography</div>
                                <div className='mx-1 mb-1 px-1 tag' style={{borderRadius:'50px'}}>BlockChain</div>
                                <div className='mx-1 mb-1 px-1 tag' style={{borderRadius:'50px'}}>Internal</div>
                            </div>
                            <div className='d-flex flex-row justify-content-between mt-3' style={{fontSize:'0.8rem'}}>
                                <div className='mx-2'><MapPin size={15} color='#6EE6B6'/> DISCORD</div>
                                <a className='mx-2' style={{color:'#6EE6B6'}} href='/'>Register now </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='item my-4 position-relative card'>
                    <img className='mx-auto z-1 border-0' src={trophy} style={{height:'auto', width:'80vmin'}} alt='abc'/>
                    <div className='navitem mx-auto z-2 py-2' style={{bottom:'0.7rem', right:'0', left:'0rem', height:'auto', width:'80vmin'}}>
                        <div className='d-flex flex-column justify-content-center'>
                            <h5><span className='pb-1 title' >BlockChain Essentials</span></h5>
                            <div style={{fontSize:'0.8rem'}}>by Yash Aryan</div>
                            <div className='mt-3' style={{fontSize:'0.8rem'}}>12th April, 2021  18:00hr   -  12th April,2021 20:00hr</div>
                            <div className='d-flex flex-wrap justify-content-center mt-2'>
                                <div className='mx-1 mb-1 px-1 tag' style={{borderRadius:'50px'}}>Cryptography</div>
                                <div className='mx-1 mb-1 px-1 tag' style={{borderRadius:'50px'}}>BlockChain</div>
                                <div className='mx-1 mb-1 px-1 tag' style={{borderRadius:'50px'}}>Internal</div>
                            </div>
                            <div className='d-flex flex-row justify-content-between mt-3' style={{fontSize:'0.8rem'}}>
                                <div className='mx-2'><MapPin size={15} color='#6EE6B6'/> DISCORD</div>
                                <a className='mx-2' style={{color:'#6EE6B6'}} href='/'>Register now </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='item my-4 position-relative card'>
                    <img className='mx-auto z-1 border-0' src={trophy} style={{height:'auto', width:'80vmin'}} alt='abc'/>
                    <div className='navitem mx-auto z-2 py-2' style={{bottom:'0.7rem', right:'0', left:'0rem', height:'auto', width:'80vmin'}}>
                        <div className='d-flex flex-column justify-content-center'>
                            <h5><span className='pb-1 title' >BlockChain Essentials</span></h5>
                            <div style={{fontSize:'0.8rem'}}>by Yash Aryan</div>
                            <div className='mt-3' style={{fontSize:'0.8rem'}}>12th April, 2021  18:00hr   -  12th April,2021 20:00hr</div>
                            <div className='d-flex flex-wrap justify-content-center mt-2'>
                                <div className='mx-1 mb-1 px-1 tag' style={{borderRadius:'50px'}}>Cryptography</div>
                                <div className='mx-1 mb-1 px-1 tag' style={{borderRadius:'50px'}}>BlockChain</div>
                                <div className='mx-1 mb-1 px-1 tag' style={{borderRadius:'50px'}}>Internal</div>
                            </div>
                            <div className='d-flex flex-row justify-content-between mt-3' style={{fontSize:'0.8rem'}}>
                                <div className='mx-2'><MapPin size={15} color='#6EE6B6'/> DISCORD</div>
                                <a className='mx-2' style={{color:'#6EE6B6'}} href='/'>Register now </a>
                            </div>
                        </div>
                    </div>
                </div>
            </OwlCarousel> 
        </div>
    );
}

export default LandingPage;