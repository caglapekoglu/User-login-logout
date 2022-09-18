import React from "react";

const HomeScreen = ({ user }) => {
  return (<div className="w-screen">{user?.email}
  <div className="flex gap-x-5 mx-[100px] my-[100px] justify-center overflow-scroll ">
    <img src="https://picsum.photos/300/500?random=1"></img>
    <img src="https://picsum.photos/300/500?random=2"></img>
    <img src="https://picsum.photos/300/500?random=3"></img>
    <img src="https://picsum.photos/300/500?random=4"></img>
    <img src="https://picsum.photos/300/500?random=5"></img>
    <img src="https://picsum.photos/300/500?random=6"></img>
    <img src="https://picsum.photos/300/500?random=7"></img>
  </div>
  </div>)
  
};

export default HomeScreen;