import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const articles = [
    {
        title: 'Günlük Hayatta Kaygı ile Başa Çıkmanın 4 Pratik Yolu',
        date: '12 Mayıs 2026',
        readTime: '4 dk okuma',
        category: 'Kaygı',
        excerpt: 'Zihnimiz yoğun kaygı dalgalarıyla dolduğunda anı yakalamak zorlaşabilir. Nefes ve farkındalık egzersizleriyle...',
        content: `Günlük yaşamın koşturmacası içerisinde zihnimiz bazen geleceğe dair senaryolarla, belirsizliklerle ve endişelerle dolabilir. Kaygı, aslında insanı korumaya çalışan doğal bir mekanizmadır; ancak kontrolden çıktığında hayat kalitemizi düşürebilir.

1. **Farkındalık ve Nefes Egzersizleri:** Kaygı yükseldiği anlarda zihni bedene getirmek en etkili adımdır. 4-7-8 nefes tekniği ile parasempatik sinir sisteminizi aktive edebilirsiniz.
2. **Düşünceleri Sorgulamak:** Zihnimiz her felaket senaryosunu gerçek gibi gösterir. "Bu düşünce bir gerçek mi, yoksa sadece bir endişe mi?" diye sormak zihne mesafe kazandırır.
3. **Kontrol Alanını Belirlemek:** Değiştiremeyeceğiniz şeyler için enerji harcamak yerine, yalnızca o an kontrol edebileceğiniz küçük adımlara odaklanın.
4. **Yargılamadan Kabul Etmek:** Kaygıyı bastırmaya çalışmak onu büyütür. "Şu an kaygılı hissediyorum ve bu çok normal" diyerek duyguya alan açmak iyileşmenin ilk adımıdır.`
    },
    {
        title: 'İlişkilerde Sınır Koyabilmek Neden Bu Kadar Önemlidir?',
        date: '28 Nisan 2026',
        readTime: '6 dk okuma',
        category: 'İlişkiler',
        excerpt: 'Hayır diyebilmek bencillik mi, yoksa ruh sağlığımızın temel taşı mı? Sınırların psikolojik arka planı...',
        content: `İlişkilerde sağlıklı sınırlar koyabilmek, hem kendimize duyduğumuz özsaygının hem de karşımızdaki kişiye duyduğumuz dürüstlüğün bir göstergesidir. Birçok insan "hayır" demenin karşı tarafı kıracağını veya bencilce algılanacağını düşünerek kendi sınırlarını ihlal eder.

Ancak unutmamalıyız ki; başkalarına sürekli "evet" demek, çoğu zaman kendimize "hayır" demek anlamına gelir. Sağlıklı sınırlar;
- Enerjimizi korumamızı sağlar,
- İlişkilerde tükenmişlik hissini önler,
- Karşılıklı güven ve net bir iletişim inşa eder. Sınır çizmek duvar örmek değil, içerideki evi korumaktır.`
    },
    {
        title: 'Tükenmişlik Sendromu ile Tanışmak ve Dönüşüm',
        date: '10 Nisan 2026',
        readTime: '5 dk okuma',
        category: 'Kişisel Gelişim',
        excerpt: 'Sürekli koşturma halinde olmak bir süre sonra enerjimizi tüketir. Durma vaktinin geldiğini gösteren sinyaller...',
        content: `Tükenmişlik sendromu (Burnout); yoğun stres, sürekli performans baskısı ve tükenmeyen sorumluluklar altında ezilen modern insanın sıkça yaşadığı bir durumdur. Genellikle bir gecede ortaya çıkmaz; sinsi adımlarla ilerler.

Sabahları yataktan yorgun kalkmak, en basit işleri bile yaparken zorlanmak, tahammülsüzlük ve hayattan keyif alamamak tükenmişliğin en net sinyalleridir. Bu noktada durabilmek, "hayır" diyebilmek ve zihinsel molalar yaratmak bir lüks değil, ruhsal sağlığımız için zorunluluktur. Kendinize yavaşlamak için izin verin.`
    },
]

export default function Blog() {
    const [selectedArticle, setSelectedArticle] = useState(null)

    return (
        <div className="mx-auto max-w-4xl px-5 py-12 md:px-8 md:py-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-12"
            >
                <div className="text-center space-y-4">
                    <span className="inline-block rounded-full bg-moss/10 px-4 py-1.5 text-xs font-medium tracking-wide text-moss">
                        Yazılar ve Düşünceler
                    </span>
                    <h1 className="font-serif text-3xl tracking-tight text-ink md:text-5xl">
                        Blog Köşesi
                    </h1>
                    <p className="mx-auto max-w-2xl text-base text-ink/75 leading-relaxed md:text-lg">
                        Ruh sağlığı, ilişkiler ve zihinsel esenlik üzerine kaleme aldığım makaleler.
                    </p>
                </div>

                <div className="space-y-6">
                    {articles.map((article, index) => (
                        <motion.article
                            key={index}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            onClick={() => setSelectedArticle(article)}
                            className="p-8 rounded-3xl bg-white/60 border border-ink/8 hover:border-moss/40 transition-all space-y-4 shadow-sm cursor-pointer group"
                        >
                            <div className="flex items-center justify-between text-xs text-ink/60">
                                <span className="rounded-full bg-moss/10 px-3 py-1 text-moss font-medium">
                                    {article.category}
                                </span>
                                <span>{article.date} • {article.readTime}</span>
                            </div>
                            <h2 className="font-serif text-2xl text-ink group-hover:text-moss transition-colors">
                                {article.title}
                            </h2>
                            <p className="text-sm text-ink/70 leading-relaxed">
                                {article.excerpt}
                            </p>
                            <div className="pt-2 flex items-center gap-1.5 text-xs font-medium text-moss">
                                <span>Yazının tamamını oku</span>
                                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </motion.div>

            {/* Yazı Detay Modalı */}
            <AnimatePresence>
                {selectedArticle && (
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
                            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-cream p-6 sm:p-10 shadow-2xl border border-ink/10"
                        >
                            {/* Kapatma Butonu */}
                            <button
                                type="button"
                                onClick={() => setSelectedArticle(null)}
                                className="absolute top-6 right-6 flex h-10 w-10 items-center justify-center rounded-full bg-sand text-ink transition hover:bg-moss hover:text-cream"
                            >
                                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            {/* Makale Başlık & Bilgiler */}
                            <div className="mb-6 space-y-3">
                                <div className="flex items-center gap-3 text-xs text-ink/60">
                                    <span className="rounded-full bg-moss/10 px-3 py-1 text-moss font-medium">
                                        {selectedArticle.category}
                                    </span>
                                    <span>{selectedArticle.date} • {selectedArticle.readTime}</span>
                                </div>
                                <h2 className="font-serif text-3xl sm:text-4xl text-ink">
                                    {selectedArticle.title}
                                </h2>
                                <div className="h-px w-20 bg-moss/30 pt-2" />
                            </div>

                            {/* Makale Tam İçeriği */}
                            <div className="prose prose-ink max-w-none text-ink/80 text-base leading-relaxed space-y-4 whitespace-pre-line">
                                {selectedArticle.content}
                            </div>

                            {/* Alt Kapatma */}
                            <div className="mt-10 pt-6 border-t border-ink/10 flex justify-end">
                                <button
                                    type="button"
                                    onClick={() => setSelectedArticle(null)}
                                    className="rounded-full bg-moss px-6 py-2.5 text-xs font-medium text-cream transition hover:bg-ink"
                                >
                                    Kapat
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}