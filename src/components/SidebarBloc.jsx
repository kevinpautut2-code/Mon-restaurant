import Button from './Button.jsx'

function SidebarBloc({ titre, items, filtreActif, onChoisir }) {
  return (
    <div className="mb-4">
      <h3 className="h6 text-uppercase text-muted">{titre}</h3>
      <div className="d-flex flex-wrap gap-2">
        {items.map(function (item, index) {
          const actif = filtreActif === item
          return (
            <Button
              key={index}
              className={actif ? 'btn-dark btn-sm' : 'btn-outline-secondary btn-sm'}
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
