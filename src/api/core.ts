import {CardData, OrderData} from "../types/RequestData";

const baseUrl = 'https://dda9-176-105-198-211.ngrok-free.app/api/'
const sumUpBaseUrl = 'https://api.sumup.com/v0.1/'

export const getRequest = async (controller: 'items' | 'categories' | "order") => {
  try {
    const resp = await fetch(baseUrl + controller, {
      method: 'get',
      headers: {
        "ngrok-skip-browser-warning": "true"
      }
    })
    return await resp.json()
  } catch (e) {
    console.error(e)
  }
}

export const postRequest = async (controller: "order", data: OrderData) => {
  try {
    // const resp = await fetch(baseUrl + controller, {
    //   method: 'post',
    //   headers: {
    //     "ngrok-skip-browser-warning": "true"
    //   },
    //   body: JSON.stringify(data)
    // })
    // return await resp.json()
    console.log(data)
    return 'fdfafqfasxzcbfdgnrnbadfbsd'
  } catch (e) {
    console.error(e)
  }
}

export const completeCheckout = async (checkoutId: string, data: CardData) => {
  try {
    // const resp = await fetch(sumUpBaseUrl + '/checkout/' + checkoutId, {
    //   method: 'post',
    //   headers: {
    //     "ngrok-skip-browser-warning": "true"
    //   },
    //   body: JSON.stringify(
    //     {
    //       payment_type: "card",
    //       card: {...data}
    //     })
    // })
    // return await resp.json()

    console.warn( {
      payment_type: "card",
      card: {...data}
        })
    return {t: "tr", status: "NOT PAID"}
  } catch (e) {
    console.error(e)
  }
}