import Title from "./Typography";

export default function Photo() {
  return (
    <div className="container text-center mt-36" id="photo">
      <div className="pt-11">
        <Title
          inverse={false}
          title="Menjelajahi Keindahan Masjid Dari Berbagai Sisi"
          subtitle="Foto"
        />

        <div className="grid gap-4 pb-20 mx-auto mt-8 lg:grid-cols-10 max-w-7xl">
          <div className="col-span-4">
            <div className="grid gap-4 lg:grid-cols-1">
              <div className="h-[256px] rounded-xl">
                <img
                  src="assets/images/landing/photo/picture_1.png"
                  alt=""
                  className="block object-cover object-center w-full h-full rounded-lg"
                />
              </div>
              <div className="flex w-full gap-4">
                <div className="flex-1 h-[152px]">
                  <img
                    src="assets/images/landing/photo/picture_7.png"
                    className="block object-cover object-center w-full h-full rounded-lg"
                    alt=""
                  />
                </div>
                <div className="flex-1 h-[152px]">
                  <img
                    src="assets/images/landing/photo/picture_8.png"
                    className="block object-cover object-center w-full h-full rounded-lg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-4">
            <div className="grid grid-rows-2 gap-4 lg:grid-cols-2">
              <div className="h-[213px]">
                <img
                  src="assets/images/landing/photo/picture_2.png"
                  className="block object-cover object-center w-full h-full rounded-xl"
                  alt=""
                />
              </div>
              <div className="h-[213px]">
                <img
                  src="assets/images/landing/photo/picture_4.png"
                  className="block object-cover object-center w-full h-full rounded-xl"
                  alt=""
                />
              </div>
              <div className="h-[196px] col-span-2">
                <img
                  src="assets/images/landing/photo/picture_3.png"
                  className="block object-cover object-center w-full h-full rounded-xl"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="hidden col-span-2 lg:block ">
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-1">
              <div className="h-[302px]">
                <img
                  src="assets/images/landing/photo/picture_5.png"
                  className="block object-cover object-center w-full h-full rounded-xl"
                  alt=""
                />
              </div>
              <div className="h-[107px] rounded-xl">
                <img
                  src="assets/images/landing/photo/picture_6.png"
                  className="block object-cover object-center w-full h-full rounded-xl"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
