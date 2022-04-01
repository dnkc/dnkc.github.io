import React from "react";

const Alert = () => {
  const [showAlert, setShowAlert] = React.useState(true);
  return (
    <>
      {showAlert ? (
        <div
          className={"px-6 py-4 border-0 relative mb-4 bg-green-500 rounded-xl"}
        >
          <span className="text-xl inline-block mr-5 align-middle">
            <i className="fas fa-bell" />
          </span>
          <span className="inline-block align-middle mr-8">
            <b className="capitalize text-alert">Email successfuly sent!</b>
          </span>
          <button
            className="absolute  text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 focus:outline-none"
            onClick={() => setShowAlert(false)}
          >
            <span>×</span>
          </button>
        </div>
      ) : null}
    </>
  );
};

export default function CustomAlert() {
  return <Alert />;
}
