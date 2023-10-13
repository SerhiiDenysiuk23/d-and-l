import {State} from "../types/Store";
import {OrderType} from "../types/OrderType";
import {MenuType} from "../types/MenuType";
import {Category} from "../types/Category";
import {UserData} from "../types/UserData";

export enum ActionPoint {
  FETCH_MENU = 'fetch_menu',
  FETCH_CATEGORIES = 'fetch_categories',
  UPDATE_ORDER_LIST = 'update_order_list',
  PUSH_TO_ORDER = 'push_to_order',
  INCREMENT_ORDER_ELEM = 'increment_order_elem',
  DECREMENT_ORDER_ELEM = 'decrement_order_elem',
  SET_DELIVERY_PRICE = 'set_delivery_price',
  SET_CHECKOUT_ID = 'set_checkout_id',
  SET_IS_SCROLLED = 'set_is_scrolled',
  SET_MESSAGE = 'set_message'
}

export type Action =
  { type: ActionPoint.SET_DELIVERY_PRICE, payload: number }
  |
  { type: ActionPoint.FETCH_MENU, payload: MenuType[] }
  |
  { type: ActionPoint.FETCH_CATEGORIES, payload: Category[] }
  |
  { type: ActionPoint.PUSH_TO_ORDER | ActionPoint.INCREMENT_ORDER_ELEM | ActionPoint.DECREMENT_ORDER_ELEM, payload: MenuType }
  |
  { type: ActionPoint.SET_CHECKOUT_ID, payload: string }
  |
  { type: ActionPoint.UPDATE_ORDER_LIST, payload: OrderType[] }
  |
  { type: ActionPoint.SET_IS_SCROLLED, payload: boolean }
  |
  { type: ActionPoint.SET_MESSAGE, payload: string }


export const initState: State = {
  menuList: [],
  categories: [],
  order: [],
  subTotal: 0,
  deliveryPrice: 0,
  checkoutId: "",
  isScrolled: false,
  message: ""
}

export default function reducer(state: State, action: Action): State {
  switch (action.type) {
    case ActionPoint.FETCH_MENU: {
      return {...state, menuList: action.payload}
    }
    case ActionPoint.FETCH_CATEGORIES: {
      return {...state, categories: action.payload}
    }
    case ActionPoint.UPDATE_ORDER_LIST: {
      return {...state, order: action.payload}
    }
    case ActionPoint.PUSH_TO_ORDER: {
      const orderElem: OrderType = {count: 1, item: action.payload}
      const existedElem = state.order.find((item) => item.item.id === action.payload.id)

      return {
        ...state,
        order: !existedElem
          ? [orderElem, ...state.order]
          : state.order.map(item => item.item.id === action.payload.id
            ? {...item, count: item.count + 1}
            : item),
        subTotal: state.subTotal + action.payload.price
      }
    }
    case ActionPoint.INCREMENT_ORDER_ELEM: {
      return {
        ...state,
        order: state.order.map(item => item.item.id === action.payload.id
          ? {...item, count: item.count + 1}
          : item),
        subTotal: state.subTotal + action.payload.price
      }
    }
    case ActionPoint.DECREMENT_ORDER_ELEM: {
      return {
        ...state,
        order: state.order.map(item => item.item.id === action.payload.id
          ? {...item, count: item.count - 1}
          : item),
        subTotal: state.subTotal - action.payload.price
      }
    }
    case ActionPoint.SET_DELIVERY_PRICE: {
      return {...state, deliveryPrice: action.payload}
    }
    case ActionPoint.SET_CHECKOUT_ID: {
      return {...state, checkoutId: action.payload}
    }
    case ActionPoint.SET_IS_SCROLLED: {
      return {...state, isScrolled: action.payload}
    }
    case ActionPoint.SET_MESSAGE: {
      return {...state, message: action.payload}
    }
    default:
      return {...state}
  }
}