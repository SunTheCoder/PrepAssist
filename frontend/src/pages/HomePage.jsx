import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFrames } from '../features/frameSlice';
import { fetchFrames } from '../services/frameService';
import FrameDisplay from '../components/frameDisplay';
import addFrame from '../features/frameSlice';


const HomePage = () => {
  const dispatch = useDispatch();
  const frames = useSelector((state) => state.frame.frames);
  const [newFrame, setNewFrame] = useState({ width: '', height: '' });


  console.log('Frames:', frames)

  useEffect(() => {
    const loadFrames = async () => {
      try {
        const data = await fetchFrames();
        dispatch(setFrames(data));
      } catch (error) {
        console.error('Error loading frames:', error);
      }
    };

    loadFrames();
  }, [dispatch]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewFrame({
      ...newFrame,
      [name]: value,
    });
  };

  const handleAddFrame = () => {
    if (newFrame.width && newFrame.height) {
      const frameToAdd = {
        width: parseInt(newFrame.width),
        height: parseInt(newFrame.height),
      };
  
      // Check this line to ensure you're dispatching the correct action
      dispatch(addFrame(frameToAdd));
  
      setNewFrame({ width: '', height: '' }); // Reset form
    }
  };
  

  return (
    <div>
      <h1>Frame Hanging Assistance</h1>
      <div>
        <h2>Add a New Frame</h2>
        <input
          type="number"
          name="width"
          placeholder="Width"
          value={newFrame.width}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="height"
          placeholder="Height"
          value={newFrame.height}
          onChange={handleInputChange}
        />
        <button onClick={handleAddFrame}>Add Frame</button>
      </div>
      <FrameDisplay frames={frames} />
    </div>
  );
};

export default HomePage;
