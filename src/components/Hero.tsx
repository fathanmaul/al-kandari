import 'animate.css'

export default function Hero() {
  return (
    <div className="min-h-screen lg:min-h-[811px] flex flex-col items-center justify-center hero bg-blend-multiply bg-primary" id="#">
      <div className="container max-w-4xl mx-auto text-white">
        <h1 className="text-4xl font-extrabold text-start lg:text-center lg:text-6xl animate__animated animate__fadeInDown">
          Temukan kedamaian melalui dekat dengan Tuhan
        </h1>
        <h4 className=" text-start lg:text-center lg:text-xl mt-7 animate__animated animate__fadeIn" style={{animationDelay: "0.5s"}}>
          Masjid bukan hanya sebagai tempat ibadah yang nyaman, tapi juga jadi
          tempat berbagai kegiatan, memupuk persaudaraan hingga membangkitkan
          perekonomian, atau tempat apapun yang berkaitan dengan keumatan.
        </h4>
        <div className="flex flex-col justify-start gap-6 mt-10 lg:flex-row lg:justify-center">
          <button className="px-4 py-2 border-2 border-white lg:w-44 rounded-xl" >
            Baca Selengkapnya
          </button>
          <button className="px-4 py-2 text-black bg-white lg:w-44 rounded-xl">
            Hubungi Kami
          </button>
        </div>
      </div>
    </div>
  );
}
