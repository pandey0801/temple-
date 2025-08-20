import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Procedure from '../components/Procedure';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Home = () => {
  return (
    <div>
      <Header/>
      <Hero />
      <Services />
      <About />
      <Procedure />
      <Testimonials />
      <FAQ />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Home;