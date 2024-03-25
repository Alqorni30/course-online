import Accordion from "../ui/Accordion";
import PerbedaanKelas from "../ui/Perbedaankelas";
import InformasiHarga from "../layouts/InformasiHarga";
import prismadb from "@/libs/db";

const DetailkelasBsp = async () => {
  const dataKelas = await prismadb.dataKelas.findMany({
    select: {
      id: true,
      nama: true,
      tanggal: true,
      jamKelas: true,
      hargaAsliBasic: true,
      hargaAsliPremium: true,
      hargaDiscBasic: true,
      hargaDiscPremium: true,
      discpersenBasic: true,
      discpersenPremium: true,
    },
  });

  return (
    <>
      <div
        className="flex lg:flex-row flex-col gap-5 justify-between lg:px-16 p-6 lg:py-10 bg-white mt-14"
        id="overview-program"
      >
        <div className="text-black leading-normal bg-gray-50 border border-gray-400 p-4 rounded-md w-full lg:w-[60%]">
          <h3 className="text-3xl pb-4 font-bold">Overview Program</h3>
          <p className="font-medium pb-5">
            Program Intensif merupakan program yang diselenggarakan untuk
            mempersiapkan para peserta mengikuti lomba business plan dan
            business case. Melalui program ini, peserta akan diberikan materi
            terkait lomba bisnis kemudian terdapat juga bimbingan dalam
            mengikuti lomba bisnis mulai dari tahap berkas pendaftaran hingga
            tahap persiapan akhir bersama mentor yang telah berpengalaman
            menjuarai lomba bisnis. Output dari program ini setiap peserta
            diharapkan dapat mengikuti lomba business hingga menjuarai nya.
          </p>
          <div className="py-4">
            <div className="rounded-xl">
              <Accordion title="Kurikulum">
                <ol className="font-medium">
                  <li>1. Pengenalan Business Plan dan Pemunculan Ide.</li>
                  <li>2. Sistematika Proposal Bisnis Plan.</li>
                  <li>3. Pembuatan Prototipe Ide Bisnis..</li>
                  <li>4. Penyusunan PitchDeck.</li>
                  <li>5. Bedah Business Plan #1.</li>
                  <li>6. Live Final Pitching.</li>
                </ol>
              </Accordion>
              <Accordion title="Informasi Tentang Kelas">
                <ol className="font-medium">
                  <li>
                    1. Kelas akan berlangsung secara online menggunakan media
                    zoom.
                  </li>
                  <li>
                    2. Tidak ada pertemuan kelas pengganti jadi setiap peserta
                    diharapkan hadir.
                  </li>
                  <li>
                    3. Jadwal yang telah disusun dapat di rechedule berdasarkan
                    kesepakatan di grup kelas.
                  </li>
                  <li>
                    4. Setelah kelas selesai, setiap peserta akan mendapatkan
                    bahan materi, rekaman zoom, dan rekomendasi bahan bacaan.
                  </li>
                  <li>
                    5. Bagi peserta yang memiliki pertanyaaan di luar jam kelas
                    dapat bertanya secara langsung melalui zoom atau mengkontak
                    mentor.
                  </li>
                  <li>
                    6. Mentoring secara personal akan dilakukan setelah kelas
                    berakhir dan selama periode pendaftaran lomba bisnis.
                  </li>
                </ol>
              </Accordion>
            </div>
          </div>
          <PerbedaanKelas />
          <h3 className="text-3xl font-bold pb-4">Live Final Pitching</h3>
          <p className="font-medium pb-5">
            <em>Final pitching</em> adalah tahapan terakhir dalam proses
            pembelajaran di kelas intensif business plan #3. nantinya para
            peserta akan dikelompokan menjadi beberapa kelompok dan masing
            masing kelompok akan mempersentasikan hasil kerjanya. dengan adanya{" "}
            <em>final pitching</em> ini, harapannya dapat menjadi wadah untuk
            berlatih dalam menghadapi perlombaan yang sesungguhnya
          </p>
          <h3 id="sistem" className="text-3xl pb-4 font-bold">
            Sistem 1on1 Mentoring
          </h3>
          <p className="font-medium pb-5">
            <em>One-on-one mentoring</em> merupakan program mentoring yang
            dilakukan kepada peserta kelas secara <em>private</em> dan{" "}
            <em>personalized</em>. Program ini bertujuan untuk membantu peserta
            dalam mempersiapkan setiap persyaratan yang ada pada lomba bisnis,
            mulai dari proses pendaftaran hingga pengumuman juara. mentoring
            akan dilaksanakan menyesuaikan tahapan lomba yang diikuti peserta
            sehingga tidak ada batasan jumlah mentoring yang akan dilakukan .
            apabila peserta hanya sampai pada tahap berkas tidak sampai tahap
            final maka mentor akan melakukan evaluasi untuk di perbaikan di
            lomba selanjutnya.
          </p>
        </div>
        {dataKelas[1] && (
          <InformasiHarga
            tanggal={dataKelas[1].tanggal}
            jamKelas={dataKelas[1].jamKelas}
            hargaAsliPremium={dataKelas[1].hargaAsliPremium}
            hargaDiskonPremium={dataKelas[1].hargaDiscPremium}
            discpersenPremium={dataKelas[1].discpersenPremium}
            hargaAsliBasic={dataKelas[1].hargaAsliBasic}
            hargaDiskonBasic={dataKelas[1].hargaDiscBasic}
            discpersenBasic={dataKelas[1].discpersenBasic}
          />
        )}
      </div>
    </>
  );
};

export default DetailkelasBsp;
