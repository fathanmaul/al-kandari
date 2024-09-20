import Title from "./Typography";

export default function Location() {
  return (
    <div className="container text-center mt-36 pb-36 max-w-7xl" id="location">
      <div className="pt-11">
        <Title title="Lokasi Masjid Mudah Diakses" subtitle="Lokasi" />
        <div className="mt-8">
          <div style={{ width: "100%" }}>
            <iframe
              width="100%"
              height="349"
              frameBorder="0"
              scrolling="no"
              src="https://maps.google.com/maps?width=100%25&amp;height=349&amp;hl=en&amp;q=Masjid%20Al%20Alam,%20Jalan,%20Lalolara,%20Kambu,%20Kendari%20City,%20South%20East%20Sulawesi+(Masjid%20Al-Alam)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.gps.ie/">gps systems</a>
            </iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
