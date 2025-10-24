import React from 'react';
import Hero from './components/Hero.jsx';
import CodeSnippet from './components/CodeSnippet.jsx';
import TrustBar from './components/TrustBar.jsx';
import Footer from './components/Footer.jsx';

const App = () => {
  return (
    <div className="min-h-screen bg-neutral-950 text-white antialiased">
      <Hero />
      <CodeSnippet />
      <TrustBar />
      <Footer />
    </div>
  );
};

export default App;
