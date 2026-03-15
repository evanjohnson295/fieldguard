import Hero from './components/Hero'
import Problem from './components/Problem'
import HowItWorks from './components/HowItWorks'
import TechSpecs from './components/TechSpecs'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <HowItWorks />
      <TechSpecs />
      <Footer />
    </main>
  )
}