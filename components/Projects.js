import { projectsdata as projects } from "./data.js";
import { useState, useEffect } from "react";
import {
  FormControl,
  Checkbox,
  FormGroup,
  FormControlLabel,
} from "@material-ui/core";
import { CodeIcon, DesktopComputerIcon } from "@heroicons/react/solid";

const Projects = () => {
  const filterType = [{ type: "Full Stack" }, { type: "Front End" }];

  const [type, setType] = useState([]);
  const [filteredType, setFilteredType] = useState([]);

  const handleChange = (e) => {
    if (e.target.checked) {
      setType([...type, e.target.value]);
    } else {
      setType(type.filter((id) => id !== e.target.value));
    }
  };

  useEffect(() => {
    if (type.length === 0) {
      setFilteredType(projects);
    } else {
      setFilteredType(
        projects.filter((project) =>
          type.some((type) => [project.type].flat().includes(type))
        )
      );
    }
  }, [type]);

  return (
    <>
      <div className="mt-0 lg:mt-40" id="projects">
        <div className="mx-auto">
          <div className="mx-auto px-5 pt-24 lg:px-24">
            <div className="my-10 flex w-full flex-col text-center">
              <h2 className="mb-5 text-2xl font-bold  lg:text-3xl">
                Some of the apps I have built, currently hosted on free
                platforms, either from courses or self-directed learning.
              </h2>
              <div className="text-primary">
                <FormControl>
                  <FormGroup row>
                    {filterType.map((each, index) => (
                      <FormControlLabel
                        control={<Checkbox onChange={handleChange} />}
                        label={each.type.toUpperCase()}
                        value={each.type}
                        key={index}
                      />
                    ))}
                  </FormGroup>
                </FormControl>
              </div>
            </div>
            <div
              className="
                  grid grid-cols-2
                  gap-16
                  text-center
                  xl:grid-cols-6
                  lg:grid-cols-3
                  
                  "
            >
              {filteredType.map((project, idx) => (
                <div
                  key={idx}
                  className="card bg-base-100 shadow-xl hover:scale-105 border border-primary rounded-lg"
                >
                  <img
                    height="100"
                    width="100"
                    layout="intrinsic"
                    className="object-cover"
                    src={project.image}
                    alt={project.title}
                    quality="100"
                  />

                  <div className="card-body items-center">
                    <h2 className="card-title hover:underline">
                      {project.title.toUpperCase()}
                    </h2>
                    <div className="badge badge-primary  hover:cursor-default">
                      {project.type.toUpperCase()}
                    </div>
                    {/* <p className="mb-2">{project.description}</p> */}
                    <div className="card-actions mb-6 ">
                      {project.subtitle.split(",").map((item, idxt) => (
                        <div
                          key={idxt}
                          className="badge badge-outline hover:cursor-default mx-auto"
                        >
                          {item.toUpperCase()}
                        </div>
                      ))}
                    </div>
                    <div className="md:flex">
                      <div className="badge badge-accent border border-primary mr-2 hover:border-primary hover:scale-125">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noreferrer"
                          className="hover:cursor-pointer "
                        >
                          <DesktopComputerIcon className="text-red-500 h-3 w-3 hover:rotate-45" />
                        </a>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noreferrer"
                          className="hover:cursor-pointer "
                        >
                          DEMO
                        </a>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noreferrer"
                          className="hover:cursor-pointer "
                        >
                          <DesktopComputerIcon className="text-red-500 h-3 w-3 hover:rotate-45" />
                        </a>
                      </div>
                      {project.repo ? (
                        <div className="badge badge-accent border border-primary mr-2 hover:border-primary hover:scale-125">
                          {project.repo ? (
                            <>
                              <a
                                href={project.repo}
                                target="_blank"
                                rel="noreferrer"
                                className="hover:cursor-pointer"
                              >
                                <CodeIcon className="text-red-500 h-3 w-3 hover:rotate-45" />
                              </a>
                              <a
                                href={project.repo}
                                target="_blank"
                                rel="noreferrer"
                                className="hover:cursor-pointer"
                              >
                                CODE
                              </a>
                              <a
                                href={project.repo}
                                target="_blank"
                                rel="noreferrer"
                                className="hover:cursor-pointer"
                              >
                                <CodeIcon className="text-red-500 h-3 w-3 hover:rotate-45" />
                              </a>
                            </>
                          ) : null}
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="my-12 flex w-full flex-col pl-8 text-center">
              <div
                className="
                    underline-blue
                    mt-6
                    text-xl
                    font-bold
                  "
              >
                {" That's all for now!"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
