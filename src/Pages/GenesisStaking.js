import React from "react";
import AdminNav from "../Components/AdminNav";
import Navbar from "../Components/Navbar";
import Bibkcoin from "./BibkStaking";

const GenesisStakingtaking = () => {
  const MyBackgroundImage = "/img/Buttonn.png";
  // const MyBackgroundImage = "/img/group1.png";
  return (
    <>
      {/* <Navbar /> */}
      <div className="pt-28 ">
        <div className="_0shine space-y-5 text-justify rounded-xl p-5 xl:p-12 ">
          <div className="xl:flex items-cente justify-between space-y-4 xl:space-y-0 ">
            <div className="space-y-2">
              <h1 className="text-2xl xl:text-4xl font-bold">
                BinaryBlock Genesis Staking
              </h1>
              <p className="text-[#92D940]">
                Earn BIBK from BinaryBlock genesis asset.
              </p>
            </div>
            <div className="">
              <button className="rounded-full text-black  bg-[#92D940] hover:bg-[#71a832]  hover:cursor-pointer py-2 px-3">
                Balances
              </button>
            </div>
          </div>
          <div className="xl:w-[80%] m-auto py-5 text-center ">
            {/* <div className="xl:flex "> */}
            <div className="xl:flex justify-between items-center space-y-10 xl:space-y-0">
              <div className="">
                <div className="text-white font-bold space-y-2">
                  <p className=" text-white">Earn 0.0000 BIBK Daily</p>
                  <p className=" text-[#92D940]">Total BIBK Earned: 0.0000</p>
                </div>
              </div>

              <div className="flex flex-col justify-center text-center">
                <div
                  className="xl:w-[400px] h-[400px] w-[310px] md:w-[400px] m-auto"
                  style={{
                    backgroundImage: `url(${MyBackgroundImage})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",

                    // height: "400px",
                    // width: "400px",
                  }}
                >
                  <div className="flex flex-col h-[50vh] md:h-[20vh] xl:h-[50vh] space-y-2 justify-center ">
                    <div className=" leading-tight text-center">
                      <h1 className="">
                        <span className="text-5xl no text-[#92D940] no">
                          TNL:
                        </span>
                      </h1>
                      <p className="text-sm">Total NFT Locked</p>
                    </div>
                    <div className="text-center">
                      <h1 className="text-6xl font-extrabold no">00,000</h1>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-5">
                <div className=" space-y-2">
                  <p className=" text-white">Number of NFTs staked: 0000</p>
                  <button className="bg-white text-black text-sm hover:bg-blue-gray-50 rounded-full px-4 py-2">
                    Unstake NFT
                  </button>
                </div>
                <div className="text-white ">
                  <p className="text-white">BIBK Earned/Available:</p>
                  <p className=""> 0.0000/0.0000</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center py-10 text-center m-auto">
            <button className="bg-[#92D940] hover:bg-[#71a832] xl:w-[30%] px-4 py-4 rounded-full text-black font-semibold text-sm ">
              Stake BinaryBlock Genesis
            </button>
          </div>
        </div>
      </div>
      <Bibkcoin />
    </>
  );
};

export default GenesisStakingtaking;
