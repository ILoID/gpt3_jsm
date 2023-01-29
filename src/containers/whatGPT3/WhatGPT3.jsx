import React from 'react';
import { Feature } from '../../components';
import './whatGPT3.css';

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature title="What is GPT-3" text="NextAuth is a library that allows you to easily add authentication to your application. It has built-in support for most authentication services like Google, Auth0, Facebook, GitHub, etc. For this tutorial, we’ll be using GitHub authentication." />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
        <p>Explore The Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature title="Chatbots" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought." />
        <Feature title="Knowledgebase" text="At jointure ladyship an insisted so humanity the. Friendly bachelor entrance to on by. As out impossible own apartments." />
        <Feature title="Education" text="At jointure ladyship an insisted so humanity the. Friendly bachelor entrance to on by. As out impossible own apartments." />
      </div>
    </div>
  )
}

export default WhatGPT3