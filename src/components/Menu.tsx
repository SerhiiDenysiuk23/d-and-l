import React, {useContext, useState} from 'react';
import MenuSection from "../elements/MenuSection";
import {StateContext} from "../App";
import {Action, ActionPoint} from "../store/reducer";
import {MenuType} from "../types/MenuType";
import {getRequest} from "../api/core";

const groupMenu = (menuList: MenuType[]) => {
  const groupedMenu = menuList.reduce((groups: {[name: string]: MenuType[]}, menuItem) => {
    const { name } = menuItem;
    if (!groups[name]) {
      groups[name] = [];
    }
    groups[name].push(menuItem);
    return groups;
  }, {});

  return Object.values(groupedMenu)
}


const Menu = () => {
  const {state, dispatch} = useContext(StateContext)
  const [groupedMenuList, setGroupedMenuList] = useState<MenuType[][]>([])

  React.useLayoutEffect(() => {
    getRequest("items").then(resp => {
      console.log(resp)
      dispatch({type: ActionPoint.FETCH_MENU, payload: resp} as Action)
    })
    getRequest("categories").then(resp => {
      dispatch({type: ActionPoint.FETCH_CATEGORIES, payload: resp} as Action)
    })
  }, [])

  React.useEffect(()=>{
    setGroupedMenuList(groupMenu(state.menuList))
  },[state.menuList])

  return (
    <section className="container">
      <h1 id='menu'>Menu</h1>
      {
        state.categories.map(item => {
          const menuList = groupedMenuList.filter(x => x[0].category.id === item.id)!
          if (!menuList.length)
            return null
          return <MenuSection key={item.id} title={item.name} menuList={menuList}/>
        })
      }
    </section>
  );
};

export default Menu;