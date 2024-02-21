import CardTestimony from "../ui/CardTestimony";


const Testimonial = () => {
  return (
    <section className="my-20 lg:px-8 px-4 container">
      <div className="py-20 bg-amber-200 lg:px-8 px-4 rounded-lg">
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
