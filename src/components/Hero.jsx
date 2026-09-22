import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeUp, stagger } from '../lib/motion'
import psychologistImg from '../assets/gulce-yilmaz.jpg'

export default function Hero() {
  const [isGridModalOpen, setIsGridModalOpen] = useState(false)

  return (
    <section
      id="top"
      className="relative overflow-hidden px-5 pb-20 pt-28 md:px-8 md:pb-28 md:pt-36"
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-mist blur-3xl"
        animate={{ y: [0, 18, 0], x: [0, 10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-16 top-40 h-80 w-80 rounded-full bg-sand blur-3xl"
        animate={{ y: [0, -22, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div variants={stagger} initial="hidden" animate="show">
          <motion.p
            variants={fadeUp}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-moss/15 bg-white/50 px-3 py-1 text-xs tracking-[0.18em] text-moss uppercase"
          >
            Klinik psikoloji · Online & yüz yüze
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="font-serif text-[2.7rem] leading-[1.08] text-ink sm:text-6xl lg:text-[4.35rem]"
          >
            Kendine
            <span className="italic text-moss"> alan </span>
            aç.
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-xl text-lg leading-relaxed text-ink/70"
          >
            PsychoCare, yargısız bir dinleme alanı. Anksiyete, ilişkiler ve
            yaşam geçişlerinde bilimsel, insani ve sürdürülebilir destek.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center gap-3.5">
            <a
              href="https://www.doktorsitesi.com/gulce-yilmaz/psikoloji-klinik-psikolog/canakkale"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full bg-moss px-7 py-4 text-sm font-medium text-cream shadow-lg shadow-moss/20 transition hover:bg-ink"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Randevu Al
            </a>

            <a
              href="tel:+905414482781"
              className="inline-flex items-center gap-2.5 rounded-full border border-ink/15 bg-white/60 px-7 py-4 text-sm font-medium text-ink backdrop-blur-sm transition hover:border-moss/40 hover:bg-white"
            >
              <svg className="h-4 w-4 text-moss" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              +90 541 448 2781
            </a>

            {/* Izgara (Grid) Menü Butonu */}
            <button
              type="button"
              onClick={() => setIsGridModalOpen(true)}
              className="inline-flex items-center justify-center h-13 w-13 rounded-full border border-ink/15 bg-white/60 text-ink backdrop-blur-sm transition hover:bg-moss hover:text-cream hover:border-moss shadow-sm"
              title="Klinik Rehberi ve Bilgi Alanı"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
              </svg>
            </button>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-12 max-w-xl border-t border-ink/10 pt-6 flex items-center justify-between text-xs text-ink/65"
          >

          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2.2rem] bg-moss/20 shadow-xl">
            <img
              src={psychologistImg}
              alt="Uzman Klinik Psikolog Gülce Yılmaz"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
          </div>
        </motion.div>
      </div>

      {/* Izgaraya Basınca Açılan Tam Ekran Bilgilendirici Modal */}
      <AnimatePresence>
        {isGridModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-ink/70 backdrop-blur-md p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-cream p-6 sm:p-10 shadow-2xl border border-ink/10"
            >
              {/* Kapatma Butonu */}
              <button
                type="button"
                onClick={() => setIsGridModalOpen(false)}
                className="absolute top-6 right-6 flex h-10 w-10 items-center justify-center rounded-full bg-sand text-ink transition hover:bg-moss hover:text-cream"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Modal Başlık */}
              <div className="mb-8">
                <span className="text-xs font-medium tracking-[0.2em] text-moss uppercase">Klinik Bilgi Rehberi</span>
                <h2 className="font-serif text-3xl sm:text-4xl text-ink mt-2">Danışan Bilgilendirme ve Süreç Alanı</h2>
                <div className="mt-3 h-px w-20 bg-moss/30" />
              </div>

              {/* Bilgilendirici Izgara İçerikler */}
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="rounded-2xl bg-sand/50 p-6 border border-ink/5">
                  <h3 className="font-serif text-xl text-ink mb-2">1. Çalışma Alanlarım</h3>
                  <p className="text-sm text-ink/75 leading-relaxed">
                    Yetişkin bireysel psikoterapi ve çift danışmanlığı kapsamında; anksiyete bozuklukları, panik atak, depresyon, dönemsel yaşam krizleri, bağlanma sorunları ve ilişki dinamikleri üzerine bilimsel ekollerle çalışılmaktadır.
                  </p>
                </div>

                {/* Güncellenen Terapi Süreci ve Gizlilik Bölümü */}
                <div className="rounded-2xl bg-sand/50 p-6 border border-ink/5">
                  <h3 className="font-serif text-xl text-ink mb-2">2. Terapi Süreci ve Gizlilik İlkeleri</h3>
                  <p className="text-sm text-ink/75 leading-relaxed">
                    Seanslar ortalama 45-50 dakika sürer ve haftada bir düzenlekle ilerler. Türk Psikologlar Derneği (TPD) etik yönetmeliğine bağlı olarak; seans odasında konuşulan tüm paylaşımlar, kişisel bilgiler ve süreç tamamen gizlilik esası (mahremiyet) altında titizlikle korunur.
                  </p>
                </div>

                <div className="rounded-2xl bg-sand/50 p-6 border border-ink/5">
                  <h3 className="font-serif text-xl text-ink mb-2">3. Uygulanan Ekoller</h3>
                  <p className="text-sm text-ink/75 leading-relaxed">
                    Süreçte ağırlıklı olarak Bilişsel Davranışçı Terapi (BDT) ve Dinamik Yönelimli psikoterapi yaklaşımları kullanılır. Bireyin kök inançları, bugünkü düşünce kalıpları ve duygusal dünyası ele alınır.
                  </p>
                </div>

                <div className="rounded-2xl bg-sand/50 p-6 border border-ink/5">
                  <h3 className="font-serif text-xl text-ink mb-2">4. İlk Seans ve Hazırlık</h3>
                  <p className="text-sm text-ink/75 leading-relaxed">
                    İlk görüşme (değerlendirme seansı) karşılıklı tanışma, beklentilerin netleştirilmesi ve çalışılacak ana konuların belirlenmesiyle geçer. Herhangi bir ön hazırlık yapmanız gerekmemektedir.
                  </p>
                </div>
              </div>

              {/* Alt Kısım Randevu Yönlendirmesi */}
              <div className="mt-8 pt-6 border-t border-ink/10 flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs text-ink/60">Detaylı sorularınız ve randevu talepleriniz için iletişime geçebilirsiniz.</p>
                <a
                  href="https://www.doktorsitesi.com/gulce-yilmaz/psikoloji-klinik-psikolog/canakkale"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-moss px-6 py-3 text-xs font-medium text-cream transition hover:bg-ink"
                >
                  Randevu Sayfasına Git
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}