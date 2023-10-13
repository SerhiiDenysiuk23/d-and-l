import {CardData, OrderData} from "../types/RequestData";
import {default as menuData} from "../testDataMenu.json"
import {default as categoryData} from "../testDataCategories.json"
import {UserData} from "../types/UserData";

const baseUrl = 'https://1a59-188-163-74-149.ngrok-free.app/api/'
const sumUpBaseUrl = 'https://api.sumup.com/v0.1/'

export const getRequest = async (controller: 'items' | 'categories') => {
  try {
    const resp = await fetch(baseUrl + controller, {
      method: 'get',
      headers: {
        "ngrok-skip-browser-warning": "true"
      }
    })
    return await resp.json()
  } catch (e) {
    console.error('Test Data')
    if (controller === 'items')
      return menuData
    else if (controller === 'categories')
      return categoryData
  }
}

export const postRequest = async (
  controller: "order-post" | "order-valid-post" | "user-valid-post",
  data: OrderData | {count: number, menuItemId: number}[] | UserData) => {
  try {
    const resp = await fetch(baseUrl + controller + "/", {
      method: 'post',
      headers: {
        "ngrok-skip-browser-warning": "true"
      },
      body: JSON.stringify(data)
    })
    return await resp.json()
  } catch (e) {
    console.error(e)
  }
}

export const completeCheckout = async (checkoutId: string, data: CardData) => {
  try {
    console.log(checkoutId)
    const resp = await fetch(sumUpBaseUrl + 'checkout/' + checkoutId, {
      method: 'post',
      // headers: {
      //   "ngrok-skip-browser-warning": "true"
      // },
      body: JSON.stringify(
        {
          payment_type: "card",
          card: {...data}
        })
    })
    return await resp.json()
    //
    // console.warn({
    //   payment_type: "card",
    //   card: {...data}
    // })
    // return {t: "tr", status: "NOT PAID"}
  } catch (e) {
    console.error(e)
  }
}