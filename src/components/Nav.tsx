import { Link } from "react-router-dom"

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container justify-contents-between">
            <div className="d-flex flex-row">
                <a className="navbar-brand fw-semibold" href="/">Your Brand</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Products</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Contact</Link>
                    </li>
                    </ul>
                </div>
            </div>
            <div>
                <Link className="btn btn-primary" to="/checkout">Checkout</Link>
            </div>
        </div>
    </nav>
  )
}

export default Nav