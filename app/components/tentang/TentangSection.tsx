export default function TentangSection() {
    return (
        <>
            <div className="text-center mt-20 mb-10 font-bold text-4xl text-[#252524]">
                <h1>Tentang Desa</h1>
            </div>
            <div className=" border-red-500 border-2 flex flex-wrap justify-center gap-6 md:px-5">
                {/* Card Visi */}
                <div className="flex-1 min-w-[300px] max-w-[1050px] w-full">
                    <div
                        className="border-red-500 border-2 h-[528px] bg-cover bg-center rounded-xl shadow-lg flex flex-col items-center justify-center text-white font-medium p-6"
                        style={{ backgroundImage: "url('aboutCardResized.png')" }}
                    >
                        <h2 className="text-5xl font-bold text-[#CDA02A]">Visi</h2>
                        <p className="mt-6 text-2xl font-light leading-relaxed mx-20">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempus  blandit neque, ac commodo risus tempor at. Maecenas eu augue rhoncus,  bibendum ex pretium, bibendum turpis. Fusce vitae dolor egestas, rhoncus magna tempor, commodo eros. Cras in cursus dui. Integer blandit elit a  auctor lobortis.
                        </p>
                    </div>
                </div>

                {/* Card Misi */}
                <div className="flex-1 min-w-[300px] max-w-[1050px] w-full">
                    <div
                        className="border-red-500 border-2 h-[528px] bg-cover bg-center rounded-xl shadow-lg flex flex-col items-center justify-center text-white font-medium p-6"
                        style={{ backgroundImage: "url('aboutCardResized.png')" }}
                    >
                        <h2 className="text-5xl font-bold text-[#CDA02A]">Misi</h2>
                        <p className="mt-6 text-2xl font-light leading-relaxed mx-20">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempus  blandit neque, ac commodo risus tempor at. Maecenas eu augue rhoncus,  bibendum ex pretium, bibendum turpis. Fusce vitae dolor egestas, rhoncus magna tempor, commodo eros. Cras in cursus dui. Integer blandit elit a  auctor lobortis.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}