import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="card py-28 ">
        <div className="space-y-5 text-justify rounded-xl p-5 _0shine">
            <h1 className="text-xl font-semibold">BinaryBlock Genesis</h1>
         
          <p className="text-sm">
            A crypto asset that is unique and grants the holder daily access to
            earn crypto. It is a valuable asset that also provides ongoing
            earnings opportunities to holders. <br /> 
          </p>

          <p className="text-sm">
            Each Binaryblock genesis asset has fixed crypto rewards allocation
            derived from the asset's binary number. The binary numbers make each
            NFT unique and distinct, with just 10,000 BinaryBlock genesis on
            Ethereum.</p>

          <div className="space-y-2">
            <h3 className="font-bold">Benefits of Binaryblock Genesis</h3>
            <div className="text-sm leading-6">
              <li className="">Earn $BIBK daily for over 20 years.</li>
              <li className="">An asset with a store of value.</li>
              <li className="">Grant access to BinaryBlock upcoming events</li>
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
            <h1 className="font-bold text-xl">
              Maximum BIBK Supply: 30 <br /> Million Coins
            </h1>
            <div className="flex items-center gap-12">
              <div className="">
                <button className="bg-[#6bb218] hover:bg-[#92D940] px-4 py-2 rounded-md text-sm">
                  Buy $BIBK
                </button>
              </div>
              <div className="">
                <button className="bg-[#6bb218] hover:bg-[#92D940] px-4 py-2 rounded-md text-sm">
                  Earn $BIBK
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Second card */}
        <div className="_0shine p-5 py-10 mb-5">
          <div className="card-content">
            <p className="text-justify text-sm">
              The Binaryblock ecosystem currently consists of BinaryBlock
              genesis NFTs and $BIBK. They are utility assets used within the
              Binaryblock ecosystem for interacting with the protocol.
            </p>
          </div>
          <div className="card-img">
            <img src="/img/pic1.png" alt="" className="m-auto" />
          </div>
        </div>

        {/* Third card */}
        <div className="_0shine border p-5 py-10 mb-5 space-y-2">
          <div className="card-content">
            <p className="text-justify text-sm">
              BinaryBlock aims to sustain a lifetime of crypto earnings.{" "}
            </p>
          </div>
          <div className="card-img">
            <img src="/img/pic2.png" alt="" className="m-auto" />
          </div>
        </div>

        {/* Card 4 */}
        <div className="_0shine">
          <div className="card-img">
            <img
              class="img-fluid h-[420px] m-auto pt-8"
              src="./img/bibk1111.gif"
              alt
            ></img>
          </div>
        </div>

        {/* BinaryBlock Protocol */}
        <div className="pt-20 text-center">
          <div className="space-y-2 my-12">
            <h1 className="font-bold text-2xl">BinaryBlock Protocol</h1>
            <p className=" text-[#92D940]">
              A web3 protocol for earning crypto on ethereum.
            </p>
          </div>
          <div className="_0shine pb-12 ">
            <div className="pt-16 pb-32 px-12">
              <h1 className="text-2xl text-left">View Available BIBK</h1>
            </div>
            <div className="space-y-10 ">
                <div className="space-y-4">
              <input
                type="text"
                placeholder="Enter token ID"
                className="px-3 w-[80%] bg-transparent border-b outline-none border-[#fff]"
              />
              <div className="">
                <button className="bg-[#92D940] hover:bg-[#8ccc42] rounded-2xl text-sm px-10 py-2 w-[70%] text-black">
                  View Available BIBK
                </button>
              </div>
              </div>

              <div className="element">
                <div className="space-y-5">
                  <p className="text-center text-[#92D940]">
                    Binary Equivalent
                  </p>
                  <p className="text-center text-[#92D940]">Available BIBK</p>
                </div>
              </div>

          </div>
        </div>
      </div>
              {/* Upcomin Events */}
              <div className="my-20 text-center">
                <div className="_0shine py-12 ">
                  <div className="space-y-5">
                    <h1 className="text-xl font-semibold">Upcoming Events</h1>
                    <div className="">
                      <h2 className="text-[#92D940]">
                        Binary Block Mainnet Launch
                      </h2>
                      <p className="">Date: August 2, 2023</p>
                    </div>
                    <div className="">
                      <h2 className="text-[#92D940]">BIBK Airdrops</h2>
                      <p className="">
                        BinaryBlock Genesis holders <br /> Contributors of
                        Community growth
                      </p>
                    </div>
                    <div className="">
                      <p className="">Date: TBA</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Smart Contract Address */}
              <div className="my-20 ">
                <div className="_0shine py-12 my-20 px-10 space-y-4">
                  <div className="space-y-5">
                    <h1 className="font-bold text-xl">
                      Smart Contract Address
                    </h1>
                  </div>
                  <div className="space-y-5">
                    <h1 className="font-semibold">BIBK:</h1>
                    <a href="#" className="">
                      <p className="underline text-[#92D940] cursor-pointer">
                        0x9457e7cd71bebdda47d81248becede74afa22125
                      </p>
                    </a>
                    <h1 className="font-semibold">Binary Block Genesis:</h1>
                    <a href="#" className="">
                      <p className="underline text-[#92D940] cursor-pointer">
                        0x9457e7cd71bebdda47d81248becede74afa22125
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
    </div>
  );
};

export default Hero;
