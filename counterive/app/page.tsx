"use client";

import { useEffect, useState } from "react";

const Home = () => {
  const [counter, setCounter] = useState<number | null>(null);

  useEffect(() => {
    const fetchCounter = async () => {
      const response = await fetch("/api/counter/get");
      const data = await response.json();
      setCounter(data.value);
    };
    fetchCounter();
  }, []);

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-black to-gray-900 overflow-hidden">
      <div className="w-[90%] max-w-lg md:max-w-l h-[70%] max-h-lg md:max-h-l backdrop-blur-md border-2 border-wheat border-opacity-40 rounded-lg shadow-lg p-4 text-center flex flex-col items-center justify-center">
        <h1
          className="text-9xl font-extrabold text-white"
          style={{
            fontFamily: "monospace",
            color: "wheat",
          }}
        >
                    {counter !== null ? (
            counter
          ) : (
            <span className="text-sm">Loading...</span>
          )}
        </h1>
      </div>
      <footer className="absolute bottom-8 text-white text-sm sm:text-lg flex items-center">
        <span style={{ color: "wheat", fontFamily: "monospace" }}>
          Made with ❤ by{" "}
          <span className="cursor-pointer hover:underline">
            <a href="https://hamzza.vercel.app/">Hamzza</a>
          </span>
        </span>
      </footer>
    </div>
  );
};

export default Home;

