import { useEffect, useState } from "react";
import { MagnifyingGlass, Package } from "@phosphor-icons/react";

import { useProductsStorage } from "../../../store/productStorage";

import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
import { ProductName } from "./components/Product";
import { CreateProductModal } from "./components/CreateProductModal";

import { Content } from "./styles";

export function Products() {
  const { products, loadProducts } = useProductsStorage((state) => ({
    products: state.products,
    loadProducts: state.loadProducts,
  }));

  const [productsFiltered, setProductsFiltered] = useState(products);
  const [filter, setFilter] = useState("");

  function handleFilterItems(filter: string) {
    const productsFiltered = products.filter((product) =>
      product.productName.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    );

    setProductsFiltered(productsFiltered);
    setFilter("");
  }

  useEffect(() => {
    setProductsFiltered(products);
  }, [products]);

  console.log(products);

  return (
    <>
      <Content>
        <div className="find">
          <Input
            onChange={(e) => setFilter(e.target.value)}
            value={filter}
            placeholder="Buscar produto"
          />
          <Button
            variant={{ outline: true }}
            onClick={() => handleFilterItems(filter)}
          >
            <MagnifyingGlass />
          </Button>
        </div>

        <div className="products">
          <strong className="productQuantity">
            Produtos <span>{productsFiltered.length ?? 0}</span>
          </strong>

          <ul>
            {productsFiltered.length > 0 ? (
              productsFiltered.map((product) => {
                return <ProductName key={product.id} product={product} />;
              })
            ) : (
              <div className="no-content">
                <Package weight="bold" size={50} />
                <p>Você não possui produtos cadastrados</p>
              </div>
            )}
          </ul>
        </div>
      </Content>

      <CreateProductModal />
    </>
  );
}
