export interface OrderData {
  order:
    {
      count: number,
      menuItemId: number
    }[],
  deliveryType: 'delivery' | 'pickup',
  message: string,
  userData: {
    name: string
    lastName: string
    phone: string,
    email: string,
    address?: string
  }
}

export interface CardData {
  "name": string,
  "number": string,
  "expiry_month": string,
  "expiry_year": string,
  "cvv": string
}