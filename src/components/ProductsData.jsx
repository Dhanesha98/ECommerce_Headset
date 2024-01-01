import Product1 from "../assets/product1.png";
import Product2 from "../assets/product2.png";
import Product3 from "../assets/product3.png";
import Product4 from "../assets/product4.png";
import Rating from "../assets/rating.png";


const products = [
  {
    id: 1,
    name: 'Skullcandy ',
    href: '#',
    imageSrc: Product1,
    imageAlt: "wireless headphones.",
    price: '$299.99',
    color: 'Black',
    Heart: Rating,
  },
  {id: 2,
    name: 'Beats',
    href: '#',
    imageSrc: Product2,
    imageAlt: " Studio Pro",
    price: '$349.99',
    color: 'Black',
    Heart: Rating,
  },
  {id: 3,
    name: 'Sony - WH-CH720N ',
    href: '#',
    imageSrc: Product3,
    imageAlt: "Noise Canceling",
    price: '$149.99',
    color: 'Black',
    Heart: Rating,
  },
  
  {id: 4,
    name: 'Skullcandy - Rail True ',
    href: '#',
    imageSrc: Product4,
    imageAlt: "Earbuds",
    price: '$79.99',
    color: 'Black',
    Heart: Rating,
  },
  
  
];

export default products;