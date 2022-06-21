import React from "react";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [description, setDescription] = useState("");
  const [submited, setSubmited] = useState(false);
  return (
    <section
      className="grid-container bg-ContactBg bg-no-repeat bg-center mt-32 sm:mt-60 md:mt-0 py-10 "
      id="Get-In-Touch"
      data-aos="fade-down"
      data-aos-duration="1000"
    >
      <main className="col-start-2 col-end-3 grid justify-center ">
        <Image
          src="/images/section4Image.png"
          width={700}
          height={462}
          alt="Works Illustration"
        />
        <h1 className="text-2xl sm:text-3xl lg:text-4xl capitalize font-light mt-5  mb-3 text-center">
          Feel Free to contact me
        </h1>
        <p className="text-sm sm:text-base text-center  font-body mb-6 text-gray-700 ">
          check me out on social media or leave me a message
        </p>
        <div className="flex gap-4 items-center mb-10 justify-center">
          <Link href="https://github.com/WilbertTosoy/resume2/raw/main/EdTosoy-Developer-Resume.pdf">
            <a target="_blank" rel="noopener noreferrer">
              <button className="py-2 sm:py-3 px-6 rounded-full primary-btn  ">
                Email Me
              </button>
            </a>
          </Link>
          <Link href="https://github.com/EdTosoy">
            <a target="_blank" rel="noopener noreferrer" aria-label="github">
              <button
                className="grid place-content-center p-3  bg-gray-200 hover:bg-gray-300 rounded-full transform hover:scale-105 "
                aria-label="Github"
              >
                <box-icon type="logo" name="github" color="#282828"></box-icon>
              </button>
            </a>
          </Link>
          <Link href="https://www.linkedin.com/in/edtosoy/">
            <a target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <button
                className="grid place-content-center p-3 bg-gray-200 hover:bg-gray-300 rounded-full transform hover:scale-105 "
                aria-label="linkedIn"
              >
                <box-icon
                  name="linkedin"
                  type="logo"
                  color="#282828"
                ></box-icon>
              </button>
            </a>
          </Link>
          <Link href="https://www.linkedin.com/in/edtosoy/">
            <a target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <button
                className="grid place-content-center p-3 bg-gray-200 hover:bg-gray-300 rounded-full transform hover:scale-105 "
                aria-label="linkedIn"
              >
                <box-icon
                  name="facebook"
                  type="logo"
                  color="#282828"
                ></box-icon>
              </button>
            </a>
          </Link>
        </div>
        <form
          className="mb-10  shadow-lg rounded-2xl p-2 sm:p-5 bg-white grid border relative"
          onSubmit={(e) => {
            e.preventDefault();
            setSubmited(true);
            setTimeout(() => {
              setSubmited(false);
            }, 2000);
          }}
        >
          {/* <textarea
            name="text"
            className="w-full text-lg p-2 my-2  rounded-md"
            id="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={2}
            placeholder="tell me about "
          /> */}
          {/* {submited && <div>Thank You!</div>} */}
          {/* <div className="left-0 flex  justify-end  absolute bottom-4 right-5">
            <button className="py-2 text-sm sm:py-2 px-4 rounded-full primary-btn  ">
              SEND
            </button>
          </div> */}
        </form>
      </main>
    </section>
  );
}
