import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const faqs = [
  {
    question: 'Danışmanlık Nedir?',
    answer: 'Danışmanlık kişinin kendini keşfetmek adına yaptığı bir yolculuktur. Bu yolculuğu terapist eşliğinde yaparak günlük yaşamda farkına varılmayan bilinçdışı davranışların farkına varılması, değişim adına motivasyon sağlanması ve baş etme mekanizmalarının geliştirilmesi hedeflenmektedir.',
  },
  {
    question: 'Psikolog Kimdir?',
    answer: 'Terapiyi yürüten olarak psikolog, kendinize olan bu yolculuğunuzda hem yolu sizin aydınlattığınız kadar ile size gösteren, hem ortak olan hem de profesyonel kimliği ile tanı, teşhis yapıp sizin için en doğru olacak olan sürece doğru yönlendiren kişidir. Terapi sizi sonuca götüremez, terapist size ancak eşlik edebilir, destek olabilir.',
  },
  {
    question: 'Kimler Fayda Görür?',
    answer: 'Kendine bakmaya cesareti olan ve yeterli iç görüye sahip olan herkes terapiden fayda görebilir. Bunun için en değerli şey, kişinin terapisti ile bağ kurabilmesi ve kendini açabilmesidir.',
  },
  {
    question: 'Değişim Nasıl Olur?',
    answer: 'Kişi yıllardır yaptığı alışkanlıkları, davranışları ve tutumları neden ve nasıl yaptığını terapist ile birlikte keşfeder ve seans odasında o an\'da yeni bir gerçeklik yaratır. Terapi ile kurulan bağ ve süreç ile bu yeni gerçeklik değişimi getirir.',
  },
  {
    question: 'Sıklığı ve Süresi',
    answer: 'Terapi süreci genellikle haftada 1 veya ihtiyaç halinde 2 kere olmak üzere seanslar yürütülür. Terapi sürecinden fayda görebilmek için en az 6 ay, 1 yıl süre ile seanslara düzenli olarak devam edilmesi uygun görülür. Terapinin kısa ya da uzun sürmesi tamamen sizin ihtiyaçlarınıza bağlı olarak değişiklik gösterir.',
  },
  {
    question: 'Online Görüşme',
    answer: 'Online görüşme ile Bireysel görüşme arasında hiçbir fark yoktur. Online olunca internet üzerinden görüntülü olarak seans yaptığımız bir alan olarak yüzyüze süreçten farksızdır. Belirlenen gün ve tarihte internet ortamı üzerinden seans görüntülü olarak yapılır.',
  },
]

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(null)

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section id="sikca-sorulan-sorular" className="px-5 py-20 md:px-8 md:py-28 bg-cream">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <p className="text-xs tracking-[0.2em] text-moss uppercase font-medium">Merak Edilenler</p>
          <h2 className="mt-3 font-serif text-3xl text-ink md:text-4xl">
            Danışmanlık ile İlgili Sıkça Sorulan Sorular
          </h2>
          <div className="mx-auto mt-4 h-px w-24 bg-moss/20" />
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index

            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                className="overflow-hidden rounded-2xl bg-sand/60 border border-ink/5 transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-sand/80"
                >
                  <span className="font-serif text-lg text-ink md:text-xl font-medium">
                    {faq.question}
                  </span>
                  <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full bg-moss/10 text-moss transition-transform duration-300 ${isOpen ? 'rotate-180 bg-moss text-cream' : ''}`}>
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 pt-0 text-sm leading-relaxed text-ink/75">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}