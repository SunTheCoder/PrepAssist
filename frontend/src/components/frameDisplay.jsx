import React from 'react';


const FrameDisplay = ({ frames }) => {

  const formattedFrames = Array.from(frames)
  return (
    <div>
      {formattedFrames.map((frame, index) => (
        <div key={index}>
          <p>Frame Width: {frame.width}</p>
          <p>Frame Height: {frame.height}</p>
        </div>
      ))}
    </div>
  );
};

export default FrameDisplay;
