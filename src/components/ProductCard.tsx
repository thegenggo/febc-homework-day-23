import { Link } from "react-router-dom"
import { Product } from "../data/data"

type ProductCardProps = {
    product: Product
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="col">
        <Link className="card shadow-sm h-100 text-decoration-none" to={`/products/${product.id}`}>
            <img className="bd-placeholder-img card-img-top" src={product.imageUrl} role="img" aria-label="Placeholder: Thumbnail">

            </img>
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text mb-auto">{product.description}</p>
                <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                    <small className="text-body-secondary">9 mins</small>
                </div>
            </div>
        </Link>
    </div>
  )
}

export default ProductCard