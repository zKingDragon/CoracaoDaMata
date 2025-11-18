import Navbar from '@/components/navbar'
import HeroSection from '@/components/hero-section'
import VideoCarousel from '@/components/video-carousel'
import AboutSection from '@/components/about-section'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#2c1810]">
      <Navbar />
      <HeroSection />
      <VideoCarousel />
      <AboutSection />
      <Footer />
    </main>
  )
}
