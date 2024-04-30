import React, { useState } from 'react';

function Footer() {
  // State to track if the colors are inverted
  const [inverted, setInverted] = useState(false);

  // Function to handle button click event
  const handleButtonClick = () => {
    // Toggle the inverted state
    setInverted(!inverted);
  };

  // Apply the 'invert-colors' class to the body based on the 'inverted' state
  document.body.classList.toggle('invert-colors', inverted);

  return (
    <div>
      <button onClick={handleButtonClick}>Invert Colors</button>
    </div>
  );
}

export default Footer;