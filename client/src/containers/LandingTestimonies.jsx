import React from "react";
import "../styles/LandingTestimonies.scss";
import collageImage from "../rsc/images/collage.PNG";
import starsImage from "../rsc/images/stars.PNG";
import profileImage from "../rsc/images/user.PNG";
import ArrowLeftIcon from "../rsc/icons/arrow-left.PNG";
import ArrowRightIcon from "../rsc/icons/arrow-right.PNG";


const LandingTestimonies = () => {
  return (
    <div className="LandingTestimonies">
      <div className="left-upper">
        <div className="stars">
          <img src={starsImage} alt="start" />
        </div>
        <div>
          <h1 className="title">
            We´ve really sped up our workflow with Company and haven't looked
            back.
          </h1>
          <div className="user-arrows-cont">
            <div className="user flex-row center-vert">
              <img src={profileImage} alt="profile pic" />
              <div className="flex-col">
                <p>
                  <b>Katherine Moss</b>
                </p>
                <p>Project Manager, Layers</p>
              </div>
            </div>
            <div className="arrows flex-row">
              <button className="flex-col center-center"><img src={ArrowLeftIcon} alt="left icon" /></button>
              <button className="flex-col center-center"><img src={ArrowRightIcon} alt="right icon" /></button>
            </div>
          </div>
        </div>
      </div>
      <div className="right-lower">
        <img src={collageImage} alt="People smilling collage"></img>
      </div>
    </div>
  );
};

export default LandingTestimonies;
