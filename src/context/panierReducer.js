export const initialState = {
  lignes: [],
}

export function panierReducer(state, action) {
  if (action.type === 'AJOUTER') {
    const produit = action.produit
    let dejaLa = false
    const nouvellesLignes = []

    state.lignes.forEach(function (ligne) {
      if (ligne.id === produit.id) {
        dejaLa = true
        nouvellesLignes.push({
          ...ligne,
          quantite: ligne.quantite + 1,
        })
      } else {
        nouvellesLignes.push(ligne)
      }
    })

    if (dejaLa === false) {
      nouvellesLignes.push({
        id: produit.id,
        titre: produit.titre,
        prix: produit.prix,
        quantite: 1,
      })
    }

    return { lignes: nouvellesLignes }
  }

  if (action.type === 'RETIRER') {
    const id = action.idProduit
    let trouve = false
    const nouvellesLignes = []

    state.lignes.forEach(function (ligne) {
      if (ligne.id !== id) {
        nouvellesLignes.push(ligne)
        return
      }
      trouve = true
      if (ligne.quantite > 1) {
        nouvellesLignes.push({
          ...ligne,
          quantite: ligne.quantite - 1,
        })
      }
    })

    if (trouve === false) {
      return state
    }

    return { lignes: nouvellesLignes }
  }

  if (action.type === 'CHANGER_QTE') {
    const id = action.idProduit
    const qte = action.quantite
    if (qte < 1) {
      return state
    }

    const nouvellesLignes = []
    state.lignes.forEach(function (ligne) {
      if (ligne.id === id) {
        nouvellesLignes.push({ ...ligne, quantite: qte })
      } else {
        nouvellesLignes.push(ligne)
      }
    })

    return { lignes: nouvellesLignes }
  }

  return state
}
