import React from 'react';
import roadmapContent from '@assets/images/roadmap-content.png';
import roadmap from '@assets/images/roadmap.png';
import dot from '@assets/images/dot.png';
const RoadmapContainer = () => {
  return (
    <div className="root-roadmap pt-25">
      <div className="roadmap-container">
        <div className="corepark-title pt-25">Roadmap</div>
        <div className="roadmap-container__content flex flex-wrap gap-14">
          <div>
            <img src={roadmap.src} alt="" />
            <div className="roadmap-container__content--item">
              <img className="dot" src={dot.src} alt="" />
              <img src={roadmapContent.src} alt="" />
            </div>
          </div>
          <div>
            <img src={roadmap.src} alt="" />
            <div className="roadmap-container__content--item">
              <img className="dot" src={dot.src} alt="" />
              <img src={roadmapContent.src} alt="" />
            </div>
          </div>
          <div>
            <img src={roadmap.src} alt="" />
            <div className="roadmap-container__content--item">
              <img className="dot" src={dot.src} alt="" />
              <img src={roadmapContent.src} alt="" />
            </div>
          </div>
          <div>
            <img src={roadmap.src} alt="" />
            <div className="roadmap-container__content--item">
              <img className="dot" src={dot.src} alt="" />
              <img src={roadmapContent.src} alt="" />
            </div>
          </div>
          <div>
            <img src={roadmap.src} alt="" />
            <div className="roadmap-container__content--item">
              <img className="dot" src={dot.src} alt="" />
              <img src={roadmapContent.src} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadmapContainer;
