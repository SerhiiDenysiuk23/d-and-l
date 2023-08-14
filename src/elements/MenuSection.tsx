import React, {FC} from 'react';
import MenuItem from "./MenuItem";
import {MenuType} from "../types/MenuItem";

const MenuSection: FC<{title: string, menuList: MenuType[]}> = ({title, menuList}) => {
  return (
    <div className="menu-section">
      <h3>{title} <div/></h3>
      <table className="menu-section__table">
        <tbody>
        {
          menuList.map(item => {
            return <MenuItem menuItem={item} key={item.id}/>
          })
        }
        </tbody>
      </table>
    </div>
  );
};

export default MenuSection;