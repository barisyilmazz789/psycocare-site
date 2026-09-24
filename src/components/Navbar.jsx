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

  // İsim animasyonu için kelimeler dizisi
  const titleWords = ['Uzm.', 'Psk.', 'Gülce', 'Yılmaz']

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled || open
        ? 'border-b border-ink/8 bg-cream/85 backdrop-blur-xl shadow-sm'
        : 'bg-transparent'
        }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        {/* Logo / Başlık - Harika Giriş Animasyonu Eklenmiş Hali */}
        <Link
          to="/"
          onClick={(e) => handleLinkClick(e, '/')}
          className="font-serif text-xl tracking-tight text-ink transition hover:text-moss overflow-hidden py-1"
        >
          <motion.span
            className="inline-flex flex-wrap gap-x-1.5"
            initial="hidden"
            animate="show"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.08, // Her kelime arasında milisaniyelik gecikme
                  delayChildren: 0.15,
                },
              },
            }}
          >
            {titleWords.map((word, index) => (
              <motion.span
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 15, filter: 'blur(4px)' },
                  show: {
                    opacity: 1,
                    y: 0,
                    filter: 'blur(0px)',
                    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
                  },
                }}
                whileHover={{ scale: 1.03 }}
                className="inline-block"
              >
                {word}
              </motion.span>
            ))}
          </motion.span>
        </Link>

        <ul className="hidden items-center gap-2 md:flex text-sm text-ink/75">
          {links.map((link) => {
            const isActive = location.pathname === link.to
            return (
              <li key={link.to} className="relative px-3 py-1.5">
                {isActive && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute inset-0 rounded-full bg-moss/10"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <Link
                  to={link.to}
                  onClick={(e) => handleLinkClick(e, link.to)}
                  className={`relative z-10 transition-colors hover:text-moss ${isActive ? 'text-moss font-medium' : ''
                    }`}
                >
                  {link.label}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* Sağdaki Buton */}
        <motion.div
          className="hidden md:block"
          whileHover={{ scale: 1.04, y: -1 }}
          whileTap={{ scale: 0.97 }}
        >
          <Link
            to="/randevu"
            onClick={(e) => handleLinkClick(e, '/randevu')}
            className="inline-flex rounded-full bg-ink px-5 py-2.5 text-sm text-cream transition hover:bg-moss shadow-md"
          >
            Bize Ulaşın
          </Link>
        </motion.div>

        {/* Mobil Hamburger Butonu */}
        <motion.button
          type="button"
          whileTap={{ scale: 0.9 }}
          className="grid h-10 w-10 place-items-center rounded-full border border-ink/10 md:hidden bg-white/50 backdrop-blur-md"
          aria-label={open ? 'Menüyü kapat' : 'Menüyü aç'}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menü</span>

          <span className="flex flex-col gap-1.5 items-center justify-center">
            <motion.span
              animate={open ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
              className="block h-0.5 w-4 bg-ink rounded-full"
            />
            <motion.span
              animate={open ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
              className="block h-0.5 w-4 bg-ink rounded-full"
            />
            <motion.span
              animate={open ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
              className="block h-0.5 w-4 bg-ink rounded-full"
            />
          </span>
        </motion.button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-ink/8 bg-cream md:hidden shadow-xl"
          >
            <motion.ul
              initial="hidden"
              animate="show"
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: { staggerChildren: 0.06, delayChildren: 0.1 }
                }
              }}
              className="flex flex-col gap-1.5 px-5 py-6"
            >
              {links.map((link) => {
                const isActive = location.pathname === link.to
                return (
                  <motion.li
                    key={link.to}
                    variants={{
                      hidden: { opacity: 0, x: -15 },
                      show: { opacity: 1, x: 0 }
                    }}
                  >
                    <Link
                      to={link.to}
                      className={`block rounded-2xl px-4 py-3 text-base transition ${isActive
                        ? 'bg-moss/15 text-moss font-medium'
                        : 'text-ink/80 hover:bg-moss/10 hover:text-moss'
                        }`}
                      onClick={(e) => handleLinkClick(e, link.to)}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                )
              })}

              <motion.li
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  show: { opacity: 1, y: 0 }
                }}
                className="pt-2"
              >
                <Link
                  to="/randevu"
                  onClick={(e) => handleLinkClick(e, '/randevu')}
                  className="block rounded-full bg-ink px-4 py-3.5 text-center text-cream transition hover:bg-moss shadow-md font-medium"
                >
                  Randevu Al
                </Link>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}