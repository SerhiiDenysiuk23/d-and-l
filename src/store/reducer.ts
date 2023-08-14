import {State} from "../types/Store";
import {Action} from "../types/Category";

export const FETCH_MENU = 'fetch_menu'
export const FETCH_Categories = 'fetch_categories'

export const initState: State = {
  menuList: [],
  categories: []
}

export default function reducer (state: State, action: Action<any>): State{
  switch (action.type){
    case FETCH_MENU: {
      return {...state, menuList: action.payload}
    }
    case FETCH_Categories: {
      return {...state, categories: action.payload}
    }
    default: return state
  }
}