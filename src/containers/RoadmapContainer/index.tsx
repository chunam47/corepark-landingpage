import React from 'react';
import roadmapContent from '@assets/images/roadmap-content.png';
import roadmap from '@assets/images/roadmap.png';
import dot from '@assets/images/dot.png';
import roadmapEnd from '@assets/images/roadmap-end.png';
import discord from '@assets/images/discord.png';
import twiter from '@assets/images/twitter.png';
import telegram from '@assets/images/telegram.png';
const RoadmapContainer = () => {
  const dataRoadmap = [
    {
      id: 1,
      title: 'Phase 1',
      content: [
        'Market research',
        'Building up relationships with partners',
        'Live website',
        'Smart contract deployment',
        'Foundation group up',
      ],
      src: dot,
    },
    {
      id: 2,
      title: 'Phase 2',
      content: [
        'Backtesting',
        'Communities',
        'Audit report',
        'Public sale',
        'Token listing',
      ],
      src: dot,
    },
    {
      id: 3,
      title: 'Phase 3',
      content: [
        'Listing on CoinMarketCap and Coingecko',
        'Attracting members for social media',
        'Big advertisements in America, Europe, and China',
        'Social marketing campaign',
      ],
      src: dot,
    },
    {
      id: 4,
      title: 'Phase 4',
      content: ['Buyback and burn', 'Trending on Dextools, AveDex, Reddit, Twitter'],
    },
    {
      id: 5,
      title: 'Phase 5',
      content: [
        'Marketing & Whitepaper & Dapp 2.0',
        'Expand partnerships using Vaults tokens',
        'Integrate more advanced strategy Vaults',
        'Prepare for muitichain expansion',
      ],
    },
  ];
  return (
    <div className="root-roadmap pt-25">
      <div className="max-width-1276">
        <div className="roadmap-container">
          <div className="corepark-title pt-25 pb-25">Roadmap</div>
          <div className="roadmap-container__content flex flex-wrap gap-14 justify-center items-end">
            {dataRoadmap.map((item, index) => (
              <div key={index}>
                <img src={roadmap.src} alt="" />
                <div className="roadmap-container__content--item">
                  {item.src && <img className="dot" src={item.src.src} alt="" />}
                  <div className="relative">
                    <img src={roadmapContent.src} alt="" />
                    <div className="title">{item.title}</div>
                    <div className="decs">
                      <ul className="list-disc">
                        {item.content.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div>
              <img src={roadmapEnd.src} alt="" />
            </div>
          </div>
        </div>
        <div className="community-container">
          <div className="corepark-title">COMMUNITY</div>
          <div className="corepark-decs">
            Become a member of our community through the following channels:
          </div>
          <div className="flex gap-14 justify-center items-center pt-7 pb-11">
            <img src={discord.src} alt="" />
            <img src={twiter.src} alt="" />
            <img src={telegram.src} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadmapContainer;
