# 🧘 Yoga Bliss — Fullstack Landing Page Cheat Sheet

## 1. Архитектура проекта

- Next.js 15 + App Router (`app/`)
- Tailwind CSS
- Мультиязычность через JSON + `middleware.ts`
- Компоненты-секции: Hero, About, Schedule, Gallery, Contact, Footer
- Компоненты: Navbar, LanguageSwitcher, FadeInSection

---

## 2. Структура проекта

```
/app
  /[locale]          - маршруты en/ru
  /sections          - секции страницы
  /api/contact/      - ручка формы (POST)

  layout.tsx         - обёртка с Navbar
  page.tsx           - основной контент

/components
  LanguageSwitcher.tsx
  FadeInSection.tsx
  Navbar.tsx

/public/gallery      - изображения

/translations
  en.json / ru.json
```

---

## 3. Мультиязычность

- Словари в JSON (`en.json`, `ru.json`)
- `getDictionary(locale)` → возвращает объект переводов
- Использование: `<h2>{dict.aboutTitle}</h2>`
- Переключатель языка с флагами 🇬🇧 🇷🇺
- middleware.ts → редирект `/` → `/en` или `/ru` по заголовку браузера

---

## 4. Contact: Форма + API

- POST-запрос на `/api/contact`
- Данные собираются через `FormData`
- Ответ от API: `{ success: true }`
- Показывается alert:
  - 🟢 при успехе
  - 🔴 при ошибке
- Год в футере: `new Date().getFullYear()`

---

## 5. Анимации

- `framer-motion` (`FadeInSection.tsx`)
- Компоненты появляются с fade + slide при скролле
- Используется `useInView` + `motion.div`

---

## 6. Зависимости (npm)

```
next
react
react-dom
tailwindcss
framer-motion
```

---

## 7. Возможности для улучшения

- Email / Telegram отправка (через nodemailer / Telegram Bot API)
- SEO: мета-теги, og:image, favicon
- Подключение CMS (Sanity, Strapi)
- SSR / ISR для SEO
- Хостинг на Vercel / Netlify

---

## ✨ Пример компонента FadeInSection

```tsx
<motion.div
  ref={ref}
  initial={{ opacity: 0, y: 50 }}
  animate={isInView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.6 }}
>
  {children}
</motion.div>
```

---

## 🔚 The End


