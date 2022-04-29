const MySkillsTwo = () => {
  return (
    <section className="mt-8 first:mt-0 border-b-8 p-3 ml-3">
      {/* <!-- To keep in the same column --> */}
      <h2 className="mb-10 font-bold tracking-widest text-sm2 text-gray-550"></h2>

      <section className="mb-4">
        <header>
          <h3 className="text-lg font-semibold text-gray-700 leading-snug">
            DevOps
          </h3>
        </header>
        <div className="my-3 last:pb-1">
          <ul className="flex flex-wrap text-md leading-relaxed -mr-1 -mb-1">
            <li className="bg-stone-900 text-white px-2 mr-1 mb-1 text-base text-gray-750 leading-relaxed print:bg-white bg-gray-250">
              Git
            </li>
            <li className="bg-stone-900 text-white px-2 mr-1 mb-1 text-base text-gray-750 leading-relaxed print:bg-white bg-gray-250">
              Version Control
            </li>
            <li className="bg-stone-900 text-white px-2 mr-1 mb-1 text-base text-gray-750 leading-relaxed print:bg-white bg-gray-250">
              Github Actions
            </li>
            <li className="bg-stone-900 text-white px-2 mr-1 mb-1 text-base text-gray-750 leading-relaxed print:bg-white bg-gray-250">
              Github Pipelines
            </li>
            <li className="bg-stone-900 text-white px-2 mr-1 mb-1 text-base text-gray-750 leading-relaxed print:bg-white bg-gray-250">
              Firebase
            </li>
            <li className="bg-stone-900 text-white px-2 mr-1 mb-1 text-base text-gray-750 leading-relaxed print:bg-white bg-gray-250">
              Docker
            </li>
          </ul>
        </div>
      </section>
    </section>
  );
};

export default MySkillsTwo;
