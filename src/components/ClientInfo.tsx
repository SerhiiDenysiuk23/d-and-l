import React, {useContext} from 'react';
import InputField from "../elements/InputField";
import {useNavigate} from "react-router-dom";
import {StateContext} from "../App";
import {UserData} from "../types/UserData";
import {ActionPoint} from "../store/reducer";

const userDataInit: UserData = {
  name: "",
  lastName: "",
  email: "",
  phone: ""
}

const errorsInit: UserData = {
  name: "",
  lastName: "",
  email: "",
  phone: ""
}

const ClientInfo = () => {
  const nav = useNavigate()
  const {state, dispatch} = useContext(StateContext)
  const [userData, setUserData] = React.useState(userDataInit)
  const [errors, setErrors] = React.useState(errorsInit)
  const [isFirstRender, setIsFirstRender] = React.useState(true)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setErrors({
      name: userData.name.length > 0 ? "" : "Field is required",
      lastName: userData.lastName.length > 0 ? "" : "Field is required",
      email: userData.email.length > 0
        ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.email)
          ? ""
          : "Email is invalid"
        : "Field is required",
      phone: userData.phone.length > 0
        ? /^(?:0|\\+?44)(?:\\d\\s?){9,10}$/.test(userData.phone)
          ? ""
          : "Phone number is invalid"
        : "Field is required",
      address: state.deliveryPrice > 0 && (!!userData.address && userData.address.length > 0) ? "" : "Field is required"
    })
  }

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({...userData, name: e.target.value})
  }
  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({...userData, lastName: e.target.value})
  }
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({...userData, phone: e.target.value})
  }
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({...userData, email: e.target.value})
  }
  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({...userData, address: e.target.value})
  }

  React.useEffect(() => {
    if (isFirstRender)
      return;

    if (Object.values(errors).some((error) => error.length > 0))
      return

    if (errors) {
      dispatch({type: ActionPoint.SET_USER_DATA, payload: userData})
      nav('/payment')
    }
  },[])

  console.log(errors)

  return (
    <section className='client-info'>
      <form onSubmit={handleSubmit}>
        <InputField errorMsg={errors.name} value={userData.name} onChange={handleNameChange} placeholder={"Name"}/>
        <InputField errorMsg={errors.lastName} value={userData.lastName} onChange={handleLastNameChange} placeholder={"Last name"}/>
        <InputField errorMsg={errors.phone} value={userData.phone} onChange={handlePhoneChange} placeholder={"Phone number"}/>
        <InputField errorMsg={errors.email} value={userData.email} onChange={handleEmailChange} placeholder={"Email"}/>
        {
          state.deliveryPrice > 0 &&
          <InputField errorMsg={errors.address} value={userData.address!} onChange={handleAddressChange} placeholder={"Address"}/>
        }
        <button type='submit' className={'green-button'}>Pay for order</button>
      </form>
    </section>
  );
};

export default ClientInfo;