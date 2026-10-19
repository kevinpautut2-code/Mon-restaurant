import { usePanier } from '../context/PanierContext.jsx'
import Button from './Button.jsx'

function PanierModal({ onFermer }) {
  const { lignes, totalPanier, ajouter, retirer, changerQuantite } = usePanier()

  return (
    <div className="modal show d-block modal-fond" tabIndex="-1">
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h2 className="modal-title h5">Mon panier</h2>
            <button type="button" className="btn-close" onClick={onFermer}></button>
          </div>
          <div className="modal-body">
            {lignes.length === 0 && <p>Panier vide pour le moment.</p>}

            {lignes.map(function (ligne) {
              return (
                <div
                  key={ligne.id}
                  className="d-flex justify-content-between align-items-center border-bottom py-2"
                >
                  <div>
                    <strong>{ligne.titre}</strong>
                    <br />
                    <span className="small text-muted">
                      {ligne.prix.toFixed(2)} € / unité
                    </span>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                      onClick={function () {
                        retirer(ligne.id)
                      }}
                    >
                      -
                    </button>
                    <input
                      type="number"
                      min="1"
                      className="form-control form-control-sm"
                      style={{ width: '60px' }}
                      value={ligne.quantite}
                      onChange={function (e) {
                        const val = parseInt(e.target.value, 10)
                        if (isNaN(val) === false) {
                          changerQuantite(ligne.id, val)
                        }
                      }}
                    />
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                      onClick={function () {
                        ajouter({
                          id: ligne.id,
                          titre: ligne.titre,
                          prix: ligne.prix,
                        })
                      }}
                    >
                      +
                    </button>
                    <span className="ms-2">
                      {(ligne.prix * ligne.quantite).toFixed(2)} €
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="modal-footer justify-content-between">
            <strong>Total : {totalPanier.toFixed(2)} €</strong>
            <Button className="btn-primary btn-sm" onClick={onFermer}>
              Fermer
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PanierModal
