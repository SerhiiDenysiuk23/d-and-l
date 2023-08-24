import React, {useContext} from 'react';
import {ReactComponent as BasketIcon} from '../../assets/icon/basket-icon.svg'
import {Link, useNavigate} from "react-router-dom";
import {StateContext} from "../../App";
import Popup from "../Popup";
import {ActionPoint} from "../../store/reducer";

const Header = () => {
  const {state, dispatch} = useContext(StateContext)
  const [isPopupOpen, setIsPopupOpen] = React.useState(false)
  const [isNavExpanded, setIsNavExpanded] = React.useState(false)
  const elementRef = React.useRef<HTMLHeadingElement>(null);
  const initialTop = 90
  const initialTopM = 50
  const nav = useNavigate()

  const handleBasketClick = () => {
    if (state.order.length > 0)
      nav('/basket')
    else
      setIsPopupOpen(true)
  }

  const handleToggleMenu = () => {
    setIsNavExpanded(prevState => !prevState)
  }

  React.useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) {
        return
      }
      const isMobile = window.screen.width < 557
      if (window.scrollY > initialTop && !isMobile) {
        dispatch({type: ActionPoint.SET_IS_SCROLLED, payload: true});
      } else if (window.scrollY > initialTopM && isMobile) {
        dispatch({type: ActionPoint.SET_IS_SCROLLED, payload: true});
      } else {
        dispatch({type: ActionPoint.SET_IS_SCROLLED, payload: false});
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [initialTop]);

  return (
    <>
      <header ref={elementRef} className={`${state.isScrolled ? "fixed " : ""} ${isNavExpanded ? "nav-expanded" : ''}`}>
        {
          !isNavExpanded &&
          <nav>
            <div className="logo"><Link to="/">D&L</Link></div>
            <ul>
              <li><Link to="/#menu">Menu</Link></li>
              <li><Link to="#contacts">Contacts</Link></li>
              <li onClick={handleBasketClick} className={'basket'}>
                <BasketIcon/>
                <div className={`indicator ${!state.order.length ? "indicator__no-display" : ""}`}/>
              </li>
              <li onClick={handleToggleMenu} className='burger-menu'>
                <div/>
                <div/>
                <div/>
              </li>
            </ul>
          </nav>
        }

        {
          isNavExpanded &&
          <nav className={'expanded'}>
            <ul>
              <li><Link to="/#menu">Menu</Link></li>
              <li><Link to="#contacts">Contacts</Link></li>
            </ul>
            <ul>
              <li onClick={handleToggleMenu} className='burger-menu'>
                <div/>
                <div/>
                <div/>
              </li>
            </ul>
          </nav>
        }

      </header>
      {
        isPopupOpen && <Popup closeFunc={setIsPopupOpen}/>
      }
    </>
  );
};

export default Header;