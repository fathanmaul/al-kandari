import MainIcon from "./icon/MainIcon";

export default function Footer() {
  return (
    <footer className="min-h-[400px] bg-primary relative -z-10">
      <div className="container flex flex-col gap-4 pt-16 pb-8 text-white lg:pb-0 lg:justify-between lg:flex-row max-w-7xl">
        <div className="flex flex-col justify-start gap-4">
          <MainIcon inverse />
          <p className="max-w-sm">Masjid ini memiliki desain arsitektur indah dan fasilitas lengkap, menyediakan lingkungan yang nyaman untuk ibadah dan kegiatan komunitas.</p>
        </div>
        <div className="flex flex-col justify-start gap-4 ">
          <p className="text-xl font-bold text-white lg:text-base">Halaman</p>
          <ul className="flex flex-col lg:gap-3">
            <li>Beranda</li>
            <li>Blog</li>
            <li>Kegiatan</li>
            <li>Tentang</li>
            <li>Kontak</li>
          </ul>
        </div>
        <div className="flex flex-col justify-start gap-4 ">
          <p className="text-xl font-bold text-white lg:text-base">Kegiatan</p>
          <ul className="flex flex-col lg:gap-3">
            <li>Kajian Fiqih</li>
            <li>Kajian Ibadah 4 Madzab</li>
            <li>Santunan Dhuafa</li>
            <li>Pelatihan Kewirausahaan</li>
            <li>Belajar Ngaji</li>
          </ul>
        </div>
        <div className="flex flex-col justify-start gap-4 ">
          <p className="text-xl font-bold text-white lg:text-base">Kontak</p>
          <ul className="flex flex-col lg:gap-3">
            <li>081234567890 (WA)</li>
            <li>987F1D6L (PIN BBM)</li>
            <li>087634561234 (Telegram)</li>
          </ul>
        </div>
      </div>
      <p className="left-0 right-0 py-8 text-center text-white lg:py-0 lg:absolute bottom-4">© 2024 Masjid Al-Kandari All Rights Reserved</p>
    </footer>
  );
}
