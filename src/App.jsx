import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Services from './components/Services'
import Approach from './components/Approach'
import Testimonials from './components/Testimonials'
import Booking from './components/Booking'

// Sayfaların importları
import About from './pages/About'
import WorkAreas from './pages/WorkAreas'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import AppointmentPage from './pages/AppointmentPage' // 1. Yeni randevu sayfasını import ettik

export default function App() {
  return (
    <div className="min-h-svh bg-cream flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <Routes>
          {/* Ana Sayfa: Tüm mevcut componentlerin sırayla görünür */}
          <Route path="/" element={
            <>
              <Hero />
              <Services />
              <Approach />
              <Testimonials />
              <Booking />
            </>
          } />

          {/* Diğer Sayfalar */}
          <Route path="/hakkimda" element={<About />} />
          <Route path="/calisma-alanlarim" element={<WorkAreas />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/iletisim" element={<Contact />} />
          <Route path="/randevu" element={<AppointmentPage />} /> {/* 2. Rota eklendi */}
        </Routes>
      </main>
      <Footer />
    </div>
  )
}