import Image from "next/image";
import kelas1 from "@/assets/kelas/Cover Kelas Business Case.png"
import kelas2 from "@/assets/kelas/Cover Kelas Business Plan.png"

interface OnlineClassCardProps {
  discountLogo?: any;
}

const OnlineClassCard: React.FC<OnlineClassCardProps> = ({
  discountLogo,
}) => {
  return (
    <div className=" rounded-md shadow-md relative">
      {discountLogo && (
        <Image
          src={discountLogo}
          width={30}
          height={30}
          alt="Discount Logo"
          className="absolute top-0 right-0 p-2 w-12 h-12"
        />
      )}
      <div className="flex justify-center">
        <Image
          src={kelas1}
          width={400}
          height={400}
          alt="Discount Logo"
          className="absolute top-0 right-0 p-2 w-12 h-12"
        />
        <Image
          src={kelas2}
          width={400}
          height={400}
          alt="Discount Logo"
          className="absolute top-0 right-0 p-2 w-12 h-12"
        />
      </div>
    </div>
  );
};

export default OnlineClassCard;
