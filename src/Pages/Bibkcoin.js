import React from "react";
import AdminNav from "../Components/AdminNav";

const Bibkcoin = () => {
  const MyBackgroundImage = "/img/Buttonn.png";
  return (
    <>
      <AdminNav />
      <div className="py-28 m-auto w-[95%] md:w-[75%] xl:w-[82%]">
        <div className="_0shine space-y-5 text-justify rounded-xl p-5 xl:p-12 ">
          <div className="xl:flex space-y-4 xl:space-y-0 items-center justify-between ">
            <div className="space-y-2">
              <h1 className="text-3xl xl:text-4xl font-bold">
                Stake and Earn BIBk
              </h1>
              <p className="text-[#92D940]">
                Stake BIBK and earn BIBK as staking rewards
              </p>
            </div>
            <div className="">
              <p className="text-white">BIBK/ETH: 0.0000</p>
            </div>
          </div>
          <div className="flex flex-col items-center py-10 xl:space-y-0 space-y-10 ">
            <div className="xl:flex justify-between items-center gap-10   xl:space-y-0 space-y-10">
              <div className="">
                <div className="space-y-4 text-center">
                  <div className="">
                    <h1 className="text-white font-semibold">
                      Earn 15% APY on BIBK
                    </h1>
                  </div>
                  <div className="">
                    <h1 className="text-white font-semibold">
                      Total BIBK Locked:
                    </h1>
                    <p className="text-[#92D940] text-sm font-semibold">
                      0.0000
                    </p>
                  </div>
                  <div className="">
                    <h1 className="text-white font-semibold">
                      Total BIBK Earned:
                    </h1>
                    <p className="text-[#92D940] text-sm font-semibold">
                      0.0000
                    </p>
                  </div>
                  <div className="">
                    <h1 className="text-white font-semibold">
                      Total Bibk to be earned:
                    </h1>
                    <p className="text-[#92D940] text-sm font-semibold">
                      27,000,000
                    </p>
                  </div>
                </div>
              </div>

              <div className="">
                <div
                  className="xl:w-[400px] h-[400px] w-[350px] md:w-[400px] "
                  style={{
                    backgroundImage: `url(${MyBackgroundImage})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",

                    // height: "400px",
                    // width: "400px",
                  }}
                >
                  <div className="flex flex-col h-[50vh] lg:h-[50vh] xl:h-[55vh] justify-center space-y-10">
                    <div className=" leading-tight text-center">
                      <h1 className="">
                        {" "}
                        <span className="text-5xl text-[#92D940] font-extrabold">
                          TNL:
                        </span>
                      </h1>
                      <p className="text-sm">Total NFT Locked</p>
                    </div>
                    <div className="text-center">
                      <h1 className="text-3xl font-extrabold">0,0000</h1>
                    </div>
                  </div>
                </div>
              </div>

              <div className="">
                <div className="space-y-5 text-center">
                  <div className="">
                    <button className="bg-[#92D940] hover:bg-[#71a832]  text-black font-semibold text-sm rounded-full px-8 py-2">
                      Unstake
                    </button>
                  </div>
                  <div className="text-white font-bold space-y-2">
                    <button className="bg-white hover:bg-gray-100  text-black font-semibold text-sm rounded-full px-8 py-2">
                      Stake
                    </button>
                  </div>
                </div>
                <div className="flex items-center gap-5 justify-center">
                  <div className="">
                    <h1 className="text-white font-semibold text-sm">
                      BIBK Earned:
                    </h1>
                    <p className="text-[#92D940] font-semibold">0.0000</p>
                  </div>
                  <div className="py-10">
                    <div className="border w-1 h-8 bg-[#92D940] border-[#92D940]"></div>
                  </div>
                  <div className="">
                    <h1 className="text-white font-semibold text-sm">
                      BIBK Staked:
                    </h1>
                    <p className="text-[#92D940] font-semibold">0.0000</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center py-10">
            <button className="bg-[#92D940] hover:bg-[#71a832]  rounded-full text-black font-semibold text-sm py-3 w-[40%] m-auto">
              Balances
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bibkcoin;
