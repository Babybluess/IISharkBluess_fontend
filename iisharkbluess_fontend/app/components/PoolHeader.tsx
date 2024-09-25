import { FarmsList } from "@/types";
import React from "react";

function PoolHeader({
  farm,
}: {
  farm: FarmsList;
}) {
  return (
    <div className="flex gap-5">
      <div className="h-full flex items-center">
        <div className="flex">
          <img
            src={farm.token1.icon}
            alt={farm.token1.name}
            className="w-10 h-10 rounded-full block"
          />
          <img
            src={farm.token2.icon}
            alt={farm.token2.name}
            className="w-10 h-10 rounded-full block -translate-x-3"
          />
        </div>
        <span className="text-xl text-center font-semibold">
          {farm.token1.name} - {farm.token2.name}
        </span>
      </div>
    </div>
  );
}

export default PoolHeader;
