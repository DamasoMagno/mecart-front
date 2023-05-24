import { useEffect, useState } from "react";
import { Basket, MagnifyingGlass } from "@phosphor-icons/react";

import { useProductsStorage } from "../../../store/productStorage";

import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
import { ProductName } from "./components/Product";
import { CreateProductModal } from "./components/CreateProductModal";

import { Content } from "./styles";

export function Products() {
  const { products } = useProductsStorage((state) => ({
    products: state.products,
  }));

  const [productsFiltered, setProductsFiltered] = useState(products);
  const [filter, setFilter] = useState("");

  function handleFilterItems(filter: string) {
    const productsFiltered = products.filter((product) =>
      product.productName.includes(filter)
    );

    setProductsFiltered(productsFiltered);
  }

  useEffect(() => setProductsFiltered(products), [products]);

  return (
    <>
      <Content>
        <div className="find">
          <Input
            onChange={(e) => setFilter(e.target.value)}
            placeholder="Buscar produto"
          />
          <Button onClick={() => handleFilterItems(filter)}>
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
                <Basket weight="bold" size={50} />
                <p>Você não possui carrinhos cadastrados</p>
              </div>
            )}
          </ul>
        </div>
      </Content>

      <CreateProductModal />
    </>
  );
}
