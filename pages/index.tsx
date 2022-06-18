import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-red-600 via-red-600 to-black flex flex-col justify-center sm:py-12">
        <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
          <div className="bg-white font-thin shadow rounded-sm divide-y divide-gray-200 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-80 ">
            <h1 className="font-sans text-center text-5xl mb-5 p-3 ">
              <span className="text-red-600">YouTube</span>{" "}
              <span>Downloader</span>
            </h1>
          </div>
          <div className="bg-white shadow w-full rounded-sm divide-y divide-gray-200 ">
            <div className="px-5 py-7">
              <input
                type="text"
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                placeholder="Enter YouTube Video URL"
              />
              <button
                type="button"
                className="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
              >
                <span className="inline-block mr-2">Download</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-4 h-4 inline-block"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </div>
            <div className="p-5">
              <div className="grid grid-cols-3 gap-1">
                <button
                  type="button"
                  className="transition duration-200 border border-gray-200 text-gray-500 w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-normal text-center inline-block"
                >
                  Video
                </button>
                <button
                  type="button"
                  className="transition duration-200 border border-gray-200 text-gray-500 w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-normal text-center inline-block"
                >
                  Audio
                </button>
                <button
                  type="button"
                  className="transition duration-200 border border-gray-200 text-gray-500 w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-normal text-center inline-block"
                >
                  Video Only
                </button>
              </div>
            </div>
            {/* <div className="py-5">
              <div className="grid grid-cols-2 gap-1">
                <div className="text-center sm:text-left whitespace-nowrap">
                  <button className="mx-5 px-5 py-4 font-normal text-sm rounded-lg text-gray-500 cursor-default">
                    <span>Made by Pratham 🤓</span>
                  </button>
                </div>
                <div className="text-center sm:text-right whitespace-nowrap">
                  
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
