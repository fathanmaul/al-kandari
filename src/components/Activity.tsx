import Title from "./Typography";

type Activity = {
  title: string;
  description: string;
  thumbnail: string;
};

export default function Activity() {
  const activityData: Activity[] = [
    {
      title: "Kajian Fiqih, Kajian Ibadah 4 Madzhab dan Belajar Ngaji",
      description:
        "Di setiap harinya, masjid akan melaksanakan banyak kegiatan keislaman, terbuka untuk masyarakat sekitar dan untuk umum.",
      thumbnail: "assets/images/landing/activity/picture_1.png",
    },
    {
      title: "Sembako Gratis dan Santunan Terhadap Dhuafa",
      description:
        "Tersedia paket sembako gratis dan juga rutin melaksanakan kegiatan santunan terhadap dhuafa.",
      thumbnail: "assets/images/landing/activity/picture_2.png",
    },
    {
      title: "Pendidikan dan Pelatihan Kewirausahaan",
      description:
        "Masjid rutin membina jama’ah di segala usia agar memiliki keterampilan dan minat belajar yang tinggi demi masa depan yang cerah.",
      thumbnail: "assets/images/landing/activity/picture_3.png",
    },
  ];

  return (
    <div className="container pb-20 text-center mt-36 bg-primary lg:rounded-xl" id="activity">
      <div className="pt-11">
        <Title
          inverse
          title="Berbagai Kegiatan Menarik Yang Tersedia di Masjid"
          subtitle="Kegiatan"
        />

        <div className="grid gap-8 mx-auto mt-11 max-w-7xl lg:grid-cols-3">
          {activityData.map((value, index) => (
            <div className="min-h-[402px] p-6 bg-white rounded-xl" key={index}>
              <div className="flex flex-col justify-between h-full gap-8">
                <div className="text-start">
                  <h2 className="w-[90%] min-h-[70px] text-[26px] font-black leading-none">
                    {value.title}
                  </h2>
                  <p className="mt-3">{value.description}</p>
                </div>
                <img src={value.thumbnail} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
