import React, {useContext, useState} from 'react';
import MenuSection from "../elements/MenuSection";
import {StateContext} from "../App";
import {Action, ActionPoint} from "../store/reducer";
import {MenuType} from "../types/MenuType";
import {getRequest} from "../api/core";

import {default as menuData} from "../testDataMenu.json"
import {default as categoryData} from "../testDataCategories.json"

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
    // getRequest("items").then(resp => {
    //   console.log(resp)
    //   dispatch({type: ActionPoint.FETCH_MENU, payload: resp.map((item: any) => {return {...item, price: parseInt(item.price)}})} as Action)
    //   // dispatch({type: ActionPoint.FETCH_MENU, payload: resp} as Action)
    // })
    // getRequest("categories").then(resp => {
    //   dispatch({type: ActionPoint.FETCH_CATEGORIES, payload: resp} as Action)
    // })

    dispatch({type: ActionPoint.FETCH_MENU, payload: menuData} as Action)
    dispatch({type: ActionPoint.FETCH_CATEGORIES, payload: categoryData} as Action)

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
          return <MenuSection key={item.id} title={item.name} menuList={menuList}/>
        })
      }
    </section>
  );
};

export default Menu;