import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import psychologistImg from '../assets/gulce-yilmaz.jpg'

export default function Hero() {
  const [isGridModalOpen, setIsGridModalOpen] = useState(false)

  return (
    <section
      id="top"
      className="relative overflow-hidden px-5 pb-20 pt-28 md:px-8 md:pb-28 md:pt-36 bg-gradient-to-b from-cream via-sand/30 to-cream"
    >
      {/* Büyüleyici, yavaşça hareket eden arka plan ışıkları */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-10 h-96 w-96 rounded-full bg-mist/70 blur-[100px]"
        animate={{ y: [0, 35, 0], x: [0, 25, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-10 top-32 h-[28rem] w-[28rem] rounded-full bg-sand/90 blur-[120px]"
        animate={{ y: [0, -40, 0], x: [0, -25, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">

        {/* Sol Metin Alanı */}
        <div className="flex flex-col items-start">
          <motion.div
            initial={{ opacity: 0, y: -20, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <span className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-moss/20 bg-white/80 px-4.5 py-2 text-xs font-medium tracking-[0.22em] text-moss uppercase shadow-md backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-moss animate-ping" />
              Klinik psikoloji · Online & yüz yüze
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-[2.8rem] leading-[1.06] text-ink sm:text-6xl lg:text-[4.5rem]"
          >
            Kendine{' '}
            <span className="inline-block italic text-moss relative">
              alan
              {/* Sayfa açılırken soldan sağa doğru şıkça beliren çizgi */}
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
                className="absolute -bottom-1.5 left-0 w-full h-[3.5px] bg-moss/40 rounded-full origin-left"
              />
            </span>{' '}
            aç.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.9, delay: 0.35, ease: 'easeOut' }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-ink/75 font-light"
          >
            PsychoCare, yargısız bir dinleme alanı. Anksiyete, ilişkiler ve
            yaşam geçişlerinde bilimsel, insani ve sürdürülebilir destek.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease: 'easeOut' }}
            className="mt-9 flex flex-wrap items-center gap-3.5"
          >
            <motion.a
              href="https://www.doktorsitesi.com/gulce-yilmaz/psikoloji-klinik-psikolog/canakkale"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-2.5 rounded-full bg-moss px-8 py-4 text-sm font-medium text-cream shadow-2xl shadow-moss/30 transition-colors hover:bg-ink"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Randevu Al
            </motion.a>

            <motion.a
              href="tel:+905414482781"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-2.5 rounded-full border border-ink/15 bg-white/80 px-8 py-4 text-sm font-medium text-ink backdrop-blur-xl transition-colors hover:border-moss/40 hover:bg-white shadow-md"
            >
              <svg className="h-4 w-4 text-moss" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              +90 541 448 2781
            </motion.a>

            {/* Izgara (Grid) Menü Butonu */}
            <motion.button
              type="button"
              onClick={() => setIsGridModalOpen(true)}
              whileHover={{ scale: 1.12, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              className="inline-flex items-center justify-center h-14 w-14 rounded-full border border-ink/15 bg-white/80 text-ink backdrop-blur-xl transition-colors hover:bg-moss hover:text-cream hover:border-moss shadow-lg"
              title="Klinik Rehberi ve Bilgi Alanı"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
              </svg>
            </motion.button>
          </motion.div>
        </div>

        {/* Sağ Görsel Alanı */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, filter: 'blur(10px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1.2, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex justify-center"
        >
          {/* Arkadaki nefes alan parıltı efekti */}
          <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-tr from-moss/30 via-sand/50 to-moss/10 blur-2xl opacity-80 animate-pulse" />

          <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2.5rem] bg-moss/20 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)] border-2 border-white/80">
            <img
              src={psychologistImg}
              alt="Uzman Klinik Psikolog Gülce Yılmaz"
              className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-1000 hover:scale-105"
            />
            {/* Fotoğraf içi zarif derinlik gölgesi */}
            <div className="absolute inset-0 bg-gradient-to-t from-ink/25 via-transparent to-transparent pointer-events-none" />
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
            className="fixed inset-0 z-50 flex items-center justify-center bg-ink/75 backdrop-blur-xl p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.88, y: 35, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.88, y: 35, opacity: 0 }}
              transition={{ type: 'spring', damping: 28, stiffness: 340 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-cream p-6 sm:p-10 shadow-2xl border border-white/20"
            >
              {/* Kapatma Butonu */}
              <motion.button
                type="button"
                onClick={() => setIsGridModalOpen(false)}
                whileHover={{ scale: 1.12, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                className="absolute top-6 right-6 flex h-11 w-11 items-center justify-center rounded-full bg-sand text-ink transition-colors hover:bg-moss hover:text-cream shadow-md"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>

              {/* Modal Başlık */}
              <motion.div
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="mb-8"
              >
                <span className="text-xs font-medium tracking-[0.22em] text-moss uppercase">Klinik Bilgi Rehberi</span>
                <h2 className="font-serif text-3xl sm:text-4xl text-ink mt-2">Danışan Bilgilendirme ve Süreç Alanı</h2>
                <div className="mt-3 h-px w-24 bg-moss/40" />
              </motion.div>

              {/* Bilgilendirici Izgara İçerikler */}
              <div className="grid gap-6 sm:grid-cols-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  className="rounded-2xl bg-sand/60 p-6 border border-ink/5 shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="font-serif text-xl text-ink mb-2">1. Çalışma Alanlarım</h3>
                  <p className="text-sm text-ink/75 leading-relaxed">
                    Yetişkin bireysel psikoterapi ve çift danışmanlığı kapsamında; anksiyete bozuklukları, panik atak, depresyon, dönemsel yaşam krizleri, bağlanma sorunları ve ilişki dinamikleri üzerine bilimsel ekollerle çalışılmaktadır.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.22 }}
                  className="rounded-2xl bg-sand/60 p-6 border border-ink/5 shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="font-serif text-xl text-ink mb-2">2. Terapi Süreci ve Gizlilik İlkeleri</h3>
                  <p className="text-sm text-ink/75 leading-relaxed">
                    Seanslar ortalama 45-50 dakika sürer ve haftada bir düzenlekle ilerler. Türk Psikologlar Derneği (TPD) etik yönetmeliğine bağlı olarak; seans odasında konuşulan tüm paylaşımlar, kişisel bilgiler ve süreç tamamen gizlilik esası (mahremiyet) altında titizlikle korunur.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.29 }}
                  className="rounded-2xl bg-sand/60 p-6 border border-ink/5 shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="font-serif text-xl text-ink mb-2">3. Uygulanan Ekoller</h3>
                  <p className="text-sm text-ink/75 leading-relaxed">
                    Süreçte ağırlıklı olarak Bilişsel Davranışçı Terapi (BDT) ve Dinamik Yönelimli psikoterapi yaklaşımları kullanılır. Bireyin kök inançları, bugünkü düşünce kalıpları ve duygusal dünyası ele alınır.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.36 }}
                  className="rounded-2xl bg-sand/60 p-6 border border-ink/5 shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="font-serif text-xl text-ink mb-2">4. İlk Seans ve Hazırlık</h3>
                  <p className="text-sm text-ink/75 leading-relaxed">
                    İlk görüşme (değerlendirme seansı) karşılıklı tanışma, beklentilerin netleştirilmesi ve çalışılacak ana konuların belirlenmesiyle geçer. Herhangi bir ön hazırlık yapmanız gerekmemektedir.
                  </p>
                </motion.div>
              </div>

              {/* Alt Kısım Randevu Yönlendirmesi */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45 }}
                className="mt-8 pt-6 border-t border-ink/10 flex flex-wrap items-center justify-between gap-4"
              >
                <p className="text-xs text-ink/60">Detaylı sorularınız ve randevu talepleriniz için iletişime geçebilirsiniz.</p>
                <motion.a
                  href="https://www.doktorsitesi.com/gulce-yilmaz/psikoloji-klinik-psikolog/canakkale"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.96 }}
                  className="rounded-full bg-moss px-7 py-3 text-xs font-medium text-cream transition-colors hover:bg-ink shadow-lg"
                >
                  Randevu Sayfasına Git
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}