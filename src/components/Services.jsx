import { motion } from 'framer-motion'
import { fadeUp, stagger } from '../lib/motion'

const services = [
  {
    title: 'Bireysel terapi',
    text: 'Kaygı, tükenmişlik ve kendini tanıma süreçlerinde kişiselleştirilmiş seanslar.',
  },
  {
    title: 'Çift & ilişki',
    text: 'İletişim döngülerini yumuşatmak, bağlanmayı yeniden kurmak için ortak alan.',
  },
  {
    title: 'Online seans',
    text: 'Nerede olursan ol, şifreli görüşmeyle aynı klinik titizlik.',
  },
  {
    title: 'Ergen danışmanlığı',
    text: 'Kimlik, okul baskısı ve aile dinamiklerinde güvenli bir durak.',
  },
  {
    title: 'Travma odaklı çalışma',
    text: 'Beden ve anlatıyı birlikte tutan, tempo senin belirlediğin bir yol.',
  },
  {
    title: 'Mindfulness atölyeleri',
    text: 'Küçük gruplarda nefes, dikkat ve günlük ritüel pratikleri.',
  },
]

export default function Services() {
  return (
    <section id="hizmetler" className="relative overflow-hidden px-5 py-24 md:px-8 md:py-32 bg-gradient-to-b from-cream via-sand/20 to-cream">
      {/* Arka Planda Yavaşça Süzülen Büyüleyici Işık Halkaları */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-moss/10 blur-[120px]"
        animate={{ y: [0, 40, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-sand/80 blur-[120px]"
        animate={{ y: [0, -40, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative mx-auto max-w-6xl">
        {/* Başlık Bölümü */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-16 max-w-2xl"
        >
          <motion.div variants={fadeUp} className="inline-block mb-3">
            <span className="rounded-full border border-moss/20 bg-white/80 px-4 py-1.5 text-xs font-semibold tracking-[0.22em] text-moss uppercase shadow-sm backdrop-blur-md">
              Hizmet Alanları
            </span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-serif text-4xl text-ink md:text-5xl lg:text-6xl tracking-tight"
          >
            İhtiyacına göre şekillenen <span className="italic text-moss">bir eşlik.</span>
          </motion.h2>
        </motion.div>

        {/* Kartlar Izgarası */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.08 }
            }
          }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, i) => (
            <motion.article
              key={service.title}
              variants={{
                hidden: { opacity: 0, y: 35, filter: 'blur(8px)' },
                show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3, ease: 'easeOut' }
              }}
              className="group relative overflow-hidden rounded-[2.2rem] border border-ink/10 bg-white/70 p-8 shadow-xl shadow-ink/5 backdrop-blur-xl transition-all duration-500 hover:border-moss/40 hover:bg-white hover:shadow-2xl hover:shadow-moss/10"
            >
              {/* Kart Arkasındaki Dinamik Işık Süzülmesi */}
              <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-moss/10 blur-2xl transition-all duration-500 group-hover:bg-moss/20 group-hover:scale-150 pointer-events-none" />

              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <span className="font-serif text-3xl font-light text-clay/80 transition-colors duration-300 group-hover:text-moss">
                    0{i + 1}
                  </span>

                  <h3 className="mt-6 font-serif text-2xl text-ink transition-colors duration-300 group-hover:text-moss">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-ink/70 font-light">
                    {service.text}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}