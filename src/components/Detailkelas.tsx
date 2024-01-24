import Link from "next/link";
import Faq from "./Faq";

const Detailkelas = () => {
  return (
    <>
      <div className="px-11 py-10">
        <div className="text-white">
          <h3 className="text-3xl font-bold py-5">Penjelasan Kelas</h3>
          <p className="lg:w-[80%] w-full">
            Program Intensif merupakan program yang diselenggarakan untuk
            mempersiapkan para peserta mengikuti lomba business plan dan
            business case. Melalui program ini, peserta akan diberikan materi
            terkait lomba bisnis kemudian terdapat juga bimbingan dalam
            mengikuti lomba bisnis mulai dari tahap berkas pendaftaran hingga
            tahap persiapan akhir bersama mentor yang telah berpengalaman
            menjuarai lomba bisnis.
          </p>
          <h4 className="text-xl font-semibold py-5">
            Terdapat 2 jenis kelas pada program ini
          </h4>
          <p>1. Kelas Business Case</p>
          <p>2. Kelas Business Plan</p>
          <p className="py-4 w-full lg:w-[50%]">
            Output dari program ini setiap peserta diharapkan dapat mengikuti
            lomba business hingga menjuarai nya.
          </p>
        </div>
        <div className="text-white w-full lg:w-[80%]">
          <h3 className="text-2xl font-semibold py-5">Sistem 1on1 Mentoring</h3>
          <p className="">
            <em className="font-semibold">One-on-one mentoring</em> merupakan
            program mentoring yang dilakukan kepada peserta kelas secara{" "}
            <em className="font-semibold">private</em> dan{" "}
            <em className="font-semibold">personalized.</em> Program ini
            bertujuan untuk membantu peserta dalam mempersiapkan setiap
            persyaratan yang ada pada lomba bisnis, mulai dari proses
            pendaftaran hingga pengumuman juara. mentoring akan dilaksanakan
            menyesuaikan tahapan lomba yang diikuti peserta sehingga tidak ada
            batasan jumlah mentoring yang akan dilakukan . apabila peserta hanya
            sampai pada tahap berkas tidak sampai tahap final maka mentor akan
            melakukan evaluasi untuk di perbaikan di lomba selanjutnya.
          </p>
        </div>
        <button className="mt-8 hidden lg:block">
          <Link
            href="/daftar-kelas"
            className=" px-5 py-4 font-semibold bg-secondary text-white rounded-md 
               hover:text-white hover:bg-amber-500 transition-all duration-200"
          >
            Daftar Kelas
          </Link>
        </button>
      </div>
      <Faq />
    </>
  );
};

export default Detailkelas;
