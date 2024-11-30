import React from 'react';
import {Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MainPage from './components/MainPage';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import ProductGrid from './components/ProductGrid';
import SignupNavbar from './components/SignupNavbar';
import SignUpForm from './components/SignupForm';
import Login from './components/Login';

const App = () => {
  return (

    <Routes>
      {/* Main route (Navbar + MainPage + Footer) */}
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <MainPage />
            <Footer />
          </>
        }
      />
      <Route
        path="/signup"
        element={
          <>
            
            <SignupNavbar />
            <SignUpForm />
            <Footer />
          </>
        }
      />

      {/* Landing route (Navbar + HeroSection + Features + ProductGrid + Footer) */}
      <Route
        path="/Landing"
        element={
          <>
            <Navbar />
            <HeroSection />
            <Features />
            <ProductGrid />
            <Footer />
          </>
        }
      />
      <Route
        path="/login"
        element={
          <>
            <SignupNavbar />
            <Login />
            <Footer />
          </>
        }
      />
    </Routes>
  );
};

export default App;
