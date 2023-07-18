import React from "react";
import Input from "../Components/Input";
import Navbar from "../Components/Navbar";
import UpcomingEvents from "./UpcomingEvents";
import Roadmap from "./Roadmap";

const Home = () => {
  function handlebuyBIBK() {
    alert("Coming soon!");
  }
  return (
    <>
      {/* <Navbar/> */}
      <div id="top" className="py-28 ">
        <div className="card pb:28  xl:pb-20 xl:grid grid-cols-2 gap-4 space-y-10 xl:space-y-0">
          <div className="space-y-5 text-justify rounded-xl p-5 xl:p-12 _0shine ">
            <h1 className="xl:text-[40px] text-[28px] font-bold">
              BinaryBlock NFT
            </h1>
            <div className="space-y-10">
              <p className="leading-[25px]">
                Collect, stake and earn with BinaryBlock to experience minted
                and stable crypto rewards, BinaryBlock will be your access to
                unlimited crypto rewards.
              </p>

              <p className="text-sm md:text-base leading-[25px]">
                Your BinaryBlock allows you to earn all available crypto within
                the ecosystem for 20 years plus. There will be a total of
                100,000 BinaryBlocks.
              </p>
            </div>

            <div className="space-y-2">
              <div className="bg-[#92D940] p-2 text-black text-center md:w-[313px] rounded-[10px]">
                <p className="text-[20px]">35%</p>
                <p className="text-[12px]">35,000 for Growth/Funds</p>
              </div>
              <p className="">
                will be rewarded to BinaryBlock holders and contributors to the
                development and growth of BinaryBlock protocol
              </p>
            </div>
            <div className="space-y-2">
              <div className="bg-[#92D940] p-2 text-black text-center md:w-[313px] rounded-[10px]">
                <p className="text-[20px]">15%</p>
                <p className="text-[12px]">15,000 for Team</p>
              </div>
              <p className="">
                Core team and other team who assist in the development of
                BinaryBlock.
              </p>
            </div>
            <div className="space-y-2">
              <div className="bg-[#92D940] p-2 text-black text-center md:w-[313px] rounded-[10px]">
                <p className="text-[20px]">30%</p>
                <p className="text-[12px]">
                  30,000 for public minting on Ethereum 0.1 ETH
                </p>
              </div>
              <p className="leading-[30px]">
                will be rewarded to BinaryBlock holders and contributors to the
                development and growth of BinaryBlock protocol
              </p>
            </div>
          </div>

          {/* Second card */}
          <div className="">
            <div className="_0shine p-5 lg:p-10 py-10 mb-5 xl:flex gap-4 items-center">
              <div className="card-content xl:w-[98%]">
                <p className="leading-[25px] text-[16px]">
                  The binary block ecosystem comprises of BinaryBlock NFT, BIBK,
                  BLOZ and BINZ tokens with different needs to meet a specific
                  function in the ecosystem
                </p>
              </div>
              <div className="card-img xl:w-[80%]">
                <img src="/img/pic1.png" alt="" className="m-auto w-[273px]" />
              </div>
            </div>

            <div className="xl:flex gap-5">
              {/* Third card */}
              <div className="_0shine border xl:h-[50vh] p-5 xl:p-10 py-10 mb-5 space-y-2 xl:w-[55%]">
                <div className="pb-3">
                  <h1 className="text-[32px] font-bold">Goal</h1>
                </div>
                <div className="card-content">
                  <p className="text-justify text-sm">
                    BinaryBlock aims to sustain a lifetime of crypto earnings.
                  </p>
                </div>
                <div className="card-img">
                  <img src="/img/pic2.png" alt="" className="m-auto" />
                </div>
              </div>

              {/* Card 4 */}
              <div className="_0shine w-[100%]">
                <div className="card-img">
                  <img
                    class="img-fluid h-[420px] m-auto pt-8"
                    src="./img/bibk1111.gif"
                    alt
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BinaryBlock Protocol */}

        <div className="">
          <div className=" py-10 ">
            <h1 className="font-bold xl:text-left text-center xl:text-[64px] text-[32px]">
              BinaryBlock Protocol
            </h1>
            <p className=" text-[#92D940] xl:text-[24px] text-md xl:text-left text-center ">
              Collect, Hold, Stake and Earn Crypto on Ethereum
            </p>
          </div>
          {/* Input */}
          <Input />
        </div>
        <div className="">
          <Roadmap />
        </div>
        {/* Upcomin Events */}
        {/* <UpcomingEvents /> */}

        {/* Smart Contract Address */}
        {/* <div className="my-20 _0shine ">
          <div className="  py-12 my-20  px-10 xl:px:2 space-y-4 xl:w-[40%] m-auto">
            <div className="space-y-5">
              <h1 className="font-semibold text-2xl xl:text-3xl">
                Smart Contract Address
              </h1>
            </div>
            <div className="space-y-5">
              <div className="">
                <h1 className="font-semibold text-lg xl:text-xl">BIBK:</h1>
                <a
                  class=""
                  href="https://etherscan.io/address/0x9457e7cd71bebdda47d81248becede74afa22125"
                >
                  <p className="underline break-words text-[#92D940] cursor-pointer">
                    0x9457e7cd71bebdda47d81248becede74afa22125
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Home;
