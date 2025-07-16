export default function PetaSection() {
    return (
        <>
            <div className="text-center mt-20 font-bold text-4xl text-[#252524]">
                <h1 id="peta">Peta Desa</h1>
            </div>
            <div className="text-center mx-60 mt-5 mb-10 font-medium text-xl text-[#585858]">
                <h4>Menyediakan informasi lokasi CCTV bertujuan untuk meningkatkan keamanan dan kenyamanan masyarakat. Fitur ini membantu memantau lalu lintas, memungkinkan pengguna melihat peta interaktif, daftar TV, dan informasi detailnya untuk pemantauan yang lebih efektif.</h4>
            </div>

            <div className="flex items-center justify-center w-full md:w-5/6 mx-auto px-4 md:px-5">
                <iframe
                    src="https://www.google.com/maps/embed?pb=..."
                    width="100%"
                    height="700"
                    style={{ border: 0 }}
                    loading="lazy"
                    className="rounded-lg w-full"
                ></iframe>
            </div>

        </>
    );
}