import {Category} from "./Category";

export interface MenuType {
  id: string,
  category: Category
  name: string,
  price: number,

  type?: string,
  size?: string
  description?: string,
  subDescription?: string

}