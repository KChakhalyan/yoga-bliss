'use client';

import type { DictionaryType } from '@/types/dictionary';
import Image from 'next/image';

type Props = {
    dict: DictionaryType;
};

const Gallery = ({ dict }: Props) => {
    const images = [1, 2, 3, 4, 5, 6];

    return (
        <section id="gallery" className="py-20 px-6 bg-white">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold font-serif text-center mb-12">{dict.galleryTitle}</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {images.map((num) => (
                        <div key={num} className="overflow-hidden rounded-lg shadow hover:shadow-xl transition">
                            <Image
                                src={`/gallery/${num}.jpg`}
                                alt={`Yoga Studio ${num}`}
                                width={600}
                                height={400}
                                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
