import Link from "next/link";

const MyExperience = () => {
  return (
    <section className="mt-8 border-b-8 p-3">
      {/* <!-- To keep in the same column --> */}
      <h2 className="mb-4 text-lg font-bold tracking-widest  text-gray-900">
        FRONT-END SAMPLERS
      </h2>
      <section className="mb-4">
        <header>
          <h3 className="text-lg font-semibold text-gray-700 leading-snug">
            <Link
              href="https://google-clone-chi-nine.vercel.app/"
              target="_blank"
              className="group"
            >
              Google Clone
            </Link>{" "}
            <span className="inline-block text-stone-900 font-normal ">⇗</span>
          </h3>
          <p className="mt-2 leading-normal text-md text-gray-650">
            A Google clone with (hopefully still) functional search capability.
            React, NextJS, Tailwind, JavaScript, HTML/CSS.
          </p>
        </header>
      </section>

      <section className="mb-4">
        <header>
          <h3 className="text-lg font-semibold text-gray-700 leading-snug">
            <Link
              href="https://medium-clone-mpkz19e8j-nagardtests-gmailcom.vercel.app/"
              target="_blank"
              className="group"
            >
              Medium 2.0 Clone
            </Link>{" "}
            <span className="inline-block text-stone-900 font-normal"> ⇗</span>
          </h3>
        </header>
        <p className="mt-2 text-md text-gray-700 leading-normal">
          A Front-End clone of Medium with comment validation/approval using
          Sanity CMS, React, NextJS, Tailwind, hosted on Vercel.
        </p>
      </section>

      <section className="mb-4">
        <header>
          <h3 className="text-lg font-semibold text-gray-700 leading-snug">
            <Link
              href="https://linkedin-clone-dun.vercel.app/home"
              target="_blank"
              className="group"
            >
              LinkedIn Clone
            </Link>{" "}
            <span className="inline-block text-stone-900 font-normal ">⇗</span>
          </h3>
        </header>
        <p className="mt-2 text-md text-gray-700 leading-normal">
          A Front-End clone of the LinkedIn landing page, hosted on Vercel.
          React, JavaScript, HTML, NextJS, Tailwind, MongoDB.
        </p>
      </section>

      <section className="mb-4">
        <header>
          <h3 className="text-lg font-semibold text-gray-700 leading-snug">
            <Link
              href="https://airbnb-clone-frontend-gjbw9xwjh-nagardtests-gmailcom.vercel.app/"
              target="_blank"
              className="group"
            >
              AirBNB Clone
            </Link>{" "}
            <span className="inline-block text-stone-900 font-normal">⇗</span>
          </h3>
        </header>
        <p className="mt-2 text-md text-gray-700 leading-normal">
          A Front-End clone of the AirBNB landing page, hosted on Vercel. React,
          JavaScript, HTML, NextJS, Tailwind.
        </p>
      </section>
      <section className="mb-4">
        <header>
          <h3 className="text-lg font-semibold text-gray-700 leading-snug">
            <Link
              href="https://spotify-clone-2arj0t2bu-nagardtests-gmailcom.vercel.app/login"
              target="_blank"
              className="group"
            >
              Spotify Clone
            </Link>{" "}
            <span className="inline-block text-stone-900 font-normal">⇗</span>
          </h3>
        </header>
        <p className="mt-2 text-md text-gray-700 leading-normal">
          A Front-End clone of Spotify, with functional login and playlist
          selection, with player functionality. React, JavaScript, HTML, NextJS,
          Tailwind, hosted on Vercel.
        </p>
      </section>
    </section>
  );
};

export default MyExperience;
