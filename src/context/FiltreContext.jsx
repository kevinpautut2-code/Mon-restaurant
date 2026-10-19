import { createContext, useContext, useState } from 'react'

const FiltreContext = createContext(null)

export function FiltreProvider({ children }) {
  const [recherche, setRecherche] = useState('')
  const [prixMax, setPrixMax] = useState('')
  const [categorie, setCategorie] = useState('')
  const [tag, setTag] = useState('')

  function toutEffacer() {
    setRecherche('')
    setPrixMax('')
    setCategorie('')
    setTag('')
  }

  const valeur = {
    recherche,
    setRecherche,
    prixMax,
    setPrixMax,
    categorie,
    setCategorie,
    tag,
    setTag,
    toutEffacer,
  }

  return (
    <FiltreContext.Provider value={valeur}>{children}</FiltreContext.Provider>
  )
}

export function useFiltres() {
  return useContext(FiltreContext)
}
