import '../src/sass/Main.scss'
import { Header, Home, About, Skilss, } from './components'
import Contact from './components/contact/Contact'
import Project from './components/project/Project'
function App() {
  return (
    <>
      <Header />
      <main>
        <Home />

        <div className="container">
        </div>
        <About />
        <Skilss />
        <Project/>
        <Contact/>
      </main>

    </>
  )
}

export default App
