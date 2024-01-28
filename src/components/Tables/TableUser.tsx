"use client";
import { PrismaClient } from "@prisma/client";
import { useEffect, useState } from "react"; // Import useEffect dan useState dari React

const prisma = new PrismaClient();

interface UserDaftar {
  id: number;
  username: string;
  email: string;
  nomorWa: string;
}

const TableUser: React.FC = () => {
  const [userDaftar, setUserDaftar] = useState<UserDaftar[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await prisma.userDaftar.findMany({
          select: {
            id: true,
            username: true,
            email: true,
            nomorWa: true,
          },
        });
        setUserDaftar(res);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures useEffect runs once when the component mounts

  if (!userDaftar || userDaftar.length === 0) {
    return <p>Tidak ada data pendaftar.</p>;
  }

  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
        <table className="min-w-full bg-white border border-gray-300">
          <tbody>
            {userDaftar.map((user, index) => (
              <tr className="text-black" key={user.id}>
                <td>{index + 1}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.nomorWa}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TableUser;
