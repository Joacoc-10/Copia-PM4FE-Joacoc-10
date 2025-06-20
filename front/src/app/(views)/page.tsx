import Container from "@/components/ui/Container";
import ProductList from "./(home)/components/ProductList";
import HomeCarrucel from "../../components/CarrucelHome";
import { getProducts } from "../services/products";
import ClientLandingModal from "@/components/LandingModal";

const getData = async () => {
  const products = await getProducts();
  return {
    products,
  };
};

export default async function Home() {
  const { products } = await getData();

  return (
    <>
      <ClientLandingModal/>
      <HomeCarrucel />
      <div>
        <Container>
          <h2 className="text-[2em] font-bold my-4 text-light_black-500">
            Productos Destacados
          </h2>
          <ProductList products={products || []} />
        </Container>
      </div>
    </>
  );
}
