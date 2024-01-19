

const TableKelas: React.FC = () => {
    const data = [
      {
        id: 1,
        value1: "Kelas Business Plan",
        value2: "Rp 130.000",
        value3: "Laki-laki",
      },
      {
        id: 2,
        value1: "Kelas Business Case",
        value2: "Rp 130.000",
        value3: "Perempuan",
      },
      // Tambahkan data lain sesuai kebutuhan
    ];
    return (
      <>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
          <table className="min-w-full bg-white border border-gray-300">
            <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
              Data Anggota
            </caption>
            <thead className="text-xs text-start text-gray-700 uppercase bg-gray-100">
              <tr>
                <th className="py-2 px-4 border-b">No</th>
                <th className="py-2 px-4 border-b">Nama</th>
                <th className="py-2 px-4 border-b">Nomor Telepon</th>
                <th className="py-2 px-4 border-b">Gender</th>
                <th className="py-2 px-4 border-b">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row) => (
                <tr key={row.id} className="text-md">
                  <td className="py-2 text-center px-4 border-b ">{row.id}</td>
                  <td className="py-2 text-center px-4 border-b">{row.value1}</td>
                  <td className="py-2 text-center px-4 border-b">{row.value2}</td>
                  <td className="py-2 text-center px-4 border-b">{row.value3}</td>
                  <td className="px-6 py-4 flex gap-2 justify-center text-center">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </a>
                    <a
                      href="#"
                      className="font-medium text-red-500 hover:underline"
                    >
                      Hapus
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  };
  
  export default TableKelas;
  