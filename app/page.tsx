import { ProductCard } from "./components";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export default async function Home() {
  const products = await fetch("https://dummyjson.com/products").then((res) =>
    res.json()
  );

  return (
    <div>
      <div className="flex flex-col justify-end sm:px-4">
        <div>
          <h1 className="text-zinc-700 text-2xl minlg:text-2xl xs:text-xl font-bold ml-4 xs:ml-0">
            Explore our Products
          </h1>
        </div>
        <div className="mt-3 w-full flex flex-wrap gap-10 justify-center">
          {products.products.map((product: Product, idx: number) => (
            <ProductCard key={idx} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
