export default function CCTVSection() {
  return (
    <>
      <div className="text-center mt-10 md:mt-20 mb-6 font-bold text-2xl md:text-4xl text-[#252524]">
        <h1 id="cctv">CCTV Langsung</h1>
      </div>
      <div className="text-center mx-4 md:mx-60 mt-3 md:mt-5 mb-6 md:mb-10 font-medium text-base md:text-xl text-[#585858]">
        <h4>
          Menyediakan informasi lokasi CCTV bertujuan untuk meningkatkan
          keamanan dan kenyamanan masyarakat. Fitur ini membantu memantau
          aktivitas, memungkinkan pengguna melihat peta interaktif, dan
          informasi detailnya untuk pemantauan yang lebih efektif.
        </h4>
      </div>

      <button
        className="mx-auto flex items-center justify-center mt-10 px-6 py-3 font-semibold text-white rounded-[24px] transition duration-300 bg-gradient-to-r from-[#559334] to-[#47820C] hover:brightness-125"
        style={{
          height: "60px",
          width: "250px",
        }}
      >
        Tonton Sekarang
      </button>
    </>
  );
}
