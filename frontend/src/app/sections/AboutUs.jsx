"use client"
import React, { useEffect, useRef } from 'react';
import { videoPlayer } from '../assets/images';
import { aboutUs } from '../constants';
import { play } from '../assets/icons';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const sectionRef = useRef(null);
  const videoPlayerRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoPlayerRef.current;
    const content = contentRef.current;

    // Create timeline for smooth animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top center",
        end: "bottom center",
        scrub: 1.5, // Smooth scrubbing effect
      }
    });

    // Animate video player from left
    tl.fromTo(video, {
      x: -100,
      opacity: 0,
    }, {
      x: 0,
      opacity: 1,
      duration: 1,
    });

    // Animate content from right
    tl.fromTo(content, {
      x: 100,
      opacity: 0,
    }, {
      x: 0,
      opacity: 1,
      duration: 1,
    }, "-=1"); // Start slightly before video animation ends

    // Cleanup
    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section ref={sectionRef} className='about-us -mt-96 md:-mt-56 px-6 md:px-24' id='2'>
        <div 
          ref={videoPlayerRef}
          className='video-player w-full h-[245px] md:h-[640px] mx-auto md:relative'>
            <img src={videoPlayer.src} alt='video-player' />
        </div>
        <div 
          ref={contentRef}
          className={`about-us__body mt-12 md:mt-24 flex flex-col md:flex-row md:items-center gap-4 md:justify-between`}>
            <h2 className='font-heading text-[24px] md:text-[64px]'>{aboutUs.heading}</h2>
            <p className='text-[16px] md:text-[20px] w-full md:w-2/3 text-justify'>{aboutUs.body}</p>
        </div>
    </section>
  )
}

export default AboutUs