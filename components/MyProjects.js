import Link from "next/link";
const MyProjects = () => {
  return (
    <section className="mt-8 first:mt-0 border-b-8 p-3">
      {/* <!-- To keep in the same column --> */}
      <h2 className="mb-4 text-lg font-bold tracking-widest  text-gray-900">
        FULL STACK SAMPLERS
      </h2>

      <section className="mb-4">
        <header>
          <h3 className="text-lg font-semibold text-gray-700 leading-snug">
            <Link
              href="https://dk-jobs-app.herokuapp.com/landing"
              target="_blank"
              className="group"
            >
              Jobify
            </Link>{" "}
            <span className="inline-block text-stone-900 font-normal  transition duration-100 ease-in">
              ⇗
            </span>
          </h3>
        </header>
        <p className="mt-2 text-md text-gray-700 leading-normal">
          React, Express, NodeJS. MongoDB, JWT authentication/authorization,
          complete CRUD functionality, deployed to Heroku.
        </p>
      </section>

      <section className="mb-4">
        <header>
          <h3 className="text-lg font-semibold text-gray-700 leading-snug">
            <Link
              href="https://suspicious-brown-a6117c.netlify.app/"
              target="_blank"
              className="group"
            >
              Firebase Real-Estate
            </Link>{" "}
            <span className="inline-block text-stone-900 font-normal  transition duration-100 ease-in">
              ⇗
            </span>
          </h3>
        </header>
        <p className="mt-2 text-md text-gray-700 leading-normal">
          A responsive housing marketplace application built with React,
          Express, NodeJS, and Firebase. Deployed to Netlify.
        </p>
      </section>

      <section className="mb-4">
        <header>
          <h3 className="text-lg font-semibold text-gray-700 leading-snug">
            <Link
              href="https://dk-stripe-ecommerce.herokuapp.com/"
              target="_blank"
              className="group"
            >
              Stripe E-Commerce
            </Link>{" "}
            <span className="inline-block text-stone-900 font-normal  transition duration-100 ease-in">
              ⇗
            </span>
          </h3>
        </header>
        <p className="mt-2 text-md text-gray-700 leading-normal">
          A responsive E-commerce platform built with React, Express, NodeJS,
          and Firebase. Includes Stripe API for payment and deployed to Heroku.
        </p>
      </section>

      <section className="mb-4">
        <header>
          <h3 className="text-lg font-semibold text-gray-700 leading-snug">
            <Link
              href="https://dk-dev-connector2.herokuapp.com/"
              target="_blank"
              className="group"
            >
              Dev Connector
            </Link>{" "}
            <span className="inline-block text-stone-900 font-normal transition duration-100 ease-in">
              ⇗
            </span>
          </h3>
        </header>
        <p className="mt-2 text-md text-gray-700 leading-normal">
          A responsive social media application for developers to connect. Built
          with React, Express, NodeJS, and MongoDB and deployed to Heroku.
        </p>
      </section>
    </section>
  );
};

export default MyProjects;
