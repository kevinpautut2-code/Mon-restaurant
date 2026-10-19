import Cart from './Cart.jsx'

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">
          Menu
        </a>
        <div className="ms-auto">
          <Cart />
        </div>
      </div>
    </nav>
  )
}

export default Nav
