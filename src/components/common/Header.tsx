import React from 'react';
import {ReactComponent as BasketIcon} from '../../assets/icon/basket-icon.svg'
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <div className="logo"><Link to="/">D&L</Link></div>
        <ul>
          <li><Link to="/#menu">Menu</Link></li>
          <li><Link to="/#contacts">Contacts</Link></li>
          <li><Link to="/basket"><BasketIcon/></Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;