import About from "@/components/about/About"
import Hero from "@/components/hero/Hero"
import Portfolio from "@/components/portifolio/Portifolio"
import Services from "@/components/services/Services"
import Contact1 from "@/components/contact/Contact"



export default function Home() {
  return (
  <>
    <Hero />
    <About />
    <Services />
    <Portfolio />
    <Contact1 /> 
  </>
  )
}