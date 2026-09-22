import { motion } from 'framer-motion'

const areas = [
    {
        title: 'Bireysel Psikoterapi',
        desc: 'Kaygı, depresyon, özgüven problemleri ve yaşam krizleriyle başa çıkma sürecinde birebir destek.',
    },
    {
        title: 'İlişki ve Çift Terapisi',
        desc: 'İletişim kopuklukları, çatışmalar ve ilişki dinamiklerini sağlıklı bir zemine oturtma çalışmaları.',
    },
    {
        title: 'Kaygı ve Panik Atak',
        desc: 'Yoğun kaygı, endişe bozuklukları ve panik durumlarını anlamlandırma ve yönetebilme becerileri.',
    },
    {
        title: 'Stres Yönetimi',
        desc: 'Günlük hayatın getirdiği baskı, tükenmişlik sendromu ve iş-yaşam dengesini kurma pratikleri.',
    },
    {
        title: 'Özgüven ve Kişisel Gelişim',
        desc: 'Kendi potansiyelini keşfetme, sınır çizebilme ve içsel eleştirmenle başa çıkma yolları.',
    },
    {
        title: 'Yas ve Kayıp Süreçleri',
        desc: 'Hayatın dönüm noktalarındaki kayıplar ve ayrılıklarla sağlıklı bir şekilde vedalaşabilme süreci.',
    },
]

export default function WorkAreas() {
    return (
        <div className="mx-auto max-w-5xl px-5 py-12 md:px-8 md:py-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-12"
            >
                <div className="text-center space-y-4">
                    <span className="inline-block rounded-full bg-moss/10 px-4 py-1.5 text-xs font-medium tracking-wide text-moss">
                        Uzmanlık Alanlarım
                    </span>
                    <h1 className="font-serif text-3xl tracking-tight text-ink md:text-5xl">
                        Hangi konular üzerinde çalışıyoruz?
                    </h1>
                    <p className="mx-auto max-w-2xl text-base text-ink/75 leading-relaxed md:text-lg">
                        Hayatınızın zorlandığınız dönemlerinde size eşlik ettiğim temel çalışma alanları ve terapi konuları.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {areas.map((area, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="p-8 rounded-3xl bg-white/60 border border-ink/8 hover:border-moss/40 transition-all flex flex-col justify-between space-y-4 shadow-sm"
                        >
                            <div className="space-y-2">
                                <span className="text-xs font-mono text-moss">0{index + 1}</span>
                                <h3 className="font-serif text-xl text-ink">{area.title}</h3>
                                <p className="text-sm text-ink/70 leading-relaxed">{area.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    )
}