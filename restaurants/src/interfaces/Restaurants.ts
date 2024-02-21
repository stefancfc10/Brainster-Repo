import Review from "./Review"

interface Restaurant {
    reviews: number
    parkinglot: boolean
    phone: string
    image: string
    restauranttype: string
    businessname: string
    address: string
    slug: string
    email: string
    id: string
    reviewsList: Review[]
}

export default Restaurant;