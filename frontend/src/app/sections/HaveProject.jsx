"use client"
import React, { useEffect, useRef } from 'react';
import { whatsapp } from '../assets/icons';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const HaveProject = () => {
  const headingRef = useRef(null);

  useEffect(() => {
    // Create the animation
    const animation = gsap.fromTo(headingRef.current,
      {
        x: 1000, // Increased starting position (further right)
      },
      {
        x: 0, // End position (center)
        duration: 1.5, // Slightly increased duration
        ease: "power2.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top center+=100",
          end: "center center",
          scrub: 1.5, // Slightly increased scrub for smoother animation
          toggleActions: "play none none reverse"
        }
      }
    );

    // Cleanup
    return () => {
      animation.kill();
    };
  }, []);

  return (
    <section className='have-project relative text-center w-3/4 mx-auto mt-28 md:mt-36'>
        <h1 
          ref={headingRef}
          className='font-heading text-[40px] md:text-[120px] md:leading-[150px]'>
            <span className='text-primary'>Have a project</span> Lets Discuss
        </h1>
        <div className='get-in__touch mt-12 md:mt-24'>
            <a 
              href="https://wa.me/918252233759" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img 
                className='w-[60px] md:w-[120px] mx-auto px-2 py-2 drop-shadow-normal cursor-pointer hover:scale-105 transition-transform' 
                src={whatsapp.src}
                alt='whatsapp' 
              />
            </a>
        </div>
        <div className='bg-blur w-[300px] h-[300px] bg-primary rounded-full absolute left-[20%] -z-10 blur-template'></div>
    </section>
  )
}

export default HaveProject