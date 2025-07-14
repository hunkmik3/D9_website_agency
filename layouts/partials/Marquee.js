import React from "react";

const Marquee = ({ text }) => (
  <div className="marquee-wrapper" style={{ padding: '4px 0', background: '#0366b0' }}>
    <div
      className="marquee-content"
      style={{
        fontFamily: 'Montserrat, Arial, sans-serif',
        fontWeight: 700,
        textAlign: 'center',
        color: '#fff',
        letterSpacing: '0.5px',
        fontSize: '16px',
        padding: '0 16px',
        width: '100%',
        boxSizing: 'border-box',
      }}
    >
      {text}
    </div>
  </div>
);

export default Marquee; 