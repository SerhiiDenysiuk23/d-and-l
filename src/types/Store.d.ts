import {MenuType} from "./MenuType";
import {Category} from "./Category";
import {OrderType} from "./OrderType";
import {UserData} from "./UserData";

export interface State {
  menuList: MenuType[]
  categories: Category[]
  order: OrderType[]
  subTotal: number
  deliveryPrice: number
  userData: UserData
  isScrolled: boolean
}