import React, {useContext} from 'react';
import {OrderType} from "../types/OrderType";
import {StateContext} from "../App";
import {ActionPoint} from "../store/reducer";

const OrderElem: React.FC<{order: OrderType}> = ({order}) => {
  const isSetSlash = (order.item.type && order.item.size)
  const {state, dispatch} = useContext(StateContext)

  const handleIncrement = () => {
    dispatch({type: ActionPoint.INCREMENT_ORDER_ELEM, payload: order.item})

  }
  const handleDecrement = () => {
    if(order.count === 0)
      return
    dispatch({type: ActionPoint.DECREMENT_ORDER_ELEM, payload: order.item})

  }

  return (
    <tr>
      <td>{order.item.name} ({order.item.type}{isSetSlash && "/"}{order.item.size})</td>
      <td className="order__count">
        <button onClick={handleIncrement}>+</button>
        <span>{order.count}</span>
        <button onClick={handleDecrement}>-</button>
      </td>
      <td>{(order.item.price * order.count).toFixed(2)} £</td>
    </tr>
  );
};

export default OrderElem;