import Button from './Button.jsx'

function SidebarBloc({ titre, items, filtreActif, onChoisir, variant }) {
  const modeListe = variant === 'liste'

  if (modeListe) {
    return (
      <div className="sidebar-bloc mb-3">
        <div className="sidebar-bloc-titre">{titre}</div>
        <ul className="list-group list-group-flush sidebar-liste">
          {items.map(function (item) {
            const actif = filtreActif === item
            return (
              <li key={item} className="list-group-item p-0 border-0">
                <button
                  type="button"
                  className={
                    'sidebar-lien w-100 text-start border-0' +
                    (actif ? ' sidebar-lien-actif' : '')
                  }
                  onClick={function () {
                    onChoisir(item)
                  }}
                >
                  {item}
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }

  return (
    <div className="mb-3">
      <div className="sidebar-bloc-titre mb-2">{titre}</div>
      <div className="d-flex flex-wrap gap-2">
        {items.map(function (item) {
          const actif = filtreActif === item
          return (
            <Button
              key={item}
              className={
                actif ? 'btn-dark btn-sm tag-pill' : 'btn-outline-secondary btn-sm tag-pill'
              }
              onClick={function () {
                onChoisir(item)
              }}
            >
              {item}
            </Button>
          )
        })}
      </div>
    </div>
  )
}

export default SidebarBloc
