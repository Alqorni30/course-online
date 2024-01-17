import Link from "next/link";
import {
  FaSquareXTwitter,
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaWhatsapp
} from "react-icons/fa6";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="w-full p-10 bg-white">
      <div className="mx-auto">
        <div className="flex lg:flex-row flex-col gap-5 justify-between">
          <div className="lg:w-5/12">
            <h3 className="font-bold text-2xl mb-3">Anak Bisnis</h3>
            <p className="desc">
            Anak bisnis Merupakan platform yang membantu para pelajar di Indonesia untuk memenangkan kompetisi bisnis baik secara nasional maupun international.
            </p>
            <div className="flex flex-col mt-4">
              <Link href="" className="text-decoration-none flex items-center">
                <FaWhatsapp className="text-xl"/>
                <p className="m-0 ml-2">+6289765426762</p>
              </Link>
              <Link
                href=""
                className="text-decoration-none flex items-center mt-1"
              >
                <AiOutlineMail className="text-xl"/>
                <p className="m-0 ml-2">examplle@gmail.com</p>
              </Link>
            </div>
          </div>
          <div className="lg:w-2/12 mt-5 lg:mt-0 flex flex-col gap-2">
            <h5 className="font-bold text-xl mb-3">Menu</h5>
            <Link
              className="hover:text-cyan-500 transition duration-200"
              href="/"
            >
              Home
            </Link>
            <Link
              className="hover:text-cyan-500 transition duration-200"
              href="/kelas"
            >
              Kelas
            </Link>
            <Link
              className="hover:text-cyan-500 transition duration-200"
              href="/testimonial"
            >
              Testimonial
            </Link>
            <Link
              className="hover:text-cyan-500 transition duration-200"
              href="/faq"
            >
              Faq
            </Link>
            <Link
              className="hover:text-cyan-500 transition duration-200"
              href="/syarat&ketentuan"
            >
              Syarat & Ketentuan
            </Link>
          </div>
          <div className="lg:w-4/12 mt-5 lg:mt-0">
            <h5 className="font-bold mb-3 text-xl">
              Follow untuk info menarik
            </h5>

            <div className="flex gap-5 mt-3 text-2xl">
              <Link href="">
                <FaSquareXTwitter className="hover:text-cyan-500 transition duration-200" />
              </Link>
              <Link href="">
                <FaInstagram className="hover:text-cyan-500 transition duration-200" />
              </Link>
              <Link href="#">
                <FaTiktok className="hover:text-cyan-500 transition duration-200" />
              </Link>
              <Link href="#">
                <FaYoutube className="hover:text-cyan-500 transition duration-200" />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-12">
          <p className="text-center">
            &copy; Copyright {new Date().getFullYear()}{" "}
            <span className="font-bold">by Anak Bisnis.</span> | All right
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
