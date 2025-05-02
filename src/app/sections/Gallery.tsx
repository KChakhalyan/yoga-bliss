import Image from "next/image"

const Gallery = () => {
    return (
        <section className="py-20 flex flex-col item-center justyfy-center">
            <h1 className="text-4xl text-center font-serif mb-10">Our Studio</h1>
            <div className="grid sm:grid-cols-3 gap-6 grid-cols-2 justify-items-center">
                <Image
                    src={"/hero.png"}
                    alt="Yoga Bliss"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-md object-cover transition-transform duration-300 transform hover:scale-105"
                />
                <Image
                    src={"/hero.png"}
                    alt="Yoga Bliss"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-md object-cover transition-transform duration-300 transform hover:scale-105"
                />
                <Image
                    src={"/hero.png"}
                    alt="Yoga Bliss"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-md object-cover transition-transform duration-300 transform hover:scale-105"
                />
                <Image
                    src={"/hero.png"}
                    alt="Yoga Bliss"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-md object-cover transition-transform duration-300 transform hover:scale-105"
                />
                <Image
                    src={"/hero.png"}
                    alt="Yoga Bliss"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-md object-cover transition-transform duration-300 transform hover:scale-105"
                />
                <Image
                    src={"/hero.png"}
                    alt="Yoga Bliss"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-md object-cover transition-transform duration-300 transform hover:scale-105"
                />
            </div>
        </section>
    )
}
export default Gallery