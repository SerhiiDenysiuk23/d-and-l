import React from 'react';
import InputField from "../elements/InputField";
import {useNavigate} from "react-router-dom";

const ClientInfo = () => {
  const nav = useNavigate()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    nav('/payment')
  }

  return (
    <section className='client-info'>
      <form onSubmit={handleSubmit}>
        <InputField placeholder={"Name"}/>
        <InputField placeholder={"Last name"}/>
        <InputField placeholder={"Phone number"}/>
        <InputField placeholder={"Email"}/>
        <InputField placeholder={"Address"}/>
        <button type='submit' className={'green-button'}>Pay for order</button>
      </form>
    </section>
  );
};

export default ClientInfo;