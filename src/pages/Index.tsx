
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Legacy from '../components/Legacy';
import Collections from '../components/Collections';
import Footer from '../components/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-raelan-bg text-raelan-offwhite">
      <Header />
      <Hero />
      <Legacy />
      <Collections />
      <Footer />
    </div>
  );
};

export default Index;
