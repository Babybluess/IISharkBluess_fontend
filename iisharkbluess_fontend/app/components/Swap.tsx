import * as React from "react";
import { useState, useEffect } from "react";
import { farmList } from "@/const/menu.const";

export default function SwapContent() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const [pairSelected, setPairSelected] = useState(false);

  const [pair1Amount, setPair1Amount] = useState(0);
  const [pair2Amount, setPair2Amount] = useState(0);

  return (
    <div className="w-full h-full place-self-center lg:col-span-6 justify-center items-center">
      <div className="w-full border-slate-400 border-2 border-solid rounded-lg p-4">
        <div className="relative mt-4">
          {/* Part 1 */}
          <div
            id="select-pair"
            className="flex-col items-center justify-between"
          >
            <div className="flex justify-between">
              <div className="relative w-2/5">
                <button
                  onClick={() => {
                    setIsOpen1(!isOpen1);
                    if (isOpen2) setIsOpen2(!isOpen2);
                  }}
                  className="border border-solid border-gray-300 rounded-lg p-4 h-full w-full bg-white hover:bg-gray-100 text-black font-bold py-2 px-4 rounded-lg shadow-md flex items-center"
                >
                  {farmList[0].token1 ? (
                    <>
                      <img
                        src={farmList[0].token1.icon}
                        alt={farmList[0].token1.name}
                        className="mr-2 w-6 h-6"
                      />
                      {farmList[0].token1.name}
                    </>
                  ) : (
                    "Select pair"
                  )}
                </button>
                {isOpen1 && (
                  <div className="absolute left-0 mt-2 w-40 bg-white rounded-lg shadow-lg z-50">
                    <ul>
                      <li className="cursor-pointer py-2 px-4 hover:bg-gray-100 flex items-center">
                        <img
                          src={farmList[0].token1.icon}
                          alt={farmList[0].token1.name}
                          className="mr-2 w-6 h-6"
                        />
                        {farmList[0].token1.name}
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              <div className="relative w-2/5">
                <button
                  onClick={() => {
                    setIsOpen2(!isOpen2);
                    if (isOpen1) setIsOpen1(!isOpen1);
                  }}
                  className="border border-solid border-gray-300 rounded-lg p-4 h-full w-full bg-white hover:bg-gray-100 text-black font-bold py-2 px-4 rounded-lg shadow-md flex items-center"
                >
                  {farmList[1].token2 ? (
                    <>
                      <img
                        src={farmList[1].token2.icon}
                        alt={farmList[1].token2.name}
                        className="mr-2 w-6 h-6"
                      />
                      {farmList[1].token2.name}
                    </>
                  ) : (
                    "Select pair"
                  )}
                </button>
                {isOpen2 && (
                  <div className="z-50 absolute left-0 mt-2 w-40 bg-white rounded-lg shadow-lg">
                    <ul>
                      <li className="cursor-pointer py-2 px-4 hover:bg-gray-100 flex items-center">
                        <img
                          src={farmList[1].token2.icon}
                          alt={farmList[1].token2.name}
                          className="mr-2 w-6 h-6"
                        />
                        {farmList[1].token2.name}
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Part 2 */}
          <div
            id="swap-content"
            className="mt-5 flex-col flex-1"
          >
            <div className="bg-slate-100 w-full flex flex-col gap-2 border border-solid border-gray-300 rounded-lg p-4 mb-5">
              <div className="flex items-center">
                <img
                  src={farmList[0].token1.icon}
                  alt={farmList[0].token1.name}
                  className="mr-2 w-6 h-6"
                />
                <p className="text-xl font-bold">{farmList[0].token1.name}</p>
              </div>
              <input
                className="w-full bg-slate-100 h-10 text-xl font-bold p-2"
                type="number"
                min={0}
                value={pair1Amount}
                onChange={(e) => setPair1Amount(Number(e.target.value))}
              />
              <p> Balance: {}</p>
            </div>
            <div className=" bg-slate-100 flex flex-col gap-2 w-full border border-solid border-gray-300 rounded-lg p-4 mb-5">
              <div className="flex items-center">
                <img
                  src={farmList[1].token2.icon}
                  alt={farmList[1].token2.name}
                  className="mr-2 w-6 h-6"
                />
                <p className="text-xl font-bold">{farmList[1].token2.name}</p>
              </div>
              <input
                className="w-full bg-slate-100 h-10 text-xl font-bold p-2"
                type="number"
                min={0}
                value={pair2Amount}
                onChange={(e) => setPair2Amount(Number(e.target.value))}
              />
              <p> Balance: {}</p>
            </div>
            <button
              className="bg-blue-200 hover:bg-blue-300 text-blue-600 font-bold rounded-lg px-5 py-2.5 text-center justify-center"
              disabled={!pairSelected}
            >
              Swap
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
