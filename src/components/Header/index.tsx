
import { authOptions } from "@/libs/auth-libs";
import { getServerSession } from "next-auth";

const Header = async () => {
  const session = await getServerSession(authOptions);
  return (
    <header className="sticky top-0 z-50 flex w-full p-2 bg-white shadow-md">
      <div className="flex flex-grow items-center justify-between px-2 py-2 shadow-2 md:px-6 2xl:px-11">
        <div className="hidden sm:block ">
          <h2 className="font-bold text-lg">Hai Admin Welcome to Dashboard</h2>
        </div>
        <div className="flex items-center gap-3">
          <h5 className="font-bold">{session?.user?.name}</h5>
        {session?.user?.image && (
            <img
              src={session.user.image}
              alt={`${session.user.name}'s Profile`}
              className="h-8 w-8 rounded-full mr-2"
              width={32}
              height={32}
            />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
