import React, {useContext, useState} from 'react';
import OrderElem from "../elements/OrderElem";
import {useNavigate} from 'react-router-dom'
import {StateContext} from "../App";
import {ActionPoint} from "../store/reducer";
import {OrderType} from "../types/OrderType";
import {postRequest} from "../api/core";

const CategoriesSubPoint = [
  'Sauce',
  'Soft Drinks'
]

const ShoppingCart = () => {
  const {state, dispatch} = useContext(StateContext)

  const [mainPoints, setMainPoints] = useState<OrderType[]>([])
  const [subPoints, setSubPoints] = useState<OrderType[]>([])

  const nav = useNavigate()
  const [deliveryType, setDeliveryType] = useState('delivery')

  const delivery = 2.5
  const pickup = -0.2

  const handleSubmit = () => {
    const minimizeOrder = state.order.map(item => {return {count: item.count, menuItemId: parseInt(item.item.id)}})
    console.log(minimizeOrder)

    // console.warn("No price errors, valid")
    //     dispatch({
    //       type: ActionPoint.SET_DELIVERY_PRICE,
    //       payload: (deliveryType === 'pickup' ? state.subTotal * pickup : delivery)
    //     })
    // dispatch({type: ActionPoint.UPDATE_ORDER_LIST, payload: state.order.filter(item => !!item.count)})
    // nav('/client-info')

    postRequest("order-valid-post", minimizeOrder).then(res => {
      console.log(res)
      if (res){
        dispatch({
          type: ActionPoint.SET_DELIVERY_PRICE,
          payload: (deliveryType === 'pickup' ? state.subTotal * pickup : delivery)
        })
        dispatch({type: ActionPoint.UPDATE_ORDER_LIST, payload: state.order.filter(item => !!item.count)})
        nav('/client-info')
      }
    })
  }

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDeliveryType(e.target.value)
  }

  const handleMessageInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch({type: ActionPoint.SET_MESSAGE, payload: e.target.value})
  }

  React.useEffect(() => {
    setMainPoints(state.order.filter(item => !CategoriesSubPoint.includes(item.item.category.name)))
    setSubPoints(state.order.filter(item => CategoriesSubPoint.includes(item.item.category.name)))
  }, [state.order])


  return (
    <section className='container'>
      <div className="order">
        <div className='order__title'>Your order:</div>
        {
          !!mainPoints.length &&
          <>
            <table>
              <tbody>
              {
                mainPoints.map(item => <OrderElem key={item.item.id} order={item}/>)
              }
              </tbody>
            </table>
            <div className="order__separator"/>
          </>
        }
        {
          !!subPoints.length &&
          <>
            <table>
              <tbody>
              {
                subPoints.map(item => <OrderElem key={item.item.id} order={item}/>)
              }
              </tbody>
            </table>
            <div className="order__separator"/>
          </>
        }

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

      <button onClick={handleSubmit} className="green-button">Check out</button>
    </section>
  );
};

export default ShoppingCart;