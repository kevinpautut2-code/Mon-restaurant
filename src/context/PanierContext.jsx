import { createContext, useContext, useReducer } from 'react'
import { initialState, panierReducer } from './panierReducer.js'

const PanierContext = createContext(null)

export function PanierProvider({ children }) {
  const [state, dispatch] = useReducer(panierReducer, initialState)

  function ajouter(produit) {
    dispatch({ type: 'AJOUTER', produit: produit })
  }

  function retirer(idProduit) {
    dispatch({ type: 'RETIRER', idProduit: idProduit })
  }

  function changerQuantite(idProduit, quantite) {
    dispatch({ type: 'CHANGER_QTE', idProduit: idProduit, quantite: quantite })
  }

  let nbArticles = 0
  state.lignes.forEach(function (l) {
    nbArticles = nbArticles + l.quantite
  })

  let totalPanier = 0
  state.lignes.forEach(function (l) {
    totalPanier = totalPanier + l.prix * l.quantite
  })

  const valeur = {
    lignes: state.lignes,
    nbArticles,
    totalPanier,
    ajouter,
    retirer,
    changerQuantite,
  }

  return (
    <PanierContext.Provider value={valeur}>{children}</PanierContext.Provider>
  )
}

export function usePanier() {
  return useContext(PanierContext)
}
