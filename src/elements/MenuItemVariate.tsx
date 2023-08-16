import React, {useContext} from 'react';
import {MenuType} from "../types/MenuType";
import {StateContext} from "../App";
import {ActionPoint} from "../store/reducer";

const MenuItemVariate: React.FC<{ menuItems: MenuType[] }> = ({menuItems}) => {

  const {dispatch} = useContext(StateContext)


  const handleButtonClick = (item: MenuType) => {
    dispatch({type: ActionPoint.PUSH_TO_ORDER, payload: item})
  }

  let helper: string | undefined = ""
  return (
    <>
      <tr>
        <td>{menuItems[0].name}</td>
        <td colSpan={4}>{menuItems[0].description}</td>
      </tr>
      {
        menuItems.map((item, index) => {
          const type = helper === item.type ? null : item.type
          helper = item.type

          const stylePadding: React.CSSProperties = !type ? {paddingBottom: 40} : {paddingBottom: 16}
          return <tr key={item.id} className="sub-table">
            <td style={stylePadding}/>
            <td style={stylePadding}>{type}</td>
            <td style={stylePadding}>{item.size}</td>
            <td style={stylePadding}>{item.price.toFixed(2)}</td>
            <td style={stylePadding}>
              <button onClick={() => {
                handleButtonClick(item)
              }} className="add-button">+
              </button>
            </td>
          </tr>
        })
      }
    </>
  );
};

export default MenuItemVariate;