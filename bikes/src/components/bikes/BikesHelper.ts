export interface IBike {
    name: string
    price: number
    gender: "MALE" | "FEMALE"
    brand: string
    image: string

    [key: string]: any
}