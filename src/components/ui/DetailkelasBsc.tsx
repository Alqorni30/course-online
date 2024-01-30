import Accordion from "../ui/Accordion";
import PerbedaanKelas from "../ui/Perbedaankelas";
import InformasiHarga from "../layouts/InformasiHarga";



const DetailkelasBsc = () => {
  return (
    <>
      <div
        className="flex justify-between px-16 py-10 bg-white mt-14" id="overview-program"
      >
        <div className="text-black leading-normal bg-gray-50 border border-gray-400 p-4 rounded-md w-[60%]">
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
                  <li>1. Pengantar Business Case</li>
                  <li>2. Analisis Kerangka Berpikir</li>
                  <li>3. Cara Menentukan Strategi Bisnis</li>
                  <li>4. Proyeksi Realisasi Strategi Bisnis</li>
                  <li>5. Bedah Business Case #1</li>
                  <li>6. Live Final Pitching</li>
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
          <h3 className="text-3xl pb-4 font-bold">Sistem 1on1 Mentoring</h3>
          <p className="font-medium pb-5">
          <em>One-on-one mentoring</em> merupakan program mentoring yang dilakukan kepada peserta kelas secara <em>private</em> dan <em>personalized</em>. Program ini bertujuan untuk membantu peserta dalam mempersiapkan setiap persyaratan yang ada pada lomba bisnis, mulai dari proses pendaftaran hingga pengumuman juara. mentoring akan dilaksanakan menyesuaikan tahapan lomba yang diikuti peserta sehingga tidak ada batasan jumlah mentoring yang akan dilakukan . apabila peserta hanya sampai pada tahap berkas tidak sampai tahap final maka mentor akan melakukan evaluasi untuk di perbaikan di lomba selanjutnya.
          </p>
        </div>
        <InformasiHarga />
      </div>
    </>
  );
};

export default DetailkelasBsc;
