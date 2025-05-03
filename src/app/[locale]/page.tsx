import { getDictionary } from '@/app/utils/getDictionary';
import Hero from '@/app/sections/Hero';
import About from '@/app/sections/About';
import Schedule from '@/app/sections/Schedule';
import Gallery from '@/app/sections/Gallery';
import Contact from '@/app/sections/Contact';

type Props = {
    params: {
        locale: string; // теперь просто string
    };
};

export async function generateStaticParams() {
    return [{ locale: 'en' }, { locale: 'ru' }];
}

export default async function Home({ params }: { params: { locale: 'en' | 'ru' } }) {
    const dict = await getDictionary(params.locale); // <== добавили await

    return (
        <>
            <Hero dict={dict} />
            <About />
            <Schedule />
            <Gallery />
            <Contact />
        </>
    );
}
