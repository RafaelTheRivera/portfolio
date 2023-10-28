import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

const App = () => {
    return (
        <Router>
            <div className="app">
                <Header />
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />

                        {/* Portfolio will handle its internal routing */}
                        <Route path="/portfolio/*" element={<Portfolio />} />

                        <Route path="/contact" element={<Contact />} />
                        {/* Add more routes as needed */}
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    );
};

export default App;


