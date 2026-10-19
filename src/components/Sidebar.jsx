import { useFiltres } from '../context/FiltreContext.jsx'
import SidebarBloc from './SidebarBloc.jsx'
import Button from './Button.jsx'
import produits from '../data/produits.js'

const ORDRE_CATEGORIES = [
  'Burger',
  'Pizza',
  'Kebab',
  'Poulet frit',
  'Accompagnements',
  'Desserts',
  'Boissons',
]

function Sidebar() {
  const {
    recherche,
    setRecherche,
    prixMax,
    setPrixMax,
    categorie,
    setCategorie,
    tag,
    setTag,
    toutEffacer,
  } = useFiltres()

  const categoriesTrouvees = []
  const tags = []

  produits.forEach(function (p) {
    if (categoriesTrouvees.indexOf(p.categorie) === -1) {
      categoriesTrouvees.push(p.categorie)
    }
    p.tags.forEach(function (t) {
      if (tags.indexOf(t) === -1) {
        tags.push(t)
      }
    })
  })

  tags.sort()

  const categories = ORDRE_CATEGORIES.filter(function (c) {
    return categoriesTrouvees.indexOf(c) !== -1
  })

  function handleRecherche(e) {
    setRecherche(e.target.value)
  }

  function handlePrix(e) {
    setPrixMax(e.target.value)
  }

  function choisirCategorie(nom) {
    if (categorie === nom) {
      setCategorie('')
    } else {
      setCategorie(nom)
    }
  }

  function choisirTag(nom) {
    if (tag === nom) {
      setTag('')
    } else {
      setTag(nom)
    }
  }

  return (
    <aside className="sidebar-panel">
      <label className="visually-hidden" htmlFor="recherche">
        Recherche
      </label>
      <input
        id="recherche"
        type="search"
        className="form-control form-control-sm sidebar-search mb-3"
        placeholder="Rechercher un plat..."
        value={recherche}
        onChange={handleRecherche}
      />

      <SidebarBloc
        titre="Catégorie"
        items={categories}
        filtreActif={categorie}
        onChoisir={choisirCategorie}
        variant="liste"
      />

      <label className="form-label small text-muted mb-1" htmlFor="prix">
        Filtrer par prix
      </label>
      <div className="input-group input-group-sm mb-3">
        <span className="input-group-text">€</span>
        <input
          id="prix"
          type="number"
          min="0"
          step="0.5"
          className="form-control"
          placeholder="Filtrer par prix"
          value={prixMax}
          onChange={handlePrix}
        />
      </div>

      <SidebarBloc
        titre="Ingrédients / tags"
        items={tags}
        filtreActif={tag}
        onChoisir={choisirTag}
        variant="tags"
      />

      <Button className="btn-outline-secondary btn-sm w-100" onClick={toutEffacer}>
        Tout effacer
      </Button>
    </aside>
  )
}

export default Sidebar
