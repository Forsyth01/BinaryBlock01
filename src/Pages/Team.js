import React, { useState } from "react";
import {BsLinkedin, BsTwitter} from "react-icons/bs"

const Team = () => {
  const [team, setTeam] = useState([
    {
      name: "Godspower Egbetamah",
      position: "Founder and CEO",
      experience:
        "Lead designer at GpLab with excellent experience in crypto project design in the following fields DeFi, NFT, Tokenomics, decentralized exchanges, marketplace, and project management",
        link: <BsLinkedin className="hover:cursor-pointer text-3xl xl:text-4xl xl:p-2 p-1 text-black bg-white rounded-full"/>,
    },
    {
      name: "Ezekiel Cliffy .E",
      position: "Co-founder & COO",
      experience:
        "A technology entrepreneur connected to the founding and sustainability of multiple tech-powered businesses, with over 8 years of experience as a brand developer, software developer, strategist and team lead offering digital products development services",
        link: <BsLinkedin className="hover:cursor-pointer text-3xl xl:text-4xl xl:p-2 p-1 text-black bg-white rounded-full"/>,
    },
    {
      name: "Ishan Dua",
      position: "Chief Technology Officer",
      experience:
        "Technical Product Management | Project Management | Blockchain Product Manager | Web 3.0 | DeFi | NFT | Tokenization | Cryptonomics | Metaverse | FinTech | Global ERP Consultant",
      link: <BsLinkedin className="hover:cursor-pointer text-3xl xl:text-4xl xl:p-2 p-1 text-black bg-white rounded-full"/>,
    },
    
    {
      name: "Saint Daniel",
      position: "Product & NFT Designer",
      experience: "Multi-Disciplinary designer with half a decade of experience.",
      link: <BsLinkedin className="hover:cursor-pointer text-3xl xl:text-4xl xl:p-2 p-1 text-black bg-white rounded-full"/>,
    },
    {
      name: "Emmanuel Uzoma Anofienem",
      position: "Marketing Strategist",
      experience: "A go-to marketing expert With a deep understanding of the latest digital marketing trends and technologies, Emmanuel has helped businesses of all sizes achieve their marketing goals and drive sales growth. From crafting compelling campaigns to analyzing data and refining strategies, Emmanuel has a proven track record of delivering innovative solutions that yield real results. By leveraging a mix of SEO, PPC, content marketing, social media, and other digital channels.",
      link: <BsLinkedin className="hover:cursor-pointer text-3xl xl:text-4xl xl:p-2 p-1 text-black bg-white rounded-full"/>,
    },
    {
      name: "AZHAR SIDDIQUI",
      position: "Team advisor",
      experience: "A Multi skilled executive with 18 year of experience in MENA region and India in BFSI with outstanding skills in Marketing Research and Analytics with a demonstrated history of working in blockchain, DeFi and NFT domain since last 4 years.",
      link: <BsLinkedin className="hover:cursor-pointer text-3xl xl:text-4xl xl:p-2 p-1 text-black bg-white rounded-full"/>,
    },
    {
      name: "Tochukwu Tagbo",
      position: "General Counsel",
      experience: "Tochukwu is a solicitor of the Supreme Court of England and Wales. He has over 12 years of experience in digital media industry. He advises clients on laws governing information technology. He also works with FinTech startup companies.",
      link: <BsLinkedin className="hover:cursor-pointer text-3xl xl:text-4xl xl:p-2 p-1 text-black bg-white rounded-full"/>,
    },
  ]);

  return (
    <div className="pb-16 pt-28">
        <div className="text-center md:w-[70%] w-[90%] m-auto space-y-2 py-5">
            <h1 className="font-semibold xl:text-3xl text-2xl">The BinaryBlock Team</h1>
            <p className="">We understands that having a strong team and a proven strategy in place is fundamental to the success of the project. As such, the portfolio construct of the team is primarily driven by it focus on the blockchain industry. The team consists of impressive experts in the blockchain development niche, management professionals, and others with a proven track record of success.</p>
        </div>
        <div className="">
      {team.map((team) => (
        <div className="_0shine py-20 px-5 space-y-2 my-12 md:w-[60%] w-[90%] m-auto">
          <h1 className="text-xl">{team.name}</h1>
          <p className="text-[#6bb218]">{team.position}</p>
          <p className="text-justify">{team.experience}</p>
          <p className="">{team.link}</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Team;
