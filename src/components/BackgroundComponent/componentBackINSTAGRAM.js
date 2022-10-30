import React from 'react'
import videoBgInst from "../assets/video/video1.mp4"

function VideoComponent() {
  return (
    <div>
        <video src={videoBgInst} autoPlay loop muted width="100%"
        style={{
            position: "absolute",
            width: "100%",
            left: "50%",
            top: "50%",
            height: "100%",
            objectFit: "cover",
            transform: "translate(-50%, -50%)",
            zIndex: "-1"
        }}>  
        </video>
    </div>
  );
}
export default VideoComponent
