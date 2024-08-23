import React from 'react';
import './Partners.css';

const Partners = () => {
  const handleButtonClick = () => {
    alert('Thank you for your interest in becoming a partner! We will contact you shortly.');
  };

  return (
    <div className="partners-container">
    <header className="partners-header">
      <h1>Partnerships</h1>
      <p>
        We are thrilled to announce our successful collaboration with Adobe, Microsoft, Oracle, AWS, and Partner Computer Training which has enabled us to provide unparalleled opportunities and resources to our participants. Together, we are committed to fostering innovation and excellence in the IT industry.
      </p>
    </header>
    <div className="partners">
      <img src="microsoft-logo.png" alt="Microsoft" />
      <img src="adobe-logo.png" alt="Adobe" />
      <img src="oracle-logo.png" alt="Oracle" />
      <img src="aws-logo.png" alt="AWS" />
      <img src="partner-logo.png" alt="Partner Computer Training" />
    </div>
    <footer>
      <p>
        Ready to Shape the Future of IT? Join Us in Driving Innovation and Excellence! Partner with us to unlock unparalleled opportunities and resources in the IT industry.
      </p>
      <button onClick={handleButtonClick} id="partnerButton">
        Become a partner
      </button>
    </footer>
  </div>
  );
}

export default Partners;