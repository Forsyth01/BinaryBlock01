import React from "react";

const Bibkcoinstaking = () => {
  return (
    <div className="py-28">
      <div className="_0shine space-y-5 text-justify rounded-xl p-5 xl:p-12 ">
        <div className="xl:flex items-cente justify-between space-y-4 xl:space-y-0 ">
          <div className="space-y-2">
            <h1 className="text-3xl xl:text-4xl font-bold">
              Genesis NFT staking
            </h1>
            <p className="text-[#92D940]">
              Earn BibkCoin ( BIBK ) daily by staking Binaryblock genesis NFT
            </p>
          </div>
          <div className="">
            <button className="rounded-full text-black font-semibold bg-[#92D940] hover:bg-[#71a832]  hover:cursor-pointer py-2 px-3">
              Balances
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center py-10 text-center xl:text-start ">
          <div className="xl:flex justify-between items-center gap-10 space-y-10 xl:space-y-0">
            <div className="">
              <div className="text-white font-bold space-y-2">
                <p className="font-bold text-white">
                  Earn 0.03 BIBK / NFT daily.
                </p>
                <p className="font-bold text-[#92D940]">
                  Total BIBK Earned: 0.0000
                </p>
              </div>
            </div>

            <div className="">
              <img
                src="/img/Buttonn.png"
                alt=""
                className=" xl:h-[50vh] m-auto "
              />
            </div>

            <div className="space-y-5">
              <div className=" space-y-2">
                <p className="font-bold text-white">
                  Number of NFTs staked:0000
                </p>
                <button className="bg-white text-black font-semibold text-sm hover:bg-blue-gray-50 rounded-full px-4 py-2">
                  Unstake NFT
                </button>
              </div>
              <div className="text-white font-bold space-y-2">
                <p className="font-bold text-white">BIBK Earned/Available:</p>
                <p className="">0.0000/0.0000</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center py-10">
            <button className="bg-[#92D940] hover:bg-[#71a832]  rounded-full text-black font-semibold text-sm py-3 xl:w-[40%] w-[100%] m-auto">Stake BinaryBlock NFT</button>
        </div>
      </div>
    </div>
  );
};

export default Bibkcoinstaking;
