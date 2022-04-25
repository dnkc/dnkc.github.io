const MyEducation = () => {
  return (
    <section className="mt-8 first:mt-0 border-b-8 pb-3">
      {/* <!-- To keep in the same column --> */}
      <h2 className="mb-4 font-bold tracking-widest text-lg  text-stone-900 print:font-normal">
        EDUCATION
      </h2>

      <section className="mb-2">
        <header>
          <h3 className="text-lg font-semibold text-gray-700 leading-snug">
            Lakehead University
          </h3>
          <p className="leading-normal text-md text-gray-600">
            2017 – 2019 | Degree
            <br />
            <span className="leading-normal text-md text-gray-600">
              <span className="text-gray-500">&rsaquo; </span>
              Bachelor of Engineering
            </span>
          </p>
        </header>
        <p className="text-md text-gray-700 leading-normal">
          <span className="text-gray-500">&rsaquo; </span>
          Graduate Project: Developing Imagery Software
        </p>
      </section>

      <section className="mb-2">
        <header>
          <h3 className="text-lg font-semibold text-gray-700 leading-snug">
            Mohawk College
          </h3>
          <p className="leading-normal text-md text-gray-600">
            2013 – 2016 | Diploma
            <br />
            <span className="leading-normal text-md text-gray-600">
              <span className="text-gray-500">&rsaquo; </span>
              Civil Engineering Technology Advanced
            </span>
          </p>
        </header>
      </section>

      <section className="mb-2 xsm:w-3/4">
        <header>
          <h3 className="text-lg font-semibold text-gray-700 leading-snug">
            FreeCodeCamp
          </h3>
          <p className="leading-normal text-md text-gray-600">
            2018 | Certificate
            <br />
            <span className="leading-normal text-md text-gray-600">
              <span className="text-gray-500">&rsaquo; </span>
              Responsive Web Design
            </span>
          </p>
          <p className="leading-normal text-md text-gray-600">
            2018 | Certificate
            <br />
            <span className="leading-normal text-md text-gray-600">
              <span className="text-gray-500">&rsaquo; </span> Front End
              Development Libraries
            </span>
          </p>
          <p className="leading-normal text-md text-gray-600">
            2018 | Certificate
            <br />
            <span className="leading-normal text-md text-gray-600">
              <span className="text-gray-500">&rsaquo; </span>
              Back End Development and APIs
            </span>
          </p>
        </header>
      </section>

      <section className="mb-2 xsm:w-3/4">
        <header>
          <h3 className="text-lg font-semibold text-gray-700 leading-snug">
            Coursera
          </h3>
          <p className="leading-normal text-md text-gray-600">
            2021 | Certificate
            <br />
            <span className="leading-normal text-md text-gray-600">
              <span className="text-gray-500">&rsaquo; </span>
              Introduction to Machine Learning
            </span>
          </p>
          <p className="leading-normal text-md text-gray-600">
            2021 | Certificate
            <br />
            <span className="leading-normal text-md text-gray-600">
              <span className="text-gray-500">&rsaquo; </span>
              Deep Learning Specialization
            </span>
          </p>
          <p className="leading-normal text-md text-gray-600">
            2021 | Certificate
            <br />
            <span className="leading-normal text-md text-gray-600">
              <span className="text-gray-500">&rsaquo; </span>
              TensorFlow Developer Professional
            </span>
          </p>
          <p className="leading-normal text-md text-gray-600">
            2021 | Certificate
            <br />
            <span className="leading-normal text-md text-gray-600">
              <span className="text-gray-500">&rsaquo; </span>
              TensorFlow: Advanced Techniques
            </span>
          </p>
        </header>
      </section>

      <section className="mb-2 xsm:w-3/4">
        <header>
          <h3 className="text-lg font-semibold text-gray-700 leading-snug">
            And too many Udemy courses to list...
          </h3>
        </header>
      </section>
    </section>
  );
};

export default MyEducation;
