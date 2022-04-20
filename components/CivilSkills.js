import { civil_skills } from "./data.js";

const CivilSkills = () => {
  return (
    <>
      {" "}
      <div className="md:flex md:flex-col md:w-1/2 card rounded-box place-items-center">
        <div className="mr-0 mb-6 w-full py-4 text-center ">
          <h2 className="mb-8 text-4xl font-bold sm:text-5xl">
            Civil Engineering Skills
          </h2>
          <p className="text-lg leading-relaxed">
            I currently use these for my every day tasks.
          </p>
        </div>
        {civil_skills
          .reduce(function (accumulator, currentValue, currentIndex, array) {
            if (currentIndex % 2 === 0)
              accumulator.push(array.slice(currentIndex, currentIndex + 2));
            return accumulator;
          }, [])
          .map((skill, idx) => (
            <div key={idx} className="p-2 sm:w-1/2 md:w-3/4 w-full mb-4">
              <div className="flex w-full ">
                <div className="flex-1 grid h-20 flex-grow card bg-base-300 p-2 place-items-center hover:scale-105 border border-primary rounded-lg">
                  {skill[0]}
                </div>
                <div className="divider divider-horizontal"></div>
                <div className="flex-1 grid h-20 flex-grow card bg-base-300 p-2 place-items-center hover:scale-105 border border-primary rounded-lg">
                  {skill[1]}
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default CivilSkills;
