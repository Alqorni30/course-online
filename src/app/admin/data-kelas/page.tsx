import TableKelas from "@/components/Tables/TableKelas";

const page = () => {
  return (
    <>
      <div className="">
        <TableKelas />
      </div>
    </>
  );
};

export default page;

// 'use client';
// // pages/admin.tsx
// import React, { useState } from 'react';

// const page = () => {
//   const [classPrice, setClassPrice] = useState<number>(0);
//   const [discountPercent, setDiscountPercent] = useState<number>(0);

//   const calculateDiscountedPrice = () => {
//     const discountedPrice = classPrice - (classPrice * discountPercent) / 100;
//     return discountedPrice.toFixed(2);
//   };

//   return (
//     <div className="flex justify-center items-center h-screen">
//       <div className="bg-white p-8 shadow-md rounded-md">
//         <h2 className="text-2xl font-semibold mb-4">Set Discount Harga Kelas</h2>
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-600">Harga Kelas</label>
//           <input
//             type="number"
//             className="mt-1 p-2 border border-gray-300 rounded-md w-full"
//             value={classPrice}
//             onChange={(e) => setClassPrice(parseFloat(e.target.value))}
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-600">Discount Percent (%)</label>
//           <input
//             type="number"
//             className="mt-1 p-2 border border-gray-300 rounded-md w-full"
//             value={discountPercent}
//             onChange={(e) => setDiscountPercent(parseFloat(e.target.value))}
//           />
//         </div>
//         <div className="mt-4">
//           <p className="text-lg font-semibold mb-2">Discounted Price: Rp {calculateDiscountedPrice()}</p>
//           <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
//             Save Discount
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default page;

