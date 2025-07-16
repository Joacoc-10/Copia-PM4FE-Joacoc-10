import Container from "@/components/ui/Container";
import ProductList from "./(home)/components/ProductList";
import { getProducts } from "../services/products";
import ClientLandingModal from "@/components/LandingModal";
import dynamic from 'next/dynamic';
import Loader from "@/components/ui/Loader/Loader";

const HomeCarrucel = dynamic(() => import('@/components/CarrucelHome'), {
  ssr: false, 
  loading: () => <Loader/>, 
});


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
