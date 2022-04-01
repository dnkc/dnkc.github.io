import { experience } from "./data";
import { ArrowRightIcon } from "@heroicons/react/solid";

const JobTimeline = () => {
  return (
    <div className="md:border-t-2 md:border-r-2 md:border-b-2 md:border-primary md:pt-4">
      {experience.map((job, idx) => (
        <ol key={idx} className="border-l border-primary">
          <li>
            <div className="flex flex-start items-center pt-3">
              <div className="bg-primary w-2 h-2 rounded-full -ml-1 mr-3"></div>
              <p className=" text-sm mb-2">{job.dates}</p>
            </div>
            <div className="mt-0.5 ml-4 mb-6">
              <h4 className=" font-semibold text-xl mb-3">{job.name}</h4>
              {job.description.map((duty, idxt) => (
                <div
                  key={idxt}
                  className="mb-2 flex flex-no-shrink fill-current basis-1 grow-1"
                >
                  <div>
                    <ArrowRightIcon
                      viewBox="0 -50 100 100"
                      className="h-5 w-5"
                    />
                  </div>
                  {duty}
                </div>
              ))}
            </div>
          </li>
        </ol>
      ))}
    </div>
  );
};

export default JobTimeline;
