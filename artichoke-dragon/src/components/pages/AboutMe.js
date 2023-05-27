import React from "react";

export default function AboutMe() {
  return (
    <div>
  <img src={require("../../assets/profilePhoto.jpg")} alt="profile photo" />
  <p className="aboutMe">
    Welcome to my page! I am a full stack web developer aiming to write the best applications possible!
    I have a nack for organization so data systems are my bread and butter!!! 🍞 🧈
    If I'm not working on a project I'm proably at the gym, walking my dog, or out fighting dragons in a DnD campaign! 🔥🐉
  </p>
  </div>
  );
}