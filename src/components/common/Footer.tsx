import React from 'react';
import {ReactComponent as LocationIcon} from '../../assets/icon/location-icon.svg'
import {ReactComponent as PhoneIcon} from '../../assets/icon/phone-icon.svg'
import {ReactComponent as ClockIcon} from '../../assets/icon/clock-icon.svg'
import MapContainer from "../GoogleApiWrapper";

const Footer = () => {
  const locationLink = 'https://www.google.com/maps/place/185+High+St,+Falkirk+FK1+1DU,+%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B1%D1%80%D0%B8%D1%82%D0%B0%D0%BD%D0%B8%D1%8F/@55.9985833,-3.7826754,17z/data=!4m6!3m5!1s0x48887a250edc99d5:0x6571ea5307c1ad2d!8m2!3d55.9986913!4d-3.7817313!16s%2Fg%2F11rg5_1_3p?entry=ttu'

  return (
    <footer>
      <div className="contacts">
        <div id='contacts' className="logo">D&L</div>
        <ul>
          <li><LocationIcon/><a target="_blank" href={locationLink}>FK11DU Falkirk 185-187 Hight Street</a></li>
          <li><PhoneIcon/>(406) 555-0120</li>
          <li><ClockIcon/><div>09:00 - 18:00<br/>without days off</div></li>
        </ul>
      </div>
      {/*<div>*/}
      {/*  <MapContainer/>*/}
      {/*</div>*/}
    </footer>
  );
};

export default Footer;