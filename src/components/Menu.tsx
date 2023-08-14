import React, {useContext} from 'react';
import MenuSection from "../elements/MenuSection";
import {default as menuData} from "../testDataMenu.json"
import {default as categoryData} from "../testDataCategories.json"
import {FETCH_Categories, FETCH_MENU} from "../store/reducer";
import {MenuType} from "../types/MenuItem";
import {StateContext} from "../App";
import {Action, Category} from "../types/Category";

const Menu = () => {
  const {state, dispatch} = useContext(StateContext)

  React.useEffect(() => {
    dispatch({type: FETCH_MENU, payload: menuData} as Action<MenuType[]>)
    dispatch({type: FETCH_Categories, payload: categoryData} as Action<Category[]>)
  }, [])


  console.log(state)
  return (
    <section className="container">
      <h1 id='menu'>Menu</h1>
      {
        state.categories.map(item => {
          const menuList = state.menuList.filter(x => x.category.id === item.id)
          return <MenuSection key={item.id} title={item.name} menuList={menuList}/>
        })
      }
    </section>
  );
};

export default Menu;