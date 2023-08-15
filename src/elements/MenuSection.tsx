import React, {FC} from 'react';
import MenuItem from "./MenuItem";
import {MenuType} from "../types/MenuType";
import MenuItemVariate from "./MenuItemVariate";


const MenuSection: FC<{title: string, menuList: MenuType[][]}> = ({title, menuList}) => {

  return (
    <div className="menu-section">
      <h3>{title} <div/></h3>
      <table className="menu-section__table">
        <tbody>
        {
          menuList.map(item => {
            return item.length > 1
              ? <MenuItemVariate key={item[0].name} menuItems={item}/>
              : <MenuItem menuItem={item[0]} key={item[0].id}/>
          })
        }
        </tbody>
      </table>
    </div>
  );
};

export default MenuSection;