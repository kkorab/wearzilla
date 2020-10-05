// trending images 
import trending1 from './images/clothes/banner-1.jpg'
import trending2 from './images/clothes/banner-2.jpg'
import trending3 from './images/clothes/banner-3.jpg'
import trending4 from './images/clothes/banner-4.jpg'

// sale images
import sale1 from './images/clothes/sale/sale-1.jpg'
import sale2 from './images/clothes/sale/sale-2.jpg'
import sale3 from './images/clothes/sale/sale-3.jpg'
import sale4 from './images/clothes/sale/sale-4.jpg'
import sale5 from './images/clothes/sale/sale-1-w.jpg'
import sale6 from './images/clothes/sale/sale-2-w.jpg'
import sale7 from './images/clothes/sale/sale-3-w.jpg'
import sale8 from './images/clothes/sale/sale-4-w.jpg'
// arrivals images
import arrival1 from './images/clothes/arrival/arrival-1.jpg'
import arrival2 from './images/clothes/arrival/arrival-2.jpg'
import arrival3 from './images/clothes/arrival/arrival-3.jpg'
import arrival4 from './images/clothes/arrival/arrival-4.jpg'
import arrival5 from './images/clothes/arrival/arrival-1-w.jpg'
import arrival6 from './images/clothes/arrival/arrival-2-w.jpg'
import arrival7 from './images/clothes/arrival/arrival-3-w.jpg'
import arrival8 from './images/clothes/arrival/arrival-4-w.jpg'

export const items = [
    {
        id: 1,
        category: "Polo",
        name: 'Beige luxury polo shirt',
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur consequuntur impedit nihil, pariatur dolorem expedita accusantium commodi sit tenetur voluptatum excepturi magni, quam dolorum? Architecto deserunt hic dolore perspiciatis iste cum vitae corrupti vel nesciunt obcaecati, ea illo deleniti molestias!",
        price: 59.99,
        url: arrival1,
        arrival: true,
        sale: false,
        trending: false,
        inWishlist: false,
        inCart: false,
        quantity: 0,
        total: 0,
        size: "",
    },
    {
        id: 2,
        category: "Shirts",
        name: 'Blue elegant shirt',
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore molestias perspiciatis eligendi praesentium culpa consequuntur error enim quos non doloribus ipsum itaque veniam, sed velit architecto quod laudantium? Eligendi adipisci neque numquam qui ratione laborum.",
        price: 69.99,
        url: arrival2,
        arrival: true,
        sale: false,
        trending: false,
        inWishlist: false,
        inCart: false,
        quantity: 0,
        total: 0,
        size: "",
    },
    {
        id: 3,
        category: "Shirts",
        name: 'Dark blue elegant shirt',
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur consequuntur impedit nihil, pariatur dolorem expedita accusantium commodi sit tenetur voluptatum excepturi magni, quam dolorum? Architecto deserunt hic dolore perspiciatis iste cum vitae corrupti vel nesciunt obcaecati, ea illo deleniti molestias!",
        price: 109.99,
        url: arrival3,
        arrival: true,
        sale: false,
        trending: false,
        inWishlist: false,
        inCart: false,
        quantity: 0,
        total: 0,
        size: "",
    },
    {
        id: 4,
        category: "Jeans",
        name: 'Regular fit jeans',
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia blanditiis magni illum ullam laboriosam. Eveniet sed, vitae aliquid, et qui earum explicabo facere non, quam nemo excepturi itaque accusamus amet.",
        price: 89.99,
        url: arrival4,
        arrival: true,
        sale: false,
        trending: false,
        inWishlist: false,
        inCart: false,
        quantity: 0,
        total: 0,
        size: "",
    },
    {
        id: 5,
        category: "Jumpsuits",
        name: 'Black elegant jumpsuit',
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore molestias perspiciatis eligendi praesentium culpa consequuntur error enim quos non doloribus ipsum itaque veniam, sed velit architecto quod laudantium? Eligendi adipisci neque numquam qui ratione laborum.",
        price: 99.99,
        url: arrival5,
        arrival: true,
        sale: false,
        trending: false,
        inWishlist: false,
        inCart: false,
        quantity: 0,
        total: 0,
        size: "",
    },
    {
        id: 6,
        category: "Dresses",
        name: 'Short black leather dress',
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia blanditiis magni illum ullam laboriosam. Eveniet sed, vitae aliquid, et qui earum explicabo facere non, quam nemo excepturi itaque accusamus amet.",
        price: 129.99,
        url: arrival6,
        arrival: true,
        sale: false,
        trending: false,
        inWishlist: false,
        inCart: false,
        quantity: 0,
        total: 0,
        size: "",
    },
    {
        id: 7,
        category: "Sweatshirts",
        name: 'Luxury sweatshirt',
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore molestias perspiciatis eligendi praesentium culpa consequuntur error enim quos non doloribus ipsum itaque veniam, sed velit architecto quod laudantium? Eligendi adipisci neque numquam qui ratione laborum.",
        price: 79.99,
        url: arrival7,
        arrival: true,
        sale: false,
        trending: false,
        inWishlist: false,
        inCart: false,
        quantity: 0,
        total: 0,
        size: "",
    },
    {
        id: 8,
        category: "Jackets/Coats",
        name: 'Quilted moleskin jacket',
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur consequuntur impedit nihil, pariatur dolorem expedita accusantium commodi sit tenetur voluptatum excepturi magni, quam dolorum? Architecto deserunt hic dolore perspiciatis iste cum vitae corrupti vel nesciunt obcaecati, ea illo deleniti molestias!",
        price: 199.99,
        url: arrival8,
        arrival: true,
        sale: false,
        trending: false,
        inWishlist: false,
        inCart: false,
        quantity: 0,
        total: 0,
        size: "",
    },
    {
        id: "sale-1",
        category: "Jackets/Coats",
        name: 'Brown elegant leather',
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia blanditiis magni illum ullam laboriosam. Eveniet sed, vitae aliquid, et qui earum explicabo facere non, quam nemo excepturi itaque accusamus amet.",
        price: 59.99,
        priceBefore: 79.99, 
        url: sale1,
        arrival: false,
        sale: true,
        trending: false,
        inWishlist: false,
        inCart: false,
        quantity: 0,
        total: 0,
        size: "",
    },
    {
        id: "sale-2",
        category: "Shirts",
        name: 'Denim dark shirt',
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore molestias perspiciatis eligendi praesentium culpa consequuntur error enim quos non doloribus ipsum itaque veniam, sed velit architecto quod laudantium? Eligendi adipisci neque numquam qui ratione laborum.",
        price: 69.99,
        priceBefore: 89.99, 
        url: sale2,
        arrival: false,
        sale: true,
        trending: false,
        inWishlist: false,
        inCart: false,
        quantity: 0,
        total: 0,
        size: "",
    },
    {
        id: "sale-3",
        category: "Shirts",
        name: 'elegant shirt',
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur consequuntur impedit nihil, pariatur dolorem expedita accusantium commodi sit tenetur voluptatum excepturi magni, quam dolorum? Architecto deserunt hic dolore perspiciatis iste cum vitae corrupti vel nesciunt obcaecati, ea illo deleniti molestias!",
        price: 109.99,
        priceBefore: 159.99, 
        url: sale3,
        arrival: false,
        sale: true,
        trending: false,
        inWishlist: false,
        inCart: false,
        quantity: 0,
        total: 0,
        size: "",
    },
    {
        id: "sale-4",
        category: "Shirts",
        name: 'Bright elegant shirt',
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore molestias perspiciatis eligendi praesentium culpa consequuntur error enim quos non doloribus ipsum itaque veniam, sed velit architecto quod laudantium? Eligendi adipisci neque numquam qui ratione laborum.",
        price: 89.99,
        priceBefore: 189.99, 
        url: sale4,
        arrival: false,
        sale: true,
        trending: false,
        inWishlist: false,
        inCart: false,
        quantity: 0,
        total: 0,
        size: "",
    },
    {
        id: "sale-5",
        category: "Jackets/Coats",
        name: 'Luxury winter coat',
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur consequuntur impedit nihil, pariatur dolorem expedita accusantium commodi sit tenetur voluptatum excepturi magni, quam dolorum? Architecto deserunt hic dolore perspiciatis iste cum vitae corrupti vel nesciunt obcaecati, ea illo deleniti molestias!",
        price: 289.99,
        priceBefore: 429.99, 
        url: sale5,
        arrival: false,
        sale: true,
        trending: false,
        inWishlist: false,
        inCart: false,
        quantity: 0,
        total: 0,
        size: "",
    },
    {
        id: "sale-6",
        category: "Jackets/Coats",
        name: 'Winter coat',
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore molestias perspiciatis eligendi praesentium culpa consequuntur error enim quos non doloribus ipsum itaque veniam, sed velit architecto quod laudantium? Eligendi adipisci neque numquam qui ratione laborum.",
        price: 129.99,
        priceBefore: 149.99, 
        url: sale6,
        arrival: false,
        sale: true,
        trending: false,
        inWishlist: false,
        inCart: false,
        quantity: 0,
        total: 0,
        size: "",
    },
    {
        id: "sale-7",
        category: "Jeans",
        name: 'Elegant jeans',
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur consequuntur impedit nihil, pariatur dolorem expedita accusantium commodi sit tenetur voluptatum excepturi magni, quam dolorum? Architecto deserunt hic dolore perspiciatis iste cum vitae corrupti vel nesciunt obcaecati, ea illo deleniti molestias!",
        price: 79.99,
        priceBefore: 99.99, 
        url: sale7,
        arrival: false,
        sale: true,
        trending: false,
        inWishlist: false,
        inCart: false,
        quantity: 0,
        total: 0,
        size: "",
    },
    {
        id: "sale-8",
        category: "Shirts",
        name: 'White elegant shirt',
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia blanditiis magni illum ullam laboriosam. Eveniet sed, vitae aliquid, et qui earum explicabo facere non, quam nemo excepturi itaque accusamus amet.",
        price: 199.99,
        priceBefore: 249.99, 
        url: sale8,
        arrival: false,
        sale: true,
        trending: false,
        inWishlist: false,
        inCart: false,
        quantity: 0,
        total: 0,
        size: "",
    },
    {
        id: "trending-1",
        category: "Sweatshirts",
        name: 'Oversized hoodie',
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore molestias perspiciatis eligendi praesentium culpa consequuntur error enim quos non doloribus ipsum itaque veniam, sed velit architecto quod laudantium? Eligendi adipisci neque numquam qui ratione laborum.",
        price: 79.99,
        url: trending1,
        arrival: false,
        sale: false,
        trending: true,
        cName: "trending-l",
        inWishlist: false,
        inCart: false,
        quantity: 0,
        total: 0,
        size: "",
    },
    {
        id: "trending-2",
        category: "Shirts",
        name: 'Beige shirt',
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur consequuntur impedit nihil, pariatur dolorem expedita accusantium commodi sit tenetur voluptatum excepturi magni, quam dolorum? Architecto deserunt hic dolore perspiciatis iste cum vitae corrupti vel nesciunt obcaecati, ea illo deleniti molestias!",
        price: 59.99,
        url: trending2,
        arrival: false,
        sale: false,
        trending: true,
        cName: "trending-m",
        inWishlist: false,
        inCart: false,
        quantity: 0,
        total: 0,
        size: "",
    },
    {
        id: "trending-3",
        category: "Jackets/Coats",
        name: 'flowers coat',
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore molestias perspiciatis eligendi praesentium culpa consequuntur error enim quos non doloribus ipsum itaque veniam, sed velit architecto quod laudantium? Eligendi adipisci neque numquam qui ratione laborum.",
        price: 49.99,
        url: trending3,
        arrival: false,
        sale: false,
        trending: true,
        cName: "trending-sm banner-3",
        inWishlist: false,
        inCart: false,
        quantity: 0,
        total: 0,
        size: "",
    },
    {
        id: "trending-4",
        category: "Accessories",
        name: 'leather bag',
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore molestias perspiciatis eligendi praesentium culpa consequuntur error enim quos non doloribus ipsum itaque veniam, sed velit architecto quod laudantium? Eligendi adipisci neque numquam qui ratione laborum.",
        price: 49.99,
        url: trending4,
        arrival: false,
        sale: false,
        trending: true,
        cName: "trending-sm banner-4",
        inWishlist: false,
        inCart: false,
        quantity: 0,
        total: 0,
        size: "",
    },
]
