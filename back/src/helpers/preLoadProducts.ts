import { AppDataSource } from "../config/dataSource";
import { Product } from "../entities/Product";
import { ProductRepository } from "../repositories/product.repository";

interface IProduct {
  name: string;
  price: number;
  description: string;
  image: string;
  categoryId: number;
  stock: number;
}

const productsToPreLoad: IProduct[] = [
  {
    name: "iPhone 11",
    price: 699,
    description:
      "Experience power and elegance with the iPhone 11: capture stunning moments with its dual-camera system, enjoy exceptional performance, and immerse yourself in a brilliant Liquid Retina display. Discover a world of possibilities in the palm of your hand!",
    image:
      "https://ik.imagekit.io/i1pxujmp5t/Proyecto%20M4%20Henry/Iphone%2011.jpg?updatedAt=1749331032506",
    categoryId: 1,
    stock: 10,
  },
  {
    name: "MacBook Air",
    price: 999,
    description:
      "Embrace efficiency and sophistication with the MacBook Air: lightweight design meets powerful performance, stunning Retina display brings your work to life, and all-day battery life keeps you productive wherever you go. Elevate your computing experience with the MacBook Air.",
    image:
      "https://ik.imagekit.io/i1pxujmp5t/Proyecto%20M4%20Henry/macbookAir13.jpg?updatedAt=1749331032577",
    categoryId: 2,
    stock: 10,
  },
  {
    name: "iPad Pro",
    price: 799,
    description:
      "Unleash your creativity and productivity with the iPad Pro: powerful performance, stunning Liquid Retina display, and all-day battery life make the iPad Pro the perfect tool for work and play. Transform your ideas into reality with the iPad Pro.",
    image:
      "https://ik.imagekit.io/i1pxujmp5t/Proyecto%20M4%20Henry/IpadPro.jpg?updatedAt=1749331032467",
    categoryId: 3,
    stock: 10,
  },
  {
    name: "Apple Watch Series 6",
    price: 399,
    description:
      "Stay connected and healthy with the Apple Watch Series 6: track your workouts, monitor your health, and stay in touch with the people and information you care about most. Experience the future of health and wellness with the Apple Watch Series 6.",
    image:
      "https://ik.imagekit.io/i1pxujmp5t/Proyecto%20M4%20Henry/Apple%20watch%20serie%206.jpg?updatedAt=1749331032602",
    categoryId: 9,
    stock: 10,
  },
  {
    name: "AirPods Pro",
    price: 249,
    description:
      "Immerse yourself in sound with the AirPods Pro: active noise cancellation, transparency mode, and customizable fit make the AirPods Pro the perfect companion for music, calls, and everything in between. Elevate your audio experience with the AirPods Pro.",
    image:
      "https://ik.imagekit.io/i1pxujmp5t/Proyecto%20M4%20Henry/Airpods%20pro.jpg?updatedAt=1749331155247",
    categoryId: 4,
    stock: 10,
  },
  {
    name: "HomePod mini",
    price: 99,
    description:
      "Elevate your home audio experience with the HomePod mini: immersive sound, intelligent assistant, and smart home hub make the HomePod mini the perfect addition to your home. Enjoy a world of music, news, and more with the HomePod mini.",
    image:
      "https://ik.imagekit.io/i1pxujmp5t/Proyecto%20M4%20Henry/Homepod%20mini.jpg?updatedAt=1749331032594",
    categoryId: 6,
    stock: 10,
  },
  {
    name: "Samsung Galaxy Z Fold5",
    price: 1799,
    description: "Experience innovation with the Galaxy Z Fold5: a smartphone that unfolds into a tablet, offering an immersive display for productivity and entertainment. Powered by the latest Snapdragon processor and a robust design.",
    image: "https://ik.imagekit.io/i1pxujmp5t/Proyecto%20M4%20Henry/450_1000.webp?updatedAt=1750342754691",
    categoryId: 1, 
    stock: 8,
  },
  {
    name: "Google Pixel 8 Pro",
    price: 999,
    description: "Capture stunning photos and videos with Pixel's most advanced camera to date. Powered by the Google Tensor G3 chip, the Pixel 8 Pro delivers unparalleled AI intelligence and an all-day battery life. Experience the future of mobile telephony.",
    image: "https://ik.imagekit.io/i1pxujmp5t/Proyecto%20M4%20Henry/Google-Pixel-8-Pro-5G-.webp?updatedAt=1750274019907", 
    categoryId: 1, 
    stock: 12,
  },
  {
    name: "Microsoft Surface Laptop 5",
    price: 1199,
    description: "The Microsoft Surface Laptop 5 is the perfect blend of style and performance. With its ultra-slim design, PixelSense touchscreen display, and 12th Gen Intel Core processors, it's ideal for daily work and creative tasks.",
    image: "https://ik.imagekit.io/i1pxujmp5t/Proyecto%20M4%20Henry/maxresdefault.jpg?updatedAt=1750343002512",
    categoryId: 2, 
    stock: 9,
  },
  {
    name: "Lenovo Tab P12 Pro",
    price: 649,
    description: "The Lenovo Tab P12 Pro offers a superior multimedia and productivity experience. Featuring a 12.6-inch OLED display, JBL sound, and Precision Pen 3 compatibility, it's perfect for both work and entertainment.",
    image: "https://ik.imagekit.io/i1pxujmp5t/Proyecto%20M4%20Henry/61mzoN6RM1L.jpg?updatedAt=1750343154954",
    categoryId: 3, 
    stock: 11,
  },
  {
    name: "Fitbit Charge 6",
    price: 159,
    description: "Stay fit and connected with the Fitbit Charge 6. Monitor your daily activity, sleep, heart rate, and stress, with built-in GPS and contactless payments. Your ideal companion for an active life.",
    image: "https://ik.imagekit.io/i1pxujmp5t/Proyecto%20M4%20Henry/forerunner265_garmin_vicsports_ga-010-02810-12_0.jpg?updatedAt=1750343342762",
    categoryId: 9, 
    stock: 15,
  },
  {
    name: "TP-Link Deco XE75 (2-Pack)",
    price: 299,
    description: "Experience ultrafast, uninterrupted Wi-Fi 6E with the TP-Link Deco XE75 Mesh system. Eliminate dead zones and enjoy a stable connection in every corner of your home, ideal for multiple devices.",
    image: "https://ik.imagekit.io/i1pxujmp5t/Proyecto%20M4%20Henry/lvivraine-september-8-2023-jbl-flip-6-altavoz-bluetooth-portatil-negro-agua-orilla-rio_713163-6449.avif?updatedAt=1750343517903",
    categoryId: 6, 
    stock: 7,
  },
  {
    name: "Sony Alpha a7 III",
    price: 1999,
    description: "The Sony Alpha a7 III is a full-frame mirrorless camera offering exceptional image quality, fast autofocus, and impressive shooting speed. Perfect for professional photography and video.",
    image: "https://ik.imagekit.io/i1pxujmp5t/Proyecto%20M4%20Henry/hq720.jpg?updatedAt=1750343601467",
    categoryId: 5, 
    stock: 5,
  },
  {
    name: "Meta Quest 3 (128GB)",
    price: 549,
    description: "Immerse yourself in virtual and mixed realities with the Meta Quest 3. Featuring next-gen graphics, redesigned controllers, and access to a vast library of games and experiences, the future is at your fingertips.",
    image: "https://ik.imagekit.io/i1pxujmp5t/Proyecto%20M4%20Henry/71pi8+ghWPL.jpg?updatedAt=1750343694232",
    categoryId: 7,
    stock: 10,
  },
  {
    name: "Razer BlackShark V2 Pro (Wireless)",
    price: 199,
    description: "Dominate the battlefield with the Razer BlackShark V2 Pro gaming headset. It offers immersive THX Spatial Audio, advanced microphone noise cancellation, and lasting comfort for your longest gaming sessions.",
    image: "https://ik.imagekit.io/i1pxujmp5t/Proyecto%20M4%20Henry/H70c9b6fa82494b2ca56b1fe3ac3df38cy.jpg_720x720q50.avif?updatedAt=1750343871843",
    categoryId: 4, 
    stock: 14,
  },
  {
    name: "iPhone 16 Pro Max",
    price: 1499, 
    description: "Experience the pinnacle of mobile innovation with the iPhone 16 Pro Max. Equipped with the A18 Bionic chip for unparalleled performance, a 50MP Pro camera system for stunning photos and videos, and a ProMotion XDR display for unmatched clarity and fluidity. Its design redefines elegance, and its long-lasting battery keeps you going all day.",
    image: "https://ik.imagekit.io/i1pxujmp5t/Proyecto%20M4%20Henry/Apple-iPhone-16-Pro-hero-geo-240909_inline.jpg.large_2x.jpg?updatedAt=1750349537512", 
    categoryId: 1, 
    stock: 25, 
},


];

export const preLoadProducts = async () => {
  const products = await ProductRepository.find();
  if (!products.length)
    await AppDataSource.createQueryBuilder()
      .insert()
      .into(Product)
      .values(productsToPreLoad)
      .execute();
  console.log("Products preloaded");
};
