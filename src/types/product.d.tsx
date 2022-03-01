type Images = {
  id: number
  name: string
  uri: string
  isFeatured: boolean
};

export interface Product {
  id: number
  items: number
  uri: string
  img: string
  images: Images[]
  name: string
  desc: string
  price: string
  discount?: string
}
