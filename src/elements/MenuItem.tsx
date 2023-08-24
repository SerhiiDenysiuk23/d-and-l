import React, {FC, useContext} from 'react';
import {MenuType} from "../types/MenuType";
import {StateContext} from "../App";
import {ActionPoint} from "../store/reducer";

const MenuItem: FC<{menuItem: MenuType}> = ({menuItem}) => {

  const {dispatch} = useContext(StateContext)


  const handleButtonClick = () => {
    dispatch({type: ActionPoint.PUSH_TO_ORDER, payload: menuItem})
  }

  return (
    <tr>
      <td colSpan={!menuItem.description ? 2 : 1}>{menuItem.name}</td>
      <td>{menuItem.description} <span className={'sub-description'}><br/>{menuItem.subDescription}</span></td>
      <td>{menuItem.price.toFixed(2)}</td>
      <td>
        <button onClick={handleButtonClick} className="add-button"/>
      </td>
    </tr>
  );
};

export default MenuItem;