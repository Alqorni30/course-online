import { PrismaClient } from "@prisma/client";
import Form from "./Form";

const prisma = new PrismaClient();

const getKategori = async () => {
  const res = await prisma.kategori.findMany();
  return res;
};

const page = async () => {
  const [ kategori] = await Promise.all([
    getKategori(),
  ]);

  return (
    <>
      <div className="mb-2">
        <Form kategori={kategori} />
      </div>
    </>
  );
};

export default page;
