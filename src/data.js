import greatkart from "./images/greatkart.JPG";
import proshop from "./images/proshop.JPG";
import realestate from "./images/realestate.jpg";
import beaches from "./images/beaches.JPG";
// import stripe from "./images/stripe.JPG";
import cocktails from "./images/cocktails.JPG";
import admin from "./images/admin.JPG";
import jobify from "./images/jobify.jpg";

export const projectsdata = [
  {
    title: "Full Stack - FIREBASE REAL ESTATE",
    subtitle: "React, Express, Node, Firebase",
    description: "Firebase backend, Google login, hosted on Netlify.",
    image: realestate,
    link: "https://suspicious-brown-a6117c.netlify.app/",
  },
  {
    title: "Full Stack - JOB TRACKING APP",
    subtitle: "MongoDB, Express, React, Node",
    description: "MongoDB for backend, React Front-End, hosted on Heroku.",
    image: jobify,
    link: "https://dk-jobs-app.herokuapp.com",
  },
  {
    title: "Full Stack - PROSHOP E-COMMERCE",
    subtitle: "MongoDB, Express, React, Node",
    description: "Redux, Reducers, and more! Hosted on Heroku.",
    image: proshop,
    link: "https://dk-mern-proshop.herokuapp.com/",
  },
  {
    title: "Full Stack - DJANGO E-COMMERCE",
    subtitle: "Python & Bootstrap",
    description: "IMAGES TEMPORARILY OUT OF ORDER UNTIL MOVED TO AMAZON S3",
    image: greatkart,
    link: "https://dk-django-ecommerce.herokuapp.com/",
  },
  {
    title: "Front-End - Admin Panel",
    subtitle: "JavaScript, HTML, Materialize for CSS",
    description: "Hosted on Netlify.",
    image: admin,
    link: "https://dazzling-turing-e29b37.netlify.app/",
  },
  {
    title: "Front-End - Beach Resort",
    subtitle: "React, JavaScript, HTML, CSS",
    description: "Hosted on Netlify.",
    image: beaches,
    link: "https://dk-react-resort.netlify.app/",
  },
  // {
  //   title: "Front-End - Stripe Navbar",
  //   subtitle: "JavaScript & CSS",
  //   description: "Hosted on Netlify.",
  //   image: stripe,
  //   link: "https://dk-stripe-submenus.netlify.app/",
  // },
  {
    title: "Front-End - Cocktail DB Website",
    subtitle: "JavaScipt & CSS",
    description: "Hosted on Netlify.",
    image: cocktails,
    link: "https://dk-cocktail-db.netlify.app/",
  },
];

export const skills = [
  "JavaScript (ES6+)",
  "Node.js",
  "React",
  "Python",
  "Django",
  "MongoDB",
  "PostgreSQL",
  "MySQL",
  "Bootstrap CSS",
  "Tailwind CSS",
];
export const civil_skills = [
  "AutoCAD 2D",
  "AutoCAD Civil 3D",
  "AutoCAD MAP",
  "Bentley Microstation / Inroads",
  "ArcGIS",
  "QGIS",
  "OTTHYMO",
  "HEC-RAS",
];

export const experience = [
  {
    name: "Water Resources Engineer",
    company: "Parsons",
    description: [
      "Prepare hydrologic and hydraulic models for Municipal, Road, Highway, Rail and Transit projects",
      "Technical report development including inspections and assessments, asset management, health and safety, environmental assessments, and detailed design reports",
      "Assist in developing detailed design documents including technical drawings, specifications, calculations and contract documents for multi-discipline projects",
      "Develop engineering products that meet client quality requirements",
    ],
    dates: "Nov 2021 - Current",
  },
  {
    name: "Graduate Civil Engineer",
    company: "GHD Ltd.",
    description: [
      "Prepared engineering design sheets & calculations for municipal infrastructure projects to complete preliminary and detailed design of roadways, storm and sanitary sewer collection systems, and water distribution systems",
      "Prepared drawings including set-up, alignments, profiles, sections, corridors and pipe networks using various software (AutoCAD 2D / Civil 3D, Bentley Microstation)",
      "Produced base plans from topographic and legal survey plans, site and grading / drainage plans, plan & profile design drawings following various municipal design standards",
      "Assisted with preparation of project schedules, contract quantities and cost estimates, construction specifications and contract documents, reports, applications and other relevant engineering documents",
      "Inspected work on site performed by contractors, measured quantities, documented progress, provided field direction, prepared weekly & monthly inspection reports, payment certificates",
      "Produced base plans from topographic and legal survey plans, site and grading / drainage plans, plan & profile design drawings following various municipal design standards",
    ],
    dates: "Dec 2016 - Nov 2021",
  },
  {
    name: "Design Technologist",
    company: "Englobe Inc.",
    description: [
      "Prepared CAD drawings including set-up, alignments, profiles, sections, site plans, and other engineering plans",
      "Submission of daily files including downloading of data, preparation/organization of field sketches & digital photographs, completion of daily checklists",
      "Acquired survey plans, field notes, maps, aerial photographs, and other materials from public and private sources to complete plans for various phases of project required by environmental engineers",
      "Retrieved data from municipal GIS systems, edited and created files for use in projects",
    ],
    dates: "Feb 2016 - Dec 2016",
  },
  {
    name: "Civil Engineering Technologist",
    description: [
      "Assisted with preparation of Functional Servicing Reports, Site Plans, including site services, grading, drainage and storm water management plans, and construction staging plans",
      "Drafted plans for a variety of land development projects including residential, commercial, and institutional properties",
      "Inspected work on site, measured quantities, documented progress, and prepared summary reports",
    ],
    company: "Lanhack Consultants",
    dates: "May 2014 - Dec 2016",
  },
];

export const moocs = [
  {
    name: "Introduction to Machine Learning",
    company: "Coursera",
    description:
      "This course provides a broad introduction to machine learning, datamining, and statistical pattern recognition. Topics include: (i) Supervised learning (parametric/non-parametric algorithms, support vector machines, kernels, neural networks). (ii) Unsupervised learning (clustering, dimensionality reduction, recommender systems, deep learning). (iii) Best practices in machine learning (bias/variance theory; innovation process in machine learning and AI).",
    link: "https://www.coursera.org/learn/machine-learning",
  },
  {
    name: "Deep Learning Specialization",
    company: "Coursera",
    description:
      "Become familiar with the significant technological trends driving the rise of deep learning; build, train, and apply fully connected deep neural networks; implement efficient (vectorized) neural networks; identify key parameters in a neural network’s architecture; and apply deep learning to your own applications.",
    link: "https://www.deeplearning.ai/program/deep-learning-specialization/",
  },
  {
    name: "TensorFlow Developer Professional",
    company: "Coursera",
    description:
      "Teaches applied machine learning skills with TensorFlow so you can build and train powerful models. Learn the necessary tools to build scalable AI-powered applications with TensorFlow. After finishing this program, become able to apply your new TensorFlow skills to a wide range of problems and projects. ",
    link: "https://www.deeplearning.ai/program/tensorflow-developer-professional-certificate/",
  },
  {
    name: "TensorFlow: Advanced Techniques",
    company: "Coursera",
    link: "https://www.deeplearning.ai/program/tensorflow-advanced-techniques-specialization/",
    description:
      "Introduces the features of TensorFlow that provide learners with more control over their model architecture and tools that help them create and train advanced ML models. Expanding previous knowledge of the Functional API and building exotic non-sequential model types. Learn how to optimize training in different environments with multiple processors and chip types and get introduced to advanced computer vision scenarios such as object detection, image segmentation, and interpreting convolutions",
  },
  {
    name: "Machine Learning for Predictive Maps in Python and Leaflet",
    company: "Coursera",
    description:
      "A short course focused on building an earthquake forecasting map application using Django and Leaflet. Building of a full-stack web GIS application with a prediction engine embedded in the application. ",
    link: "https://www.udemy.com/course/machine-learning-for-predictive-maps-in-python-and-leaflet/",
  },
  {
    name: "Computational Watershed Hydrology",
    company: "edX (Purdue University)",
    description:
      "Learn how to perform hydrologic analysis and modeling using real observations, geospatial data, and computational tools. Access and process commonly used geospatial and temporal data such as the digital elevation model (DEM), land use, soil, streamflow and precipitation using geographic information systems (GIS). ",
    link: "https://engineering.purdue.edu/online/courses/computational-watershed-hydrology",
  },
  {
    name: "Responsive Web Design",
    company: "FreeCodeCamp",
    description:
      "Learn the languages that developers use to build webpages: HTML (Hypertext Markup Language) for content, and CSS (Cascading Style Sheets) for design.",
    link: "https://www.freecodecamp.org/learn/responsive-web-design/",
  },
  {
    name: "Front End Development Libraries",
    company: "FreeCodeCamp",
    description:
      "Learn how to build responsive websites with Bootstrap, and use its included classes to style buttons, images, forms, navigation, and other common elements. Also learn how add logic to your CSS styles and extend them with Sass.",
    link: "https://www.freecodecamp.org/learn/front-end-development-libraries/",
  },
];
