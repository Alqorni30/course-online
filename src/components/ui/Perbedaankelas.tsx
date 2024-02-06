import Image from "next/image";
import tipekelas from '@/assets/tipekelas.jpg'

const PerbedaanKelas = () => {
  return (
    <>
      <div className="p-16">
        <div className="py-5">
          <h3 className="text-2xl font-bold text-center">
            Perbedaan Kelas Premium dan Basic
          </h3>
        </div>
        <div className="py-4">
          <Image
            src={tipekelas} // Menampilkan gambar dari URL yang disimpan di database
            alt="tipe kelas"
            width={550}
            height={550}
            className="lg:w-[550px] lg:h-[550px] w-[300px] h-[300px] mx-auto"
          />
        </div>
      </div>
    </>
  );
};

export default PerbedaanKelas;
