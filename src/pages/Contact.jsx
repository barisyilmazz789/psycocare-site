import { motion } from 'framer-motion'

const contactItems = [
    {
        icon: '📞',
        title: 'Telefon',
        primary: '0501 571 5717',
    },
    {
        icon: '📍',
        title: 'Adres',
        primary: 'Esenler Gazi Meclis Cad. Postacılar Life 2 No 12 Kat 2 D 13 Çanakkale Merkez',
    },
    {
        icon: '✉️',
        title: 'E-posta',
        primary: 'pskgulceyilmaz@gmail.com',
    },

]

export default function Contact() {
    return (
        <div className="mx-auto max-w-5xl px-5 py-6 md:px-8 md:py-10">
            <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
            >
                {/* Ana Başlık */}
                <h1 className="font-serif text-3xl tracking-tight text-ink md:text-4xl">
                    İletişim Bilgileri
                </h1>

                {/* Yan Yana Grid Yapısı (Sol: Bilgiler & Randevu, Sağ: Harita) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">

                    {/* SOL KOLON: İletişim Bilgileri ve Randevu Kartı */}
                    <div className="space-y-6">
                        {/* Alt Alta Minimal Satırlar */}
                        <div className="space-y-5 bg-white/50 backdrop-blur-md border border-ink/10 rounded-[2rem] p-6 shadow-sm">
                            {contactItems.map((item, index) => (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: index * 0.06 }}
                                    className="flex items-start gap-4"
                                >
                                    {/* İkon Kutusu */}
                                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#EFECE6] text-moss text-lg shadow-sm">
                                        {item.icon}
                                    </span>

                                    {/* Metin Alanı */}
                                    <div className="space-y-0.5 pt-1">
                                        <h3 className="text-sm font-medium text-ink/70">
                                            {item.title}
                                        </h3>
                                        <p className="font-serif text-base text-ink">
                                            {item.primary}
                                        </p>
                                        {item.secondary && (
                                            <p className="text-xs md:text-sm text-ink/65 pt-0.5">
                                                {item.secondary}
                                            </p>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Online Randevu Kartı */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.3 }}
                            className="rounded-[2rem] bg-white/90 backdrop-blur-md border border-ink/10 p-6 shadow-sm space-y-4"
                        >
                            <div className="space-y-1">
                                <h3 className="font-serif text-xl text-ink">Online Randevu</h3>
                                <p className="text-xs md:text-sm text-ink/70">
                                    DoktorTakvimi üzerinden online randevu alabilirsiniz.
                                </p>
                            </div>

                            <a
                                href="/randevu"
                                className="inline-flex items-center justify-center gap-2 rounded-xl bg-ink px-6 py-3 text-xs md:text-sm font-medium text-cream transition hover:bg-moss shadow-md"
                            >
                                <span>📅</span> Randevu Al
                            </a>
                        </motion.div>
                    </div>

                    {/* SAĞ KOLON: Google Harita Alanı */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.25 }}
                        className="space-y-3 h-full flex flex-col"
                    >
                        <a
                            href="https://maps.app.goo.gl/M2c3AqqPzDEANu949"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full flex-1 min-h-[320px] md:min-h-[415px] rounded-[2rem] overflow-hidden border border-ink/10 shadow-sm relative group cursor-pointer"
                        >
                            {/* Harita Üzerindeki Tıklama İpucu Katmanı */}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition duration-300 z-10 flex items-center justify-center">
                                <span className="opacity-0 group-hover:opacity-100 transition duration-300 bg-white/90 text-ink text-xs font-medium px-4 py-2 rounded-full shadow-md">
                                    Haritada Açmak İçin Tıkla 📍
                                </span>
                            </div>

                            <iframe
                                title="Klinik Konumu"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.4554275069415!2d26.402517076807185!3d40.13847897148386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b1a8d052d9a3bd%3A0x6b9ef2828b18a38!2sPostac%C4%B1lar%20Life%202!5e0!3m2!1str!2str!4v1710000000000!5m2!1str!2str"
                                width="100%"
                                height="100%"
                                style={{ border: 0, pointerEvents: 'none', height: '100%' }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </a>

                        {/* Google Haritalar'da Aç / Yol Tarifi Al Butonu */}
                        <a
                            href="https://maps.app.goo.gl/M2c3AqqPzDEANu949"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 w-full rounded-2xl bg-white/90 border border-ink/10 py-3 text-xs md:text-sm font-medium text-ink hover:bg-cream transition shadow-sm"
                        >
                            <span>📍</span> Google Haritalar&apos;da Aç / Yol Tarifi Al
                        </a>
                    </motion.div>

                </div>
            </motion.div>
        </div>
    )
}