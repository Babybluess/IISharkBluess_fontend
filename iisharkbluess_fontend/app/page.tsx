"use client";
import { useState } from "react";
import { DropDown, MainContext, SideBar } from "./components";

export default function Home() {
  const [network, setNetwork] = useState<string>("");
  const [selectedPage, setSlectedPage] = useState<string>("Home")
  return (
    <div className="w-screen h-screen bg-gradient-to-br from-[#d9a7c7] to-[#fffcdc] shadow-inner shadow-slate-700 overflow-hidden">
      <div className="w-full h-[10%] flex justify-between p-5 border-b-2 border-white">
        <div className="w-[60%] flex items-center gap-6">
          <img
            src="./images/IISharkBluess_logo_v2.png"
            alt="IISharkBluess_logo"
            className="w-[25%]"
          />
          <p className="text-gray-400">
            TVL{" "}
            <span className="font-semibold text-black">$207,232,094.34</span>
          </p>
          <div className="flex gap-3 items-center">
            <img
              src="./images/logo.png"
              alt="IISharkBluess_logo"
              className="w-[12%]"
            />
            <span className="font-semibold">$108.92</span>
            <button onClick={() => setSlectedPage("Farms")} className="px-2 py-1 rounded-full text-[#edb45f] bg-[#fcead1] opacity-75">
              Buy Farm
            </button>
          </div>
        </div>
        <div className="w-[25%] flex gap-5 items-center">
          <DropDown setNetwork={setNetwork} network={network} />
          <button className=" relative px-3 py-2 border-2 border-orange-200 rounded-xl text-white cursor-pointer transition ease-in-out delay-150  hover:scale-110 hover:bg-green-400 duration-300">
            Connect Wallet
          </button>
        </div>
      </div>
      <div className="w-full h-[90%] flex">
        <SideBar selectedPage={selectedPage} setSelectedPage={setSlectedPage}/>
        <MainContext selectedPage={selectedPage}/>
      </div>
    </div>
  );
}
