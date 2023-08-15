import {MenuType} from "./MenuType";
import {Category} from "./Category";
import {OrderType} from "./OrderType";

export interface State {
  menuList: MenuType[]
  categories: Category[]
  order: OrderType[]
}