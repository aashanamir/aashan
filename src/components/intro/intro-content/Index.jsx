import React from 'react';
import "./style.scss";
import Hand from "../../../images/hand.png";
import Girl from "../../../images/girl.png";
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

import CallToAction from "../../shared/callToAction";

const IntroContent = () => {
  return (
    <div className="intro-content">
    <div className="layout">
        <div className="left-col">
            <h1 className='title'>
            <span className="short-text">
              Hello
            </span>
            <img src={Hand} alt="My Hand" />
            <span className="short-text">
              , I Am
            </span>
            <div className="long-text">
              Muhammad Aashan
            </div>
            <p>Hello, I'm Muhammad Aashan, a passionate Full Stack developer (Mern Stack) and WordPress enthusiast. With a strong foundation in front-end development (React Js) and a knack for creating custom WordPress themes, I bring creativity and functionality to the digital world.</p>
            </h1>
            <CallToAction text="Hire Me"/>
        </div>
        <div className="right-col">
            <img src={Girl} alt="Aashan Amir" />
            <div className="card-horizental">
              <span className='icon'><EmojiEventsIcon/></span>
              <span>Best Design Award</span>
            </div>

            <div className="card-vertical">
              <span className='icon'><EmojiEventsIcon/></span>
              <span>Best Design Award</span>
            </div>
        </div>
    </div>
    </div>
  )
}

export default IntroContent
