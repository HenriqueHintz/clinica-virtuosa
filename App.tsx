import React from 'react';
import { SchemaMarkup } from './components/SchemaMarkup';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { Locations } from './components/Locations';
import { Testimonials } from './components/Testimonials';
import { Faq } from './components/Faq';
import { Footer } from './components/Footer';
import { FloatingCTA } from './components/FloatingCTA';
import { BottomCTA } from './components/BottomCTA';

function App() {
  return (
    <div className="font-sans antialiased text-gray-900 bg-white selection:bg-brand-200 selection:text-brand-900">
      <SchemaMarkup />
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Locations />
        <Testimonials />
        <Faq />
        <BottomCTA />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}

export default App;