import Faq from "@/components/Faq";

const page = () => {
  return (
    <>
      <section className="flex justify-center pt-36">
        <div className="w-full">
          <div>
            <div className="mb-10 text-white">
              <div className="text-center">
                <h1 className="font-bold  text-4xl mb-3">Syarat & Ketentuan</h1>
                <p className="">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                </p>
              </div>
              <div className="p-5">
                <div className="leading-normal flex flex-col gap-4">
                  <h4 className="font-bold">1. lorem</h4>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Aut at fugit unde architecto tempora iusto, consectetur,
                    assumenda fuga error, dolorem officiis magni? Illo dolorum
                    repellat amet consectetur architecto odit deleniti. Quaerat
                    officia officiis minima praesentium provident incidunt
                    commodi illum mollitia?
                  </p>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Temporibus magni dolores illo beatae hic fuga, quisquam
                    nostrum aperiam, voluptate dolore architecto quia,
                    perspiciatis doloremque assumenda placeat. At harum amet,
                    non expedita vitae quo dolores numquam reprehenderit
                    adipisci soluta tempore sint, suscipit repellat deleniti.
                    Distinctio voluptates fugit consectetur quos doloremque hic,
                    enim non ea alias minus, sunt temporibus quaerat commodi
                    atque?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Faq />
    </>
  );
};

export default page;
