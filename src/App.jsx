import { HeroSection } from "../components/section/Hero"
import { NavBar } from "../components/section/NavBar"
import { Products } from "../components/section/Products"
import { Admin } from "../components/section/Products2"

function App() {

  return (
    <>
      <NavBar />
      <main>
        <HeroSection/>
        <Products/>
        <Admin/>
      </main>
    </>
  )
}

export default App
