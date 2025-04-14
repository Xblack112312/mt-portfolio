import AnimatedCounter from "./Components/AnimatedCounter"
import Navbar from "./Components/Navbar"
import Contact from "./sections/Contact"
import Experience from "./sections/Experience"
import FeatureCards from "./sections/FeatureCards"
import Footer from "./sections/Footer"
import Hero from "./sections/Hero"
import LogoShowcase from "./sections/LogoShowcase"
import ShowCaseWork from "./sections/ShowCaseWork"
import Tesstimoials from "./sections/Tesstimoials"

const App = () => {
  return (
    <>
        <Navbar />
        <Hero />
        <AnimatedCounter />
        <ShowCaseWork />
        <LogoShowcase />
        <FeatureCards />
        <Experience />
        <Tesstimoials />
        <Contact />
        <Footer />
    </>
  )
}

export default App