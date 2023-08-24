import React, {useContext} from 'react';
import InputField from "../elements/InputField";
import {ReactComponent as VisaIcon} from "../assets/icon/visa-icon.svg";
import {ReactComponent as MastercardIcon} from "../assets/icon/mastercard-icon.svg";
import {useNavigate} from "react-router-dom";
import {StateContext} from "../App";

const cardDataInit = {
  name: "",
  number: "",
  expiration: "",
  code: ""
}

const CardInput = () => {
  const nav = useNavigate()
  const {state, dispatch} = useContext(StateContext)
  const handleSubmit = () => {
    nav('/order-success')
  }

  const [cardData, setCardData] = React.useState(cardDataInit)

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardData({...cardData, name: e.target.value})
  }
  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardData({...cardData, number: e.target.value})
  }
  const handleExpirationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardData({...cardData, expiration: e.target.value})
  }
  const handleCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardData({...cardData, code: e.target.value})
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
          <InputField onChange={handleNameChange} value={cardData.name} placeholder="Name on card"/>
          <InputField onChange={handleNumberChange} value={cardData.number} placeholder="Card number"/>
          <div className='card-input__field-row'>
            <InputField onChange={handleExpirationChange} value={cardData.expiration} placeholder="Expiration date"/>
            <InputField onChange={handleCodeChange} value={cardData.code} placeholder="Security code"/>
          </div>
        </div>
      </div>

      <div className="card-input__total">
        <div>Total:</div>
        <div>{(state.subTotal + state.deliveryPrice).toFixed(2)} £</div>
      </div>

      <button onClick={handleSubmit} className="green-button">Confirm the payment</button>
    </section>
  );
};

export default CardInput;