import en from '@/translations/en.json';
import ru from '@/translations/ru.json';
import type { DictionaryType } from '@/types/dictionary';

const dictionaries: Record<'en' | 'ru', DictionaryType> = {
    en,
    ru,
};

export const getDictionary = async (locale: 'en' | 'ru'): Promise<DictionaryType> => {
    return dictionaries[locale];
};
