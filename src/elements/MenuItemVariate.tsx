import React from 'react';
import {MenuType} from "../types/MenuType";

const MenuItemVariate: React.FC<{ menuItems: MenuType[] }> = ({menuItems}) => {


  let helper: string | undefined = ""
  return (
    <>
      <tr>
        <td>{menuItems[0].name}</td>
        <td colSpan={4}>{menuItems[0].description}</td>
      </tr>
      {
        menuItems.map((item, index)=> {
          const type = helper === item.type ? null : item.type
          helper = item.type

          const stylePadding: React.CSSProperties = !type ? {paddingBottom: 40} : {paddingBottom: 16}
          return <tr key={item.id} className="sub-table">
            <td style={stylePadding}/>
            <td style={stylePadding}>{type}</td>
            <td style={stylePadding}>{item.size}</td>
            <td style={stylePadding}>{item.price}</td>
            <td style={stylePadding}><button className="add-button">+</button></td>
          </tr>
        })
      }
    </>
  );
};

export default MenuItemVariate;