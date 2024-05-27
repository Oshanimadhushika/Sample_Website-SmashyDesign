import React, { useState, useEffect, useRef } from 'react';
import sampleVideo from "../assets/sampleVideo.mp4";
// import './styles.css';

const VideoComponent = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const videoRef = useRef(null); 

  const handleScroll = () => {
    const videoRect = videoRef.current.getBoundingClientRect();
    
    const windowHeight = window.innerHeight;

    console.log('videoRect:', videoRect); 
    console.log('windowHeight:', windowHeight); 



  
    if (videoRect.top <= 0 || videoRect.bottom >= windowHeight) {
        setIsScrolled(false);
        console.log('isScrolled false:'); 

     } else {
        setIsScrolled(true);
        console.log('isScrolled true:'); 

      }
    
      };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      ref={videoRef}
      className={`transition-all duration-300 ease-in-out ${
        isScrolled ? 'fixed top-0 left-0 w-full h-full z-50 overflow-y-auto' : 'relative w-full h-auto'
      }`}
    >
      <video
        className="w-full h-full object-cover"
        src={sampleVideo}
        type="video/mp4"
        muted
        loop
        autoPlay
      ></video>
    </div>
  );
};

export default VideoComponent;
