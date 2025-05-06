'use client';

import type { DictionaryType } from '@/types/dictionary';

type Props = {
    dict: DictionaryType;
};

const Footer = ({ dict }: Props) => {
    const year = new Date().getFullYear();
    return (
        <footer className="bg-gray-100 py-8 px-6 mt-10 border-t">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
                <div>
                    <h3 className="text-xl font-bold mb-1">Yoga Bliss</h3>
                    <p className="text-gray-600">{dict.footerAddress}</p>
                </div>
                <p className="text-gray-500 text-sm">
                    © {year} Yoga Bliss. {dict.footerCopyright}
                </p>
            </div>
        </footer>
    );
};

export default Footer;
