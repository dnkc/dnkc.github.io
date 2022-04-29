import Image from "next/image";
const background = "/images/background.gif";
import Typical from "react-typical";
import Link from "next/link";
const Landing = () => {
  return (
    <div className="flex items-center">
      <Image
        layout="fill"
        className="object-cover absolute"
        src={background}
        alt="background image"
      />
      <span
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
        bg-clip-content p-3 border-4 border-gray-900 border-dashed 
        
        "
      >
        <main className="px-8">
          {/* Header */}
          <div className="flex flex-col space-y-8 items-start justify-start">
            <h1 className="font-mono text-7xl font-bold bg-stone-900 tracking-wide hover:cursor-default text-white">
              Dragan Kunac
            </h1>

            <div className="font-mono text-5xl flex space-x-3 ">
              {/* Text to Animate */}
              <strong className="bg-stone-900 px-1">
                <strong className="text-white hover:cursor-default px-1">
                  <Typical
                    steps={["Web Developer", 2000, "Civil Engineer", 2000]}
                    wrapper="p"
                    loop={Infinity}
                  />
                </strong>
              </strong>
            </div>
            <h1 className="mx-auto font-mono text-7xl font-bold bg-stone-600 text-white tracking-wide animate-pulse hover:animate-none hover:cursor-pointer ">
              <Link href="/resume">ENTER</Link>
            </h1>
          </div>
        </main>
      </span>
    </div>
  );
};

export default Landing;
