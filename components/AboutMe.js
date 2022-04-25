import Link from "next/link";
const AboutMe = () => {
  return (
    <>
      <section className=" first:mt-0 border-b-8 pb-3 pr-5">
        <ul className="list-inside xsm:ml-3">
          <li className="mt-1 leading-normal text-black text-md hover:text-gray-700 hover:cursor-pointer">
            <Link passHref href="/projects" className="group">
              <span className="text-md font-semibold text-stone-800 leading-snug">
                Portfolio {"    "}
                <span className="hidden lg:inline-block font-normal group-hover:text-gray-700">
                  ↗
                </span>
              </span>
            </Link>
          </li>
          <li className="mt-1 text-gray-550 text-md hover:text-gray-700 hover:cursor-pointer">
            <Link passHref href="https://github.com/dnkc" className="group">
              <span className=" text-md font-semibold text-stone-800 leading-snug">
                Github {"    "}
                <span className="hidden lg:inline-block font-normalgroup-hover:text-gray-700">
                  ↗
                </span>
              </span>
            </Link>
          </li>
        </ul>
        {/* <!-- To keep in the same column --> */}
        <h2 className="mt-3 mb-2 font-bold tracking-widest text-lg print:font-normal">
          SUMMARY
        </h2>
        <section className="pb-3 border-b-2">
          I am currently a civil engineer who enjoys building both concrete and
          digital things! Full Stack autodiadact with demonstrable capacity to
          assess and manage complex business needs and surmount obstacles in
          either field.{" "}
        </section>

        <section className="mb-4 mt-3">
          <header>
            <h3 className="text-lg font-semibold text-stone-900 leading-snug">
              Full Stack Web Developer
            </h3>
            <p className="leading-normal text-md text-gray-600">
              Since 2019 | Freelance
            </p>
          </header>
          <p className="mt-2 text-md text-gray-700 leading-normal">
            <span className="text-gray-500">&rsaquo; </span>
            Proactively cultivated client relationships
          </p>
          <p className="mt-2 text-md text-gray-700 leading-normal">
            <span className="text-gray-500">&rsaquo; </span>
            Actively engaged with clients about specifications and designs
          </p>
          <p className="mt-2 text-md text-gray-700 leading-normal">
            <span className="text-gray-500">&rsaquo; </span>
            Fostered ongoing services to clients as requested or needed
          </p>
        </section>

        <section className="mb-4 mt-3">
          <header>
            <h3 className="text-lg font-semibold text-stone-900 leading-snug">
              Civil Engineering
            </h3>
            <p className="leading-normal text-md text-gray-600">Since 2015</p>
          </header>
          <p className="mt-2 text-md text-gray-700 leading-normal">
            <span className="text-gray-500">&rsaquo; </span> Design, plan, and
            supervise the construction of infrastructure projects such as
            bridges, roads, rail, and dams
          </p>
          <p className="mt-2 text-md text-gray-700 leading-normal">
            <span className="text-gray-500">&rsaquo; </span> Confer with clients
            and other members of the engineering team and conduct research to
            determine project requirements
          </p>
          <p className="mt-2 text-md text-gray-700 leading-normal">
            <span className="text-gray-500">&rsaquo; </span>
            Ensure construction plans meet guidelines and specifications of
            building codes and other regulations
          </p>
        </section>
      </section>
    </>
  );
};

export default AboutMe;
