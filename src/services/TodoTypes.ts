
export type TMenus = {
  uuid: string,
  name:string
}

export type TFood = {
  UUID: string,
  IDMenus: string,
  name: string,
  price: number,
  description: string,
  rating: number
}