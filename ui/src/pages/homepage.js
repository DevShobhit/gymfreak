import NavBar from '../components/common/navbar'
import Hero from '../components/sections/hero'
import Features from '../components/sections/features'
import Pricing from '../components/sections/pricing'
import Footer from '../components/common/footer'

function HomePage() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Features />
      <Pricing />
      <Footer />
    </div>
  )
}

export default HomePage
