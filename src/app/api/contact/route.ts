import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const data = await req.json();

        const { name, email, message } = data;

        if (!name || !email || !message) {
            return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
        }

        // Здесь можно сделать:
        // - отправку на email (через nodemailer)
        // - запись в базу данных
        // - отправку в Telegram и т.д.

        console.log('📨 Contact form received:', { name, email, message });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('❌ Error handling contact form:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
