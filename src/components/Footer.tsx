import Link from "next/link";
import {
  FaSquareXTwitter,
  FaInstagram,
  FaTiktok,
  FaLinkedinIn,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa6";
import { AiOutlineMail } from "react-icons/ai";

interface FooterProps {
  isVisible: boolean;
}

const Footer: React.FC<FooterProps> = ({ isVisible }) => {
  return isVisible ? (
    <footer className="w-full p-10 bg-white">
      <div className="mx-auto">
        <div className="flex lg:flex-row flex-col gap-5 justify-between">
          <div className="lg:w-5/12">
            <h3 className="font-bold text-2xl mb-3">Anak Bisnis</h3>
            <p className="desc">
              Anak bisnis Merupakan platform yang membantu para pelajar di
              Indonesia untuk memenangkan kompetisi bisnis baik secara nasional
              maupun international.
            </p>
            <div className="flex flex-col mt-4">
              <Link href="" className="text-decoration-none flex items-center">
                <FaWhatsapp className="text-xl" />
                <p className="m-0 ml-2">+62 853-5307-1170</p>
              </Link>
              <Link
                href=""
                className="text-decoration-none flex items-center mt-1"
              >
                <AiOutlineMail className="text-xl" />
                <p className="m-0 ml-2">anakbisnis.id@gmail.com</p>
              </Link>
            </div>
          </div>
          <div className="lg:w-2/12 mt-5 lg:mt-0 flex flex-col gap-2 font-semibold">
            <h5 className="font-bold text-xl mb-3">Menu</h5>
            <Link
              className="hover:text-cyan-500 transition duration-200"
              href="/"
            >
              Home
            </Link>
            <Link
              className="hover:text-cyan-500 transition duration-200"
              href="/tentang-kami"
            >
              Tentang Kami
            </Link>
            <Link
              className="hover:text-cyan-500 transition duration-200"
              href="/kelas"
            >
              Kelas
            </Link>
            <Link
              className="hover:text-cyan-500 transition duration-200"
              href="/mentor"
            >
              Mentor
            </Link>
            <Link
              className="hover:text-cyan-500 transition duration-200"
              href="/faq"
            >
              Faq
            </Link>
          </div>
          <div className="lg:w-4/12 mt-5 lg:mt-0">
            <h5 className="font-bold mb-3 text-xl">
              Follow untuk info menarik
            </h5>

            <div className="flex gap-5 mt-3 text-2xl">
              <Link href="https://twitter.com/anakbisnis_id" target="_blank">
                <FaSquareXTwitter className="hover:text-cyan-500 transition duration-200" />
              </Link>
              <Link
                href="https://www.instagram.com/anakbisnis.id/"
                target="_blank</Link>"
              >
                <FaInstagram className="hover:text-cyan-500 transition duration-200" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/anak-bisnis/"
                target="_blank"
              >
                <FaLinkedinIn className="hover:text-cyan-500 transition duration-200" />
              </Link>
              <Link
                href="https://www.tiktok.com/@anakbisnis.id?_t=8jEu18pyCTx&_r=1"
                target="_blank"
              >
                <FaTiktok className="hover:text-cyan-500 transition duration-200" />
              </Link>

              <Link
                href="https://www.tiktok.com/@anakbisnis.id?_t=8jEu18pyCTx&_r=1"
                target="_blank"
              >
                <FaYoutube className="hover:text-cyan-500 transition duration-200" />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-12">
          <p className="text-center">
            &copy; Copyright {new Date().getFullYear()}{" "}
            <span className="font-bold">by Anak Bisnis</span> | All right
            reserved.
          </p>
        </div>
      </div>
    </footer>
  ) : null;
};

export default Footer;
