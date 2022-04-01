import axios from "axios";
import { useState } from "react";
import CustomAlert from "./CustomAlert";

const Contact = () => {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  });

  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    });
    if (ok) {
      form.reset();
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    setServerState({ submitting: true });
    axios({
      method: "post",
      url: "https://formspree.io/f/xjvleerl",
      data: new FormData(form),
    })
      .then((r) => {
        handleServerResponse(true, <CustomAlert />, form);
      })
      .catch((r) => {
        handleServerResponse(false, r.response.data.error, form);
      });
  };

  return (
    <>
      <section className="body-font relative" id="contact">
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-ghost rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              className="absolute inset-0 my-filter"
              title="map"
              style={{ marginHeight: 0, marginWidth: 0 }}
              scrolling="no"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d185954.8247811832!2d-80.07323210286165!3d43.26097496951789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882c986c27de778f%3A0x2b6aee56d8df0e21!2sHamilton%2C%20ON!5e0!3m2!1sen!2sca!4v1648658694250!5m2!1sen!2sca"
              width="100%"
              height="100%"
              frameBorder="0"
            ></iframe>
            <div className="bg-neutral relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="text-accent title-font font-semibold tracking-widest text-xs">
                  LOCATION
                </h2>
                <p className="mt-1 text-accent">Hamilton, Ontario</p>
              </div>
              <div className="lg:w-1/2 mt-4 lg:mt-0 pr-12 px-6">
                <h2 className="title-font font-semibold tracking-widest text-xs text-accent">
                  EMAIL
                </h2>
                <a className="text-accent leading-relaxed">
                  dnkcdesign@gmail.com
                </a>
                {/* <h2 className="title-font font-semibold tracking-widest text-xs mt-4 text-accent">
                    PHONE
                  </h2>
                  <p className="leading-relaxed text-accent">123-456-7890</p> */}
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 className="text-lg mb-1 font-medium title-font">Contact me!</h2>
            <p className="leading-relaxed mb-5">
              Please fill out the form below to send me a message.
            </p>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm">
                Name
              </label>
              <input
                required
                type="text"
                id="name"
                name="name"
                className="w-full rounded border border-primary focus:border-secondary focus:ring-2 focus:ring-secondary-200 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <form id="form" onSubmit={handleOnSubmit}>
              <div className="relative mb-4">
                <label htmlFor="email" className="leading-7 text-sm">
                  Email
                </label>
                <input
                  required
                  type="email"
                  id="email"
                  name="email"
                  className="w-full rounded border border-primary focus:border-secondary focus:ring-2 focus:ring-secondary-200 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label htmlFor="message" className="leading-7 text-sm">
                  Message
                </label>
                <textarea
                  required
                  id="message"
                  name="message"
                  className="w-full rounded border border-primary focus:border-secondary focus:ring-2 focus:ring-secondary-200 h-32 text-base outline-none py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
              <button
                disabled={serverState.submitting}
                type="submit"
                className="text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-secondary rounded text-lg mb-5"
              >
                SUBMIT
              </button>

              {serverState.status && (
                <p className={!serverState.status.ok ? "errorMsg" : ""}>
                  {serverState.status.msg}
                </p>
              )}
            </form>

            {/* <p className="text-xs mt-3">
                Chicharrones blog helvetica normcore iceland tousled brook viral
                artisan.
              </p> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
