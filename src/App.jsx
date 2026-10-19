import { FiltreProvider } from './context/FiltreContext.jsx'
import { PanierProvider } from './context/PanierContext.jsx'
import Nav from './components/Nav.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Sidebar from './components/Sidebar.jsx'
import ListeProduits from './components/ListeProduits.jsx'

function App() {
  return (
    <FiltreProvider>
      <PanierProvider>
        <Header />
        <Nav />
        <main className="container-fluid layout-main pb-4">
          <div className="row g-4">
            <div className="col-lg-3">
              <Sidebar />
            </div>
            <div className="col-lg-9">
              <ListeProduits />
            </div>
          </div>
        </main>
        <Footer />
      </PanierProvider>
    </FiltreProvider>
  )
}

export default App
