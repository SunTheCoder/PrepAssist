import React from 'react';

const GroupDisplay = ({ groups }) => {
  console.log('GROUPS for display:', groups);

  if (groups && groups.length > 0) {
    return (
      <div>
        {groups.map((group, groupIndex) => (
          <div key={groupIndex}>
            <h3>Group {groupIndex + 1}:</h3>
            {group.map((frame, frameIndex) => (
              <p key={frameIndex}>
                Width: {frame.width} | Height: {frame.height}
              </p>
            ))}
          </div>
        ))}
      </div>
    );
  }

  return <p>No groups available</p>; // Fallback if there are no groups
};

export default GroupDisplay;
