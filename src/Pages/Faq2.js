import React from "react";
import Input from "../Components/Input";

const Faq2 = () => {
  return (
    <div className="py-28">
      <div className="space-y-10">
        <div className="space-y-4 _0shine xl:h-[305px] p-10">
          <h1 className="text-[#92D940] xl:text-[32px] text-[24px] font-bold">
            Benefits of holding BinaryBlock Genesis assets
          </h1>
          <p className="">Earn $BIBK daily for over 20 years.</p>
          <p className="">An asset with a store of value.</p>
          <p className="">Gives access upcoming drops with the ecosystem.</p>
        </div>
        <div className="_0shine xl:h-[275px] p-10">
          <p className="">
            The Binaryblock ecosystem currently consists of BinaryBlock genesis
            NFTs and $BIBK. They are utility tokens used within the Binaryblock
            ecosystem for interacting with the protocol.
          </p>
        </div>
        <div className="_0shine xl:h-[151px] p-10">
          <p className="">
            BinaryBlock aims to sustain a lifetime of crypto earnings.
          </p>
        </div>
      </div>

      <div className="py-10">
        <div className="_0shine xl:flex space-y-10 xl:space-y-0 items-center justify-between px-10 py-10">
          <div className="">
            <img src="/img/pic1.png" alt="" className="m-auto xl:h-[500px]" />
          </div>
          <div className="space-y-10">
            <div className="xl:w-[55%]">
              <h1 className="xl:text-[32px] text-[20px]">
                The Maximum supply of BIBK:{" "}
                <span className="text-[#92D940] "> 30 million coins.</span>
              </h1>
            </div>
            <div className="xl:w-[65%] space-y-2">
              <h1 className="xl:text-[32px] text-[20px] font-semibold">
                BinaryBlock upcoming event Date : TBA
              </h1>
              <p className="">
                480,000 BIBK tokens to be distributed equally to all BinaryBlock
                genesis holders to provide more liquidity
              </p>
            </div>
          </div>
        </div>
        <div className="xl:w-[30%] m-auto text-center py-20 space-y-4">
          <div className="bg-[#92D940] rounded-[20px] p-4 cursor-pointer">
            <h1 className="text-[16px] xl:text-[24px] font-semibold">
              Trade $BIBK on Uniswap
            </h1>
          </div>
          <div className="bg-[#92D940] rounded-[20px] p-4 cursor-pointer">
            <h1 className="text-[16px] xl:text-[24px] font-semibold">Buy Assets on Opensea</h1>
          </div>
          <div className="bg-[#92D940] rounded-[20px] p-4 cursor-pointer">
            <h1 className="text-[16px] xl:text-[24px] font-semibold">Earn $BIBK</h1>
          </div>
        </div>
        <div className="">
          <Input />
        </div>
        <div className="pt-20">
          <div className="_0shine p-10 space-y-4">
            <div className="">
              <h1 className="text-[36px] font-bold">
                BibkCoin ($BIBK) Contract
              </h1>
            </div>
            {/* <div className="space-y-2 ">
              <p className="text-[#92D940]">
                0x9457e7cd71bebdda47d81248becede74afa22125
              </p>
              <p className="text-[#92D940]">
                0x9457e7cd71bebdda47d81248becede74afa22125
              </p>
              <p className="text-[#92D940]">
                0x9457e7cd71bebdda47d81248becede74afa22125
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq2;
