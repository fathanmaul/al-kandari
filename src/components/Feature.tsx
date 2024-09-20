import Title from "./Typography";

type Feature = {
  title: string;
  imageUrl: string;
};
export default function Feature() {
  const featureData: Feature[] = [
    {
      title: "Imam Hafidz Qur’an dan Menguasai Berbagai Nagham",
      imageUrl: "assets/images/landing/features/shalat.svg",
    },
    {
      title: "Masjid Dilengkapi AC, Memastikan Ruangan Sejuk",
      imageUrl: "assets/images/landing/features/ac.svg",
    },
    {
      title: "Masjid Terbuka 24 Jam dengan Jaminan Keamanan",
      imageUrl: "assets/images/landing/features/mosque.svg",
    },
    {
      title: "Menggunakan Karpet Terbaik yang Lembut Dipakai Sujud",
      imageUrl: "assets/images/landing/features/carpet.svg",
    },
  ];

  return (
    <div className="container max-w-xl text-center lg:max-w-6xl mt-36" id="feature">
      <Title inverse={false} title="Semua Kenyamanan dalam Satu Masjid" subtitle="Fitur"/>
      <div className="grid grid-cols-2 gap-4 mt-12 lg:grid-cols-4">
        {featureData.map((value, index) => (
          <div className="flex flex-col items-center gap-4" key={index}>
            <div>
              <img src={value.imageUrl} className="w-16 h-16 lg:w-auto lg:h-auto" alt="" />
            </div>
            <div className="max-w-[16rem]">
              <p className="text-sm font-medium lg:text-lg">
                {value.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
