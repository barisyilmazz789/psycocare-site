import { motion, AnimatePresence } from 'framer-motion'

export default function LegalModal({ isOpen, onClose, title, content }) {
    if (!isOpen) return null

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/40 backdrop-blur-sm">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-[2rem] bg-white p-8 shadow-2xl border border-ink/10"
                >
                    <div className="flex items-center justify-between pb-4 border-b border-ink/8">
                        <h3 className="font-serif text-2xl text-ink">{title}</h3>
                        <button
                            onClick={onClose}
                            className="flex h-9 w-9 items-center justify-center rounded-full bg-cream text-ink transition hover:bg-moss hover:text-cream"
                        >
                            ✕
                        </button>
                    </div>

                    <div className="mt-6 space-y-4 text-sm text-ink/75 leading-relaxed">
                        {content}
                    </div>

                    <div className="mt-8 pt-4 border-t border-ink/8 text-right">
                        <button
                            onClick={onClose}
                            className="rounded-full bg-ink px-6 py-2.5 text-xs text-cream transition hover:bg-moss"
                        >
                            Kapat
                        </button>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    )
}