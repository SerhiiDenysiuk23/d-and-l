import {MenuType} from "./MenuItem";
import {Category} from "./Category";

export interface State {
  menuList: MenuType[]
  categories: Category[]
}