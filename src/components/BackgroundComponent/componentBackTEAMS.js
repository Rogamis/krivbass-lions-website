import React from 'react'
import videoBgTeams from "../../assets/video/VideoBackOnChildren/videoTeamsPage.mp4";

function BackgroundTeamsPage () {
  return (
    <div>
        <video src={videoBgTeams} autoPlay loop muted width="100%"
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
export default BackgroundTeamsPage; 