import { motion } from 'framer-motion'
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { fadeUp, stagger } from '../lib/motion'
import LegalModal from './LegalModal' // Footer'daki ile aynı modal bileşeni

export default function Booking() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  // Modal yönetimi için state (Footer ile aynı mantık)
  const [modalData, setModalData] = useState({ isOpen: false, title: '', content: null })

  // KVKK İçeriği
  const kvkkContent = (
    <>
      <p><strong>1. Veri Sorumlusunun Kimliği:</strong> Bu aydınlatma metni, Uzm. Psk. Gülce Yılmaz kliniği tarafından KVKK uyarınca kişisel verilerinizin işlenmesi hakkında bilgilendirme amacıyla hazırlanmıştır.</p>
      <p><strong>2. İşlenen Kişisel Veriler:</strong> İletişim formu aracılığıyla paylaştığınız ad-soyad, e-posta adresi, konu ve mesaj/talep notlarınız işlenmektedir.</p>
      <p><strong>3. İşleme Amaçları:</strong> Toplanan verileriniz yalnızca randevu ve danışmanlık süreçlerinin planlanması, sizinle iletişim kurulması ve klinik hizmetlerinin sunulması amaçlarıyla işlenir.</p>
      <p><strong>4. Haklarınız:</strong> KVKK'nın 11. maddesi gereğince verilerinizin silinmesini, düzeltilmesini veya işlenmemesini talep etme hakkına sahipsiniz.</p>
    </>
  )

  // Açık Rıza Metni İçeriği
  const explicitConsentContent = (
    <>
      <p><strong>Açık Rıza Metni:</strong> Uzm. Psk. Gülce Yılmaz Kliniği tarafından, 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca, iletişim formu aracılığıyla paylaştığım ad-soyad, e-posta adresim ve mesaj içerisindeki özel nitelikli / genel kişisel verilerimin;</p>
      <p className="mt-2">Kliniğiniz tarafından randevu taleplerimin oluşturulması, benimle iletişime geçilmesi, bilgilendirme yapılması ve klinik hizmetlerinin sunulması amacıyla işlenmesine, ilgili mevzuata uygun olarak kaydedilmesine, depolanmasına ve muhafaza edilmesine özgür irademle açık rıza veriyorum.</p>
    </>
  )

  function onSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setErrorMessage('')

    const formElement = e.target

    const serviceID = 'service_cxsaybp'
    const templateID = 'template_jdfbxug'
    const publicKey = 'kgaTVmt-qn8MtQwd1'

    emailjs.sendForm(serviceID, templateID, formElement, publicKey)
      .then((result) => {
        console.log('SUCCESS!', result.text)
        setSent(true)
      })
      .catch((error) => {
        console.log('FAILED...', error.text)
        setErrorMessage('Gönderilirken bir hata oluştu, lütfen tekrar deneyin.')
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <section id="randevu" className="px-5 py-20 md:px-8 md:py-28 bg-cream text-ink">
      <div className="mx-auto grid max-w-5xl items-center gap-6 lg:grid-cols-2 lg:gap-8">

        {/* Sol Taraf: İletişim Bilgileri */}
        <div className="space-y-8 lg:pr-2">
          <div>
            <p className="text-sm tracking-[0.2em] text-moss uppercase font-medium">İletişim</p>
            <h2 className="mt-3 font-serif text-3xl font-normal leading-tight md:text-4xl text-ink">
              İletişim Bilgileri
            </h2>
          </div>

          <div className="space-y-6">
            {/* E-posta */}
            <div className="flex items-start gap-4">
              <div className="rounded-2xl bg-white p-3.5 shadow-sm text-moss">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-ink/60">E-Posta</p>
                <p className="mt-1 text-base text-ink font-medium">pskgulceyilmaz@gmail.com</p>
              </div>
            </div>

            {/* Telefon */}
            <div className="flex items-start gap-4">
              <div className="rounded-2xl bg-white p-3.5 shadow-sm text-moss">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-ink/60">Telefon</p>
                <p className="mt-1 text-base text-ink font-medium">0501 571 5717</p>
              </div>
            </div>

            {/* Adres */}
            <div className="flex items-start gap-4">
              <div className="rounded-2xl bg-white p-3.5 shadow-sm text-moss">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-ink/60">Adres</p>
                <p className="mt-1 text-base text-ink font-medium">Çanakkale/Merkez</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sağ Taraf: Form Alanı */}
        <div className="rounded-[2.4rem] bg-moss p-8 md:p-10 shadow-xl shadow-ink/5 text-cream">
          {sent ? (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex h-full min-h-80 flex-col justify-center text-cream"
            >
              <p className="font-serif text-3xl text-cream">Talebiniz alındı.</p>
              <p className="mt-3 max-w-sm text-base text-cream/80">
                En kısa sürede e-posta veya telefon üzerinden dönüş yapacağız.
              </p>
            </motion.div>
          ) : (
            <motion.form
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              onSubmit={onSubmit}
              className="grid gap-5"
            >
              <div>
                <h3 className="font-serif text-2xl font-normal text-cream">
                  Bilgi Almak için Mail Gönderebilirsiniz
                </h3>
                <p className="mt-2 text-xs text-cream/75 leading-relaxed">
                  (İletişim kanalları üzerinden paylaşılan bilgiler KVKK kapsamında değerlendirilmektedir.)
                </p>
                <p className="mt-1 text-xs font-medium text-cream/90 flex flex-wrap items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => setModalData({ isOpen: true, title: 'KVKK Aydınlatma Metni', content: kvkkContent })}
                    className="underline hover:text-white text-left"
                  >
                    KVKK Aydınlatma Metni
                  </button>
                  <span>|</span>
                  <button
                    type="button"
                    onClick={() => setModalData({ isOpen: true, title: 'Açık Rıza Metni', content: explicitConsentContent })}
                    className="underline hover:text-white text-left"
                  >
                    Açık Rıza Metni
                  </button>
                </p>
              </div>

              <motion.div variants={fadeUp}>
                <input
                  required
                  name="name"
                  placeholder="İsim*"
                  className="w-full rounded-2xl border border-cream/15 bg-cream/10 px-4 py-3.5 text-sm text-cream placeholder-cream/60 outline-none transition focus:border-white"
                />
              </motion.div>

              <motion.div variants={fadeUp}>
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="E-Posta*"
                  className="w-full rounded-2xl border border-cream/15 bg-cream/10 px-4 py-3.5 text-sm text-cream placeholder-cream/60 outline-none transition focus:border-white"
                />
              </motion.div>

              <motion.div variants={fadeUp}>
                <input
                  required
                  name="subject"
                  placeholder="Konu*"
                  className="w-full rounded-2xl border border-cream/15 bg-cream/10 px-4 py-3.5 text-sm text-cream placeholder-cream/60 outline-none transition focus:border-white"
                />
              </motion.div>

              <motion.div variants={fadeUp}>
                <textarea
                  required
                  name="note"
                  rows={4}
                  placeholder="Mesaj*"
                  className="w-full resize-none rounded-2xl border border-cream/15 bg-cream/10 px-4 py-3.5 text-sm text-cream placeholder-cream/60 outline-none transition focus:border-white"
                />
              </motion.div>

              <motion.div variants={fadeUp} className="flex items-start gap-3 pt-1">
                <input
                  required
                  type="checkbox"
                  id="kvkk-check"
                  className="mt-1 h-4 w-4 rounded border-cream/30 bg-cream/10 text-moss accent-white cursor-pointer"
                />
                <label htmlFor="kvkk-check" className="text-xs text-cream/80 leading-relaxed cursor-pointer">
                  <button
                    type="button"
                    onClick={() => setModalData({ isOpen: true, title: 'KVKK Aydınlatma Metni', content: kvkkContent })}
                    className="underline hover:text-white inline"
                  >
                    KVKK Aydınlatma metnini
                  </button> ve{' '}
                  <button
                    type="button"
                    onClick={() => setModalData({ isOpen: true, title: 'Açık Rıza Metni', content: explicitConsentContent })}
                    className="underline hover:text-white inline"
                  >
                    Açık Rıza Metnini
                  </button> okudum. Kişisel verilerimin işlenmesiyle ilgili bilgiye sahibim. *
                </label>
              </motion.div>

              {errorMessage && (
                <p className="text-sm text-red-200 font-medium">{errorMessage}</p>
              )}

              <motion.div variants={fadeUp}>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-full bg-cream py-4 text-sm font-medium text-ink transition hover:bg-white disabled:opacity-50 shadow-sm"
                >
                  {loading ? 'Gönderiliyor...' : 'Gönder'}
                </button>
              </motion.div>
            </motion.form>
          )}
        </div>

      </div>

      {/* Yasal Metinler için Açılır Pencere (Modal) */}
      <LegalModal
        isOpen={modalData.isOpen}
        onClose={() => setModalData({ isOpen: false, title: '', content: null })}
        title={modalData.title}
        content={modalData.content}
      />
    </section>
  )
}