import FadeInSection from "../components/FadeInSection";
import type { DictionaryType } from '@/types/dictionary';


type Props = {
    dict: DictionaryType;
}
const About = ({ dict }: Props) => {
    return (
        <FadeInSection>
            <section id="about" className="py-20 px-6 bg-white">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-4xl font-bold font-serif mb-4">{dict.aboutTitle}</h2>
                    <p className="text-lg text-gray-700">{dict.aboutText}</p>
                </div>
            </section>
        </FadeInSection>
    );
};
export default About;