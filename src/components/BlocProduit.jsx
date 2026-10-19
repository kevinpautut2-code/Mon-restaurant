import { useFiltres } from '../context/FiltreContext.jsx'
import { usePanier } from '../context/PanierContext.jsx'
import Button from './Button.jsx'

function BlocProduit({ produit }) {
  const { setCategorie, setTag } = useFiltres()
  const { ajouter, retirer } = usePanier()

  return (
    <div className="col-sm-6 col-lg-4 mb-3">
      <div className="card h-100 shadow-sm">
        <img src={produit.image} className="card-img-top" alt={produit.titre} />
        <div className="card-body d-flex flex-column">
          <h3 className="card-title h5">{produit.titre}</h3>
          <p className="text-muted mb-2">{produit.prix.toFixed(2)} €</p>
          <p className="card-text small flex-grow-1">{produit.texte}</p>

          <div className="mb-2">
            <button
              type="button"
              className="btn btn-outline-primary btn-sm me-1 mb-1"
              onClick={function () {
                setCategorie(produit.categorie)
              }}
            >
              {produit.categorie}
            </button>
            {produit.tags.map(function (t, i) {
              return (
                <button
                  type="button"
                  key={i}
                  className="btn btn-outline-secondary btn-sm me-1 mb-1"
                  onClick={function () {
                    setTag(t)
                  }}
                >
                  {t}
                </button>
              )
            })}
          </div>

          <div className="d-flex gap-2 mt-auto">
            <Button
              className="btn-success btn-sm flex-grow-1"
              onClick={function () {
                ajouter(produit)
              }}
            >
              Ajouter
            </Button>
            <Button
              className="btn-outline-danger btn-sm"
              onClick={function () {
                retirer(produit.id)
              }}
            >
              Retirer
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlocProduit
