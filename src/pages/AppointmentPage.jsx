import { motion } from 'framer-motion'
import { useState } from 'react'
import emailjs from '@emailjs/browser'

export default function AppointmentPage() {
    const [submitted, setSubmitted] = useState(false)
    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    // Modal state'leri (Sadece 'kvkk' kullanılıyor)
    const [modalContent, setModalContent] = useState(null) // 'kvkk'

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        setErrorMessage('')

        const formElement = e.target
        const kvkkCheckbox = formElement.querySelector('#page-kvkk-check')

        // KVKK onay kutusu işaretlenmemişse gönderimi durdur ve hata göster
        if (kvkkCheckbox && !kvkkCheckbox.checked) {
            setLoading(false)
            setErrorMessage('Lütfen KVKK Aydınlatma Metnini onaylayın.')
            return
        }

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
        <div className="mx-auto max-w-5xl px-5 py-20 md:px-8 md:py-28 relative">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className="overflow-hidden rounded-[2.8rem] bg-white/85 backdrop-blur-md border border-ink/8 shadow-2xl shadow-ink/5 grid grid-cols-1 lg:grid-cols-12">

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

                    {/* Sağ Form Alanı */}
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
                                        <button
                                            type="button"
                                            onClick={() => setModalContent('kvkk')}
                                            className="underline hover:text-moss focus:outline-none"
                                        >
                                            KVKK Aydınlatma Metni
                                        </button>
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

                                {/* KVKK Onay Kutusu */}
                                <div className="flex items-start gap-3 pt-1">
                                    <input
                                        required
                                        type="checkbox"
                                        id="page-kvkk-check"
                                        className="mt-1 h-4 w-4 rounded border-ink/25 text-moss accent-moss cursor-pointer"
                                    />
                                    <label htmlFor="page-kvkk-check" className="text-xs text-ink/75 leading-relaxed cursor-pointer">
                                        KVKK Aydınlatma Metnini okudum. Kişisel verilerimin işlenmesiyle ilgili bilgiye sahibim. *
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

            {/* KVKK Modal Penceresi */}
            {modalContent && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
                    <div className="bg-white rounded-[2rem] max-w-lg w-full p-6 md:p-8 shadow-2xl relative space-y-6 max-h-[90vh] overflow-y-auto">
                        <div className="flex items-center justify-between border-b border-ink/10 pb-4">
                            <h3 className="font-serif text-2xl text-ink">
                                KVKK Aydınlatma Metni
                            </h3>
                            <button
                                onClick={() => setModalContent(null)}
                                className="h-9 w-9 rounded-full bg-ink/5 flex items-center justify-center text-ink hover:bg-ink/10 transition"
                            >
                                ✕
                            </button>
                        </div>

                        <div className="text-xs text-ink/80 space-y-4 leading-relaxed">
                            <p><strong>1. Veri Sorumlusu:</strong> Bu Aydınlatma Metni, Klinik Psikolog Gülce Yılmaz tarafından, 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") kapsamında kişisel verilerinizin işlenmesi hakkında sizi bilgilendirmek amacıyla hazırlanmıştır.</p>

                            <p><strong>2. İşlenen Kişisel Veriler:</strong> İletişim ve randevu talep formu aracılığıyla tarafınızca iletilen kimlik ve iletişim bilgileri ile form kapsamında paylaştığınız konu ve mesaj içerikleri işlenebilmektedir.</p>

                            <p><strong>3. Kişisel Verilerin İşlenme Amaçları:</strong> Kişisel verileriniz; iletişim taleplerinizin yanıtlanması, randevu taleplerinin değerlendirilmesi, sizinle iletişim kurulması ve talep ettiğiniz psikolojik danışmanlık hizmetlerine ilişkin süreçlerin yürütülmesi amaçlarıyla işlenmektedir.</p>

                            <p><strong>4. Özel Nitelikli Kişisel Veriler:</strong> Mesaj alanına kendi iradenizle sağlık durumunuz veya psikolojik durumunuz hakkında bilgi yazmanız halinde, bu bilgiler özel nitelikli kişisel veri niteliğinde olabilir. Bu nedenle iletişim formuna, randevu oluşturulması için gerekli olmayan hassas veya özel nitelikli kişisel bilgilerinizi yazmamanızı rica ederiz.</p>

                            <p><strong>5. Kişisel Verilerin Toplanma Yöntemi:</strong> Kişisel verileriniz, internet sitesinde yer alan iletişim ve randevu formunun tarafınızca doldurulması ve elektronik ortamda gönderilmesi suretiyle toplanmaktadır.</p>

                            <p><strong>6. Kişisel Verilerin Aktarılması:</strong> Form aracılığıyla iletilen bilgiler, iletişim talebinin ilgili e-posta hesabına ulaştırılması amacıyla kullanılan teknik hizmet sağlayıcılar üzerinden işlenebilmektedir. Bu kapsamda internet sitesinde EmailJS hizmetinden yararlanılmaktadır.</p>

                            <p><strong>7. Yurt Dışına Veri Aktarımı:</strong> EmailJS'in hizmet ve gizlilik politikalarında belirtilen veri işleme faaliyetleri kapsamında kişisel verilerin yurt dışında bulunan sistemlere aktarılması söz konusu olabilir. Böyle bir aktarım, 6698 sayılı Kişisel Verilerin Korunması Kanunu'nun kişisel verilerin yurt dışına aktarılmasına ilişkin güncel hükümleri ve ilgili mevzuat kapsamında gerekli şartların sağlanması suretiyle gerçekleştirilir.</p>

                            <p><strong>8. Saklama Süresi:</strong> Kişisel verileriniz, işlenme amaçlarının gerektirdiği süre boyunca ve ilgili mevzuatta öngörülen saklama süreleri dikkate alınarak muhafaza edilir. Saklama süresinin sona ermesi veya işleme amacının ortadan kalkması halinde kişisel veriler, ilgili mevzuata uygun şekilde silinir, yok edilir veya anonim hale getirilir.</p>

                            <p><strong>9. KVKK Kapsamındaki Haklarınız:</strong> KVKK'nın 11. maddesi kapsamında kişisel verilerinizin işlenip işlenmediğini öğrenme, işlenmişse buna ilişkin bilgi talep etme, işleme amacını ve amaca uygun kullanılıp kullanılmadığını öğrenme, eksik veya yanlış işlenmişse düzeltilmesini isteme ve kanunda öngörülen şartlar çerçevesinde silinmesini veya yok edilmesini isteme dahil olmak üzere sahip olduğunuz haklar bulunmaktadır.</p>

                            <p><strong>10. İletişim:</strong> KVKK kapsamındaki taleplerinizi veri sorumlusuna, internet sitesinde belirtilen iletişim kanalları üzerinden iletebilirsiniz.</p>
                        </div>

                        <div className="pt-4 border-t border-ink/10 flex justify-end">
                            <button
                                onClick={() => setModalContent(null)}
                                className="rounded-full bg-ink px-6 py-2.5 text-xs font-medium text-cream transition hover:bg-moss"
                            >
                                Kapat
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}