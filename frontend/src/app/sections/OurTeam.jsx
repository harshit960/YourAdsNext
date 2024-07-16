"use client"
import React from 'react';
import Team from '../components/Team';
import { ourTeam } from '../constants';
import { useParallax } from 'react-scroll-parallax';

const OurTeam = () => {
    
    const parallaxEasingCaption = useParallax({
        easing: 'easeOutQuad',
        translateX: [100, -100],
    });

    const parallaxEasingLeft = useParallax({
        easing: [1, -0.75, 0.5, 1.34],
        translateX: [0, -40],
        translateY: [0, 0],
    });
  
    return (
    <section className='our-team mt-12 md:mt-24 px-6 md:px-24 relative' id='5'>
        <div 
            ref={parallaxEasingCaption.ref}
            className='team-header flex flex-col gap-7 md:flex-row md:justify-between md:items-center'
        >
            <h2 className='font-heading text-[24px] md:text-[64px]'>{ourTeam.heading}</h2>
            <p className='text-[16px] md:text-[20px] md:w-2/3 justify-end'>{ourTeam.body}</p>
        </div>
        <div 
            ref={parallaxEasingLeft.ref}
            className='team-container mt-12 flex justify-around  w-[250vh]'
        >
            {
                ourTeam.team.map((member,index) => (
                    <Team key={index}
                        {...member}
                    />
                ))
            }
        </div>
        <div className='bg-blur w-[570px] h-[570px] bg-primary rounded-full absolute top-36 left-[30%] -z-10 blur-template'></div>
    </section>
  )
}

export default OurTeam