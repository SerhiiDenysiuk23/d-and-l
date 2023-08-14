import React from 'react';
import OrderElem from "../elements/OrderElem";
import {useNavigate} from 'react-router-dom'

const ShoppingCart = () => {

  const nav = useNavigate()

  const handleButtonClick = () => {
    nav('/client-info')
  }

  return (
    <section>
      <div className="order">
        <div className='order__title'>Your order:</div>
        <table>
          <tbody>
          <OrderElem/>
          <OrderElem/>
          </tbody>
        </table>
        <div className="order__separator"/>

        <table>
          <tbody>
          <OrderElem/>
          <OrderElem/>
          </tbody>
        </table>

        <div className="order__separator"/>

        <div className='order__title'>Proceed to check out</div>

        <div className="order__details">
          <div className="order__field">
            <div>Sub-total</div>
            <div>16.9 £</div>
          </div>

          <div className="order__field">
            <div>Delivery</div>
            <div>2.50 £</div>
          </div>
        </div>

        <div className="order__separator order__separator__big"/>

        <div className="order__title">Total <div>19.4 £</div></div>
      </div>
      <div className="comment">
        <div className="comment__message">
          If you are allergic to one of the products or just want to remove something, write and we will take care of it :)
        </div>
        <textarea placeholder="left a comment"/>
      </div>
      <div className="radio-buttons">
        <input type="radio" id="pickup" name="delivery" value="pickup"/>
        <label htmlFor="pickup"><div className='custom-radio'/>Pick up</label>

        <input type="radio" id="delivery" name="delivery" value="delivery"/>
        <label htmlFor="delivery"><div className='custom-radio'/>Delivery</label>
      </div>

      <button onClick={handleButtonClick} className="green-button">Check out</button>
    </section>
  );
};

export default ShoppingCart;