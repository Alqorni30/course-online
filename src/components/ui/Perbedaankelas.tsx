import Image from "next/image";
import tipekelas from '@/assets/tipekelas.jpg'

const PerbedaanKelas = () => {
  return (
    <>
      <div className="p-5">
        <div className="py-5">
          <h3 className="lg:text-2xl text-xl font-bold text-center">
            Perbedaan Kelas Premium dan Basic
          </h3>
        </div>
          <Image
            src={tipekelas} // Menampilkan gambar dari URL yang disimpan di database
            alt="tipe kelas"
            width={550}
            height={550}
            className="lg:w-[550px] lg:h-[550px] w-[350px] h-[350px] mx-auto py-4"
          />
      </div>
    </>
  );
};

export default PerbedaanKelas;
