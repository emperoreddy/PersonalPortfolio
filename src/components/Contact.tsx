import {
  TbPhone,
  TbMail,
  TbBrandLinkedin,
  TbBrandGithub,
} from "react-icons/tb";
import { useForm, ValidationError } from "@formspree/react";
import AlertButton from "./AlertButton";
import { useState, useEffect } from "react";
import light from "../assets/light.svg";
import resume from "../assets/resume.pdf";

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
        state.succeeded = false;
      }, 4000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [showAlert]);

  return (
    <>
      <div className="relative mx-auto flex w-[95%]  flex-col items-center rounded-lg  border-2 border-[#4200FF] bg-[#06004B] py-14 md:w-[76%]">
        <AlertButton showAlert={showAlert} setShowAlert={setShowAlert} />
        <span className="md:text- mb-5 text-center text-sm font-light text-[#CACACA] md:text-base">
          Feel free to contact me any time , through any method below .
        </span>
        <section className="w-full justify-around px-7 max-md:flex-col md:px-20 lg:flex lg:gap-10 lg:px-10  xl:gap-0 xl:px-32">
          <form
            onSubmit={handleSubmit}
            onSubmitCapture={handleButtonClick}
            className="mx-auto mt-10 flex flex-col  gap-2 sm:max-w-lg  lg:w-96 xl:mx-0"
            method="POST"
          >
            <label htmlFor="name" className="flex flex-col">
              {"Name"}
            </label>
            <input
              type="text"
              className="form-input  rounded-md bg-[#1A0084] py-1 px-3 transition duration-200 ease-in-out focus:ring-2 focus:ring-indigo-500"
              id="name"
              name="name"
              required
            />

            <ValidationError prefix="Name" field="name" errors={state.errors} />

            <label htmlFor="email" className="flex flex-col">
              {"Email"}
            </label>
            <input
              type="email"
              className="form-input rounded-md bg-[#1A0084] py-1 px-3 transition duration-200 ease-in-out focus:ring-2 focus:ring-indigo-500"
              id="email"
              name="email"
              required
            />

            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />

            <label htmlFor="message" className="flex flex-col">
              {"Message"}
            </label>
            <textarea
              className="form-textarea resize-none rounded-md bg-[#1A0084] py-1 px-3 transition duration-200 ease-in-out focus:ring-2 focus:ring-indigo-500"
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
              disabled={state.submitting}
              className="mt-4 rounded  bg-button py-3 px-4 font-semibold text-white transition  duration-200 ease-in-out hover:scale-105 hover:bg-indigo-700 "
            >
              Send message
            </button>
          </form>

          <section className=" mx-auto mt-16 flex max-w-lg flex-col gap-5 lg:mx-0 ">
            <span className="flex items-center gap-5 ">
              <TbPhone className="h-8 w-8 md:h-10 md:w-10" />
              <p>+40771143274</p>
            </span>

            <span className="flex items-center gap-5 text-sm transition-all duration-150 hover:text-indigo-500 md:text-base">
              <TbMail className="h-8   w-8 md:h-10 md:w-10" />
              <a href="mailto:a.bogdanandrei19@gmail.com">
                a.bogdanandrei19@gmail.com
              </a>
            </span>

            <span className="flex items-center gap-5 transition-all duration-150 hover:text-indigo-500">
              <TbBrandLinkedin className="h-8  w-8 md:h-10 md:w-10" />
              <a
                href="https://www.linkedin.com/in/bogdan-amortitu-7a14b61b3/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </span>

            <span className="flex items-center gap-5 transition-all duration-150 hover:text-indigo-500">
              <TbBrandGithub className="h-8  w-8 md:h-10 md:w-10" />
              <a
                href="https://www.github.com/emperoreddy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </span>

            <div className="mx-auto  flex w-full flex-col gap-4">
              <button className="mt-8 h-16 w-full rounded-md bg-gradient-to-tr from-blue-500 to-purple-600 py-2 px-4 font-bold text-white transition duration-200 ease-in-out hover:scale-105 hover:bg-gradient-to-bl active:scale-95 active:duration-100 md:h-20 lg:w-72">
                <a
                  href={resume}
                  download="Bogdan Amortitu Resume"
                  draggable={false}
                >
                  <div className="text-xl">Personal Resume</div>
                </a>
              </button>
            </div>
          </section>
        </section>
      </div>
    </>
  );
}
