import React from "react";
import Input from "../Components/Input";
import Navbar from "../Components/Navbar";
import UpcomingEvents from "./UpcomingEvents";
import Footer from "../Components/Footer";

const Home2 = () => {
  function handlebuyBIBK() {
    alert("Coming soon!");
  }
  return (
    <>
    <Navbar/>
      <div id="top" className="pt-28 pb-18 m-auto xl:w-[90%] w-[95%]">
        <div className="card pb:28  xl:pb-20 xl:grid grid-cols-2 gap-8 space-y-10 xl:space-y-0">
          <div className="space-y-5 text-justify rounded-xl p-5 xl:p-12 _0shine">
          <h1 className="xl:text-[40px] text-[28px] font-bold">
              BinaryBlock NFT
            </h1>

            <p className="text-sm md:text-base">
              A crypto asset that is unique and grants the holder daily access
              to earn crypto. It is a valuable asset that also provides ongoing
              earnings opportunities to holders. <br />
            </p>

            <p className="text-sm md:text-base">
              Each Binaryblock genesis asset has fixed crypto rewards allocation
              derived from the asset's binary number. The binary numbers make
              each NFT unique and distinct, with just 10,000 BinaryBlock genesis
              on Ethereum.
            </p>

            <div className="space-y-2">
              <h3 className="font-bold">Benefits of Binaryblock Genesis</h3>
              <div className="text-sm leading-6">
                <li className="">Earn $BIBK daily for over 20 years.</li>
                <li className="">An asset with a store of value.</li>
                <li className="">
                  Grant access to BinaryBlock upcoming events
                </li>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="font-bold">BinaryBlock Genesis NFT Allocation</h3>
              <div className="leading-6 text-sm">
                <li className="">2,500 for ecosystem growth & funding</li>
                <li className="">6,000 for public</li>
                <li className="">1,500 for teams</li>
              </div>
            </div>

            <button className="bg-[#0d6efd] text-sm hover:bg-blue-600 rounded-md p-3">
              Buy BinaryBlock Genesis Asset
            </button>

            <div className="space-y-4 pt-8">
              <h1 className="font-bold text-xl xl:text-xl">
                Maximum BIBK Supply: 30 <br className="flex xl:hidden" />{" "}
                Million Coins
              </h1>
              <div className="flex items-center gap-12">
                <div className="">
                  <button
                    className="bg-[#6bb218] hover:bg-[#92D940] px-4 py-2 rounded-md text-sm"
                    onClick={handlebuyBIBK}
                  >
                    Buy $BIBK
                  </button>
                </div>
                <div className="">
                  <button
                    className="bg-[#6bb218] hover:bg-[#92D940] px-4 py-2 rounded-md text-sm"
                    onClick={handlebuyBIBK}
                  >
                    Earn $BIBK
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Second card */}
          <div className="">
            <div className="_0shine p-5 lg:p-10 py-10 mb-5 xl:flex gap-8 items-center">
              <div className="card-content xl:w-[98%]">
                <p className="text-justify xl:text-start text-sm md:text-base ">
                  The Binaryblock ecosystem currently consists of BinaryBlock
                  genesis NFTs and $BIBK. They are utility assets used within
                  the Binaryblock ecosystem for interacting with the protocol.
                </p>
              </div>
              <div className="card-img xl:w-[80%]">
                <img src="/img/pic1.png" alt="" className="m-auto xl:w-full" />
              </div>
            </div>

            <div className="xl:flex gap-5">
              {/* Third card */}
              <div className="_0shine border xl:h-[40vh] p-5 xl:p-10 py-10 mb-5 space-y-2 xl:w-[55%]">
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

        <div className=" m-auto ">
          <div className=" md:py-20 py-10 space-y-2 text-center xl:text-left">
            <h1 className="font-bold xl:font-semibold text-3xl xl:text-[50px]">
              BinaryBlock Protocol
            </h1>
            <p className=" text-[#92D940] text-[20px]">
              A web3 protocol for earning crypto on ethereum.
            </p>
          </div>

          {/* Input */}
          <div className="w-[90%] m-auto">
          <Input />
          </div>
        </div>

        {/* Upcomin Events */}
        <UpcomingEvents/>

        {/* Smart Contract Address */}
        <div className="my-20 _0shine ">
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
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home2;