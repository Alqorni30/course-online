import prismadb from "@/libs/db";
import Form from "./Form";
import Navbar from "@/components/ui/Navbar";

const page = async () => {
  const kategori = await prismadb.kategori.findMany();
  const paket = await prismadb.paket.findMany();

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
