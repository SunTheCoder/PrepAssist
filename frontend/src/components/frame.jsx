import React from "react";
import { useSelector } from "react-redux";

const SCALE_FACTOR = 2;

const Frame = ({ width, height }) => {
  return (
    <div
      style={{
        backgroundColor: 'white',
        width: `${width * SCALE_FACTOR}px`,
        height: `${height * SCALE_FACTOR}px`,
        border: '1px solid black',
        margin: '10px',
      }}
    />
  );
};

const FrameLayout = () => {
  const frames = useSelector((state) => state.frame.frames);
  const wall = useSelector((state) => state.wall);

  const wallWidth = wall.length * SCALE_FACTOR; // Scale wall length for display
  const wallMargin = wall.margin * SCALE_FACTOR; // Scale margin

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: `${wallWidth}px`,
        padding: `0 ${wallMargin}px`,
        backgroundColor: '#f0f0f0', // Light color to represent the wall
        border: '2px solid gray',
        margin: '20px auto',
        position: 'relative',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: `${wall.desiredGap * SCALE_FACTOR}px` }}>
        {frames.map((frame) => (
          <Frame key={frame.id} width={frame.width} height={frame.height} />
        ))}
      </div>
    </div>
  );
};

export default FrameLayout;
