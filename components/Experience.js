import JobTimeline from "./JobTimeline.js";

const Experience = () => {
  return (
    <>
      <div className="mx-auto px-5 pt-32 lg:px-24" id="experience">
        <div className="my-3 flex w-full flex-col text-left lg:text-center">
          <h2 className="bold mb-8 text-4xl font-bold leading-tight lg:text-6xl">
            My past work experience <br className="hidden lg:inline-block" />
          </h2>
        </div>
        <div className="flex w-full flex-col text-left lg:text-center">
          {/* <h3 className="text-2xl ">
              Lorem ipsum arcu, consectetur adipiscing elit. Viverra elementum
              pellentesque <br className="hidden lg:inline-block" />
              tortor, luctus blandit sed dolor et, semper. Posuere vitae vitae,
              ac mus. Arcu quis feugiat.
            </h3> */}
        </div>
        <JobTimeline />
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

export default Experience;
