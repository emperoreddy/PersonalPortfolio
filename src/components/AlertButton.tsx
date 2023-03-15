import { useState, useEffect } from "react";

export default function AlertButton({ showAlert, setShowAlert }) {

  const closed = showAlert ? "opacity-100" : "opacity-0";

  return (
    <div
      className={`fixed top-14 ${closed}   z-20 m-4 flex w-96 rounded-lg shadow-lg transition-opacity duration-1000 focus:outline-none`}
    >
      <div className="flex items-center rounded-l-lg bg-indigo-600 py-4 px-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="fill-current text-white"
          viewBox="0 0 16 16"
          width="20"
          height="20"
        >
          <path
            fillRule="evenodd"
            d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
          ></path>
        </svg>
      </div>
      <div className="flex w-full items-center justify-between rounded-r-lg border border-gray-200 border-l-transparent bg-white px-4 py-6 text-lg font-medium text-black">
        <div>Thanks for contacting me!</div>
        <button>
          <svg
            onClick={() => {
              setShowAlert(false);
            }}
            xmlns="http://www.w3.org/2000/svg"
            className="fill-current text-gray-700"
            viewBox="0 0 16 16"
            width="20"
            height="20"
          >
            <path
              fillRule="evenodd"
              d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
}
