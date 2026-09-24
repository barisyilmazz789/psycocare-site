import { motion } from 'framer-motion'

const areas = [
    {
        title: 'Bireysel Psikoterapi',
        desc: 'Kaygı, depresyon, özgüven problemleri ve yaşam krizleriyle başa çıkma sürecinde birebir destek. Zihinsel yükleri hafifletmek ve kişinin kendini yeniden keşfetmesi için güvenli bir alan sunulur.',
    },
    {
        title: 'İlişki ve Çift Terapisi',
        desc: 'İletişim kopuklukları,, çözülemeyen çatışmalar ve ilişki dinamiklerini sağlıklı bir zemine oturtma çalışmaları. Çiftlerin birbirlerini derinlemesine anlaması ve bağlarını güçlendirmesi hedeflenir.',
    },
    {
        title: 'Kaygı ve Panik Atak',
        desc: 'Yoğun kaygı, endişe bozuklukları ve panik durumlarını anlamlandırma ve yönetebilme becerileri. Fiziksel ve zihinsel rahatlama teknikleriyle kontrol duygusunun yeniden kazanılması sağlanır.',
    },
    {
        title: 'Stres Yönetimi',
        desc: 'Günlük hayatın getirdiği baskı, kronik tükenmişlik sendromu ve modern yaşamın yarattığı iş-yaşam dengesini kurma pratikleri. Sürdürülebilir bir yaşam ritmi oluşturulur.',
    },
    {
        title: 'Özgüven ve Kişisel Gelişim',
        desc: 'Kişinin kendi potansiyelini fark etmesi, sağlıklı sınır çizebilme becerisi kazanması ve içsel eleştirmenle şefkatli bir şekilde başa çıkabilme yolları üzerine çalışılır.',
    },
    {
        title: 'Yas ve Kayıp Süreçleri',
        desc: 'Hayatın dönüm noktalarındaki kayıplar, ayrılıklar ve büyük değişimlerle sağlıklı bir şekilde vedalaşabilme, bu süreci kendi doğal akışında onurlandırarak kabullenme yolculuğu.',
    },
]

export default function WorkAreas() {
    return (
        <div className="mx-auto max-w-4xl px-6 py-28 md:px-8 md:py-36 space-y-24">

            {/* Üst Başlık - Dergi / Editorial Stili */}
            <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-center space-y-6 max-w-2xl mx-auto"
            >
                <span className="text-xs uppercase tracking-[0.3em] font-medium text-moss/80">
                    Uzmanlık Alanlarım
                </span>

                <h1 className="font-serif text-3xl tracking-tight text-ink md:text-5xl leading-[1.15]">
                    Hangi konular üzerinde çalışıyoruz?
                </h1>

                <div className="w-16 h-px bg-moss/30 mx-auto my-4" />

                <p className="text-base md:text-lg text-ink/75 leading-relaxed font-light">
                    Hayatın zorlayıcı dönemlerinde, yargılamayan ve tamamen size odaklanan güvenli bir eşlik alanı.
                </p>
            </motion.div>

            {/* İçerik Blokları - İkonsuz, Geniş ve Rahat Okuma Alanları */}
            <div className="space-y-12 md:space-y-16">
                {areas.map((area, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                        className="group relative grid grid-cols-1 md:grid-cols-12 gap-6 items-start border-b border-ink/10 pb-12 md:pb-16 last:border-none"
                    >
                        {/* Sol Taraf: Sıra Numarası ve Başlık */}
                        <div className="md:col-span-5 space-y-2">
                            <span className="font-mono text-xs text-moss/60 tracking-wider">
                                / 0{index + 1}
                            </span>
                            <h2 className="font-serif text-2xl md:text-3xl text-ink tracking-tight font-normal">
                                {area.title}
                            </h2>
                        </div>

                        {/* Sağ Taraf: Uzun, Detaylı ve Kesintisiz Açıklama Metni */}
                        <div className="md:col-span-7">
                            <p className="text-base md:text-lg text-ink/75 leading-relaxed font-light">
                                {area.desc}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>

        </div>
    )
}