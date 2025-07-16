import { NavbarItemProps } from "@/components/ui/Navbar/NavbarItem";
import { Routes } from "@/routes";

export const NavbarLinks: NavbarItemProps[] = [
  {
    label: "Inicio",
    href: Routes.home,
  },
  {
    label: "Productos",
    href: Routes.products,
  },
  {
    label: "Carrito",
    href: Routes.cart,
  },
  {
    label: "Perfil",
    href: Routes.profile,
  },
  {
    label: "Contacto",
    href: Routes.contact,
  },
];
