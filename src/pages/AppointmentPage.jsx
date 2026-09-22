import { motion } from 'framer-motion'
import { useState } from 'react'
import emailjs from '@emailjs/browser'

export default function AppointmentPage() {
    const [submitted, setSubmitted] = useState(false)
    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        setErrorMessage('')

        const formElement = e.target

        // EmailJS Bilgilerin
        const serviceID = 'service_cxsaybp'
        const templateID = 'template_jdfbxug'
        const publicKey = 'kgaTVmt-qn8MtQwd1'

        emailjs.sendForm(serviceID, templateID, formElement, publicKey)
            .then((result) => {
                console.log('SUCCESS!', result.text)
                setSubmitted(true)
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
        <div className="mx-auto max-w-5xl px-5 py-20 md:px-8 md:py-28">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className="overflow-hidden rounded-[2.8rem] bg-white/80 backdrop-blur-md border border-ink/8 shadow-2xl shadow-ink/5 grid grid-cols-1 lg:grid-cols-12">

                    {/* Sol Yeşil Bilgi Alanı */}
                    <div className="bg-moss p-10 lg:p-14 text-cream flex flex-col justify-between space-y-8 lg:col-span-5">
                        <div className="space-y-6">
                            <span className="inline-block rounded-full bg-cream/10 px-4 py-1.5 text-xs font-medium tracking-wide text-cream/90">
                                RANDEVU TALEBİ
                            </span>
                            <h1 className="font-serif text-3xl tracking-tight text-cream md:text-4xl lg:text-5xl leading-tight">
                                Randevu Almak İstiyorum.
                            </h1>
                            <p className="text-sm text-cream/80 leading-relaxed">
                                Formu doldurarak seans talebinde bulunabilirsin. 24 saat içinde uygun saatler ve detaylar için seninle iletişime geçeceğiz.
                            </p>
                        </div>

                        <div className="space-y-3 pt-6 border-t border-cream/15 text-xs text-cream/85">
                            <p className="text-cream/70 pt-1">Güvenli, gizli ve kişiye özel seans ortamı</p>
                        </div>
                    </div>

                    {/* Sağ Form Alanı (İstediğin içerik ve orijinal renkleriyle) */}
                    <div className="p-8 lg:p-14 lg:col-span-7 flex flex-col justify-center">
                        {submitted ? (
                            <div className="py-12 text-center space-y-4">
                                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-moss/10 text-moss text-2xl">
                                    ✓
                                </div>
                                <h3 className="font-serif text-2xl text-ink">Talebiniz Alındı</h3>
                                <p className="text-sm text-ink/70 max-w-sm mx-auto">
                                    En kısa sürede sizinle iletişime geçeceğiz. İlginiz için teşekkür ederiz.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div>
                                    <h3 className="font-serif text-2xl font-normal text-ink">
                                        Bilgi Almak için Mail Gönderebilirsiniz
                                    </h3>
                                    <p className="mt-2 text-xs text-ink/60 leading-relaxed">
                                        (İletişim kanalları üzerinden paylaşılan bilgiler KVKK kapsamında değerlendirilmektedir.)
                                    </p>
                                    <p className="mt-1 text-xs font-medium text-ink/80">
                                        <a href="#kvkk" className="underline hover:text-moss">KVKK Aydınlatma Metni</a> | <a href="#acik-riza" className="underline hover:text-moss">Açık Rıza Metni</a>
                                    </p>
                                </div>

                                <div className="space-y-1.5">
                                    <input
                                        type="text"
                                        required
                                        name="name"
                                        placeholder="İsim*"
                                        className="w-full rounded-2xl bg-[#f5f2eb] border border-ink/8 px-4 py-3.5 text-sm text-ink outline-none focus:border-moss transition"
                                    />
                                </div>

                                <div className="space-y-1.5">
                                    <input
                                        type="email"
                                        required
                                        name="email"
                                        placeholder="E-Posta*"
                                        className="w-full rounded-2xl bg-[#f5f2eb] border border-ink/8 px-4 py-3.5 text-sm text-ink outline-none focus:border-moss transition"
                                    />
                                </div>

                                <div className="space-y-1.5">
                                    <input
                                        type="text"
                                        required
                                        name="subject"
                                        placeholder="Konu*"
                                        className="w-full rounded-2xl bg-[#f5f2eb] border border-ink/8 px-4 py-3.5 text-sm text-ink outline-none focus:border-moss transition"
                                    />
                                </div>

                                <div className="space-y-1.5">
                                    <textarea
                                        rows="4"
                                        required
                                        name="note"
                                        placeholder="Mesaj*"
                                        className="w-full rounded-2xl bg-[#f5f2eb] border border-ink/8 px-4 py-3.5 text-sm text-ink outline-none focus:border-moss transition resize-none"
                                    ></textarea>
                                </div>

                                <div className="flex items-start gap-3 pt-1">
                                    <input
                                        required
                                        type="checkbox"
                                        id="page-kvkk-check"
                                        className="mt-1 h-4 w-4 rounded border-ink/25 text-moss accent-moss cursor-pointer"
                                    />
                                    <label htmlFor="page-kvkk-check" className="text-xs text-ink/75 leading-relaxed cursor-pointer">
                                        KVKK Aydınlatma metnini ve Açık Rıza Metnini okudum. Kişisel verilerimin işlenmesiyle ilgili bilgiye sahibim. *
                                    </label>
                                </div>

                                {errorMessage && (
                                    <p className="text-sm text-red-600 font-medium">{errorMessage}</p>
                                )}

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full rounded-full bg-ink py-4 text-sm font-medium text-cream transition hover:bg-moss shadow-lg shadow-ink/10 mt-2 disabled:opacity-50"
                                >
                                    {loading ? 'Gönderiliyor...' : 'Gönder'}
                                </button>
                            </form>
                        )}
                    </div>

                </div>
            </motion.div>
        </div>
    )
}