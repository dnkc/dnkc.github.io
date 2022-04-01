const About = () => {
  return (
    <>
      <div
        className="max-w-8xl mx-auto inline-block items-center p-3 pt-0 lg:flex lg:flex-wrap lg:pt-4"
        id="about"
      >
        <div className="lg:w-3/6">
          <h2 className="max-w-xl lg:text-[4.2em] text-3xl font-bold leading-none inline-block">
            DRAGAN KUNAC
          </h2>

          <p className="mt-6 max-w-2xl text-xl font-semibold pl-12">
            I am a civil engineer currently who enjoys building both concrete
            and digital things! I specialize in bespoke, artisanal, single
            origin, grass fed, fixed gear, and slow roasted apps & websites.
            Currently employed as a Water Resources Engineer, freelance Web
            Designer, currently seeking a permanent Software Developer role.
          </p>
          <p className="mt-6 max-w-2xl text-xl font-semibold pl-12">
            When I am not eating all the office candy, I enjoy reading, movies,
            gaming, losing terribly in online chess, running (to work off all of
            that candy), and never being satisfied with my own work.
          </p>
        </div>
        <div className="mb-10 mt-35 hidden w-full flex-col lg:mt-12 lg:inline-block lg:w-3/6">
          <img
            src="/images/greetings.png"
            alt="Hero"
            className="object-cover md:w-3/4"
          />
        </div>
        <div className="my-20 inline-block w-full flex-col lg:mt-0 lg:hidden lg:w-2/5 relative">
          <img src="/images/heywhatever.png" alt="image" />
        </div>
      </div>
    </>
  );
};

export default About;
