import { DictionaryType } from "@/types/dictionary";
import FadeInSection from "../components/FadeInSection"

type Props = {
    dict: DictionaryType;

}

const Schedule = ({ dict }: Props) => {
    return (
        <FadeInSection>
            <section className="flex flex-col item-center justyfy-center scedule-section py-20">
                <h2 className="text-4xl text-center font-serif ">{dict.scheduleTitle}</h2>
                <div className="overflow-x-auto">
                    <table className="w-full max-w-4xl mx-auto mt-10 border-collapse border border-orange-100">
                        <thead className="scedule-section ">
                            <tr className="text-center scedule-header border-b border-orange-100 textgray-500">
                                <th className="text-2xl px-4 py-2 border border-orange-100">Day</th>
                                <th className="text-2xl px-4 py-2 border border-orange-100">Time</th>
                                <th className="text-2xl px-4 py-2">Class</th>
                            </tr>
                        </thead>
                        <tbody className="text-center text-gray-500">
                            {dict.scheduleDays.map((day, index) => (
                                <tr key={index} className="border-b border-orange-100">
                                    <td className="px-4 py-2 border border-orange-100">{day}</td>
                                    <td className="px-4 py-2 border border-orange-100">{dict.scheduleTimes[index]}</td>
                                    <td className="px-4 py-2 border border-orange-100">{dict.yogaClasses[index]}</td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>
            </section>
        </FadeInSection>
    )
}
export default Schedule