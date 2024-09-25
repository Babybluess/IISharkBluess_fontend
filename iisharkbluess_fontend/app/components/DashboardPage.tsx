import React from "react";
import Chart from "./LineChart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowTrendDown,
  faArrowTrendUp,
} from "@fortawesome/free-solid-svg-icons";
import { farmList, LatestTransactions, MyFarm } from "@/const/menu.const";
import PoolHeader from "./PoolHeader";
import Rewards from "./Rewards";

function DashboardPage() {
  return (
    <div className="w-full h-full p-5 flex flex-col gap-5">
      {/* firt session */}
      <div className="flex h-[50%] justify-between gap-5 w-full">
        {/* line chart */}
        <div className="w-[70%] h-full gap-5 flex flex-col">
          <span className="text-green-500 text-xl font-semibold">
            My portfolio value
          </span>
          <div className="w-full h-[90%]">
            <Chart />
          </div>
        </div>
        {/* lastest transaction */}
        <div className="w-[30%] h-full flex flex-col justify-between">
          <div className="flex justify-between">
            <div className="w-[48%] h-full p-3 flex flex-col justify-between border-2 border-gray-300 rounded-3xl bg-white">
              <span className="text-gray-400">
                Total <br />
                LP Tokens value
              </span>
              <span className="text-xl font-bold">$1,868.52</span>
            </div>
            <div className="w-[48%] h-full p-3 flex flex-col justify-between border-2 border-gray-300 rounded-3xl bg-white">
              <span className="text-gray-400">
                Total <br />
                Rewards
              </span>
              <span className="text-xl font-bold">$166.21</span>
            </div>
          </div>
          <div className="p-3 rounded-3xl flex flex-col gap-5 bg-[#F6F6F6]">
            <span className="font-semibold text-gray-300">
              Latest transaction
            </span>
            <div>
              {LatestTransactions.map((item) => (
                <div className="flex gap-5">
                  {item.type === "deposite" ? (
                    <FontAwesomeIcon
                      icon={faArrowTrendUp}
                      className="text-yellow-400"
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faArrowTrendDown}
                      className="text-gray-400"
                    />
                  )}
                  <span>{item.name}</span>
                  <span className="font-bold">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* second session */}
      <div className="w-full h-1/2 flex flex-col gap-5">
        {/* tittle */}
        <div className="w-full flex justify-between items-center">
          <span className="text-xl text-violet-500 font-semibold">My Farm</span>
          <div className="h-0.5 bg-gray-500 w-[92%]"></div>
        </div>
        <div className="w-full h-full flex gap-5">
          {/* my farm */}
          <div className="w-[70%] flex flex-col gap-3 p-3 rounded-xl bg-[#F6F6F6]">
            <PoolHeader farm={farmList[0]} />
            <div className="h-0.5 w-[95%] bg-gray-200"></div>
            <div className="w-full flex justify-between">
              <div className="w-1/2 flex gap-5">
                <div className="text-gray-400 flex flex-col gap-3">
                  <span>APY</span>
                  <span>Asset</span>
                  <span>Pool</span>
                  <span>Balance</span>
                  <span>Staked</span>
                </div>
                <div className="flex flex-col gap-3">
                  <span className="text-xl font-bold">32.04%</span>
                  <span>UniswapV3_SOL_ETH</span>
                  <span>Uniswap V3</span>
                  <span>0.00</span>
                  <span>12.2425</span>
                </div>
              </div>
              <div className="w-1/2 flex flex-col gap-5">
                <span className="text-gray-400">
                  Total USD Value <br />
                  <span className="text-3xl text-black font-bold">$489.12</span>
                </span>
                <span className="text-gray-400">
                  Rewards <br />
                  <span className="text-xl text-black font-bold">$0.07</span>
                </span>
              </div>
            </div>
          </div>
          {/* awards */}
          <div className="w-[30%] flex flex-col gap-3">
            <div className="h-[30%]">
              <Rewards />
            </div>
            <div className="h-[30%]">
              <Rewards />
            </div>
            <div className="h-[30%]">
              <Rewards />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
