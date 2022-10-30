import React from 'react'
import videoBgMassMedia from "../../assets/video/VideoBackOnChildren/Dota2.mp4";


function BackgroundMassMedia () {
  const brightness= 50
  return (
    <div>
        <video src={videoBgMassMedia} autoPlay loop muted width="100%"
        style={{
            position: "absolute",
            width: "100%",
            left: "50%",
            top: "50%",
            height: "100%",
            objectFit: "cover",
            transform: "translate(-50%, -50%)",
            zIndex: "-1",
            filter: "brightness(40%)"
        }}>  
        </video>
    </div>
  );
}
export default BackgroundMassMedia; 