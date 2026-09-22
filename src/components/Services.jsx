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
    <section id="hizmetler" className="px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-12 max-w-2xl"
        >
          <motion.p variants={fadeUp} className="text-sm tracking-[0.2em] text-sage uppercase">
            Hizmetler
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="mt-3 font-serif text-4xl text-ink md:text-5xl"
          >
            İhtiyacına göre şekillenen bir eşlik.
          </motion.h2>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.06, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className="rounded-[1.6rem] border border-ink/8 bg-white/70 p-7 shadow-sm shadow-ink/5"
            >
              <span className="font-serif text-3xl text-clay/80">0{i + 1}</span>
              <h3 className="mt-5 font-serif text-2xl text-ink">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/65">{service.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
