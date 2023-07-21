import React from "react";
import AdminNav from "../Components/AdminNav";
import Navbar from "../Components/Navbar";

const BibkStaking = () => {
  const MyBackgroundImage = "/img/Buttonn.png";
  return (
    <>
      {/* <Navbar/> */}
      <div className="py-28 m-auto ">
        <div className="_0shine space-y-5 text-justify rounded-xl p-5 xl:p-12 ">
          <div className="xl:flex space-y-4 xl:space-y-0 items-center justify-between ">
            <div className="">
              <h1 className="text-3xl xl:text-4xl font-bold">
              BIBK Staking 
              </h1>
              <p className="text-[#92D940]">
              Earn BIBK by staking BIBK
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
                    <p className="text-white italic">
                      Earn 15% APY on BIBK
                    </p>
                  </div>
                  <div className="">
                    <p className="text-white italic">
                      Total BIBK Locked:
                    </p>
                    <p className="text-[#92D940] text-sm ">
                      0.0000
                    </p>
                  </div>
                  <div className="">
                    <p className="text-white italic">
                      Total BIBK Earned:
                    </p>
                    <p className="text-[#92D940] text-sm ">
                      0.0000
                    </p>
                  </div>
                  <div className="">
                    <p className="text-white italic">
                      Total Bibk to be rewards:
                    </p>
                    <p className="text-[#92D940] text-sm ">
                    0.0000
                    </p>
                  </div>
                </div>
              </div>

              <div className="">
              <div
                  className="xl:w-[400px] h-[400px] w-[340px] md:w-[400px] "
                  style={{
                    backgroundImage: `url(${MyBackgroundImage})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",

                    // height: "400px",
                    // width: "400px",
                  }}
                >
                  <div className="flex flex-col h-[50vh] md:h-[20vh] xl:h-[50vh] justify-center space-y-2">
                    <div className=" leading-tight text-center">
                      <h1 className="">
                        {" "}
                        <span className="text-5xl no text-[#92D940] ">
                          TVL:
                        </span>
                      </h1>
                    </div>
                    <div className="text-center">
                      <h1 className="text-6xl  no">0.0000</h1>
                    </div>
                  </div>
                </div>
              </div>

              <div className="">
                <div className="space-y-5 text-center">
                  <div className="">
                    <button className="bg-[#92D940] hover:bg-[#71a832]  text-black font-semibold text-sm rounded-full px-8 py-2">
                    Stake BIBK
                    </button>
                  </div>
                  <div className="text-white font-bold space-y-2">
                    <button className="bg-white hover:bg-gray-100  text-black font-semibold text-sm rounded-full px-8 py-2">
                    Unstake BIBK
                    </button>
                  </div>
                </div>
                <div className="flex items-center gap-5 justify-center">
                  <div className="">
                    <h1 className="text-white  text-sm">
                      BIBK Earned:
                    </h1>
                    <p className="text-[#92D940] ">0.0000</p>
                  </div>
                  <div className="py-10">
                    <div className="border w-1 h-8 bg-[#92D940] border-[#92D940]"></div>
                  </div>
                  <div className="">
                    <h1 className="text-white  text-sm">
                      BIBK Staked:
                    </h1>
                    <p className="text-[#92D940] ">0.0000</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center py-10 text-center ">
            <button className="bg-[#92D940] hover:bg-[#71a832] rounded-full text-black py-4 px-4 w-[50%] xl:w-[30%]">
              <p className="">
              Balances
              </p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BibkStaking;
