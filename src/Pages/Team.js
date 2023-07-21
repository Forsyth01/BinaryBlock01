import React, { useState } from "react";
import { BsLinkedin, BsTwitter } from "react-icons/bs";
import Navbar from "../Components/Navbar";

const Team = () => {
  const [team, setTeam] = useState([
    {
      name: "Godspower Egbetamah",
      position: "Founder and CEO",
      experience:
        "Lead designer at GpLab with excellent experience in crypto project design in the following fields DeFi, NFT, Tokenomics, decentralized exchanges, marketplace, and project management",
      link: (
        <a
          href="https://www.linkedin.com/in/godspower-egbetamah/"
          target="_blank"
          className=""
        >
          {" "}
          <BsLinkedin className="hover:cursor-pointer text-3xl xl:text-4xl xl:p-2 p-1 text-black bg-white rounded-full" />
        </a>
      ),
    },
    {
      name: "Ezekiel Cliffy .E",
      position: "Co-founder & COO",
      experience:
        "A technology entrepreneur connected to the founding and sustainability of multiple tech-powered businesses, with over 8 years of experience as a brand developer, software developer, strategist and team lead offering digital products development services",
      link: (
        <a
          href="https://www.linkedin.com/in/ezekiel-cliffy-egbetamah-541627104"
          target="_blank"
          className=""
        >
          <BsLinkedin className="hover:cursor-pointer text-3xl xl:text-4xl xl:p-2 p-1 text-black bg-white rounded-full" />
        </a>
      ),
    },
    {
      name: "Ishan Dua",
      position: "Chief Technology Officer",
      experience:
        "Technical Product Management | Project Management | Blockchain Product Manager | Web 3.0 | DeFi | NFT | Tokenization | Cryptonomics | Metaverse | FinTech | Global ERP Consultant",
      link: (
        <a
          href="https://www.linkedin.com/in/ishan28193/?challengeId=AQG998ms5C9f5gAAAYkpig-PrN5s2o5D6O1zJvsomCEGMPl5oqSACUXmfOKZIP2bgNUI_eQc2G56Zn3mmbVub744fY39MMbSOQ&submissionId=47a54ccd-162e-6f17-7ec2-0088365d0474&challengeSource=AgE8JVjVXZPC1wAAAYkpi6H78vF999ojdTG_YQV1-zgfwnhY1MB_W3u5wq4T-lY&challegeType=AgGvgujNOHyD0wAAAYkpi6H_TwTK9ylBb97pI8TfZllMAQBwMeFcuKI&memberId=AgF-dpm-izIEcgAAAYkpi6ICe81X3WEbOtfhFy9kdEjtdlY&recognizeDevice=AgH1g93XvFgwDwAAAYkpi6IFIcvc_GCc3ajSpEz1HYEXWv6Drk3d"
          target="_blank"
          className=""
        >
          <BsLinkedin className="hover:cursor-pointer text-3xl xl:text-4xl xl:p-2 p-1 text-black bg-white rounded-full" />
        </a>
      ),
    },

    {
      name: "Saint Daniel",
      position: "Product & NFT Designer",
      experience:
        "Passionate and Experienced Designer skilled in multiple design disciplines including but not restricted to Brand/Visual Identity, Advertising/Marketing, Packaging, UI/UX and 3D Modelling. Expertise in creating intuitive digital experiences that solve complex problems and drive business growth. Strong collaborator with a deep understanding of design principles and user research.",
      link: (
        <a
          href="https://www.linkedin.com/in/saint-daniel-a2a308180"
          target="_blank"
          className=""
        >
          <BsLinkedin className="hover:cursor-pointer text-3xl xl:text-4xl xl:p-2 p-1 text-black bg-white rounded-full" />
        </a>
      ),
    },
    {
      name: "Emmanuel Uzoma Anofienem",
      position: "Marketing Strategist",
      experience:
        "A go-to marketing expert With a deep understanding of the latest digital marketing trends and technologies, Emmanuel has helped businesses of all sizes achieve their marketing goals and drive sales growth. From crafting compelling campaigns to analyzing data and refining strategies, Emmanuel has a proven track record of delivering innovative solutions that yield real results. By leveraging a mix of SEO, PPC, content marketing, social media, and other digital channels.",
      link: (
        <a
          href="https://www.linkedin.com/in/emmanuel-anofienem"
          target="_blank"
          className=""
        >
          {" "}
          <BsLinkedin className="hover:cursor-pointer text-3xl xl:text-4xl xl:p-2 p-1 text-black bg-white rounded-full" />
        </a>
      ),
    },
    {
      name: "AZHAR SIDDIQUI",
      position: "Team advisor",
      experience:
        "A Multi skilled executive with 18 year of experience in MENA region and India in BFSI with outstanding skills in Marketing Research and Analytics with a demonstrated history of working in blockchain, DeFi and NFT domain since last 4 years.",
      link: (
        <a
          href="https://www.linkedin.com/in/azharsiddiquii"
          target="_blank"
          className=""
        >
          <BsLinkedin className="hover:cursor-pointer text-3xl xl:text-4xl xl:p-2 p-1 text-black bg-white rounded-full" />
        </a>
      ),
    },
    {
      name: "Tochukwu Tagbo",
      position: "General Counsel",
      experience:
        "Tochukwu is a solicitor of the Supreme Court of England and Wales. He has over 12 years of experience in digital media industry. He advises clients on laws governing information technology. He also works with FinTech startup companies.",
      link: (
        <a
          href="https://www.linkedin.com/in/tochukwu-tagbo-4173361b"
          target="_blank"
          className=""
        >
          <BsLinkedin className="hover:cursor-pointer text-3xl xl:text-4xl xl:p-2 p-1 text-black bg-white rounded-full" />
        </a>
      ),
    },
  ]);

  return (
    <>
      {/* <Navbar /> */}
      <div className="pb-16 pt-28 m-auto w-[95%] md:w-[75%] xl:w-[82%]">
        <div className="text-center md:w-[75%] w-[90%] m-auto space-y-2 py-5">
          <h1 className="font-semibold xl:text-3xl text-2xl">
            The BinaryBlock Team
          </h1>
          <p className="">
            We understands that having a strong team and a proven strategy in
            place is fundamental to the success of the project. As such, the
            portfolio construct of the team is primarily driven by it focus on
            the blockchain industry. The team consists of impressive experts in
            the blockchain development niche, management professionals, and
            others with a proven track record of success.
          </p>
        </div>
        <div className="">
          {team.map((team) => (
            <div className="_0shine py-20 px-5 space-y-2 my-12 md:w-[75%] w-[90%] m-auto">
              <h1 className="text-xl">{team.name}</h1>
              <p className="text-[#6bb218]">{team.position}</p>
              <p className="text-justify">{team.experience}</p>
              <p className="cursor:pointer">{team.link}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Team;
