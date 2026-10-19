import { useState } from 'react'
import { usePanier } from '../context/PanierContext.jsx'
import PanierModal from './PanierModal.jsx'

function Cart() {
  const { nbArticles } = usePanier()
  const [modalOuverte, setModalOuverte] = useState(false)

  function ouvrirPanier() {
    setModalOuverte(true)
  }

  function fermerPanier() {
    setModalOuverte(false)
  }

  return (
    <>
      <button
        type="button"
        className="btn btn-outline-light btn-sm position-relative"
        onClick={ouvrirPanier}
      >
        Panier
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
