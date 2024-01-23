import Image from "next/image";

interface OnlineClassCardProps {
  title: string;
  description: string;
  discountLogo?: any;
}

const OnlineClassCard: React.FC<OnlineClassCardProps> = ({
  title,
  description,
  discountLogo,
}) => {
  return (
    <div className="bg-white p-6 rounded-md shadow-md relative">
      {discountLogo && (
        <Image
          src={discountLogo}
          width={30}
          height={30}
          alt="Discount Logo"
          className="absolute top-0 right-0 p-2 w-12 h-12"
        />
      )}
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default OnlineClassCard;
