const Schedule = () => {
    return (
        <section className="flex flex-col item-center justyfy-center scedule-section py-20">
            <h2 className="text-4xl text-center font-serif ">Class schedule</h2>
            <table className="w-full max-w-4xl mx-auto mt-10 border-collapse border border-gray-300">
                <thead className="scedule-section ">
                    <tr className="text-center scedule-header border-b border-gray-300">
                        <th className="text-2xl px-4 py-2 border border-gray-300">Day</th>
                        <th className="text-2xl px-4 py-2 border border-gray-300">Time</th>
                        <th className="text-2xl px-4 py-2">Class</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    <tr>
                        <td className="text-xl px-4 py-2 border border-gray-300">Monday</td>
                        <td className="text-xl px-4 py-2 border border-gray-300">6:00 AM - 7:00 AM</td>
                        <td className="text-xl px-4 py-2 border border-gray-300">Vinyasa Flow</td>
                    </tr>
                    <tr>
                        <td className="text-xl px-4 py-2 border border-gray-300">Wednesday</td>
                        <td className="text-xl px-4 py-2 border border-gray-300">6:00 PM - 7:00 PM</td>
                        <td className="text-xl px-4 py-2 border border-gray-300">Hatha Yoga</td>
                    </tr>
                    <tr>
                        <td className="text-xl px-4 py-2 border border-gray-300">Friday</td>
                        <td className="text-xl px-4 py-2 border border-gray-300">6:00 PM - 7:00 PM</td>
                        <td className="text-xl px-4 py-2 border border-gray-300">Yin Yoga</td>
                    </tr>
                </tbody>
            </table>
        </section>
    )
}
export default Schedule