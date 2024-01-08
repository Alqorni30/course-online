const Homepage = () => {
  return (
    <section className="min-h-screen bg-gradient-to-r from-blue-400 via-purple-300 to-blue-500 bg-gray-600 text-gray">
      <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-48">
        <h3 className="mb-4 text-4xl font-semibold tracking-tight leading-none text-black md:text-5xl lg:text-6xl">Temukan </h3>
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-black md:text-5xl lg:text-6xl">
          Bakat kreatifmu
        </h1>
        <h2 className="mb-4 text-4xl font-semibold tracking-tight leading-none text-black md:text-5xl lg:text-6xl">
          Bersama Kami.
        </h2>
        <p className="mb-8 text-lg font-normal text-gray-700 lg:text-xl sm:px-16 lg:px-48">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas totam est recusandae doloremque quod praesentium!
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
          <a
            href="#"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
          >
            Lihat Kelas
          </a>
          <a
            href="#"
            className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-black rounded-lg border border-black hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
          >
            Lihat Promo
          </a>
        </div>
      </div>
    </section>
  );
};

export default Homepage;
