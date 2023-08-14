import React from 'react';
import {Route, Routes} from "react-router-dom";
import Menu from "../Menu";
import ShoppingCart from "../ShoppingCart";
import Promotion from "../Promotion";
import ClientInfo from "../ClientInfo";
import CardInput from "../CardInput";
import OrderSuccess from "../OrderSuccess";
import useAnchorScroll from "../../hooks/useAnchorScroll";

const Content = () => {
  useAnchorScroll()

  return (
    <main>
      <Routes>
        <Route path='/' element={
          <><Promotion/><Menu/></>
        }/>
        <Route path='/basket' element={<ShoppingCart/>}/>
        <Route path='/client-info' element={<ClientInfo/>}/>
        <Route path='/payment' element={<CardInput/>}/>
        <Route path='/order-success' element={<OrderSuccess/>}/>
      </Routes>
    </main>
  );
};

export default Content;