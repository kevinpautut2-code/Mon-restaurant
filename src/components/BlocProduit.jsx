import { useFiltres } from '../context/FiltreContext.jsx'
import { usePanier } from '../context/PanierContext.jsx'
import Button from './Button.jsx'

function BlocProduit({ produit }) {
  const { setCategorie, setTag } = useFiltres()
  const { ajouter, retirer } = usePanier()

  return (
    <div className="col-sm-6 col-lg-4 mb-4">
      <article className="card produit-card h-100 border">
        <div className="produit-image-wrap">
          <img
            src={produit.image}
            className="card-img-top produit-image"
            alt={produit.titre}
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="card-body d-flex flex-column pt-3">
          <div className="d-flex justify-content-between align-items-baseline mb-2">
            <h3 className="card-title h6 mb-0 fw-bold">{produit.titre}</h3>
            <span className="produit-prix fw-bold">{produit.prix} €</span>
          </div>

          <div className="mb-3">
            <button
              type="button"
              className="tag-produit me-1 mb-1"
              onClick={function () {
                setCategorie(produit.categorie)
              }}
            >
              {produit.categorie}
            </button>
            {produit.tags.map(function (t) {
              return (
                <button
                  type="button"
                  key={t}
                  className="tag-produit me-1 mb-1"
                  onClick={function () {
                    setTag(t)
                  }}
                >
                  {t}
                </button>
              )
            })}
          </div>

          <div className="mt-auto d-grid gap-2">
            <Button
              className="btn-outline-primary btn-sm w-100"
              onClick={function () {
                ajouter(produit)
              }}
            >
              Ajouter au panier
            </Button>
            <Button
              className="btn-outline-danger btn-sm"
              onClick={function () {
                retirer(produit.id)
              }}
            >
              Retirer du panier
            </Button>
          </div>
        </div>
      </article>
    </div>
  )
}

export default BlocProduit
