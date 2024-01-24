import { faq } from "@/data";
import Accordion from "./Accordion";

const Faq = () => {
  return (
    <>
      <div className="p-4 mt-10 mb-20">
        <h1 className="lg:text-4xl md:text-3xl text-2xl text-white text-center font-bold mb-10">
          Pertanyaan Yang sering ditanyakan
        </h1>
        <div className="grid lg:grid-cols-2 grid-cols-1 p-5 gap-3">
          {faq.map((data) => {
            return (
              <div key={data.id}>
                <Accordion title={data.title}>
                  <p>{data.desc}</p>
                </Accordion>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Faq;
