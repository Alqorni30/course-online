import { Metadata } from "next";
import Image from "next/image";
import logo from "@/assets/logo/Logo Anak Bisnis Update.png";
import GoogleSigninButton from "@/components/ui/GoogleSigninButton";

export const metadata: Metadata = {
  title: "Signin Page",
  description: "Login Admin anak bisnis",
  // other metadata
};

const Page = () => {
  return (
    <>
      <section className="bg-gray-50 h-screen flex justify-center items-center">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <Image
            className=" mr-2 pb-5"
            width={150}
            height={150}
            src={logo}
            alt="logo"
          />
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                 Login ke Anak bisnis
              </h1>
              <GoogleSigninButton/>
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
