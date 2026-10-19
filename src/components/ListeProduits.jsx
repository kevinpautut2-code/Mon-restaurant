import produits from '../data/produits.js'
import { useFiltres } from '../context/FiltreContext.jsx'
import BlocProduit from './BlocProduit.jsx'

function ListeProduits() {
  const { recherche, prixMax, categorie, tag } = useFiltres()

  const liste = produits.filter(function (p) {
    if (categorie !== '' && p.categorie !== categorie) {
      return false
    }

    if (tag !== '' && p.tags.indexOf(tag) === -1) {
      return false
    }

    if (prixMax !== '' && p.prix > parseFloat(prixMax)) {
      return false
    }

    if (recherche.trim() === '') {
      return true
    }

    const mot = recherche.toLowerCase()

    if (p.titre.toLowerCase().includes(mot)) {
      return true
    }

    if (p.categorie.toLowerCase().includes(mot)) {
      return true
    }

    if (p.texte.toLowerCase().includes(mot)) {
      return true
    }

    let ok = false
    p.motsCles.forEach(function (mc) {
      if (mc.toLowerCase().includes(mot)) {
        ok = true
      }
    })

    p.tags.forEach(function (t) {
      if (t.toLowerCase().includes(mot)) {
        ok = true
      }
    })

    return ok
  })

  return (
    <section id="menu">
      <div className="row">
        {liste.length === 0 && (
          <p className="col-12 text-muted">Aucun produit ne correspond aux filtres.</p>
        )}
        {liste.map(function (produit) {
          return <BlocProduit key={produit.id} produit={produit} />
        })}
      </div>
    </section>
  )
}

export default ListeProduits
