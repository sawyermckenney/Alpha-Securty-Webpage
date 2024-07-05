import React, { useEffect } from 'react';
import HeroSection from '../HeroSection'; // Ensure the relative path is correct
import '../../App.css'; // Ensure the path is correct
import Cards from '../Cards';
import Footer from '../Footer';
import backgroundVideo from '../videos/globeVideo.mp4'
function Home() {
  useEffect(() => {
      window.scrollTo(0, 0);
  }, []);
    return (
        <div className="home-page">
      <video 
        autoPlay 
        loop 
        muted 
        className="background-video"
      >
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
            <HeroSection />
            <Cards />
            <Footer />
        </div>        
    );
}
export default Home;
