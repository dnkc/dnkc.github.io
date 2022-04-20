import { moocs } from "./data.js";

const CoursesCerts = () => {
  return (
    <>
      <div className="mx-auto px-5 pt-12 pb-24 lg:px-24" id="courses">
        <div className="my-3 flex w-full flex-col text-left lg:text-center">
          <h2 className="bold mb-8 text-4xl font-bold leading-tigh lg:text-6xl">
            Courses & Certificates <br className="hidden lg:inline-block" />
          </h2>
        </div>
        <div className="flex w-full flex-col text-left lg:text-center">
          <h3 className="text-2xl ">
            While there have been many more countless courses and the learning
            never stops, <br className="hidden lg:inline-block" />I have listed
            below some of the courses and certificates I believe worth
            mentioning.
          </h3>
        </div>
        <div className="card rounded-box place-items-center">
          <div className="mr-0 mb-6 py-4 text-center"></div>
          {moocs.map((course, idx) => (
            <div
              key={idx}
              tabIndex="0"
              className="collapse p-3 m-5 border border-primary collapse lg:w-full"
            >
              <div className="collapse-title text-xl font-medium">
                {course.name}
              </div>
              <div className="collapse-content">
                <p>
                  {course.description} Delivered by{" "}
                  <a
                    className="link-primary"
                    target="_blank"
                    rel="noreferrer"
                    href={course.link}
                  >
                    {course.company}.
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* <div className="flex w-full flex-row justify-center pt-24 text-center">
            <a href="/" className="underline-blue px-8 text-xl font-semibold">
              Ut eleifend.
            </a>
            <a href="/" className="underline-gray px-6 text-xl font-semibol">
              Tempus in.
            </a>
          </div> */}
      </div>
    </>
  );
};

export default CoursesCerts;
