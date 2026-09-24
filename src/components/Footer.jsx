import { useState } from 'react'
import LegalModal from './LegalModal'

export default function Footer() {
  const [modalData, setModalData] = useState({
    isOpen: false,
    title: '',
    content: null,
  })

  // =========================================================
  // KVKK AYDINLATMA METNİ
  // =========================================================
  const kvkkContent = (
    <>
      <p>
        <strong>1. Veri Sorumlusu:</strong> Bu Aydınlatma Metni,
        Klinik Psikolog Gülce Yılmaz tarafından, 6698 sayılı
        Kişisel Verilerin Korunması Kanunu ("KVKK") kapsamında
        kişisel verilerinizin işlenmesi hakkında sizi bilgilendirmek
        amacıyla hazırlanmıştır.
      </p>

      <p>
        <strong>2. İşlenen Kişisel Veriler:</strong> İletişim ve
        randevu talep formu aracılığıyla tarafınızca iletilen
        kimlik ve iletişim bilgileri ile form kapsamında
        paylaştığınız konu ve mesaj içerikleri işlenebilmektedir.
      </p>

      <p>
        <strong>3. Kişisel Verilerin İşlenme Amaçları:</strong>{' '}
        Kişisel verileriniz; iletişim taleplerinizin yanıtlanması,
        randevu taleplerinin değerlendirilmesi, sizinle iletişim
        kurulması ve talep ettiğiniz psikolojik danışmanlık
        hizmetlerine ilişkin süreçlerin yürütülmesi amaçlarıyla
        işlenmektedir.
      </p>

      <p>
        <strong>4. Özel Nitelikli Kişisel Veriler:</strong>{' '}
        Mesaj alanına kendi iradenizle sağlık durumunuz veya
        psikolojik durumunuz hakkında bilgi yazmanız halinde,
        bu bilgiler özel nitelikli kişisel veri niteliğinde olabilir.
        Bu nedenle iletişim formuna, randevu oluşturulması için
        gerekli olmayan hassas veya özel nitelikli kişisel
        bilgilerinizi yazmamanızı rica ederiz.
      </p>

      <p>
        <strong>5. Kişisel Verilerin Toplanma Yöntemi:</strong>{' '}
        Kişisel verileriniz, internet sitesinde yer alan iletişim
        ve randevu formunun tarafınızca doldurulması ve elektronik
        ortamda gönderilmesi suretiyle toplanmaktadır.
      </p>

      <p>
        <strong>6. Kişisel Verilerin Aktarılması:</strong>{' '}
        Form aracılığıyla iletilen bilgiler, iletişim talebinin
        ilgili e-posta hesabına ulaştırılması amacıyla kullanılan
        teknik hizmet sağlayıcılar üzerinden işlenebilmektedir.
        Bu kapsamda internet sitesinde EmailJS hizmetinden
        yararlanılmaktadır.
      </p>

      <p>
        <strong>7. Yurt Dışına Veri Aktarımı:</strong>{' '}
        EmailJS'in hizmet ve gizlilik politikalarında belirtilen
        veri işleme faaliyetleri kapsamında kişisel verilerin
        yurt dışında bulunan sistemlere aktarılması söz konusu
        olabilir. Böyle bir aktarım, 6698 sayılı Kişisel Verilerin
        Korunması Kanunu'nun kişisel verilerin yurt dışına
        aktarılmasına ilişkin güncel hükümleri ve ilgili mevzuat
        kapsamında gerekli şartların sağlanması suretiyle
        gerçekleştirilir.
      </p>

      <p>
        <strong>8. Saklama Süresi:</strong>{' '}
        Kişisel verileriniz, işlenme amaçlarının gerektirdiği süre
        boyunca ve ilgili mevzuatta öngörülen saklama süreleri
        dikkate alınarak muhafaza edilir. Saklama süresinin sona
        ermesi veya işleme amacının ortadan kalkması halinde
        kişisel veriler, ilgili mevzuata uygun şekilde silinir,
        yok edilir veya anonim hale getirilir.
      </p>

      <p>
        <strong>9. KVKK Kapsamındaki Haklarınız:</strong>{' '}
        KVKK'nın 11. maddesi kapsamında kişisel verilerinizin
        işlenip işlenmediğini öğrenme, işlenmişse buna ilişkin
        bilgi talep etme, işleme amacını ve amaca uygun kullanılıp
        kullanılmadığını öğrenme, eksik veya yanlış işlenmişse
        düzeltilmesini isteme ve kanunda öngörülen şartlar
        çerçevesinde silinmesini veya yok edilmesini isteme dahil
        olmak üzere sahip olduğunuz haklar bulunmaktadır.
      </p>

      <p>
        <strong>10. İletişim:</strong>{' '}
        KVKK kapsamındaki taleplerinizi veri sorumlusuna,
        internet sitesinde belirtilen iletişim kanalları
        üzerinden iletebilirsiniz.
      </p>
    </>
  )

  // =========================================================
  // GİZLİLİK POLİTİKASI
  // =========================================================
  const privacyContent = (
    <>
      <p>
        <strong>1. Danışan Gizliliği ve Mahremiyet:</strong>{' '}
        Klinik Psikolog Gülce Yılmaz olarak danışan gizliliği
        ve mahremiyetine önem verilmektedir.
      </p>

      <p>
        Seans süreçlerinde paylaşılan kişisel bilgiler, iletişim
        içerikleri ve danışmanlık sürecine ilişkin bilgiler,
        ilgili mevzuatta öngörülen yükümlülükler ve istisnalar
        saklı kalmak kaydıyla gizlilik ilkelerine uygun şekilde
        korunmaktadır.
      </p>

      <p>
        <strong>2. Kişisel Bilgilerin Kullanımı:</strong>{' '}
        İnternet sitesi üzerinden iletilen bilgiler; iletişim
        kurulması, randevu taleplerinin değerlendirilmesi ve
        talep edilen hizmet hakkında geri dönüş yapılması
        amacıyla kullanılmaktadır.
      </p>

      <p>
        <strong>3. Üçüncü Taraflar:</strong>{' '}
        İnternet sitesi üzerinden gönderilen form verileri,
        teknik iletişim hizmetlerinin sağlanabilmesi amacıyla
        kullanılan hizmet sağlayıcılar üzerinden işlenebilir.
      </p>

      <p>
        <strong>4. Güvenlik:</strong>{' '}
        Kişisel verilerin yetkisiz erişime, kayba veya hukuka
        aykırı kullanıma karşı korunması amacıyla makul teknik
        ve idari tedbirler uygulanmaktadır.
      </p>
    </>
  )

  // =========================================================
  // ÇEREZ POLİTİKASI
  // =========================================================
  const cookieContent = (
    <>
      <p>
        <strong>1. Amaç:</strong>{' '}
        Bu Çerez Politikası, Klinik Psikolog Gülce Yılmaz'a ait
        internet sitesini ziyaret eden kullanıcıları, internet
        sitesinde kullanılan veya kullanılabilecek çerezler
        hakkında bilgilendirmek amacıyla hazırlanmıştır.
      </p>

      <p>
        <strong>2. Çerez Nedir?</strong>{' '}
        Çerezler (cookies), internet sitelerinin ziyaret
        sırasında kullanıcıların tarayıcılarında veya cihazlarında
        saklayabildiği küçük metin dosyalarıdır.
      </p>

      <p>
        <strong>3. Bu İnternet Sitesinde Kullanım:</strong>{' '}
        İnternet sitesinde Google Analytics, Google Maps,
        YouTube, Google reCAPTCHA veya Meta Pixel gibi analiz,
        reklam veya kullanıcı profilleme amacıyla kullanılan
        üçüncü taraf izleme araçları bulunmamaktadır.
      </p>

      <p>
        İnternet sitesinin çalışması sırasında teknik olarak
        gerekli olabilecek veriler veya tarayıcı tarafından
        otomatik olarak oluşturulan bilgiler, internet sitesinin
        temel işlevlerinin yerine getirilmesi amacıyla
        işlenebilir.
      </p>

      <p>
        <strong>4. Tarayıcı Ayarları:</strong>{' '}
        Kullanıcılar, kullandıkları internet tarayıcısının
        ayarları üzerinden çerezleri görüntüleyebilir,
        silebilir veya engelleyebilirler. Ancak bazı çerezlerin
        engellenmesi internet sitesinin belirli işlevlerinin
        düzgün çalışmamasına neden olabilir.
      </p>

      <p>
        <strong>5. Üçüncü Taraf Hizmetleri:</strong>{' '}
        İnternet sitesindeki iletişim formunun gönderilmesi
        sırasında EmailJS gibi teknik hizmet sağlayıcılarından
        yararlanılmaktadır. Bu hizmetin veri işleme faaliyetleri
        kendi hizmet ve gizlilik politikalarına da tabi olabilir.
      </p>

      <p>
        <strong>6. Politika Değişiklikleri:</strong>{' '}
        İnternet sitesinde kullanılan teknik altyapının veya
        üçüncü taraf hizmetlerin değişmesi halinde bu Çerez
        Politikası güncellenebilir.
      </p>

      <p>
        <strong>7. İletişim:</strong>{' '}
        Çerez Politikası hakkında sorularınız için internet
        sitesinde yer alan iletişim kanallarından bizimle
        iletişime geçebilirsiniz.
      </p>
    </>
  )

  return (
    <>
      <footer className="border-t border-ink/8 bg-white/40 px-5 py-6 md:px-10 md:py-8">
        <div className="mx-auto max-w-6xl">

          <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">

            {/* =================================================
                1. SÜTUN
            ================================================== */}
            <div className="max-w-xs">
              <p className="font-serif text-base text-ink">
                Kli. Psk. Gülce Yılmaz
              </p>

              <p className="mt-1 text-xs leading-relaxed text-ink/65">
                Bilimsel temelli, yargısız ve güvenli klinik
                psikoloji ve danışmanlık hizmetleri (Çanakkale).
              </p>
            </div>

            {/* =================================================
                2. SÜTUN - YASAL
            ================================================== */}
            <div>
              <p className="font-semibold text-xs uppercase tracking-wider text-ink">
                Yasal
              </p>

              <ul className="mt-2 space-y-1 text-xs text-ink/65">

                {/* Gizlilik */}
                <li>
                  <button
                    type="button"
                    onClick={() =>
                      setModalData({
                        isOpen: true,
                        title: 'Gizlilik Politikası',
                        content: privacyContent,
                      })
                    }
                    className="text-left transition hover:text-moss"
                  >
                    Gizlilik Politikası
                  </button>
                </li>

                {/* KVKK */}
                <li>
                  <button
                    type="button"
                    onClick={() =>
                      setModalData({
                        isOpen: true,
                        title: 'KVKK Aydınlatma Metni',
                        content: kvkkContent,
                      })
                    }
                    className="text-left transition hover:text-moss"
                  >
                    KVKK Aydınlatma Metni
                  </button>
                </li>

                {/* Çerez */}
                <li>
                  <button
                    type="button"
                    onClick={() =>
                      setModalData({
                        isOpen: true,
                        title: 'Çerez Politikası',
                        content: cookieContent,
                      })
                    }
                    className="text-left transition hover:text-moss"
                  >
                    Çerez Politikası
                  </button>
                </li>

              </ul>
            </div>

            {/* =================================================
                3. SÜTUN - SOSYAL MEDYA
            ================================================== */}
            <div>
              <p className="font-semibold text-xs uppercase tracking-wider text-ink">
                Sosyal Medya
              </p>

              <div className="mt-2 flex items-center gap-3">

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/psikologgulceyilmaz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex h-7 w-7 items-center justify-center rounded-full border border-ink/10 bg-white text-ink transition hover:border-moss hover:bg-moss hover:text-cream"
                >
                  <svg
                    className="h-3.5 w-3.5 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 3.668-.014 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/g%C3%BClce-y%C4%B1lmaz-2aa8b51a1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-7 w-7 items-center justify-center rounded-full border border-ink/10 bg-white text-ink transition hover:border-moss hover:bg-moss hover:text-cream"
                >
                  <svg
                    className="h-3.5 w-3.5 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>

                {/* Doktorsitesi */}
                <a
                  href="https://www.doktorsitesi.com/gulce-yilmaz/psikoloji-klinik-psikolog/canakkale"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Randevu - Doktorsitesi"
                  title="Doktorsitesi Randevu"
                  className="flex h-7 w-7 items-center justify-center rounded-full border border-ink/10 bg-white text-ink transition hover:border-moss hover:bg-moss hover:text-cream"
                >
                  <svg
                    className="h-3.5 w-3.5 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" />
                  </svg>
                </a>

              </div>
            </div>

            {/* =================================================
                4. SÜTUN - İLETİŞİM
            ================================================== */}
            <div>
              <p className="font-semibold text-xs uppercase tracking-wider text-ink">
                İletişim
              </p>

              <div className="mt-2 text-xs text-ink/80">
                <span className="font-medium text-ink">
                  +90 (XXX) XXX XX XX
                </span>
              </div>
            </div>

          </div>

          {/* =================================================
              TELİF
          ================================================== */}
          <div className="mt-8 border-t border-ink/5 pt-4 text-center text-xs text-ink/50">
            © 2026 Gülce Yılmaz. Tüm hakları saklıdır.
          </div>

        </div>
      </footer>

      {/* =====================================================
          LEGAL MODAL
      ====================================================== */}
      <LegalModal
        isOpen={modalData.isOpen}
        onClose={() =>
          setModalData({
            isOpen: false,
            title: '',
            content: null,
          })
        }
        title={modalData.title}
        content={modalData.content}
      />
    </>
  )
}