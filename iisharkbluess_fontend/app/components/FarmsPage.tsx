import React, { useState } from "react";
import { FarmsList } from "@/types";
import { farmList } from "@/const/menu.const";
import Pagination from "./Pagination";
import DetailFarm from "./DetailFarm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { add } from "@/utils/math.utils";

function FarmsPage() {
  const [selectedCard, setSeletedCard] = useState<any>(null);

  const total_APY = add(farmList);
  return (
    <div className="w-full h-full px-5 pt-5 py-2 flex flex-col justify-between">
      {selectedCard ? (
        <DetailFarm
          selectedFarm={selectedCard}
          setSelectedFarm={setSeletedCard}
          currentAPY={total_APY}
        />
      ) : (
        <React.Fragment>
          <div className="w-full h-[50%] grid grid-cols-6 gap-3">
            {farmList.map((item: FarmsList, index: number) => (
              <div key={index} className="w-full h-[15vh] rounded-xl border-2 border-gray-400 p-5 bg-white flex flex-col justify-center">
                <div className="flex">
                  <img
                    src={item.token1.icon}
                    alt={item.token1.name}
                    className="w-10 h-10 rounded-full block"
                  />
                  <img
                    src={item.token2.icon}
                    alt={item.token2.name}
                    className="w-10 h-10 rounded-full block -translate-x-3"
                  />
                </div>
                <div className=" flex justify-between items-center">
                  <span className="text-xl font-semibold">
                    {item.token1.name} - {item.token2.name}
                  </span>
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="w-5 h-5 p-2 rounded-xl bg-orange-300 cursor-pointer hover:translate-x-3 hover:transition-transform hover:duration-200"
                    onClick={() => setSeletedCard(item)}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="w-full h-[20%] flex flex-col justify-end items-end">
            <Pagination />
          </div>
        </React.Fragment>
      )}
    </div>
  );
}

export default FarmsPage;
