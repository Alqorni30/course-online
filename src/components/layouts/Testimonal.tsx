import CardTestimony from "../ui/CardTestimony";


const Testimonial = () => {
  return (
    <section className=" bg-amber-200">
    <div className="py-20  lg:px-8 px-4 rounded-lg container">
        <div className="mb-10">
          <h1 className="text-2xl text-primary font-bold text-center">
            Alumni Kami
          </h1>
          <p className="text-center text-xl font-semibold text-zinc-700">
            Cek Apa Kata Mereka
          </p>
        </div>
        <CardTestimony/>
      </div>
    </section>
  );
};

export default Testimonial;
