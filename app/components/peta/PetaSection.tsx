export default function PetaSection() {
    return (
        <>
            <div className="text-center mt-10 md:mt-20 font-bold text-2xl md:text-4xl text-[#252524]">
                <h1 id="peta">Peta Desa</h1>
            </div>
            <div className="text-center mx-4 md:mx-60 mt-3 md:mt-5 mb-6 md:mb-10 font-normal text-base md:text-xl text-[#585858]">
                <h4>
                    Menyediakan informasi lokasi CCTV bertujuan untuk meningkatkan keamanan dan kenyamanan masyarakat. Fitur ini membantu memantau lalu lintas, memungkinkan pengguna melihat peta interaktif, daftar TV, dan informasi detailnya untuk pemantauan yang lebih efektif.
                </h4>
            </div>

            <div className="flex items-center justify-center w-full md:w-5/6 mx-auto px-2 md:px-5">
                <div className="w-full" style={{ maxWidth: 1500 }}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=..."
                        width="100%"
                        height="350"
                        className="rounded-lg w-full h-[300px] md:h-[700px]"
                        style={{ border: 0 }}
                        loading="lazy"
                    ></iframe>
                </div>
            </div>

            <button
                className="mx-auto flex items-center justify-center mt-10 px-6 py-3 font-semibold text-white rounded-[24px] transition duration-300 bg-gradient-to-r from-[#559334] to-[#47820C] hover:brightness-125"
                style={{
                    height: "60px",
                    width: "250px",
                }}
            >
                Download PDF Peta
            </button>
        </>
    );
}