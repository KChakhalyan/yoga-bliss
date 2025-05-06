'use client';

import { useState } from 'react';
import type { DictionaryType } from '@/types/dictionary';
import FadeInSection from '../components/FadeInSection';

type Props = {
    dict: DictionaryType;
};

const Contact = ({ dict }: Props) => {
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();


        const form = e.currentTarget;
        const formData = new FormData(form);

        const name = formData.get('name')?.toString() || '';
        const email = formData.get('email')?.toString() || '';
        const message = formData.get('message')?.toString() || '';

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, message }),
            });

            if (response.ok) {
                form.reset();
                setStatus('success');
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <FadeInSection>
            <section id="contact" className="py-20 px-6 bg-gray-50">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-4xl font-bold font-serif mb-2">{dict.contactTitle}</h2>
                    <p className="text-gray-600 mb-8">{dict.contactSubtitle}</p>

                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            placeholder={dict.contactName}
                            required
                            className="w-full border border-gray-300 rounded px-4 py-2"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder={dict.contactEmail}
                            required
                            className="w-full border border-gray-300 rounded px-4 py-2"
                        />
                        <textarea
                            name="message"
                            placeholder={dict.contactMessage}
                            rows={5}
                            required
                            className="w-full border border-gray-300 rounded px-4 py-2"
                        />
                        <button
                            type="submit"
                            className="bg-[var(--button-color)] text-white px-6 py-3 rounded hover:bg-[var(--button-color-hover)] transition"
                        >
                            {dict.contactButton}
                        </button>

                        {status === 'success' && (
                            <p className="text-green-600 mt-4">✅ Message sent successfully!</p>
                        )}
                        {status === 'error' && (
                            <p className="text-red-600 mt-4">❌ Something went wrong. Please try again.</p>
                        )}
                    </form>
                </div>
            </section>
        </FadeInSection>
    );
};

export default Contact;
