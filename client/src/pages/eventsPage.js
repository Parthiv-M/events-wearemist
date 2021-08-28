import React from 'react';
import trophy from '../trophy.png';
import { Instagram, Mail, Send } from 'react-feather';

// renders upcoming, past or current events
const EventsPage = () => {
    return (
        <div className='container' style={{color:'white'}}>
            <h5 className='my-4 ml-4 '>BlockChain Essentials</h5>
            <div className='d-flex flex-wrap justify-content-center mt-3'>
                <img className='img mx-3 mb-3 z-1 border-0' src={trophy} style={{borderRadius:'10px'}} alt='abc'/>
                <div className='text d-flex flex-column my-0 py-0 px-1'>
                    <h5 className='subtitle pb-1' style={{color:'#6EE6B6'}}>About this Event</h5>
                    <div style={{fontSize:'0.75rem'}}>Blockchain is a shared, immutable ledger that facilitates the process of recording transactions and tracking assets in a business network. An asset can be tangible (a house, car, cash, land) or intangible (intellectual property, patents, copyrights, branding). 
                        Virtually anything of value can be tracked and traded on a blockchain network, reducing risk and cutting costs for all involved.</div>
                    <div className='d-flex flex-row justify-content-between my-2'>
                        <div className='my-2' ><span className='px-1' style={{borderRadius:'50px', border:'solid #6EE6B6 1px'}}>Internal Event</span></div>
                        <div className='my-2'>
                            <div style={{fontSize:'12px'}}>Share</div>
                            <Instagram size={20} style={{margin:'0 0.25rem 0 0'}}/>
                            <Send size={20} style={{margin:'0 0.25rem'}}/>
                            <Mail size={20} style={{margin:'0 0.25rem'}}/>
                        </div>
                    </div>
                    <div className='d-flex flex-wrap justify-content-start mt-2' style={{fontSize:'11px'}}>
                        <div className='mr-2 mb-1 px-1' style={{borderRadius:'50px', border:'solid #6EE6B6 1px'}}>Cryptography</div>
                        <div className='mr-2 mb-1 px-1' style={{borderRadius:'50px', border:'solid #6EE6B6 1px'}}>BlockChain</div>
                        <div className='mr-2 mb-1 px-1' style={{borderRadius:'50px', border:'solid #6EE6B6 1px'}}>Cryptocurrency</div>
                    </div>
                    <a className='mt-2' style={{fontSize:'13px', color:'#6EE6B6'}}>Register Now</a>
                </div>            
            </div>
            <div className='d-flex flex-wrap justify-content-around align-items-center'>
                <div className='text-center m-3 text-center'  style={{height:'10vmax'}}>
                    <div className='title pb-1' style={{width:'30vmax'}}><span>Date & Time</span></div>
                    <div className='pt-2'style={{fontSize:'11px', color:'#6EE6B6', width:'30vmax'}}>12th April.2021 18:00hr - 12th April.2021 20:00hr</div>
                </div>
                <div className='text-center m-3 text-center' style={{height:'10vmax'}} >
                    <div className='title pb-1' style={{width:'15vmax'}}><span>Speakers</span></div>
                    <div className='pt-2'style={{fontSize:'11px', color:'#6EE6B6', width:'15vmax'}}>Canary Grapher </div>
                </div>
                <div className='text-center m-3 text-center'  style={{height:'10vmax'}}>
                    <div className='title pb-1' style={{width:'15vmax'}}><span>Venue</span></div>
                    <div className='pt-2'style={{fontSize:'11px', color:'#6EE6B6', width:'15vmax'}}>Discord</div>
                </div>
            </div>
            <div className='text-center'>Other Ongoing Events</div>
        </div>
    );
}

export default EventsPage;