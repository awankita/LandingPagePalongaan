import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#203612] text-white mt-16 sm:mt-24 md:mt-32 lg:mt-40 rounded-t-[2rem] sm:rounded-t-[2.5rem] md:rounded-t-[3rem] p-6 ">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-4 gap-2 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-12">
          {/* Informasi Desa */}
          <div className="p-2 space-y-1 sm:space-y-2 md:space-y-3 lg:space-y-4">
            <h3 className="font-semibold text-[10px] sm:text-sm md:text-base lg:text-lg xl:text-xl text-[#C8A445] mb-1 sm:mb-2">
              Informasi Desa
            </h3>
            <div className="space-y-1 sm:space-y-2 md:space-y-3">
              <Link
                href="/profil"
                className="block text-[10px] sm:text-xs md:text-sm lg:text-base text-gray-200 hover:text-[#C8A445] transition-colors duration-300"
              >
                Profil Desa
              </Link>
              <Link
                href="/sejarah"
                className="block text-[10px] sm:text-xs md:text-sm lg:text-base text-gray-200 hover:text-[#C8A445] transition-colors duration-300"
              >
                Sejarah Desa
              </Link>
              <Link
                href="/visi-misi"
                className="block text-[10px] sm:text-xs md:text-sm lg:text-base text-gray-200 hover:text-[#C8A445] transition-colors duration-300"
              >
                Visi & Misi
              </Link>
              <Link
                href="/struktur"
                className="block text-[10px] sm:text-xs md:text-sm lg:text-base text-gray-200 hover:text-[#C8A445] transition-colors duration-300"
              >
                Struktur Organisasi
              </Link>
            </div>
          </div>

          {/* Layanan */}
          <div className="p-2 space-y-1 sm:space-y-2 md:space-y-3 lg:space-y-4">
            <h3 className="font-semibold text-[10px] sm:text-sm md:text-base lg:text-lg xl:text-xl text-[#C8A445] mb-1 sm:mb-2">
              Layanan
            </h3>
            <div className="space-y-1 sm:space-y-2 md:space-y-3">
              <Link
                href="/surat"
                className="block text-[10px] sm:text-xs md:text-sm lg:text-base text-gray-200 hover:text-[#C8A445] transition-colors duration-300"
              >
                Pelayanan Surat
              </Link>
              <Link
                href="/ktp"
                className="block text-[10px] sm:text-xs md:text-sm lg:text-base text-gray-200 hover:text-[#C8A445] transition-colors duration-300"
              >
                Pembuatan KTP
              </Link>
              <Link
                href="/kk"
                className="block text-[10px] sm:text-xs md:text-sm lg:text-base text-gray-200 hover:text-[#C8A445] transition-colors duration-300"
              >
                Kartu Keluarga
              </Link>
              <Link
                href="/bantuan"
                className="block text-[10px] sm:text-xs md:text-sm lg:text-base text-gray-200 hover:text-[#C8A445] transition-colors duration-300"
              >
                Program Bantuan
              </Link>
            </div>
          </div>

          {/* Berita & Agenda */}
          <div className="p-2 space-y-1 sm:space-y-2 md:space-y-3 lg:space-y-4">
            <h3 className="font-semibold text-[10px] sm:text-sm md:text-base lg:text-lg xl:text-xl text-[#C8A445] mb-1 sm:mb-2">
              Berita Agenda
            </h3>
            <div className="space-y-1 sm:space-y-2 md:space-y-3">
              <Link
                href="/berita"
                className="block text-[10px] sm:text-xs md:text-sm lg:text-base text-gray-200 hover:text-[#C8A445] transition-colors duration-300"
              >
                Berita Terkini
              </Link>
              <Link
                href="/agenda"
                className="block text-[10px] sm:text-xs md:text-sm lg:text-base text-gray-200 hover:text-[#C8A445] transition-colors duration-300"
              >
                Agenda Kegiatan
              </Link>
              <Link
                href="/pengumuman"
                className="block text-[10px] sm:text-xs md:text-sm lg:text-base text-gray-200 hover:text-[#C8A445] transition-colors duration-300"
              >
                Pengumuman
              </Link>
              <Link
                href="/galeri"
                className="block text-[10px] sm:text-xs md:text-sm lg:text-base text-gray-200 hover:text-[#C8A445] transition-colors duration-300"
              >
                Galeri Foto
              </Link>
            </div>
          </div>

          {/* Kontak */}
          <div className="p-2 space-y-1 sm:space-y-2 md:space-y-3 lg:space-y-4">
            <h3 className="font-semibold text-[10px] sm:text-sm md:text-base lg:text-lg xl:text-xl text-[#C8A445] mb-1 sm:mb-2">
              Kontak
            </h3>
            <div className="space-y-1 sm:space-y-2 md:space-y-3">
              <div className="text-[10px] sm:text-xs md:text-sm lg:text-base text-gray-200">
                <p className="font-medium text-white mb-0.5 sm:mb-1">Alamat:</p>
                <p className="leading-tight">Desa Palongaan, Kecamatan...</p>
              </div>
              <div className="text-[10px] sm:text-xs md:text-sm lg:text-base text-gray-200">
                <p className="font-medium text-white mb-0.5 sm:mb-1">Telepon:</p>
                <p>(021) 123-4567</p>
              </div>
              <div className="text-[10px] sm:text-xs md:text-sm lg:text-base text-gray-200">
                <p className="font-medium text-white mb-0.5 sm:mb-1">Email:</p>
                <p className="break-all">info@palongaan.desa.id</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-600 mt-8 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-center sm:text-left">
              <p className="text-sm sm:text-base text-gray-200">© 2024 Desa Palongaan. Semua hak dilindungi.</p>
            </div>
            <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6">
              <Link
                href="/privacy"
                className="text-sm sm:text-base text-gray-200 hover:text-[#C8A445] transition-colors duration-300"
              >
                Kebijakan Privasi
              </Link>
              <Link
                href="/terms"
                className="text-sm sm:text-base text-gray-200 hover:text-[#C8A445] transition-colors duration-300"
              >
                Syarat & Ketentuan
              </Link>
              <Link
                href="/sitemap"
                className="text-sm sm:text-base text-gray-200 hover:text-[#C8A445] transition-colors duration-300"
              >
                Peta Situs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
