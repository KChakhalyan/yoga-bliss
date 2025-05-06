'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useTransition, useState } from 'react';

const LanguageSwitcher = () => {
    const router = useRouter();
    const pathname = usePathname();
    const [isPending, startTransition] = useTransition();
    const [open, setOpen] = useState(false); // состояние открытия меню

    const changeLanguage = (lang: 'en' | 'ru') => {
        const segments = pathname.split('/');
        segments[1] = lang; // заменить локаль
        const newPath = segments.join('/');

        setOpen(false); // закрыть меню
        startTransition(() => {
            router.push(newPath);
        });
    };

    return (
        <div className="relative inline-block text-left z-50">
            {/* Кнопка открытия меню */}
            <button
                onClick={() => setOpen(!open)}
                className="flex items-center gap-2 px-3 py-1 rounded-md hover:bg-gray-100 transition cursor-pointer"
            >
                🌐

            </button>

            {/* Выпадающее меню */}
            {open && (
                <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded-md shadow-md">
                    <button
                        onClick={() => changeLanguage('en')}
                        className="flex w-full items-center gap-2 px-4 py-2 hover:bg-gray-100 transition disabled:opacity-50"
                        disabled={isPending}
                    >
                        🇬🇧 English
                    </button>
                    <button
                        onClick={() => changeLanguage('ru')}
                        className="flex w-full items-center gap-2 px-4 py-2 hover:bg-gray-100 transition disabled:opacity-50"
                        disabled={isPending}
                    >
                        🇷🇺 Русский
                    </button>
                </div>
            )}
        </div>
    );
};

export default LanguageSwitcher;
