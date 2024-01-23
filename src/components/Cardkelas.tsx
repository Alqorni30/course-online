import Image from "next/image"
import Link from "next/link"
import diskonlogo from "@/assets/diskonlogo.png";
import { AiFillContainer } from "react-icons/ai";
import { IoCheckmarkOutline } from "react-icons/io5";
import { FaBriefcase } from "react-icons/fa6";


const Cardkelas = () => {
  return (
    <>
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow relative">
              <Image
                className="absolute top-0 right-0 w-[100px] h-[100px]"
                src={diskonlogo}
                width={50}
                height={50}
                alt="product image"
              />
              <div className="p-5">
                <AiFillContainer className="w-[80px] h-[80px] rounded-lg mb-4" />
                <h5 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  Business Plan
                </h5>
                <div className="flex items-center mt-2.5 mb-5">
                  <p className="text-sm">Live Program | 3 or 6 Months</p>
                </div>
                <div className="flex gap-2 items-center mt-2.5 mb-5 flex-col">
                  <div>
                    <p className="text-sm font-semibold flex items-center">
                      <IoCheckmarkOutline className="text-secondary mr-2 text-2xl" />
                      Understand & solve business problems using data
                    </p>
                  </div>
                  <div className="">
                    <p className="text-sm font-semibold flex items-center">
                      <IoCheckmarkOutline className="text-secondary mr-2 text-2xl" />
                      Virtual internship with real cases from partners
                    </p>
                  </div>
                  <div className="">
                    <p className="text-sm font-semibold flex items-center">
                      <IoCheckmarkOutline className="text-secondary mr-2 text-2xl" />
                      Explore AI tools through hands-on projects
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <Link
                    href="#"
                    className="text-black bg-secondary hover:bg-amber-500 rounded-lg text-lg px-5 py-2.5 text-center transition duration-200"
                  >
                    Premium
                  </Link>
                  <Link
                    href="#"
                    className="text-black border-2 border-secondary hover:bg-slate-200 rounded-lg text-lg px-5 py-2.5 text-center transition duration-200"
                  >
                    Basic
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow relative">
              <Image
                className="absolute top-0 right-0 w-[100px] h-[100px]"
                src={diskonlogo}
                width={50}
                height={50}
                alt="product image"
              />
              <div className="p-5">
                <FaBriefcase className="w-[80px] h-[80px] rounded-lg mb-4" />
                <h5 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  Business Case
                </h5>
                <div className="flex items-center mt-2.5 mb-5">
                  <p className="text-sm">Live Program | 3 or 6 Months</p>
                </div>
                <div className="flex gap-2 items-center mt-2.5 mb-5 flex-col">
                  <div>
                    <p className="text-sm font-semibold flex items-center">
                      <IoCheckmarkOutline className="text-secondary mr-2 text-2xl" />
                      Understand & solve business problems using data
                    </p>
                  </div>
                  <div className="">
                    <p className="text-sm font-semibold flex items-center">
                      <IoCheckmarkOutline className="text-secondary mr-2 text-2xl" />
                      Virtual internship with real cases from partners
                    </p>
                  </div>
                  <div className="">
                    <p className="text-sm font-semibold flex items-center">
                      <IoCheckmarkOutline className="text-secondary mr-2 text-2xl" />
                      Explore AI tools through hands-on projects
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <Link
                    href="#"
                    className="text-black bg-secondary hover:bg-amber-500 rounded-lg text-lg px-5 py-2.5 text-center transition duration-200"
                  >
                    Premium
                  </Link>
                  <Link
                    href="#"
                    className="text-black border-2 border-secondary hover:bg-slate-200 rounded-lg text-lg px-5 py-2.5 text-center transition duration-200"
                  >
                    Basic
                  </Link>
                </div>
              </div>
            </div>
    </>
  )
}

export default Cardkelas