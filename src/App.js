import Header from "./components/Header"
import Nav from "./components/Nav"
import Helias from "./components/Tayta"
import BandImages from "./components/BandImages"
import ListNum from "./components/ListNum"
import Values from "./components/Values"
import Team from "./components/Team"
import Form from "./components/Form"
import Footer from "./components/Footer"
import Testimonials from "./components/Testimonials"
import About from "./components/About"

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Helias />
      <BandImages />
      <About />
      <ListNum />
      <Values />
      <Team />
      <Form />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App
