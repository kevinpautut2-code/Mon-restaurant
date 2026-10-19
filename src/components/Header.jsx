import Cart from './Cart.jsx'

function Header() {
  return (
    <header
      className="hero-header d-flex align-items-center justify-content-center"
      style={{ backgroundImage: 'url(/bg_header.jpg)' }}
    >
      <div className="hero-cart">
        <Cart variant="hero" />
      </div>
      <h1 className="hero-title mb-0">Mon Restaurant</h1>
    </header>
  )
}

export default Header
