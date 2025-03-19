import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const Drops = [
    {
      title: "Anix7 - Tools",
      description:
        "Anix7 - Tools is your all-in-one hub for online productivity, featuring a URL shortener, image uploader, and a range of other intuitive tools to simplify your digital tasks.",
      image: "/assets/img/tools.png",
      url: "https://tools.anix7.in",
    },
  ];
  return (
    <>
      {/* <div className="my-5">
        <h1 className="text-3xl font-bold text-center mb-4">
          Fast & Secure URL Shortener
        </h1>
        <p className="text-lg text-center mb-6">
          Shorten long URLs from various platforms, share them effortlessly, and
          track performance with ease.
        </p>
      </div> */}
      <div className="relative flex justify-center items-stretch flex-wrap gap-x-14 gap-y-16 mt-10">
        {Drops.map((drop, index) => (
          <Link 
            href={drop.url}
            key={index}
            className="w-full max-w-md flex justify-center items-center shadow-[inset_20px_20px_20px_rgba(0,0,0,.05),_25px_35px_20px_rgba(0,0,0,.05),_25px_30px_30px_rgba(0,0,0,.05),_inset_-20px_-20px_25px_rgba(255,255,255,.9)] dark:shadow-[inset_20px_20px_20px_rgba(255,255,255,.05),_25px_35px_20px_rgba(255,255,255,.05),_25px_30px_30px_rgba(255,255,255,.05),_inset_-20px_-20px_25px_rgba(0,0,0,.9)] flex-col text-center min-h-[250px]"
          >
            <div className="overflow-hidden w-full">
              <Image
                src={drop.image}
                alt={drop.title}
                width={320}
                height={320}
                priority
                className="w-full hover:scale-105 transition-all duration-700 cursor-pointer"
              />
            </div>
            <div className="border-t-2 border-gray-200 dark:border-gray-800 p-5">
              <h2 className="font-semibold text-xl hover:text-blue-500 dark:hover:text-blue-800 transition-all duration-500">{drop.title}</h2>
              <p className="text-gray-300 dark:text-gray-500 hover:text-blue-500 dark:hover:text-blue-800 transition-all duration-500">{drop.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
