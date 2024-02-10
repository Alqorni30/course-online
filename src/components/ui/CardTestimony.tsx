
import { IoMdQuote } from "react-icons/io";
import { PrismaClient} from "@prisma/client"; 

import Image from "next/image";

const prisma = new PrismaClient();

const getdataTesti = async () => {
  const res = await prisma.dataTesti.findMany({
    select: {
        id: true,
        image: true,
        nama: true,
        job: true,
        testi: true,
    },
  });
  return res;
};


const CardTestimony = async () => {
  const [dataTesti] = await Promise.all([getdataTesti()]);

  return (
    <>
      <div className="">
        {dataTesti.map((data ) => (
          <div className="" key={data.id}>
            <figure className="max-w-screen-md mx-auto lg:p-11 p-4 rounded-md mb-10 bg-gray-200 text-center">
              <IoMdQuote className="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600" />
              <blockquote>
                <p className="lg:text-xl md:text-lg text-base font-medium">
                  {data.testi}
                </p>
              </blockquote>
              <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
                <Image
                  className="w-10 h-10 rounded-full"
                  src={data.image}
                  alt="profile picture"
                  width={40}
                  height={40}
                />
                <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
                  <p className="pe-3 text-md">{data.nama}</p>
                  <p className="ps-3 text-sm text-gray-500 dark:text-gray-400">
                    {data.job}
                  </p>
                </div>
              </figcaption>
            </figure>
          </div>
        ))}
      </div>
    </>
  );
};

export default CardTestimony;

