'use client';

import type { DictionaryType } from '@/types/dictionary';
import FadeInSection from '../components/FadeInSection';

type Props = {
    dict: DictionaryType;
};

const Hero = ({ dict }: Props) => {
    return (
        <FadeInSection>
            <section id="hero" className="flex flex-col justify-center items-center min-h-screen bg-[url('/hero.png')] bg-cover bg-center text-center p-6">
                <h1 className="text-7xl font-bold mb-4 font-serif">{dict.heroTitle}</h1>

                <p className="text-3xl mb-6 font-sans">{dict.heroSubtitle}</p>
                <button className="bg-[var(--button-color)] text-white rounded-[0.5vw] py-3 px-6 hover:bg-[var(--button-color-hover)] cursor-pointer">
                    Book a Lesson
                </button>
            </section>
        </FadeInSection>
    );
};

export default Hero;
