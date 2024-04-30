import React, { useState, useEffect } from 'react';

function Footer() {
  // State to track if the colors are inverted
  const [inverted, setInverted] = useState(false);

  // Function to handle button click event
  const handleButtonClick = () => {
    // Toggle the inverted state
    setInverted(!inverted);
  };

  useEffect(() => {
    if (inverted) {
      document.body.style.backgroundColor = '#000'; // Set background to black when inverted
      document.body.style.color = '#fff'; // Set text color to white when inverted
    } else {
      document.body.style.backgroundColor = '#fff'; // Set background to white when not inverted
      document.body.style.color = '#000'; // Set text color to black when not inverted
    }
  }, [inverted]);

  return (
    <div>
      <button onClick={handleButtonClick}>Invert Colors</button>
    </div>
  );
}

export default Footer;