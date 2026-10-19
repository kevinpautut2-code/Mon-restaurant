import { useFiltres } from '../context/FiltreContext.jsx'
import SidebarBloc from './SidebarBloc.jsx'
import Button from './Button.jsx'
import produits from '../data/produits.js'

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

  const categories = []
  const tags = []

  produits.forEach(function (p) {
    if (categories.indexOf(p.categorie) === -1) {
      categories.push(p.categorie)
    }
    p.tags.forEach(function (t) {
      if (tags.indexOf(t) === -1) {
        tags.push(t)
      }
    })
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
    <aside className="bg-white border rounded p-3">
      <h2 className="h5 mb-3">Filtres</h2>

      <label className="form-label" htmlFor="recherche">
        Recherche
      </label>
      <input
        id="recherche"
        type="text"
        className="form-control form-control-sm mb-3"
        placeholder="nom, catégorie, mot clé..."
        value={recherche}
        onChange={handleRecherche}
      />

      <label className="form-label" htmlFor="prix">
        Prix max (€)
      </label>
      <input
        id="prix"
        type="number"
        min="0"
        step="0.5"
        className="form-control form-control-sm mb-3"
        placeholder="ex: 12"
        value={prixMax}
        onChange={handlePrix}
      />

      <SidebarBloc
        titre="Catégories"
        items={categories}
        filtreActif={categorie}
        onChoisir={choisirCategorie}
      />

      <SidebarBloc titre="Tags" items={tags} filtreActif={tag} onChoisir={choisirTag} />

      <Button className="btn-secondary btn-sm w-100" onClick={toutEffacer}>
        Tout effacer
      </Button>
    </aside>
  )
}

export default Sidebar
