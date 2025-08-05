export default function TentangSection() {
  return (
    <>
      <div className="text-center mt-10 md:mt-20 mb-8 font-bold text-2xl md:text-4xl text-[#252524]">
        <h1 id="tentang">Tentang Desa</h1>
      </div>
      <div className="flex flex-col md:flex-row flex-wrap justify-center gap-6 px-5">
        {/* Card Visi */}
        <div className="flex-1 min-w-[90vw] md:min-w-[300px] max-w-[1050px] w-full">
          <div
            className="h-[340px] md:h-[528px] bg-cover bg-center rounded-xl shadow-lg flex flex-col items-center justify-center text-white font-medium p-4 md:p-6"
            style={{ backgroundImage: "url('aboutCardResized.png')" }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-[#CDA02A]">
              Visi
            </h2>
            <p className="mt-4 md:mt-6 text-md md:text-2xl font-light leading-relaxed mx-2 md:mx-20 text-center">
              Menjadi desa yang mandiri, sejahtera, dan berwawasan lingkungan dengan masyarakat yang berdaya saing, berbudaya, serta berlandaskan nilai-nilai kebersamaan dan gotong royong.
            </p>
          </div>
        </div>

        {/* Card Misi */}
        <div className="flex-1 min-w-[90vw] md:min-w-[300px] max-w-[1050px] w-full">
          <div
            className="h-[340px] md:h-[528px] bg-cover bg-center rounded-xl shadow-lg flex flex-col items-center justify-center text-white font-medium p-4 md:p-6"
            style={{ backgroundImage: "url('aboutCardResized.png')" }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-[#CDA02A]">
              Misi
            </h2>
            <p className="mt-4 md:mt-6 text-md md:text-2xl font-light leading-relaxed mx-2 md:mx-20 text-center">
              Berkomitmen untuk meningkatkan kualitas sumber daya manusia melalui pendidikan dan pelatihan, serta mendorong pertumbuhan ekonomi berbasis potensi lokal. Budaya dan kearifan lokal dilestarikan sebagai identitas desa. Pemerintahan desa dijalankan secara transparan dan akuntabel, dengan mendorong partisipasi aktif masyarakat. Selain itu, desa juga menjaga kelestarian lingkungan dan mengelola sumber daya alam secara berkelanjutan.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
