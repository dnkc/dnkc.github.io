const MyExperience = () => {
  return (
    <section className="first:mt-0 border-b-8 pb-3 mt-3">
      {/* <!-- To keep in the same column --> */}
      <h2 className=" font-bold tracking-widest text-lg text-stone-900 print:font-normal">
        EXPERIENCE
      </h2>

      <section className="mb-2">
        <header>
          <h3 className="text-lg font-semibold text-gray-700 leading-snug">
            Parsons Inc.
          </h3>
          <p className="leading-normal text-md text-gray-600 ">
            Nov 2021 – Present <br />{" "}
            <span className="underline">Water Resources Engineer</span>
          </p>
        </header>
        <p className="mt-2 text-md text-gray-700 leading-normal">
          <span className="text-gray-500">&rsaquo; </span> Automated anything
          possible with ArcGIS & HEC-RAS using Python or VBA
          <br />
          <span className="text-gray-500">&rsaquo; </span> Developed detailed
          design documents including technical drawings, specifications,
          calculations and contract documents for multi-discipline projects{" "}
          <br />
          <span className="text-gray-500">&rsaquo; </span> Created designs,
          calculations, sketches, diagrams, schematic drawings, and final
          working drawings <br />
        </p>
      </section>

      <section className="mb-2">
        <header>
          <h3 className="text-lg font-semibold text-gray-700 leading-snug">
            GHD Ltd.
          </h3>
          <p className="leading-normal text-md text-gray-600">
            Dec 2016 – Nov 2021 <br />
            <span className="underline">Civil Engineer-In-Training</span>
          </p>
        </header>
        <p className="mt-2 text-md text-gray-700 leading-normal">
          <span className="text-gray-500">&rsaquo; </span> Prepared engineering
          design sheets & calculations for municipal infrastructure projects to
          complete preliminary and detailed designs <br />
          <span className="text-gray-500">&rsaquo; </span> Prepared drawings
          including set-up, alignments, profiles, sections, corridors and pipe
          networks using various software <br />
          <span className="text-gray-500">&rsaquo; </span> Inspected work on
          site performed by contractors, measured quantities, documented
          progress, provided field direction, prepared weekly & monthly
          inspection reports, payment certificates
          <br />
        </p>
      </section>

      <section className="mb-2">
        <header>
          <h3 className="text-lg font-semibold text-gray-700 leading-snug">
            Englobe Inc.
          </h3>
          <p className="leading-normal text-md text-gray-600">
            Aug 2014 – Dec 2016 <br />
            <span className="underline">Design Technologist</span>
          </p>
        </header>
        <p className="mt-2 text-md text-gray-700 leading-normal">
          <span className="text-gray-500">&rsaquo; </span> Prepared CAD drawings
          including set-up, alignments, profiles, sections, site plans, and
          other engineering plans <br />
          <span className="text-gray-500">&rsaquo; </span> Data entry,
          preparation/organization of field sketches & digital photographs,
          completion of daily checklists
          <br />
          <span className="text-gray-500">&rsaquo; </span> Produced and acquired
          survey plans, field notes, maps, aerial photographs, and other
          materials from public and private sources to complete plans for
          various phases of project required by engineers
          <br />
        </p>
      </section>
    </section>
  );
};

export default MyExperience;
