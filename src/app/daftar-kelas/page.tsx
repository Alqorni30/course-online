import { PrismaClient } from "@prisma/client";
import Form from "./Form";
import Navbar from "@/components/ui/Navbar";

const prisma = new PrismaClient();

const getKategori = async () => {
  const res = await prisma.kategori.findMany();
  return res;
};
const getPaket = async () => {
  const res = await prisma.paket.findMany();
  return res;
};

const page = async () => {
  const [ kategori, paket] = await Promise.all([
    getKategori(),
    getPaket(),
  ]);

  return (
    <>
    <Navbar isVisible={true} />
      <div className="bg-primary">
        <Form kategori={kategori} paket={paket} />
      </div>
    </>
  );
};

export default page;
