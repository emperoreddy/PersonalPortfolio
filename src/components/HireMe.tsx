import {
  TbPhone,
  TbMail,
  TbBrandLinkedin,
  TbBrandGithub,
} from "react-icons/tb";
import { useForm, ValidationError } from "@formspree/react";
import AlertButton from "./AlertButton";
import { useState, useEffect } from "react";
import light from '../assets/light.svg'

export default function HireMe() {
  const [state, handleSubmit] = useForm("xjvdwqgg");

  const [showAlert, setShowAlert] = useState(false);

  function handleButtonClick() {
    setShowAlert(true);
  }

  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => {
        setShowAlert(false);
      }, 4000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [showAlert]);

  return (
    <>
      <div className="relative mx-auto flex h-auto w-[80%] flex-col items-center  rounded-lg border-2 border-[#4200FF] bg-[#06004B] py-10">
        <AlertButton showAlert={showAlert} setShowAlert={setShowAlert} />
        <span className="mb-10 font-light text-[#CACACA]">
          Feel free to contact me any time , through any method below .
        </span>
        <section className="flex w-full justify-around px-32 ">
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-10 flex w-72 flex-col gap-2  md:w-96 lg:mx-0"
            method="POST"
          >
            <label htmlFor="name" className="flex flex-col">
              {"First Name"}
            </label>
            <input
              type="text"
              className="form-input  rounded-md bg-[#1A0084] py-1 px-3 transition duration-200 ease-in-out focus:ring-2 focus:ring-indigo-500"
              id="name"
              name="name"
              required
            />

            <ValidationError prefix="Name" field="name" errors={state.errors} />

            <label htmlFor="last_name" className="flex flex-col">
              {"Last Name"}
            </label>
            <input
              type="text"
              className="form-input rounded-md bg-[#1A0084] py-1 px-3 transition duration-200 ease-in-out focus:ring-2 focus:ring-indigo-500"
              id="last_name"
              name="last_name"
              required
            />

            <ValidationError
              prefix="Last_name"
              field="last_name"
              errors={state.errors}
            />

            <label htmlFor="message" className="flex flex-col">
              {"Message"}
            </label>
            <textarea
              className="form-textarea rounded-md bg-[#1A0084] py-1 px-3 transition duration-200 ease-in-out focus:ring-2 focus:ring-indigo-500"
              id="message"
              name="message"
              rows={5}
              required
            ></textarea>

            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />

            <button
              type="submit"
              onClick={handleButtonClick}
              disabled={state.submitting}
              className="mt-4 rounded  bg-button py-3 px-4 font-semibold text-white transition  duration-200 ease-in-out hover:scale-105 hover:bg-indigo-700 "
            >
              Send message
            </button>
          </form>

          <section className="mt-16 flex flex-col gap-5 ">
            <span className="flex items-center gap-5 ">
              <TbPhone className="h-10 w-10" />
              <p>+40771143274</p>
            </span>

            <span className="flex items-center gap-5 transition-all duration-150 hover:text-indigo-500">
              <TbMail className="h-10 w-10" />
              <a href="mailto:a.bogdanandrei19@gmail.com">
                a.bogdanandrei19@gmail.com
              </a>
            </span>

            <span className="flex items-center gap-5 transition-all duration-150 hover:text-indigo-500">
              <TbBrandLinkedin className="h-10 w-10" />
              <a
                href="https://www.linkedin.com/in/bogdan-amortitu-7a14b61b3/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </span>

            <span className="flex items-center gap-5 transition-all duration-150 hover:text-indigo-500">
              <TbBrandGithub className="h-10 w-10" />
              <a
                href="https://www.github.com/emperoreddy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </span>
          </section>
        </section>{" "}
      </div>
    </>
  );
}
