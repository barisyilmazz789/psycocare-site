import { motion } from 'framer-motion'
import { fadeUp, stagger } from '../lib/motion'

const steps = [
  {
    title: 'Ön görüşme',
    text: '15 dakikalık tanışma. Ne getirdiğini birlikte netleştiririz.',
  },
  {
    title: 'Uyum & çerçeve',
    text: 'Sıklık, yöntem ve sınırlar birlikte kurulur. Tempo senindir.',
  },
  {
    title: 'Süreç',
    text: 'Haftalık seanslar, ara notlar ve ihtiyaca göre yönlendirme.',
  },
]

export default function Approach() {
  return (
    <section id="yaklasim" className="px-5 py-8 md:px-8">
      {/* bg-ink yerine bg-moss yapılarak yeşil tona çevrildi */}
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2.4rem] bg-moss px-8 py-16 text-cream md:px-16 md:py-20 shadow-xl">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid gap-12 lg:grid-cols-2"
        >
          <div>
            <motion.p variants={fadeUp} className="text-sm tracking-[0.2em] text-cream/70 uppercase">
              Yaklaşım
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="mt-3 font-serif text-4xl leading-tight md:text-5xl"
            >
              Kanıta dayalı yöntem, insan sıcaklığı.
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-6 max-w-md text-cream/80 leading-relaxed">
              Bilişsel davranışçı terapi, şema ve mindfulness çizgisinde;
              kültürel bağlama duyarlı, etik çerçeveli bir pratik.
            </motion.p>
          </div>
          <ol className="space-y-6">
            {steps.map((step, i) => (
              <motion.li
                key={step.title}
                variants={fadeUp}
                className="flex gap-5 border-b border-white/15 pb-6 last:border-0"
              >
                <span className="font-serif text-2xl text-cream/90">0{i + 1}</span>
                <div>
                  <h3 className="font-serif text-xl">{step.title}</h3>
                  <p className="mt-1 text-sm text-cream/75">{step.text}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </motion.div>
      </div>
    </section>
  )
}