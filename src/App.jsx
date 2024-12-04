import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Articles from './pages/Articles';
import Article from './pages/Article';
import WaterRipple from './components/effects/WaterRipple';

function App() {
  return (
    <div className="min-h-screen bg-transparent">
      <WaterRipple />
      <div className="relative flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/articles/:slug" element={<Article />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;