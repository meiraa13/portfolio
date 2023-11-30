import { About } from "./components/About"
import { Header } from "./components/Header"
import { Projects } from "./components/Projects"
import { Techs } from "./components/Techs"
import "./globalStyles.scss"
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


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
