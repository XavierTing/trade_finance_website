import { useState } from 'react';
import heroBg from '../../assets/hero-bg.mp4';

const Hero = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden">
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        onLoadedData={() => setVideoLoaded(true)}
        style={{ willChange: 'transform', transform: 'translateZ(0) scale(1.08)', transformOrigin: 'top left' }}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-out ${
          videoLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <source src={heroBg} type="video/mp4" />
      </video>
    </section>
  );
};

export default Hero;
