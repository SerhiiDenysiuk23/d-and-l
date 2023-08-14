import React, {useContext} from 'react';
import InputField from "../elements/InputField";
import {ReactComponent as VisaIcon} from "../assets/icon/visa-icon.svg";
import {ReactComponent as MastercardIcon} from "../assets/icon/mastercard-icon.svg";
import {useNavigate} from "react-router-dom";
import {StateContext} from "../App";

const CardInput = () => {
  const nav = useNavigate()
  const {state, dispatch} = useContext(StateContext)
  const handleSubmit = () => {
    nav('/order-success')
  }

  return (
    <section className='card-input'>
      <div className='card-input__container'>
        <div className='card-icons'>
          <VisaIcon/>
          <MastercardIcon/>
        </div>

        <div className='card-input__message'>
          Pay with Credit/Debit card
        </div>

        <div className='card-input__fields'>
          <InputField placeholder="Name on card"/>
          <InputField placeholder="Card number"/>
          <div className='card-input__field-row'>
            <InputField placeholder="Expiration date"/>
            <InputField placeholder="Security code"/>
          </div>
        </div>
      </div>

      <div className="card-input__total">
        <div>Total: </div>
        <div>19.4 £</div>
      </div>

      <button onClick={handleSubmit} className="green-button">Confirm the payment</button>
    </section>
  );
};

export default CardInput;