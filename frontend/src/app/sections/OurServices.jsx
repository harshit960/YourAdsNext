"use client"
import React, { useEffect, useRef } from 'react';
import CardService from '../components/CardService';
import { services } from '../constants';
import Tilt from 'react-parallax-tilt';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const OurServices = () => {
    const sectionRef = useRef(null);
    const cardsContainerRef = useRef(null);

    useEffect(() => {
        const section = sectionRef.current;
        const cards = cardsContainerRef.current;

        // Create the horizontal scroll animation
        let ctx = gsap.context(() => {
            gsap.to(cards, {
                x: () => -(cards.scrollWidth - window.innerWidth + 48), // 48px for padding
                ease: "none",
                scrollTrigger: {
                    trigger: section,
                    start: "top top",
                    end: () => `+=${cards.scrollWidth - window.innerWidth}`,
                    pin: true,
                    scrub: 1,
                    invalidateOnRefresh: true,
                }
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <div ref={sectionRef} className='our-services relative h-screen' id='3'>
            <div className='px-6 md:px-24 pt-12 md:pt-24'>
                <h2 className='font-heading text-[24px] md:text-[64px]'>
                    {services.heading}
                </h2>
            </div>
            
            <div 
                ref={cardsContainerRef}
                className='service-cards mt-7 md:mt-14 flex flex-nowrap gap-7 px-6 md:px-24'
            >
                {services.provides.map((provide, index) => (
                    <Tilt key={index} className='flex-shrink-0 w-[300px] md:w-[400px]'>
                        <CardService {...provide} />
                    </Tilt>
                ))}
            </div>
        </div>
    );
}

export default OurServices;