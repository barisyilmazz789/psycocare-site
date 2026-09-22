import { motion } from 'framer-motion'
import gulceYilmazImg from '../assets/gulce-yilmaz.jpg'

const educationList = [
    {
        year: '2006 – 2012',
        title: 'Uludağ Üniversitesi Tıp Fakültesi Psikiyatri A.B.D. — Tıpta Uzmanlık Eğitimi',
        tag: 'Uzmanlık',
    },
    {
        year: '1996 – 2003',
        title: 'Uludağ Üniversitesi Tıp Fakültesi — Tıp Doktoru',
        tag: 'Lisans',
    },
]

const memberships = [
    { name: 'Türkiye Psikiyatri Derneği', icon: '🏛️' },
    { name: 'Türk Tabipleri Birliği', icon: '⚕️' },
]

const trainings = [
    'Bilişsel Davranışçı Terapi Eğitimi, 168 saat (Türkiye Psikiyatri Derneği) 2018-2020',
    'Bilişsel Davranışçı Terapi, Kuramsal Eğitim (KDT Derneği) 2009-2011',
    'Prof. Dr. Paul Salkovskis atölye çalışması, 7. Uluslararası Kognitif Psikoterapi Kongresi, Haziran 2011',
    'Prof. Dr. Adrian Wells atölye çalışması, 7. Uluslararası Kognitif Psikoterapi Kongresi, Haziran 2011',
    'Prof. Dr. Adam Radomsky atölye çalışması, 7. Uluslararası Kognitif Psikoterapi Kongresi, Haziran 2011',
    'Cinsel İşlev Bozuklukları ve Tedavileri Kursu, Cinsel Sağlık Derneği - Türkiye Psikiyatri Derneği 2006',
]

export default function About() {
    return (
        <div className="mx-auto max-w-5xl px-5 py-8 md:px-8 md:py-16 space-y-16">

            {/* 1. BÖLÜM: Fotoğraf ve Biyografi */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center"
            >
                {/* Sol: Fotoğraf Alanı (Hero mantığıyla import edilerek bağlandı) */}
                <div className="md:col-span-5 flex justify-center">
                    <div className="relative w-full max-w-xs md:max-w-none">
                        <div className="absolute -inset-2 rounded-[2.5rem] bg-moss/10 blur-xl opacity-70"></div>

                        <div className="relative aspect-[3/4] rounded-[2.2rem] overflow-hidden border-2 border-white bg-white shadow-xl p-2.5">
                            <img
                                src={gulceYilmazImg}
                                alt="Uzm. Dr. Ebru Öztepe Yavaşçı"
                                className="w-full h-full object-cover rounded-[1.8rem]"
                            />
                        </div>
                    </div>
                </div>

                {/* Sağ: Hakkında Metni */}
                <div className="md:col-span-7 space-y-6">
                    <div className="space-y-2">
                        <span className="text-xs uppercase tracking-widest font-semibold text-moss">
                            Hakkımda
                        </span>
                        <h1 className="font-serif text-3xl tracking-tight text-ink md:text-4xl">
                            Ebru Öztepe Yavaşçı Kimdir?
                        </h1>
                    </div>

                    <div className="space-y-4 text-sm md:text-base text-ink/80 leading-relaxed font-sans bg-white/60 backdrop-blur-md border border-ink/10 p-6 md:p-8 rounded-[2.2rem] shadow-sm">
                        <p>
                            Uzm. Dr. Ebru ÖZTEPE YAVAŞÇI, 1979 yılında Milas&apos;ta doğmuştur. Evli ve iki çocuk annesidir. Lisans öncesi öğrenimlerinin ardından Uludağ Üniversitesi Tıp Fakültesi&apos;nde başladığı tıp eğitimini 2003 yılında başarıyla tamamlayarak tıp doktoru unvanı almıştır.
                        </p>
                        <p>
                            İhtisasını 2006-2012 yılları arasında Uludağ Üniversitesi Tıp Fakültesi Ruh Sağlığı ve Hastalıkları Ana Bilim Dalı&apos;nda yapmıştır.
                        </p>
                        <p>
                            2012-2015 yılları arasında mecburi hizmetini Zonguldak Atatürk Devlet Hastanesi&apos;nde yapmış olan Uzm. Dr. Ebru ÖZTEPE YAVAŞÇI, 2015-2018 yılları arasında Bursa Medikalpark Hastanesi&apos;nde ve 2018-2022 yılları arasında Bursa Medicana Hastanesi&apos;nde çalışmıştır.
                        </p>
                        <p>
                            10 Ağustos 2022 tarihinden itibaren kendi kliniğinde hizmet vermeye başlamıştır.
                        </p>
                        <p>
                            Bilişsel Davranışçı Terapi eğitimini 2009-2011 yılları arasında Kognitif Davranışçı Terapi Derneği&apos;nde teorik dersleri tamamlayıp, en son Türkiye Psikiyatri Derneği&apos;nden sertifikasyonunu almış olup Bilişsel Davranışçı Terapi Uygulayıcısı Psikoterapist olma hakkını almıştır.
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* 2. BÖLÜM: Öğrenim Durumu */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="space-y-6"
            >
                <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-moss/10 text-moss text-base">🎓</span>
                    <h2 className="font-serif text-2xl tracking-tight text-ink">
                        Öğrenim Durumu
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {educationList.map((edu, index) => (
                        <div
                            key={index}
                            className="group relative flex flex-col justify-between rounded-[2rem] bg-white/80 backdrop-blur-md border border-ink/10 p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-moss/40"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <span className="inline-flex items-center px-3.5 py-1 rounded-xl bg-[#EFECE6] text-moss text-xs font-semibold tracking-wide">
                                    {edu.year}
                                </span>
                                <span className="text-xs font-medium text-ink/40 uppercase tracking-wider">
                                    {edu.tag}
                                </span>
                            </div>
                            <p className="text-base text-ink font-medium leading-snug">
                                {edu.title}
                            </p>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* 3. BÖLÜM: Üyesi Olduğu Bilimsel Kuruluşlar */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="space-y-6"
            >
                <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-moss/10 text-moss text-base">🏛️</span>
                    <h2 className="font-serif text-2xl tracking-tight text-ink">
                        Üyesi Olduğu Bilimsel Kuruluşlar
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {memberships.map((membership, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-4 rounded-[2rem] bg-white/80 backdrop-blur-md border border-ink/10 p-5 shadow-sm transition-all duration-300 hover:shadow-md hover:border-moss/40"
                        >
                            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#EFECE6] text-lg shadow-sm">
                                {membership.icon}
                            </span>
                            <span className="text-base text-ink font-medium">
                                {membership.name}
                            </span>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* 4. BÖLÜM: Katıldığı Eğitimler */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="space-y-6"
            >
                <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-moss/10 text-moss text-base">📜</span>
                    <h2 className="font-serif text-2xl tracking-tight text-ink">
                        Katıldığı Eğitimler
                    </h2>
                </div>

                <div className="rounded-[2.5rem] bg-white/80 backdrop-blur-md border border-ink/10 p-6 md:p-10 shadow-sm space-y-4">
                    <ul className="space-y-4">
                        {trainings.map((training, index) => (
                            <li key={index} className="flex items-start gap-4 text-sm md:text-base text-ink/80 leading-relaxed group">
                                <span className="flex h-2.5 w-2.5 rounded-full bg-moss shrink-0 mt-2 transition-transform duration-300 group-hover:scale-125"></span>
                                <span className="group-hover:text-ink transition-colors duration-200">{training}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </motion.div>

        </div>
    )
}