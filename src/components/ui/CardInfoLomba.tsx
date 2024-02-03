import Image from "next/image";
import kelas1 from "@/assets/kelas/cover kelas bcc.png";

const CardInfoLomba = () => {
  return (
    <div className="h-[1000px] bg-white py-16">
      <div className="px-20">
        <div className="bg-">
          <div className="flex gap-10 border-2 p-4 w-[500px]">
            <Image src={kelas1} alt="BA Anak Bisnis" width={80} height={80} />
            <div className="w-[400px]">
              <button className="text-sm bg-secondary rounded-xl py-1 px-2 text-white">
                Business Case
              </button>
              <div className="">
              <h6 className="text-xl font-bold">Tanoto Future Leader Business Acumen</h6>
              <p className="text-sm">Terbuka untuk Umum <span className="text-primary text-lg">|</span> Deadline: 12 Februari 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardInfoLomba;
