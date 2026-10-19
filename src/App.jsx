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
        <Nav />
        <Header />
        <main className="container pb-4">
          <div className="row">
            <div className="col-md-3 mb-3">
              <Sidebar />
            </div>
            <div className="col-md-9">
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
