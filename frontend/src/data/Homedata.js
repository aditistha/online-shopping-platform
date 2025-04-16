import menImage1 from '../images/men1.jpg';
import menImage2 from '../images/men2.jpg';
import menImage3 from '../images/men3.jpg';
import menImage4 from '../images/men4.jpg';
import womenmenImage1 from '../images/women1.jpg';
import womenImage2 from '../images/women2.jpg';
import womenImage3 from '../images/women3.jpg';
import womenImage4 from '../images/women4.jpg';
import kidsImage1 from '../images/kids1.jpg';
import kidsImage2 from '../images/kids2.jpg';
import kidsImage3 from '../images/kids3.jpg';
import kidsImage4 from '../images/kids4.webp';
import watchImage1 from '../images/watch1.webp';
import handbagImage1 from '../images/handbag1.webp';


export const menlatest = [
    {
      id: 1,
      name: 'Premium Cotton Shirt',
      price: 29.99,
      image: menImage2,
      category: 'mens/shirts',
      rating: 4.5,
    },
    {
      id: 2,
      name: 'Designer Handbag',
      price: 89.99,
      image: menImage3,
      category: 'accessories/bags',
      rating: 4.8,
      reviews: 64,

    },
    {
      id: 3,
      name: 'Running Shoes',
      price: 59.99,
      image: menImage4,
      category: 'shoes/sports',
      rating: 4.7,
      reviews: 92,

    },
    
  ];
  export const womenlatest = [
    {
      id: 1,
      name: 'Premium Cotton Shirt',
      price: 29.99,
      image: womenImage2,
      category: 'mens/shirts',
      rating: 4.5,
    },
    {
      id: 2,
      name: 'Designer Handbag',
      price: 89.99,
      image: womenImage3,
      category: 'accessories/bags',
      rating: 4.8,
      reviews: 64,

    },
    {
      id: 3,
      name: 'Running Shoes',
      price: 59.99,
      image: womenImage4,
      category: 'shoes/sports',
      rating: 4.7,
      reviews: 92,

    },
    
  ];
  export const kidslatest = [
    {
      id: 1,
      name: 'Premium Cotton Shirt',
      price: 29.99,
      image: kidsImage2,
      category: 'mens/shirts',
      rating: 4.5,
    },
    {
      id: 2,
      name: 'Designer Handbag',
      price: 89.99,
      image: kidsImage3,
      category: 'accessories/bags',
      rating: 4.8,
      reviews: 64,

    },
    {
      id: 3,
      name: 'Running Shoes',
      price: 59.99,
      image: kidsImage4,
      category: 'shoes/sports',
      rating: 4.7,
      reviews: 92,

    },
    
  ];
  

  export const categoriesdata = [
    { 
      id: 1,
      name: "Men's Fashion", 
      path: "mens", 
      image:  menImage1,
    //   description: "Trending menswear for all occasions"
    },
    { 
      id: 2,
      name: "Women's Fashion", 
      path: "womens", 
      image: womenmenImage1,
    //   description: "Elegant styles for every woman"
    },
    { 
      id: 3,
      name: "Kid's Collection", 
      path: "kids", 
      image: kidsImage1,
    //   description: "Adorable outfits for children"
    }
  ];
  export const accessoriesproducts = [
    {
      id: 1,
      name: 'Luxury Chronograph Watch',
      description: 'Precision-crafted timepiece with sapphire crystal glass and genuine leather strap. Water resistant up to 50 meters with automatic movement.',
      image: watchImage1,
      path: '/watches/chronograph'

    },
    {
      id: 2,
      name: 'Designer Handbag',
      description: 'Crafted from genuine leather, this spacious handbag combines elegance with functionality. Multiple compartments keep your essentials organized.',
      image: handbagImage1,
      path: '/accessories/bags'
    }
  ];