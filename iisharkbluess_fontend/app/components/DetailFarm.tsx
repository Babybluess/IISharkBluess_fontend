"use client";
import { PoolList } from "@/const/menu.const";
import { FarmsList } from "@/types";
import { faArrowLeft, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import SwapContent from "./Swap";
import Rewards from "./Rewards";

function DetailFarm({
  selectedFarm,
  setSelectedFarm,
  currentAPY,
}: {
  selectedFarm: FarmsList;
  setSelectedFarm: (item: any) => void;
  currentAPY: string;
}) {
  return (
    <div className="w-full h-full flex flex-col gap-5">
      {/* navbar */}
      <div className="w-full h-full flex justify-between">
        <div className="flex gap-5">
          <FontAwesomeIcon
            onClick={() => setSelectedFarm(null)}
            icon={faArrowLeft}
            className="w-8 h-8 p-3 rounded-xl cursor-pointer bg-gray-200"
          />
          <div className="h-full flex items-center">
            <div className="flex">
              <img
                src={selectedFarm.token1.icon}
                alt={selectedFarm.token1.name}
                className="w-10 h-10 rounded-full block"
              />
              <img
                src={selectedFarm.token2.icon}
                alt={selectedFarm.token2.name}
                className="w-10 h-10 rounded-full block -translate-x-3"
              />
            </div>
            <span className="text-xl text-center font-semibold">
              {selectedFarm.token1.name} - {selectedFarm.token2.name}
            </span>
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <span className="text-gray-400">
            Pool: <span className="text-black">{selectedFarm.pool}</span>
          </span>
          <span className="text-gray-400">
            TVL:{" "}
            <span className="text-black">{selectedFarm.totalDeposits}</span>
          </span>
          <div className="px-2 py-1 rounded-full text-[#edb45f] bg-[#fcead1] opacity-75 flex justify-center items-center">
            <FontAwesomeIcon icon={faStar} className="w-5 h-5" />
            New
          </div>
        </div>
      </div>
      {/* content */}
      <div className="w-full flex gap-5">
        <div className="w-[60%] h-full flex flex-col gap-5">
          {/* pool */}
          <div className="w-full p-5 rounded-xl bg-[#F6F6F6] flex flex-col gap-3">
            <span className="text-sm text-gray-400">Current APY</span>
            <span className="text-3xl font-semibold">{currentAPY}%</span>
            {PoolList.map((item) => (
              <div className="w-full p-3 rounded-lg bg-white flex gap-[8%] items-center">
                <img src={item.img} alt="logo" className="w-10 h-10" />
                <span className="font-bold text-xl">{item.APY}</span>
                <span className="font-semibold text-xl">{item.name}</span>
                <span className="text-gray-400">{item.description}</span>
              </div>
            ))}
          </div>
          {/* desc */}
          <div className="w-full p-5 rounded-xl bg-[#F6F6F6] flex flex-col gap-3">
            <span className="text-sm text-gray-400">Description</span>
            <span className="text-bold">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
              sequi expedita, odio eligendi officia consequuntur aut officiis
              voluptatibus eaque odit debitis illo quaerat labore eius omnis,
              commodi facilis in porro eum, iure minus totam? Necessitatibus
              culpa rerum, facere quidem labore nisi impedit sapiente explicabo
              doloremque, delectus enim exercitationem, voluptatem debitis a
              mollitia! Quasi facilis consectetur amet repellat rem distinctio
              minima odio asperiores laborum quis accusantium mollitia molestiae
              repellendus reprehenderit, veritatis eaque voluptas quidem vel
              similique dicta quibusdam recusandae voluptatem ab nulla? Error
              libero molestias reiciendis inventore, quae accusamus perferendis
              atque odit asperiores repellendus architecto expedita aliquid
              magni numquam, amet tempora?
            </span>
          </div>
        </div>
        <div className="w-[40%] flex flex-col gap-5">
          <SwapContent />
          <Rewards />
        </div>
      </div>
    </div>
  );
}

export default DetailFarm;
