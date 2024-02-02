import { PrismaClient } from "@prisma/client";
import Form from "./Form";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

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
    <Navbar isVisible={true} />
      <div className="bg-primary">
        <Form kategori={kategori} />
      </div>
    </>
  );
};

export default page;
