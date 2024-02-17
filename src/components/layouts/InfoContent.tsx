import Image from "next/image";
import ilustrasi3 from "@/assets/dare to be the winner 1.png";
import ilustrasi1 from "@/assets/ilustrasi/tutorial 4.png";
import ilustrasi2 from "@/assets/ilustrasi/Group 3.png";
import ilustrasi4 from "@/assets/ilustrasi/Group 4.png";

const InfoContent = () => {
  return (
    <>
      <div className="py-20 container">
        <h4 className="text-center text-2xl text-zinc-900 font-semibold pb-5">
          Why you should join{" "}
          <span className="text-primary font-bold">Anak Bisnis</span>
        </h4>
        <div className="">
          <div className="flex justify-center items-center">
            <Image
              className="lg:w-[400px] lg:h-[450px] w-[300px] h-[350px]"
              src={ilustrasi3}
              width={400}
              height={500}
              alt="ilustrasi3"
            />
          </div>
          <div
            className="bg-[#F5C732] flex flex-col gap-10 mt-[-150px] pt-[300px] pb-20 px-8 lg:px-20
            lg:rounded-[70px] md:rounded-[50px] rounded-[40px]"
          >
            <div className="flex lg:flex-row md:flex-row flex-col gap-5 justify-around items-center">
              <Image
                className=""
                src={ilustrasi1}
                width={400}
                height={400}
                alt="product image"
              />
              <div className="lg:w-[400px] w-full">
                <h5 className="font-bold text-xl pb-2">
                  We will guide you, until you became the winner
                </h5>
                <p className="">
                  Yes After the class session is over, you will be guided by a
                  mentor starting from the registration process to the final
                  presentation stage in the business competition.
                </p>
              </div>
            </div>
            <div className="flex lg:flex-row md:flex-row flex-col gap-5 justify-around items-center">
              <div className="lg:w-[400px] w-full">
                <h5 className="font-bold text-xl pb-2">
                  A-Level Mentors from A-Level Competition
                </h5>
                <p className="">
                  Have you ever imagined being mentored by a mentor who has been
                  a winner at Bank Indonesia, Tanoto Fooundation, HSBC, Student
                  Catalyst, or even India Business Competition? You will get
                  that experience with us.
                </p>
              </div>
              <Image
                className=""
                src={ilustrasi2}
                width={400}
                height={400}
                alt="product image"
              />
            </div>
            <div className="flex lg:flex-row md:flex-row flex-col gap-5 justify-around items-center">
              <Image
                className=""
                src={ilustrasi4}
                width={500}
                height={500}
                alt="product image"
              />
              <div className="lg:w-[400px] w-full">
                <h5 className="font-bold text-xl pb-2">
                  Community Based Platform
                </h5>
                <p className="">
                  You will also be facilitated with a platform that serves as a
                  place to discuss business competitions or even you can also
                  find a team to participate in competitions together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoContent;
