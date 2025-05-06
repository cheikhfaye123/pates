import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import NewsPage from './pages/NewsPage';
import FeedbackPage from './pages/FeedbackPage';
import FranchisingPage from './pages/FranchisingPage';
import MenuPage from './pages/MenuPage';
import LocationsPage from './pages/LocationsPage';
import CareerPage from './pages/CareerPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/feedback" element={<FeedbackPage />} />
            <Route path="/franchising" element={<FranchisingPage />} />
            <Route path="/locations" element={<LocationsPage />} />
            <Route path="/career" element={<CareerPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;