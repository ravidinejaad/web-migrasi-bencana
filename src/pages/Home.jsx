import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Introduction from '../components/Introduction'
import DisasterCards from '../components/DisasterCards'
import EarthquakeSection from '../components/EarthquakeSection'
import FireSection from '../components/FireSection'
import EmergencyTips from '../components/EmergencyTips'
import About from '../components/About'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Introduction />
      <DisasterCards />
      <EarthquakeSection />
      <FireSection />
      <EmergencyTips />
      <About />
      <Footer />
    </div>
  )
}
