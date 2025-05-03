import { getDictionary } from '@/app/utils/getDictionary';
import Hero from '@/app/sections/Hero';
import About from '@/app/sections/About';
import Schedule from '@/app/sections/Schedule';
import Gallery from '@/app/sections/Gallery';
import Contact from '@/app/sections/Contact';

export default function Home({ params }: { params: { locale: 'en' | 'ru' } }) {
    const dict = getDictionary(params.locale);

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
