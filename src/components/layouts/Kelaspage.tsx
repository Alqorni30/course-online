import Cardkelas from "../ui/Cardkelas";

const Kelaspage = () => {
  return (
    <div id="kelas" className="flex justify-center px-12 pt-20 pb-20 bg-gradient-to-b from-white to-sky-500">
      <div className="w-full py-20 border-t-2 border-black">
        <div className="">
          <div className="text-center mb-10 ">
            <div className="text-black">
              <h1 className="font-bold text-sky-600 text-3xl mb-3">
                Kelas Intensif
              </h1>
              <p className="font-semibold lg:text-3xl text-xl">
                Cek program kelas kami yang telah terbukti
                membantu siswa dalam menjuarai berbagai kompetisi bisnis
              </p>
            </div>
          </div>
          <div className="flex justify-center gap-10 flex-wrap">
            <Cardkelas />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kelaspage;
