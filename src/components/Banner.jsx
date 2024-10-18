import Image from "next/image";

const Banner = () => {
  return (
    <div className="mb-10 mt-5 mx-auto flex justify-center items-center">
      <Image src={"/home.png"} height={330} width={350} />
    </div>
  );
};

export default Banner;
