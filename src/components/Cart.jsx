import { useState } from 'react'
import { usePanier } from '../context/PanierContext.jsx'
import PanierModal from './PanierModal.jsx'

function Cart({ variant }) {
  const { nbArticles } = usePanier()
  const [modalOuverte, setModalOuverte] = useState(false)
  const surHero = variant === 'hero'

  function ouvrirPanier() {
    setModalOuverte(true)
  }

  function fermerPanier() {
    setModalOuverte(false)
  }

  const classes = surHero
    ? 'btn btn-hero-cart position-relative'
    : 'btn btn-outline-light btn-sm position-relative'

  return (
    <>
      <button type="button" className={classes} onClick={ouvrirPanier} aria-label="Panier">
        <span className="cart-icon" aria-hidden="true">
          🛒
        </span>
        {!surHero && <span className="ms-1">Panier</span>}
        {nbArticles > 0 && (
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {nbArticles}
          </span>
        )}
      </button>

      {modalOuverte && <PanierModal onFermer={fermerPanier} />}
    </>
  )
}

export default Cart
