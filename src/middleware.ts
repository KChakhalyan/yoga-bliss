import { NextRequest, NextResponse } from 'next/server'

// Список поддерживаемых языков
const SUPPORTED_LOCALES = ['en', 'ru']
const DEFAULT_LOCALE = 'en'

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl

    // Только если пользователь зашёл на /
    if (pathname === '/') {
        // Получаем язык браузера
        const acceptLanguage = request.headers.get('accept-language')
        const preferred = acceptLanguage?.split(',')[0]?.split('-')[0] || DEFAULT_LOCALE

        // Выбираем язык из поддерживаемых
        const locale = SUPPORTED_LOCALES.includes(preferred) ? preferred : DEFAULT_LOCALE

        // Перенаправляем на нужную локаль
        return NextResponse.redirect(new URL(`/${locale}`, request.url))
    }

    // В остальных случаях — пропускаем запрос
    return NextResponse.next()
}
