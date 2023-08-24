import React from 'react';

interface Props {
  closeFunc(isOpen: boolean): void
}

const Popup: React.FC<Props> = ({closeFunc}) => {

  React.useEffect(()=>{
    window.document.body.style.overflow = 'hidden'
    return () => {
      window.document.body.style.overflow = 'auto'
    }
  },[])

  return (
    <div className='popup'>
      <div className='popup__container'>
        <button onClick={()=> {closeFunc(false)}} className='popup__close-btn'/>
        There is no products in your
        shopping cart yet :(
      </div>
      <div onClick={()=> {closeFunc(false)}} className='popup__bg'/>
    </div>
  );
};

export default Popup;