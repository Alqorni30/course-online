import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer py-5 bg-slate-400">
      <div className="container mx-auto">
        <div className="flex justify-between">
          <div className="lg:w-5/12">
            <h3 className="font-bold">BimbelCourse.</h3>
            <p className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
              voluptates eligendi animi expedita nesciunt magni enim mollitia
              eos quidem distinctio.
            </p>
            <div className="flex flex-col mt-4">
              <Link href="" className="text-decoration-none flex items-center">
                <i className="fab fa-whatsapp"></i>
                <p className="m-0 ml-2">+6289765426762</p>
              </Link>
              <Link href="" className="text-decoration-none flex items-center mt-1">
                <i className="far fa-envelope"></i>
                <p className="m-0 ml-2">examplle@gmail.com</p>
              </Link>
            </div>
          </div>
          <div className="lg:w-2/12 mt-5 lg:mt-0">
            <h5 className="font-bold">Menu</h5>
            <Link href="">Home</Link>
            <Link href="kelas">Kelas</Link>
            <Link href="testimonial">Testimonial</Link>
            <Link href="faq">Faq</Link>
            <Link href="syaratketen">Syarat & Ketentuan</Link>
          </div>
          <div className="lg:w-4/12 mt-5 lg:mt-0">
            <h5 className="font-bold mb-3">Subscribe untuk info menarik</h5>
            <div className="flex">
              <input
                type="text"
                placeholder="subscribe..."
                className="rounded-l-md border border-r-0 px-2 py-1"
              />
              <button className="btn btn-danger rounded-r-md rounded-0 px-3 py-1">
                Subscribe
              </button>
            </div>
            <div className="flex mt-3">
              <i className="fab fa-facebook"></i>
              <i className="fab fa-linkedin ml-2"></i>
              <i className="fab fa-twitter ml-2"></i>
              <i className="fab fa-tiktok ml-2"></i>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-5">
          <p className="text-center">&copy; Copyright {new Date().getFullYear()} <span className="font-bold">by AlqorniBayo</span> | All right reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
