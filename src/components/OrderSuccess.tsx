import React from 'react';
import {ReactComponent as CheckMarkIcon} from "../assets/icon/check-mark-icon.svg";

const messages: string[] = [
  `Your order is on the way!\nWait for a call from delivery men:)`,
  'Your order is waiting for you!\nAnd we are waiting for you too:)'
]

const OrderSuccess = () => {



  return (
    <section className='order-success'>
      <div className='order-success__container'>
        <CheckMarkIcon/>
        <div className='order-success__message'>
          {messages[1]}
        </div>
      </div>
    </section>
  );
};

export default OrderSuccess;