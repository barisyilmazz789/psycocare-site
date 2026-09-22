import { useState } from 'react'
import LegalModal from './LegalModal'

export default function Footer() {
  const [modalData, setModalData] = useState({ isOpen: false, title: '', content: null })

  const kvkkContent = (
    <>
      <p><strong>1. Veri Sorumlusunun Kimliği:</strong> Bu aydınlatma metni, Uzm. Psk. Gülce Yılmaz kliniği tarafından KVKK uyarınca kişisel verilerinizin işlenmesi hakkında bilgilendirme amacıyla hazırlanmıştır.</p>
      <p><strong>2. İşlenen Kişisel Veriler:</strong> Randevu formu aracılığıyla paylaştığınız ad-soyad, e-posta adresi, telefon numarası ve seans talebi notlarınız işlenmektedir.</p>
      <p><strong>3. İşleme Amaçları:</strong> Toplanan verileriniz yalnızca randevu süreçlerinin planlanması, sizinle iletişim kurulması ve klinik hizmetlerinin sunulması amaçlarıyla işlenir.</p>
      <p><strong>4. Haklarınız:</strong> KVKK'nın 11. maddesi gereğince verilerinizin silinmesini, düzeltilmesini veya işlenmemesini talep etme hakkına sahipsiniz.</p>
    </>
  )

  const privacyContent = (
    <>
      <p><strong>Gizlilik Politikası:</strong> Kliniğimiz, danışan gizliliğini ve mahremiyetini en üst düzeyde tutmayı ilke edinmiştir.</p>
      <p>Paylaştığınız tüm kişisel bilgiler ve seans içerikleri yasal zorunluluklar haricinde kesinlikle üçüncü şahıslarla paylaşılmaz.</p>
    </>
  )

  const cookieContent = (
    <>
      <p><strong>Çerez Politikası:</strong> Web sitemizin düzgün çalışmasını sağlamak ve kullanıcı deneyimini iyileştirmek amacıyla temel çerezler kullanılmaktadır.</p>
    </>
  )

  return (
    <>
      {/* Padding'ler minimuma indirildi */}
      <footer className="border-t border-ink/8 bg-white/40 px-5 py-5 md:px-8 md:py-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-4 md:gap-8 items-center">

            {/* 1. Sütun: Unvan ve Marka Netliği */}
            <div className="md:col-span-1.5">
              <p className="font-serif text-base text-ink">Uzm. Psk. Gülce Yılmaz</p>
              <p className="mt-1 text-xs leading-relaxed text-ink/65">
                Bilimsel temelli, yargısız ve güvenli klinik psikoloji ve danışmanlık hizmetleri (Çanakkale).
              </p>
            </div>

            {/* 2. Sütun: Keşfet (Randevu direkt Doktorsitesi'ne bağlanır) */}
            <div>
              <p className="font-semibold text-xs text-ink uppercase tracking-wider">Keşfet</p>
              <ul className="mt-2 space-y-1 text-xs text-ink/65">
                <li><a href="#hizmetler" className="transition hover:text-moss">Hizmetler</a></li>
                <li><a href="#hakkimda" className="transition hover:text-moss">Hakkımda</a></li>
                <li>
                  <a
                    href="https://www.doktorsitesi.com/gulce-yilmaz/psikoloji-klinik-psikolog/canakkale"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition hover:text-moss"
                  >
                    Randevu Al
                  </a>
                </li>
              </ul>
            </div>

            {/* 3. Sütun: Yasal / Modal Tetikleyiciler */}
            <div>
              <p className="font-semibold text-xs text-ink uppercase tracking-wider">Yasal</p>
              <ul className="mt-2 space-y-1 text-xs text-ink/65">
                <li>
                  <button onClick={() => setModalData({ isOpen: true, title: 'Gizlilik Politikası', content: privacyContent })} className="transition hover:text-moss text-left">
                    Gizlilik Politikası
                  </button>
                </li>
                <li>
                  <button onClick={() => setModalData({ isOpen: true, title: 'KVKK Aydınlatma Metni', content: kvkkContent })} className="transition hover:text-moss text-left">
                    KVKK Aydınlatma Metni
                  </button>
                </li>
                <li>
                  <button onClick={() => setModalData({ isOpen: true, title: 'Çerez Politikası', content: cookieContent })} className="transition hover:text-moss text-left">
                    Çerez Politikası
                  </button>
                </li>
              </ul>
            </div>

            {/* 4. Sütun: Sosyal Medya */}
            <div>
              <p className="font-semibold text-xs text-ink uppercase tracking-wider">Sosyal Medya</p>
              <div className="mt-2 flex items-center gap-3">
                <a
                  href="https://www.instagram.com/psikologgulceyilmaz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex h-7 w-7 items-center justify-center rounded-full border border-ink/10 bg-white text-ink transition hover:border-moss hover:bg-moss hover:text-cream"
                >
                  <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>

          </div>
        </div>
      </footer>

      {/* Yasal Metinler için Açılır Pencere (Modal) */}
      <LegalModal
        isOpen={modalData.isOpen}
        onClose={() => setModalData({ isOpen: false, title: '', content: null })}
        title={modalData.title}
        content={modalData.content}
      />
    </>
  )
}