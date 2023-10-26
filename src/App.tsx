import { About } from "./components/About"
import { Header } from "./components/Header"
import { Projects } from "./components/Projects"
import { Techs } from "./components/Techs"
import "./globalStyles.scss"


function App() {


  return (
    <>
      <Header />
      <main>
        <About />
        <Techs />
        <Projects />
      </main>
    </>
  )
}

export default App
