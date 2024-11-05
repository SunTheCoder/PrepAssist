import React from 'react';

const GroupDisplay = ({ groups }) => {
  console.log('GROUPS for display:', groups);

  if (groups && Object.keys(groups).length > 0) {
    console.log('test group',Object.entries(groups))
    return (
      <div>
        {Object.entries(groups).map((group, groupIndex) => (
          <div key={groupIndex}>
            <h3>Group {groupIndex + 1}:</h3>
            {group[1].map((frame, frameIndex) => (
              <p key={frameIndex}>
                Width: {frame.width}" | Height: {frame.height}"
              </p>
              
            ))}
          </div>
        ))}
      </div>
    );
  }

  
};

export default GroupDisplay;
