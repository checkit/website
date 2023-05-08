import React from 'react';
import './LogoBlock.css';
import Logo1 from './logos/V3-Icon-White-1080x410-2.webp';
import Logo2 from './logos/logo-og-font-rectangle_480x480.webp';
import Logo3 from './logos/V3-Icon-White-1080x410-2.webp';

const LogoBlock: React.FC = () => {
  return (
    <div className="logo-block">
      <img className="logo" src={Logo1} alt="Logo 1" />
      <img className="logo" src={Logo2} alt="Logo 2" />
      <img className="logo" src={Logo3} alt="Logo 3" />
    </div>
  );
};

export default LogoBlock;
