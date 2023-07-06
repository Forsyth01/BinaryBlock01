import { Fragment, useEffect, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${id === open ? "rotate-180" : ""
        } h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

export default function Faqs() {

  var acc = document.getElementsByClassName("accordion");
  var i;
  useEffect(() => {

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
      });
    }
  }, [])
  return (
    <div className="m-auto w-[80%] py-28">
      <h1 className="text-center text-3xl font-semibold">Frequently Asked Questions</h1>
    
      <div className="space-y-">

        <button class="accordion _0shine mt-5 text-center">
          {" "}
          What are BinaryBlock protocol?
        </button>
        <div class="panel pt-3">
          <p>
          BinaryBlock Protocol is a Web3 earning protocol on Ethereum that offers a unique earning opportunity for BinaryBlock asset holders.
          </p>
        </div>

        <button class="accordion _0shine mt-5 text-center">
          {" "}
          How does BinaryBlock protocol work?
        </button>
        <div class="panel pt-3">
          <p>
            Through smart contracts and automated processes, BinaryBlock
            protocol ensures that BinaryBlock asset holders receive a portion of
            crypto daily. This process allows asset holders to earn crypto
            without actively trading or investing their assets.
          </p>
        </div>

        <button class="accordion _0shine mt-5 text-center">
          {" "}
          What is a BinaryBlock Genesis NFT?
        </button>
        <div class="panel pt-3">
          <p>
            A crypto asset that is unique and grants the holder daily access to
            earn crypto for over 20 years. It is a valuable asset that also
            provides ongoing earnings opportunities to holders.
          </p>
        </div>

        <button class="accordion _0shine mt-5 text-center">
          {" "}
          What is Bibk?
        </button>
        <div class="panel pt-3">
          <p>
            BIBK is a utility token used within the Binaryblock ecosystem for
            interacting with protocol and access to the core functionalities of
            the ecosystem.
          </p>
        </div>

        <button class="accordion _0shine mt-5 text-center">
          What are the core functionalities of the BinaryBlock platform?
        </button>
        <div class="panel pt-3">
          <p>
            The core functionalities of the BinaryBlock platform include earning
            opportunities through BinaryBlock asset staking, trading, lending,
            and interacting with the protocol using BIBK.
          </p>
        </div>

        <button class="accordion _0shine mt-5 text-center">
          {" "}
          How are the rewards allocated to each BinaryBlock genesis NFT?
        </button>
        <div class="panel pt-3">
          <p>
            Each BinaryBlock NFT is unique and different in its attributes
            because the rewards allocated to each NFT are from its Binary
            digits.
          </p>
        </div>

        <button class="accordion _0shine mt-5 text-center">
          {" "}
          How often are rewards distributed on the BinaryBlock protocol?
        </button>
        <div class="panel pt-3">
          <p>
            Rewards on the BinaryBlock platform are distributed on a daily basis
            to stakers who have staked BIBK or NFTs into the protocol smart
            contract.
          </p>
        </div>

        <button class="accordion _0shine mt-5 text-center">
          {" "}
          Can anyone participate in staking on the BinaryBlock protocol ?
        </button>
        <div class="panel pt-3">
          <p>
            Anyone can participate in staking on the BinaryBlock platform by
            staking their BinaryBlock assets into the protocol.
          </p>
        </div>

        <button class="accordion _0shine mt-5 text-center">
          {" "}
          How do I get started with staking on the BinaryBlock platform?
        </button>
        <div class="panel pt-3">
          <p>
            Staking on the BinaryBlock platform, users can navigate to the
            staking interface and stake BinaryBlock assets into the protocol.
          </p>
        </div>

        <button class="accordion _0shine mt-5 text-center">
          {" "}
          What is a Binary digit?
        </button>
        <div class="panel pt-3">
          <p>
            The Binary digit, also referred to as BIT, is the smallest unit of
            digital information in computing. It is represented as either a 0 or
            a 1 and is used to store and transmit data in the binary number
            system.
          </p>
        </div>

        <button class="accordion _0shine mt-5 text-center">
          {" "}
          How is the binary system different from the decimal system?
        </button>
        <div class="panel pt-3">
          <p>
            The binary system is a base-2 numbering system, where each digit can
            only have two possible values, 0 or 1. In contrast, the decimal
            system is a base-10 numbering system that uses 10 digits (0-9) to
            represent numbers.
          </p>
        </div>

        <button class="accordion _0shine mt-5 text-center">
          {" "}
          How does BinaryBlock benefit its stakeholders?
        </button>
        <div class="panel pt-3">
          <p>
            BinaryBlock aims to create a sustainable and profitable platform
            that benefits all stakeholders, including NFT holders, BIBK holders,
            and the wider crypto community.
          </p>
        </div>

        <button class="accordion _0shine mt-5 text-center">
          {" "}
          How does BinaryBlock revolutionize the way individuals earn crypto?
        </button>
        <div class="panel pt-3">
          <p>
            BinaryBlock revolutionizes the way individuals earn crypto by
            offering a passive income stream for users through its asset
            staking. It changes the status quo by providing an innovative
            earning mechanism that benefits its stakeholders.
          </p>
        </div>

        <button class="accordion _0shine mt-5 text-center">
          {" "}
          How does NFT staking work on the BinaryBlock protocol?
        </button>
        <div class="panel pt-3">
          <p>
            NFT staking on the BinaryBlock protocol is noncustodial staking in
            the protocol. Once staked, the NFTs are locked for a certain period,
            and crypto is earned on the staked NFTs while still in the holders’
            wallets.
          </p>
        </div>

        <button class="accordion _0shine mt-5 text-center">
          How do I contact BinaryBlock Team for Support?
        </button>
        <div class="panel pt-3">
          <p>
            Accross all our social media platforms and you can send a mail to{" "}
            <b> info@binaryblock.io </b>
          </p>
        </div>
      </div>
    </div>
  );
}
