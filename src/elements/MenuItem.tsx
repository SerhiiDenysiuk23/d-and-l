import React, {FC} from 'react';
import {MenuType} from "../types/MenuType";

const MenuItem: FC<{menuItem: MenuType}> = ({menuItem}) => {

  return (
    <tr>
      <td colSpan={!menuItem.description ? 2 : 1}>{menuItem.name}</td>
      <td>{menuItem.description} <span className={'sub-description'}><br/>{menuItem.subDescription}</span></td>
      <td>{menuItem.price}</td>
      <td><button className="add-button">+</button></td>
    </tr>
  );
};

export default MenuItem;