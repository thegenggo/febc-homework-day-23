import ProductCard from "./ProductCard"
import { products } from "../data/data"

function ProductsContainer() {
  return (
    <div className="album py-5 bg-body-tertiary">
        <div className="container">

          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {products.map((product) => (
                <ProductCard product={product}/>
            ))}
          </div>
        </div>
      </div>
  )
}

export default ProductsContainer