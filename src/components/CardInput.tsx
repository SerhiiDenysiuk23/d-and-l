import React, {useContext} from 'react';
import InputField from "../elements/InputField";
import {ReactComponent as VisaIcon} from "../assets/icon/visa-icon.svg";
import {ReactComponent as MastercardIcon} from "../assets/icon/mastercard-icon.svg";
import {useNavigate} from "react-router-dom";
import {StateContext} from "../App";
import {completeCheckout, postRequest} from "../api/core";
import {CardData} from "../types/RequestData";

const cardDataInit: CardData = {
  name: "",
  number: "",
  expiry_month: "",
  expiry_year: "",
  cvv: ""
}

const CardInput = () => {
  const nav = useNavigate()
  const {state, dispatch} = useContext(StateContext)
  const [cardData, setCardData] = React.useState(cardDataInit)
  const [expiry, setExpiry] = React.useState('')
  const [cardNumber, setCardNumber] = React.useState('')


  const handleSubmit = () => {
    const minimizedOrder = state.order.map(item => {
      return {count: item.count, menuItemId: parseInt(item.item.id)}
    })

    const deliveryType = state.deliveryPrice > 0 ? 'delivery' : 'pickup'
    const [expiry_month, expiry_year] = expiry.split('/')
    postRequest('order', {order: minimizedOrder, deliveryType, message: state.message, userData: state.userData})
      .then(res => {

        completeCheckout(res!, {...cardData, expiry_year, expiry_month})
          .then(res => {

            if (res!.status === "PAID")
              nav('/order-success')
          })
      })
  }


  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardData({...cardData, name: e.target.value})
  }
  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 19)
      return

    const newValue = e.target.value.replace(/[^0-9]/g, '');
    const formattedValue = newValue.replace(/(.{4})/g, '$1 ').trim();

    setCardNumber(formattedValue)
  }
  const handleExpirationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = e.target.value;

    if (newValue.length > 5)
      return

    if (newValue.length === 3 && !newValue.includes('/')) {
      newValue = newValue.slice(0, 2) + '/' + newValue.slice(2, 5);
    }

    setExpiry(newValue)
  }
  const handleCVVChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value.length > 3 ? cardData.cvv : e.target.value
    setCardData({...cardData, cvv: newValue})
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
          <InputField onChange={handleNumberChange} value={cardNumber} placeholder="Card number"/>
          <div className='card-input__field-row'>
            <InputField onChange={handleExpirationChange} value={expiry} placeholder="Expiration date"/>
            <InputField onChange={handleCVVChange} value={cardData.cvv} placeholder="Security code"/>
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