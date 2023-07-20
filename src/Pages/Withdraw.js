import React from "react";
import AdminNav from "../Components/AdminNav";
import Navbar from "../Components/Navbar";
import With2 from "./With2";
import { Link } from "react-router-dom";

const Withdraw = () => {
  const MyBackgroundImage = "/img/Buttonn.png";
  return (
    <>
      {/* <Navbar /> */}
      <div className="pt-28">
        <div className="_0shine space-y-5 text-justify rounded-xl p-5 xl:p-12 ">
          <div className="xl:flex space-y-4 xl:space-y-0 items-center justify-between ">
            <div className="cursor:pointer">
              <Link to = "/">
              <h1 className="text-3xl xl:text-4xl font-bold">$BIBK Staking</h1>
              <p className="text-[#92D940]">Earn 0.00% APY by staking $BIBK</p>
              </Link>
            </div>
            <div className="">
              <div className="flex items-center gap-2">
                <div className="">
                  <p className="cursor:pointer">Hold |</p>
                </div>
                <div className="">
                  <p className="cursor:pointer">Stake |</p>
                </div>
                <div className="">
                  <p className="cursor:pointer">Earn</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center py-10 xl:space-y-0 space-y-10 ">
            <div className="xl:flex justify-between items-center gap-10   xl:space-y-0 space-y-10">
              <div className="">
                <div className="space-y-4 text-center">
                  <div className=" text-center">
                    <div className="">
                      <button className="bg-[#92D940] hover:bg-[#71a832]  text-black font-semibold text-sm rounded-full px-8 py-2">
                        Stake $BIBK
                      </button>
                      <div className="py-2">
                        <p className="">Staked $BIBK: 0.0000</p>
                      </div>
                    </div>
                    <div className="text-white font-bold ">
                      <button className="border-white border-2  font-semibold text-sm rounded-full px-8 py-2">
                        Unstake BIBK
                      </button>
                    </div>
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
                  <div className="flex flex-col h-[50vh] md:h-[20vh] xl:h-[50vh] justify-center text-center">
                    <div className=" leading-tight text-center">
                      <p className="text-[#92D940] text-sm">Total Earnings</p>
                      <div className="text-center">
                        <h1 className="text-[64px] no">0.0000</h1>
                        <p className="">
                          <span className="text-[32px] no">$BIBK</span>
                        </p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <p className="text-sm text-[#92D940]">Locked $BIBK</p>
                      <h1 className="text-[32px]  no">
                        0.0000 
                      </h1>
                      <p className="no"><span className="text-[14px]">$BIBK</span></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-white font-bold text-center">
                <button className="border-white border-2  font-semibold text-sm rounded-full px-8 py-2">
                  Withdraw $BIBK
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center py-10 xl:w-[50%]  m-auto">
            <div className="">
              <div className="flex items-center gap-2">
                <div className="">
                  <p className="">Daily Reward:</p>
                </div>
                <div className="">
                  <p className="">
                    <span className="text-[#92D940]">0.0000</span> $BIBK
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="">
                  <p className="">Total Reward:</p>
                </div>
                <div className="">
                  <p className="">
                    <span className="text-[#92D940]">0.0000</span> $BIBK
                  </p>
                </div>
              </div>
              <div className="flex justify-end items-center gap-2">
                <div className="">
                  <p className="">Balance:</p>
                </div>
                <div className="">
                  <p className="">
                    <span className="text-[#92D940]">0.0000</span> $BIBK
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <With2 /> */}
    </>
  );
};

export default Withdraw;
