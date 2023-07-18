import React, { useState } from "react";

const Roadmap = () => {
  const [items, setItems] = useState([
    {
      title: "1 Start",
      body: <li>Protocol design research</li>,
    },
    {
      title: "10 Set up",
      body: (
        <div>
          <li>Token economics</li>
          <li>Core team formed</li>
          <li>Documentation</li>
          <li>BIBK Token on Ethereum (ERC20) </li>
          <li> Decentralization ( community )</li>
        </div>
      ),
    },
    {
      title: "11 NFT Minting and Reveal",
      body: "60,000 Binaryblocks are available to mint on the Ethereum blockchain, reveal on OpenSea and the binaryblock website.",
    },
    {
      title: "100 $BIBK Vesting",
      body: "Protocol design research",
    },
    {
      title: "101 Mainnet Launch",
      body: (
        <div>
          <li>Stake NFT to generate $BIBK</li>
          <li> Stake $BIBK to earn $BIBK</li>
          <li>Liquidity pool for NFT holders</li>
        </div>
      ),
    },
    {
      title: "110 $BIBK Launch",
      body: (
        <li className="text-left">$BIBK will be listed on major exchanges</li>
      ),
    },
    {
      title: "111 Apps for $BIBK",
      body: (
        <div className="space-y-3">
          <div className="">
            <p className="">
              As a team and community, we will develop and invest in protocols
              where the BIBK token can be used as a utility to drive adoption
              and use cases for the token
            </p>
          </div>
          <div className="">
            <li className="">Upcoming Protocol for BIBK token</li>
            <li className="">Binary sporting pools</li>
          </div>
        </div>
      ),
    },
  ]);
  return (
    <div className="pt-10">
      <div className="_0shine p-10">
        <h1 className="xl:text-[48px] text-[28px] font-bold">Roadmap</h1>
        <p className="">
          Binaryblock aims to run a self-sustaining community that will be
          decentralized and autonomous in its activities with the implementation
          of binaryblock DAO. Below are some of the milestones.
        </p>
        <div
          className=" md:space-y-0 py-6 grid xl:grid-cols-3 md:grid-cols-2 gap-12 "
        >
          {items.map((item) => {
            return (
              <div className="_0shine p-5 xl:h-[309px] space-y-4">
                <h1 className="text-[24px]">{item.title}</h1>
                <p className="">{item.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
