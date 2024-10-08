import { useParams } from "react-router-dom"
import { getProduct } from "../data/data";
import Nav from "../components/Nav";

function ProductPage() {
  let { productId } = useParams();
  const product = getProduct(+productId!);

  if(!product) return <h1>Product is not found.</h1>

  return (
    <>
        <Nav />
        <main className="py-5">
            <div className="container">
            <div className="row mb-4">
                <div className="col-12 col-md-6">
                <div className="mb-4 pb-2">
                    <div className="flex-grow-1">
                        <img src={product?.imageUrl} alt="" className="w-100 mb-3 rounded mb-md-4" />
                    </div>
                    <div>
                        <div className="fs-6 fw-medium mb-1">Stock (75/100)</div>
                        <div className="progress" role="progressbar" aria-label="Example with label" aria-valuenow={75}
                            aria-valuemin={0} aria-valuemax={100}>
                            <div className="progress-bar" style={{ width: "75%" }}>75%</div>
                        </div>
                    </div>
                </div>
                </div>
                <div className="col-12 col-md-6">
                <div className="card w-100 mb-4">
                    <div className="card-body">
                    <h5 className="card-title">{product?.name}</h5>
                    <p className="card-text">
                        {product?.description}
                    </p>
                    <div>
                        <div className="mb-1">Price: $99</div>
                        <label htmlFor="quantity" className="form-label mb-2">Quantity:</label>
                        <input type="number" id="quantity" className="form-control mb-2" aria-label="Quantity" min="1" value="1" />
                        <button type="button" className="btn btn-primary">
                        Add to Cart
                        </button>
                    </div>
                    </div>
                </div>

                <div className="card w-100">
                    <div className="card-header">Specifications</div>
                    <ul className="list-group list-group-flush">
                    <li className="list-group-item">Display: 6.1 inches</li>
                    <li className="list-group-item">Resolution: 1080 x 2400 pixels</li>
                    <li className="list-group-item">Processor: Snapdragon 888</li>
                    <li className="list-group-item">RAM: 8GB</li>
                    <li className="list-group-item">Storage: 128GB</li>
                    <li className="list-group-item">Battery: 4500mAh</li>
                    </ul>
                </div>
                </div>
            </div>

            <div className="row mb-4">
                <div className="col-12">
                <div className="card w-100 px-md-0">
                    <div className="card-header">Rate this Product</div>
                    <div className="card-body form d-md-flex align-items-center">
                    <div className="mb-md-0 mb-2">
                        <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1"
                            value="option1" />
                        <label className="form-check-label" htmlFor="inlineRadio1">1</label>
                        </div>
                        <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2"
                            value="option2" />
                        <label className="form-check-label" htmlFor="inlineRadio2">2</label>
                        </div>
                        <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3"
                            value="option3" />
                        <label className="form-check-label" htmlFor="inlineRadio3">3</label>
                        </div>
                        <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4"
                            value="option4" />
                        <label className="form-check-label" htmlFor="inlineRadio4">4</label>
                        </div>
                        <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio5"
                            value="option5" />
                        <label className="form-check-label" htmlFor="inlineRadio5">5</label>
                        </div>
                    </div>
                    <button type="button" className="btn btn-primary">
                        Submit Rating
                    </button>
                    </div>
                </div>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                <div className="card">
                    <div className="card-header">Reviews</div>
                    <div className="card-body">
                    <div className="border-bottom pb-3">
                        <h6>John Doe</h6>
                        <div>
                        Great product! I love the design and the features. Highly
                        recommended!
                        </div>
                    </div>
                    <div className="border-top pt-3">
                        <h6>Jane Smith</h6>
                        <div>
                        Amazing value for the price. It has exceeded my expectations. Will buy again!
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </main>
    </>
  )
}

export default ProductPage