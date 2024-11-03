import React from 'react';


const FrameDisplay = ({ frames }) => {
  console.log(frames)

  // const formattedFrames = Array.from(frames)
  return (
    <div>
      {frames.map((frame, index) => (
        <div key={index}>
          <h3>Frame {index + 1}:</h3>
          <p>Frame Width: {frame.width} | Frame Height: {frame.height}</p>
          
        </div>
      ))}
    </div>
  );
};

export default FrameDisplay;
