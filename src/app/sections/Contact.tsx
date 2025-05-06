'use client';

import type { DictionaryType } from '@/types/dictionary';

type Props = {
    dict: DictionaryType;
};

const Contact = ({ dict }: Props) => {
    return (
        <section id="contact" className="py-20 px-6 bg-gray-50">
            <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-4xl font-bold font-serif mb-2">{dict.contactTitle}</h2>
                <p className="text-gray-600 mb-8">{dict.contactSubtitle}</p>

                <form className="space-y-4">
                    <input
                        type="text"
                        placeholder={dict.contactName}
                        className="w-full border border-gray-300 rounded px-4 py-2"
                    />
                    <input
                        type="email"
                        placeholder={dict.contactEmail}
                        className="w-full border border-gray-300 rounded px-4 py-2"
                    />
                    <textarea
                        placeholder={dict.contactMessage}
                        rows={5}
                        className="w-full border border-gray-300 rounded px-4 py-2"
                    />
                    <button
                        type="submit"
                        className="bg-[var(--button-color)] text-white px-6 py-3 rounded hover:bg-[var(--button-color-hover)] transition cursor-pointer"
                    >
                        {dict.contactButton}
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
