import Link from "next/link";
import Image from "next/image";
import { projectsdata as projects } from "../lib/data";
const ProjectsCard = () => {
  return (
    <>
      {projects.map((project, idx) => (
        <div
          key={idx}
          className="card bg-base-100 shadow-lg hover:shadow-xl hover:scale-105 border border-primary rounded-lg"
        >
          <div className="rounded shadow-lg">
            <div className="flex flex-column flex-1">
              <Image
                layout="fill"
                className="w-full h-48 object-cover"
                src={project.image}
                alt={project.title}
                quality="100"
              />
            </div>
          </div>

          <div className="card-body items-center">
            <h2 className="card-title hover:underline">
              {project.title.toUpperCase()}
            </h2>
            <div className="badge badge-primary truncate hover:cursor-default">
              {project.type.toUpperCase()}
            </div>
            <p className="mb-2">{project.description}</p>
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
            <div>
              <div className="badge badge-accent border border-primary mr-2 hover:border-secondary hover:scale-125">
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:cursor-pointer "
                >
                  DEMO
                </Link>
              </div>
              {project.repo ? (
                <div className="badge badge-accent border border-primary mr-2 hover:border-secondary hover:scale-125">
                  {project.repo ? (
                    <>
                      <Link
                        href={project.repo}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:cursor-pointer"
                      >
                        CODE
                      </Link>
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
    </>
  );
};

export default ProjectsCard;
