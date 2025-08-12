"use client";

export default function PetaSection() {
  const handleDownload = () => {
    const files = [
      "/maps/Peta_Batas_Administrasi_Desa_Palongaan.pdf",
      "/maps/Peta_Pemanfaatan_Lahan_Desa_Palongaan.pdf",
      "/maps/Peta_Phototagging_Fasilitas_Umum_dan_Tempat_Wisata_Desa_Palongaan.pdf",
    ];

    files.forEach((file) => {
      const link = document.createElement("a");
      link.href = file;
      link.download = file.split("/").pop()!;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  };

  return (
    <>
      <div className="text-center mt-10 md:mt-20 font-bold text-2xl md:text-4xl text-[#252524]">
        <h1 id="peta">Peta Desa</h1>
      </div>
      <div className="text-center mx-4 md:mx-60 mt-3 md:mt-5 mb-6 md:mb-10 font-normal text-base md:text-xl text-[#585858]">
        <h4>
          Menyediakan informasi lokasi CCTV bertujuan untuk meningkatkan
          keamanan dan kenyamanan masyarakat...
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
        onClick={handleDownload}
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
