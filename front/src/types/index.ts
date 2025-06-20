/* eslint-disable @typescript-eslint/no-unused-vars */
 
 interface ICategory {
  id: number;

  name: string;

  products?: IProduct[];
}

enum eStatusOrder {
  PENDING = "pending",
  APPROVED = "approved",
  REJECTED = "rejected",
}

 interface IOrder {
  id: number;

  status: eStatusOrder;

  date: Date;

  user: IUser;

  products: IProduct[];
}

 interface IProduct {
  id: number;

  name: string;

  description: string;

  price: number;

  stock: number;

  image: string;

  categoryId: number;

  // category: ICategory;
}

enum eRole {
  ADMIN = "admin",
  USER = "user",
}

 interface IUser {
  id: number;

  name: string;

  email: string;

  address: string;

  phone: string;

  role: eRole;

  // credetnials & orders
}

 interface LoginDTO {
  email: string;
  password: string;
}

 interface RegisterDTO {
  email: string;
  password: string;
  name: string;
  address: string;
  phone: string;
}

 type Params = Promise<{ slug: string }>;
 type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;
