import React, {FC} from 'react';
import {MenuType} from "../types/MenuItem";

const MenuItem: FC<{menuItem: MenuType}> = ({menuItem}) => {
  return (
    <tr>
      <td>{menuItem.name}</td>
      <td>{menuItem.description}</td>
      <td>{menuItem.price}</td>
      <td><button className="add-button">+</button></td>
    </tr>
  );
};

export default MenuItem;