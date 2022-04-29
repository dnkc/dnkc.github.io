import Link from "next/head";
const ResumeHeader = () => {
  return (
    <>
      <div className="grid grid-cols-2 border-b-8 pb-6">
        <div className="grid-span-8">
          <h1 className="mb-0 text-3xl font-bold text-stone-800">
            Dragan Kunac
          </h1>
          {/* <!--Job Title---------------------------------------------------------------------------------------------------------> */}
          <h2 className=" lg:text-2xl font-semibold text-stone-800 leading-snug">
            Full Stack Web Developer
          </h2>
          {/* <!--Location ---------------------------------------------------------------------------------------------------------> */}
          <h3 className=" font-semibold text-md text-stone-700 leading-snug">
            Hamilton, ON
          </h3>
        </div>
        <div className="grid-span-2 justify-self-end">
          <div className=" pb-2 pt-2 px-3 lg:ml-48 text-3xl bg-black font-bold leading-none text-stone-200 bg-stone-750 ">
            <div className="text-center initial">D</div>
            <div className="text-center initial">K</div>
          </div>
        </div>
        <div className="grid-span-12">
          <a
            className="text-md font-semibold text-stone-800 leading-snug "
            href="/projects"
          >
            Portfolio ⇗
          </a>
          {""} |{" "}
          <a
            className="  text-md font-semibold text-stone-800 leading-snug  justify-self-end"
            href="https://github.com/dnkc"
          >
            GitHub ⇗
          </a>
        </div>
      </div>
    </>
  );
};

export default ResumeHeader;
