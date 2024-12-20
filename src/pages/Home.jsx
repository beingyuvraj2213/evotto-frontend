import React from 'react';
import '../styles/Home.css';
import '../App.css'
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Services from '../components/Services';
import Chatbox from '../components/Chatbox';
import SocialLinks from '../components/SocialLinks';

const Home = () => {
  return (
    <>
    <Navbar/>
    <div className="home">
      <header className="hero-section">
        <HeroSection/>
      </header>
      <section className="services">
        <Services/>
      </section>
      <section className='social-links'>
      <SocialLinks/>
      </section>
      <Chatbox/>
    </div>
    <Footer/>
    </>
  );
};

export default Home;
