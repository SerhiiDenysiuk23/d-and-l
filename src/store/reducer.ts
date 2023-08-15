import {State} from "../types/Store";
import {OrderType} from "../types/OrderType";
import {MenuType} from "../types/MenuType";
import {Category} from "../types/Category";

export enum ActionPoint {
  FETCH_MENU = 'fetch_menu',
  FETCH_CATEGORIES = 'fetch_categories',
  PUSH_TO_ORDER = 'push_to_order',
  INCREMENT_ORDER_ELEM = 'increment_order_elem',
  DECREMENT_ORDER_ELEM = 'decrement_order_elem'
}

export type Action =
  { type: ActionPoint.FETCH_MENU, payload: MenuType[] } |
  { type: ActionPoint.FETCH_CATEGORIES, payload: Category[] } |
  {
    type: ActionPoint.INCREMENT_ORDER_ELEM |
      ActionPoint.DECREMENT_ORDER_ELEM |
      ActionPoint.PUSH_TO_ORDER, payload: MenuType
  }


export const initState: State = {
  menuList: [],
  categories: [],
  order: []
}

export default function reducer(state: State, action: Action): State {
  switch (action.type) {
    case ActionPoint.FETCH_MENU: {
      return {...state, menuList: action.payload}
    }
    case ActionPoint.FETCH_CATEGORIES: {
      return {...state, categories: action.payload}
    }
    case ActionPoint.PUSH_TO_ORDER: {
      const orderElem: OrderType = {count: 1, item: action.payload}
      return {...state, order: [orderElem, ...state.order]}
    }
    case ActionPoint.INCREMENT_ORDER_ELEM: {
      const orderElem: OrderType = state.order.find(x => x.item.id === action.payload.id)!
      orderElem.count++
      return {...state}
    }
    case ActionPoint.DECREMENT_ORDER_ELEM: {
      const orderElem: OrderType = state.order.find(x => x.item.id === action.payload.id)!
      orderElem.count--
      return {...state}
    }
    default:
      return {...state}
  }
}