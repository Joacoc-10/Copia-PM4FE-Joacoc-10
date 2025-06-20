export const Profile = {
  login: true,
  user: {
    id: 1,
    name: "juan perez",
    email: "usuario@gmail.com",
    address: "calle falsa 123",
    phone: "+34 624 789 443",
    role: "user",

    orders: [],
  },
  token: "token",
};

export const ProfileOrders = [
  {
    id: 1,
    status: "approved",
    date: "2025-06-08T15:56:07.713Z",
    products: [
      {
        id: 1,
        name: "iPhone 11",
        description:
          "Experience power and elegance with the iPhone 11: capture stunning moments with its dual-camera system, enjoy exceptional performance, and immerse yourself in a brilliant Liquid Retina display. Discover a world of possibilities in the palm of your hand!",
        price: 699,
        stock: 10,
        image:
          "https://ik.imagekit.io/i1pxujmp5t/Proyecto%20M4%20Henry/Iphone%2011.jpg?updatedAt=1749331032506",
        categoryId: 1,
      },
      {
        id: 2,
        name: "MacBook Air",
        description:
          "Embrace efficiency and sophistication with the MacBook Air: lightweight design meets powerful performance, stunning Retina display brings your work to life, and all-day battery life keeps you productive wherever you go. Elevate your computing experience with the MacBook Air.",
        price: 999,
        stock: 10,
        image:
          "https://ik.imagekit.io/i1pxujmp5t/Proyecto%20M4%20Henry/macbookAir13.jpg?updatedAt=1749331032577",
        categoryId: 2,
      },
      {
        id: 3,
        name: "iPad Pro",
        description:
          "Unleash your creativity and productivity with the iPad Pro: powerful performance, stunning Liquid Retina display, and all-day battery life make the iPad Pro the perfect tool for work and play. Transform your ideas into reality with the iPad Pro.",
        price: 799,
        stock: 10,
        image:
          "https://ik.imagekit.io/i1pxujmp5t/Proyecto%20M4%20Henry/IpadPro.jpg?updatedAt=1749331032467",
        categoryId: 3,
      },
    ],
  },
];
