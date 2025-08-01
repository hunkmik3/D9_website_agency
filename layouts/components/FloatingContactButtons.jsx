import Image from "next/image";
import React from "react";

const pulseKeyframes = `
@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(37,99,235,0.4), 0 2px 8px rgba(0,0,0,0.12);
  }
  70% {
    box-shadow: 0 0 0 12px rgba(37,99,235,0.0), 0 2px 8px rgba(0,0,0,0.12);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(37,99,235,0.0), 0 2px 8px rgba(0,0,0,0.12);
  }
}
`;

const shakeKeyframes = `
@keyframes shake {
  0% { transform: translateX(0) rotate(0); }
  10% { transform: translateX(-2px) rotate(-2deg); }
  20% { transform: translateX(2px) rotate(2deg); }
  30% { transform: translateX(-2px) rotate(-2deg); }
  40% { transform: translateX(2px) rotate(2deg); }
  50% { transform: translateX(-1px) rotate(-1deg); }
  60% { transform: translateX(1px) rotate(1deg); }
  70% { transform: translateX(-1px) rotate(-1deg); }
  80% { transform: translateX(1px) rotate(1deg); }
  90% { transform: translateX(0) rotate(0); }
  100% { transform: translateX(0) rotate(0); }
}
`;

const pulseStyle = {
  animation: 'pulse 1.6s infinite cubic-bezier(0.4,0,0.6,1)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: '#fff',
  borderRadius: '50%',
  boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
  padding: '8px',
  transition: 'transform 0.2s',
  cursor: 'pointer',
};

const shakeImgStyle = {
  animation: 'shake 1.5s infinite cubic-bezier(.36,.07,.19,.97)',
  display: 'block',
};

const FloatingContactButtons = () => {
  return (
    <>
      <style>{pulseKeyframes + shakeKeyframes}</style>
      <div style={{
        position: 'fixed',
        left: '24px',
        bottom: '32px',
        zIndex: 50,
        display: 'flex',
        flexDirection: 'column',
        gap: '18px',
        alignItems: 'center',
      }}>
        {/* Facebook */}
        <a href="https://www.facebook.com/D9.mediaagency" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
          style={pulseStyle}
          className="hover:scale-110">
          <span style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
            <Image src="/images/icon/facebook.png" alt="Facebook" width={40} height={40} style={shakeImgStyle} />
          </span>
        </a>
        {/* Zalo */}
        <a href="https://zalo.me/0354717576" target="_blank" rel="noopener noreferrer" aria-label="Zalo"
          style={pulseStyle}
          className="hover:scale-110">
          <span style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
            <Image src="/images/icon/zalo.png" alt="Zalo" width={40} height={40} style={shakeImgStyle} />
          </span>
        </a>
        {/* Phone */}
        <a href="tel:0354717576" aria-label="Điện thoại"
          style={pulseStyle}
          className="hover:scale-110">
          <span style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
            <Image src="/images/icon/phone.png" alt="Điện thoại" width={40} height={40} style={shakeImgStyle} />
          </span>
        </a>
      </div>
    </>
  );
};

export default FloatingContactButtons; 