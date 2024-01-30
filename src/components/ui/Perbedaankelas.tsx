import { FaCheck } from "react-icons/fa";

const PerbedaanKelas = () => {
  return (
    <>
      <div className="p-16" >
        <div className="py-5" >
          <h3 className="text-2xl font-bold text-center">
            Perbedaan Kelas Premium dan Basic
          </h3>
        </div>
        <div className="py-4" id="perbedaan-kelas">
          <table className="border-collapse w-full">
            <thead>
              <tr>
                <th className="border border-secondary p-2">Fitur</th>
                <th className="border border-secondary p-2">Kelas Basic</th>
                <th className="border border-secondary p-2">Kelas Premium</th>
              </tr>
            </thead>
            <tbody className="font-medium" >
              <tr>
                <td className="border border-gray-500 p-2">Materi Kelas</td>
                <td className="border border-gray-500 p-2">
                  <FaCheck className="text-xl text-green-500" />
                </td>
                <td className="border border-gray-500 p-2">
                  <FaCheck className="text-xl text-green-500" />
                </td>
              </tr>
              <tr>
                <td className="border border-gray-500 p-2">Video Recording</td>
                <td className="border border-gray-500 p-2">
                  <FaCheck className="text-xl text-green-500" />
                </td>
                <td className="border border-gray-500 p-2">
                  <FaCheck className="text-xl text-green-500" />
                </td>
              </tr>
              <tr>
                <td className="border border-gray-500 p-2">
                  5 kali pertemuan kelas via zoom dan 1 kali Final Pitching{" "}
                </td>
                <td className="border border-gray-500 p-2">
                  <FaCheck className="text-xl text-green-500" />
                </td>
                <td className="border border-gray-500 p-2">
                  <FaCheck className="text-xl text-green-500" />
                </td>
              </tr>
              <tr>
                <td className="border border-gray-500 p-2">Final Pitching</td>
                <td className="border border-gray-500 p-2">
                  <FaCheck className="text-xl text-green-500" />
                </td>
                <td className="border border-gray-500 p-2">
                  <FaCheck className="text-xl text-green-500" />
                </td>
              </tr>
              <tr>
                <td className="border border-gray-500 p-2">
                  Informasi Lomba Terbaru
                </td>
                <td className="border border-gray-500 p-2">
                  <FaCheck className="text-xl text-green-500" />
                </td>
                <td className="border border-gray-500 p-2">
                  <FaCheck className="text-xl text-green-500" />
                </td>
              </tr>
              <tr>
                <td className="border border-gray-500 p-2">
                  Pencarian Team Lomba
                </td>
                <td className="border border-gray-500 p-2">
                  <FaCheck className="text-xl text-green-500" />
                </td>
                <td className="border border-gray-500 p-2">
                  <FaCheck className="text-xl text-green-500" />
                </td>
              </tr>
              <tr>
                <td className="border border-gray-500 p-2">
                  Pendampingan Pendaftaran Lomba
                </td>
                <td className="border border-gray-500 p-2">
                  <p className="text-red-500 font-bold">X</p>
                </td>
                <td className="border border-gray-500 p-2">
                  <FaCheck className="text-xl text-green-500" />
                </td>
              </tr>
              <tr>
                <td className="border border-gray-500 p-2">
                  Privat Mentoring (Per-individu)
                </td>
                <td className="border border-gray-500 p-2">
                  <p className="text-red-500 font-bold">X</p>
                </td>
                <td className="border border-gray-500 p-2">
                  <FaCheck className="text-xl text-green-500" />
                </td>
              </tr>
              <tr>
                <td className="border border-gray-500 p-2">
                  Checking Kelengkapan Pendaftaran Lomba
                </td>
                <td className="border border-gray-500 p-2">
                  <p className="text-red-500 font-bold">X</p>
                </td>
                <td className="border border-gray-500 p-2">
                  <FaCheck className="text-xl text-green-500" />
                </td>
              </tr>
              <tr>
                <td className="border border-gray-500 p-2">
                  Kesempatan Berjejaring
                </td>
                <td className="border border-gray-500 p-2">
                  <FaCheck className="text-xl text-green-500" />
                </td>
                <td className="border border-gray-500 p-2">
                  <FaCheck className="text-xl text-green-500" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default PerbedaanKelas;
