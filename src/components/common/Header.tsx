import React, {useContext} from 'react';
import {ReactComponent as BasketIcon} from '../../assets/icon/basket-icon.svg'
import {Link} from "react-router-dom";
import {StateContext} from "../../App";

const Header = () => {
  const {state} = useContext(StateContext)

  return (
    <header>
      <nav>
        <div className="logo"><Link to="/">D&L</Link></div>
        <ul>
          <li><Link to="/#menu">Menu</Link></li>
          <li><Link to="/#contacts">Contacts</Link></li>
          <li style={{position: "relative"}}><Link to="/basket"><BasketIcon/>
            <div className={`indicator ${!state.order.length ? "indicator__no-display" : ""}`}/>
          </Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;