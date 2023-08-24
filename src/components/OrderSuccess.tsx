import React, {useContext} from 'react';
import {ReactComponent as CheckMarkIcon} from "../assets/icon/check-mark-icon.svg";
import {StateContext} from "../App";

const messages: string[] = [
  `Your order is on the way!\nWait for a call from delivery men:)`,
  'Your order is waiting for you!\nAnd we are waiting for you too:)'
]

const OrderSuccess = () => {
  const {state, dispatch} = useContext(StateContext)



  return (
    <section className='order-success'>
      <div className='order-success__container'>
        <CheckMarkIcon/>
        <div className='order-success__message'>
          {
            state.deliveryPrice >= 0
              ? messages[0]
              : messages[1]
          }
        </div>
      </div>
    </section>
  );
};

export default OrderSuccess;