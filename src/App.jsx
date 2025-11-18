import { HeroSection } from "../components/section/Hero"
import { NavBar } from "../components/section/NavBar"
import { Products } from "../components/section/Products"

function App() {

  return (
    <>
      <NavBar />
      <main>
        <HeroSection/>
        <Products/>
      </main>
    </>
  )
}

export default App
