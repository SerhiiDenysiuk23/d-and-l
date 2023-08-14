export interface Category {
  id: string,
  name: string
}

export interface Action<T>{
  type: string,
  payload: T
}