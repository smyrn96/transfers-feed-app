type ImageFullNamePropsType = {
  traveler_photo: string;
  firstName: string;
  lastName: string;
};

const ImageFullName: React.FC<ImageFullNamePropsType> = ({
  traveler_photo,
  firstName,
  lastName,
}) => {
  return (
    <div className="flex flex-col justify-center items-center mt-14 mb-8 gap-4">
      <img
        src={traveler_photo}
        alt={lastName}
        className="w-[82px] h-[82px] rounded-full"
      />
      <div className="text-center text-lg font-semibold leading-[22px]">
        {firstName}
        <br />
        {lastName}
      </div>
    </div>
  );
};

export default ImageFullName;
