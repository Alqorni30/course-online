import { kelasTerbaru } from "@/data";
import Image from "next/image";

const Kelaspage = () => {
  return (
    <div className="flex justify-center pt-36">
      <div className="w-full">
        <div>
          <div className="text-center mb-10">
            <div>
              <h1 className="font-bold text-4xl mb-3">Kelas Terbaru</h1>
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 p-8">
            {kelasTerbaru.map((kelas) => {
              return (
                <div
                  key={kelas.id}
                  className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                >
                  <Image
                    src={kelas.image}
                    alt="unsplash.com"
                    width={400}
                    height={200}
                    className="w-100 mb-5 rounded-t-lg h-[300px]"
                  />
                  <div className="px-5 pb-5">
                    <h5 className="text-lg font-semibold mb-3 tracking-tight text-gray-900 dark:text-white">
                      {kelas.title}
                    </h5>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-gray-900 dark:text-white">
                        {kelas.price}
                      </span>
                      <a
                        href="#"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        Beli Kelas
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kelaspage;
