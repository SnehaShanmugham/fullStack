import React from 'react';
import '../assets/css/Privacy.css'
import Navbar from '../component/Header/Navbar';
import Footer from '../component/Footer/Footer';

const PrivacyPolicy = () => {
  return (
    <div>
        <Navbar/>
    <div className="privacy-policy-container">
      <h1 className="privacy-policy-title"><b>Boathouse Voyager Privacy Policy</b></h1>
      <p className="privacy-policy-text">
        This Privacy Policy describes how Boathouse Voyager ("we", "us", or
        "our") collects, uses, and discloses your personal information when
        you use our website (the "Website") and any related services (the
        "Services"). It also describes the choices you have available to you
        regarding your personal information and how you can access and update
        it.
      </p>
      <h2>Information We Collect</h2>
      <p className="privacy-policy-text">
        We collect several different types of information for various purposes
        to improve our Services to you.
      </p>
      <h3>Personal Information</h3>
      <p className="privacy-policy-text">
        When you use the Website or Services, we may collect certain personal
        information that can directly or indirectly identify you. This may
        include:
      </p>
      <ul className="privacy-policy-list">
        <li className="privacy-policy-list-item">Email address</li>
        <li className="privacy-policy-list-item">Name</li>
        <li className="privacy-policy-list-item">Phone number (optional)</li>
      </ul>
      <p className="privacy-policy-text">
        We collect this information when you:
      </p>
      <ul className="privacy-policy-list">
        <li className="privacy-policy-list-item">Create an account on the Website</li>
        <li className="privacy-policy-list-item">Contact us through a form or email</li>
        <li className="privacy-policy-list-item">Subscribe to our newsletter</li>
      </ul>
      <h3>Non-Personal Information</h3>
      <p className="privacy-policy-text">
        We also collect non-personal information that does not directly
        identify you. This may include:
      </p>
      <ul className="privacy-policy-list">
        <li className="privacy-policy-list-item">Usage data, such as pages visited and time spent on the Website</li>
        <li className="privacy-policy-list-item">Device information, such as your IP address, browser type, and
        operating system</li>
      </ul>
      <p className="privacy-policy-text">
        We collect this information through cookies and other similar
        technologies.
      </p>
      <h2>How We Use Your Information</h2>
      <p className="privacy-policy-text">
        We use the information we collect for various purposes, including:
      </p>
      <ul className="privacy-policy-list">
        <li className="privacy-policy-list-item">To provide and maintain the Website and Services</li>
        <li className="privacy-policy-list-item">To respond to your inquiries and requests</li>
        <li className="privacy-policy-list-item">To send you information about our products and services</li>
        <li className="privacy-policy-list-item">To improve the Website and Services</li>
        <li className="privacy-policy-list-item">For security and fraud prevention purposes</li>
      </ul>
      {/* Rest of the content remains unchanged... */}
    </div>
    <Footer/>
    </div>
  );
};

export default PrivacyPolicy;