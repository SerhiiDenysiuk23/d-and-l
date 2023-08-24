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

const ClientInfo = () => {
  const nav = useNavigate()
  const {state, dispatch} = useContext(StateContext)
  const [userData, setUserData] = React.useState<UserData>(userDataInit)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch({type: ActionPoint.SET_USER_DATA, payload: userData})
    nav('/payment')
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

  console.log(state.order)
  return (
    <section className='client-info'>
      <form onSubmit={handleSubmit}>
        <InputField value={userData.name} onChange={handleNameChange} placeholder={"Name"}/>
        <InputField value={userData.lastName} onChange={handleLastNameChange} placeholder={"Last name"}/>
        <InputField value={userData.phone} onChange={handlePhoneChange} placeholder={"Phone number"}/>
        <InputField value={userData.email} onChange={handleEmailChange} placeholder={"Email"}/>
        {
          state.deliveryPrice > 0 &&
          <InputField value={userData.address!} onChange={handleAddressChange} placeholder={"Address"}/>
        }
        <button type='submit' className={'green-button'}>Pay for order</button>
      </form>
    </section>
  );
};

export default ClientInfo;