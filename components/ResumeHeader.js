import Link from "next/head";
const ResumeHeader = () => {
  return (
    <header className="inline-flex items-baseline justify-between w-full align-top border-b-8 mb-5">
      <div className="block">
        <h1 className="mb-0 text-3xl font-bold text-stone-800">Dragan Kunac</h1>
        {/* <!--Job Title---------------------------------------------------------------------------------------------------------> */}
        <h2 className="m-2 ml-2 lg:text-2xl font-semibold text-stone-800 leading-snug">
          Full Stack Web Developer
        </h2>
        {/* <!--Location ---------------------------------------------------------------------------------------------------------> */}
        <h3 className="m-2 mb-6 font-semibold text-md text-stone-700 leading-snug">
          Hamilton, ON
        </h3>
      </div>

      {/* <!--   Initials Block         --> */}
      <div className="pb-2 pt-2 justify-around px-3 lg:ml-48 text-3xl bg-black font-bold leading-none text-stone-200 bg-stone-750 ">
        <div className="text-center initial">D</div>
        <div className="text-center initial">K</div>
      </div>
    </header>
  );
};

export default ResumeHeader;
