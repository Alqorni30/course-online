import Link from "next/link";
// import { IoLogOutOutline } from "react-icons/io5";
import { authUserSession } from "@/libs/auth-libs";

const userActionButton = async () => {
  const user = await authUserSession();
  const actionLabel = user ? "Logout" : "Login";
  const actionUrl = user ? "/api/auth/signout" : "/api/auth/signin";

  return (
    <>
      {/* <Link
        href={actionUrl}
        className="group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-secondary"
      >
        {/* <IoLogOutOutline className="text-xl" /> */}
      {/* {actionLabel} */}
      {/* </Link> */}
        <Link
          href={actionUrl}
          className=" px-5 py-2 font-semibold bg-secondary text-white rounded-md 
               hover:text-white hover:bg-amber-500 transition-all duration-200"
        >
          {actionLabel}
        </Link>
    </>
  );
};

export default userActionButton;
