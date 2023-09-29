import { blackbmw, blackbmwbg, bluebmw, bluebmwbg, customer1, customer2, goldbmw, goldbmwbg, whitebmw, whitebmwbg } from "../assets";
import { shieldTick, support, truckFast } from "../assets/icons";


export const navLinks= [
    {href:"#home", label:"Home" },
    {href:"#about-us", label:"About Us" },
    {href:"#products", label:"Products" },
    {href:"#contact-us", label:"Contact Us" },

];

export const statistics = [
    { value: '1k+', label: 'Brands' },
    { value: '500+', label: 'Shops all over the world' },
    { value: '90M+', label: 'Customers' },
];

export const cars= [
    {
        transparentbwm: blackbmw,
        bgbmw: blackbmwbg
    },
    {
        transparentbwm: goldbmw,
        bgbmw: goldbmwbg,

    },
    {
        transparentbwm: whitebmw,
        bgbmw: whitebmwbg,

    }
]

export const Carproducts = [
    {
        imgURL: blackbmwbg,
        name: "Black bmw",
        price: "$200K.20",
    },
    {
        imgURL: bluebmwbg,
        name: "Blue BMW",
        price: "$210k.20",
    },
    {
        imgURL: goldbmwbg,
        name: "Golde bmw ",
        price: "$520k.20",
    },
    {
        imgURL: whitebmwbg,
        name: "White BMW ",
        price: "$530k.20",
    },
];

export const services = [
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "A seamless experience with our swift  BMW shipping service."
    },
  
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },


];


export const customers = [
    {
        imgURL: customer2,
        custname: "Oprah Winfrey",
        ratings: 4.5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"

        
    },
    {
        imgURL: customer1,
        custname: "Elon Tesla",
        ratings: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a loyal customer !        "
    },
  
   

];





