import React, {useContext, useState} from 'react';
import OrderElem from "../elements/OrderElem";
import {useNavigate} from 'react-router-dom'
import {StateContext} from "../App";
import {ActionPoint} from "../store/reducer";

const ShoppingCart = () => {
  const {state, dispatch} = useContext(StateContext)
  const nav = useNavigate()
  const [deliveryType, setDeliveryType] = useState('delivery')

  const delivery = 2.5
  const pickup = -0.2

  const handleButtonClick = () => {
    dispatch({
      type: ActionPoint.SET_DELIVERY_PRICE,
      payload: (deliveryType === 'pickup' ? state.subTotal * pickup : delivery)
    })
    nav('/client-info')
  }

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDeliveryType(e.target.value)
  }

  const handleMessageInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {

  }

  return (
    <section className='container'>
      <div className="order">
        <div className='order__title'>Your order:</div>
        <table>
          <tbody>
          {
            state.order.map(item => <OrderElem key={item.item.id} order={item}/>)
          }
          </tbody>
        </table>
        <div className="order__separator"/>

        <table>
          <tbody>
          {/*<OrderElem/>*/}
          {/*<OrderElem/>*/}
          </tbody>
        </table>

        <div className="order__separator"/>

        <div className='order__title'>Proceed to check out</div>

        <div className="order__details">
          <div className="order__field">
            <div>Sub-total</div>
            <div>{state.subTotal.toFixed(2)} £</div>
          </div>

          {
            deliveryType === 'delivery' &&
            <div className="order__field">
              <div>Delivery</div>
              <div>2.50 £</div>
            </div>
          }
        </div>

        <div className="order__separator order__separator__big"/>

        <div
          className="order__title">Total {deliveryType === 'pickup' ? '(-20% for pick up)' : ""}
          <div>{(state.subTotal + (deliveryType === 'pickup'
            ? state.subTotal * pickup
            : delivery)).toFixed(2)} £
          </div>
        </div>
      </div>

      <div className="comment">
        <div className="comment__message">
          If you are allergic to one of the products or just want to remove something, write and we will take care of it
          :)
        </div>
        <textarea onChange={handleMessageInput} placeholder="left a comment"/>
      </div>

      <div className="radio-buttons">
        <input
          onChange={handleRadioChange}
          checked={deliveryType === 'pickup'}
          type="radio"
          id="pickup"
          name="delivery"
          value="pickup"/>
        <label htmlFor="pickup">
          <div className='custom-radio'/>
          Pick up</label>

        <input
          onChange={handleRadioChange}
          checked={deliveryType === 'delivery'}
          type="radio"
          id="delivery"
          name="delivery"
          value="delivery"/>
        <label htmlFor="delivery">
          <div className='custom-radio'/>
          Delivery</label>
      </div>

      <button onClick={handleButtonClick} className="green-button">Check out</button>
    </section>
  );
};

export default ShoppingCart;