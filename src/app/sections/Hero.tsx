import Image from "next/image"

const Hero = () => {
    return (
        <>
            <div className="flex flex-col jystufy-center items-center place-content-center min-h-screen bg-[url('/hero.png')] bg-cover bg-center text-center p-6">
                <h1 className="text-7xl font-bold mb-4 font-serif">Yoga Bliss</h1>
                <p className="text-3xl  mb-6 font-sans">Find your peace and harmony</p>
                {/* <Image
                    src={"/hero.png"}
                    alt="Yoga Bliss"
                    width={500}
                    height={500}
                /> */}
                <button className="bg-(--button-color) text-white rounded-[0.5vw] py-3 px-6 hover:bg-(--button-color-hover) cursor-pointer">Book a Lesson</button>

            </div>

        </>
    )
}
export default Hero