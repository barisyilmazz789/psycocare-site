import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const links = [
  { to: '/', label: 'Ana Sayfa' },
  { to: '/hakkimda', label: 'Hakkımda' },
  { to: '/calisma-alanlarim', label: 'Çalışma Alanlarım' },
  { to: '/blog', label: 'Blog' },
  { to: '/iletisim', label: 'İletişim' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  // İstediğin özellik: Zaten o sayfadaysa en üste kaydır, değilse o sayfaya git
  const handleLinkClick = (e, path) => {
    setOpen(false) // Mobil menüyü kapat

    if (location.pathname === path) {
      e.preventDefault()
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    } else {
      // Farklı bir sayfaya geçiyorsak en üstten başlasın
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
  }

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled || open
          ? 'border-b border-ink/8 bg-cream/85 backdrop-blur-xl'
          : 'bg-transparent'
        }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        {/* Logo / Başlık Tıklama Kontrolü */}
        <Link
          to="/"
          onClick={(e) => handleLinkClick(e, '/')}
          className="font-serif text-xl tracking-tight text-ink transition hover:text-moss"
        >
          Uzm. Psk. Gülce Yılmaz
        </Link>

        <ul className="hidden items-center gap-8 text-sm text-ink/75 md:flex">
          {links.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                onClick={(e) => handleLinkClick(e, link.to)}
                className="transition-colors hover:text-moss"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Sağdaki Buton */}
        <Link
          to="/randevu"
          onClick={(e) => handleLinkClick(e, '/randevu')}
          className="hidden rounded-full bg-ink px-5 py-2.5 text-sm text-cream transition hover:bg-moss md:inline-flex"
        >
          Bize Ulaşın
        </Link>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-full border border-ink/10 md:hidden"
          aria-label={open ? 'Menüyü kapat' : 'Menüyü aç'}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menü</span>

          <span className="flex flex-col gap-1.5">
            <span
              className={`block h-px w-4 bg-ink transition ${open ? 'translate-y-1 rotate-45' : ''
                }`}
            />

            <span
              className={`block h-px w-4 bg-ink transition ${open ? '-translate-y-0.5 -rotate-45' : ''
                }`}
            />
          </span>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-ink/8 bg-cream md:hidden"
          >
            <ul className="flex flex-col gap-1 px-5 py-4">
              {links.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="block rounded-xl px-3 py-3 text-ink/80 transition hover:bg-moss/10 hover:text-moss"
                    onClick={(e) => handleLinkClick(e, link.to)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}

              <li>
                <Link
                  to="/randevu"
                  onClick={(e) => handleLinkClick(e, '/randevu')}
                  className="mt-2 block rounded-full bg-ink px-4 py-3 text-center text-cream transition hover:bg-moss"
                >
                  Randevu Al
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}