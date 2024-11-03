import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFrame } from '../features/frameSlice';
import FrameDisplay from '../components/frameDisplay';
import { setLength, setMargin, setDesiredGap } from '../features/wallSlice';
import './HomePage.css';


const HomePage = () => {
  const dispatch = useDispatch();
  const frames = useSelector((state) => state.frame.frames);
  const wall = useSelector((state) => state.wall)
  const [newFrame, setNewFrame] = useState({ width: '', height: '' });
  const [setWallLength] = useState('');
  const [margin, setWallMargin] = useState('');
  const [setWallDesiredGap] = useState('');
  const [calculationResult, setCalculationResult] = useState(null);

  console.log(wall)


  console.log('Frames:', frames);

  // Update frame input fields
  const handleFrameInputChange = (e) => {
    const { name, value } = e.target;
    setNewFrame({
      ...newFrame,
      [name]: value,
    });
  };

  // Update general input fields
  const handleGeneralInputChange = (e) => {
    const { name, value } = e.target;
    const numericValue = Number(value); // Convert the value to a number for consistency
  
    switch (name) {
      case 'wallLength':
        setWallLength(numericValue);
        dispatch(setLength(numericValue));
        console.log('wall specs', wall)
        break;
        case 'margin':
          setWallMargin(numericValue);
          dispatch(setMargin(numericValue));
          console.log('wall specs', wall)
          
          break;
          case 'desiredGap':
            setWallDesiredGap(numericValue);
            dispatch(setDesiredGap(numericValue));
            
            console.log('wall specs', wall.desiredGap)
        break;
      default:
        break;
    }
  };

  const handleAddFrame = () => {
    if (newFrame.width && newFrame.height) {
      const frameToAdd = {
        width: parseInt(newFrame.width, 10),
        height: parseInt(newFrame.height, 10),
      };

      console.log('Frame to add:', frameToAdd);
      dispatch(addFrame(frameToAdd));
      setNewFrame({ width: '', height: '' }); // Reset form
    }
  };

  
  

  const calculate = () => {
    let numGaps = frames.length - 1;
    let totalWidth = 0;
    let totalWidthGap = 0;

    for (let frame of frames) {
      if (frame) {
        totalWidth += frame.width;
        // totalWidthGap += frame.width + wall.desiredGap / 2;
      }
    }
    totalWidthGap = totalWidth + ((Array.from(frames).length - 1) * wall.desiredGap);
    console.log(totalWidthGap);

    if (totalWidth + (wall.margin * 2) >= wall.length || totalWidthGap + (wall.margin * 2) >= wall.length) {
      console.log('Not enough space for all frames');
      setCalculationResult('Not enough space for all frames');
      return;
    }
  
    let totalWidthMargins = wall.length - (margin * 2)
    let widthDifference = totalWidthMargins - totalWidthGap
    let frameSpacing = widthDifference / numGaps;
  
    const result = {
      totalWidthMargins,
      widthDifference,
      frameSpacing,
    };
  
    console.log('Calculation result:', result);
    setCalculationResult(result); // Set the result in the state
  };

  

  return (
    <div className='page-container'>
      <h1>PrepAssist</h1>

      <div className='background-container'>
      <h2>Frame Hanging Assistance</h2>
      <div>

        <div id='wall-container' className='input-container'>
        <h3>Wall Length</h3>
          <input
            type="number"
            name="wallLength"
            placeholder="Wall Length"
            value={wall.length}
            onChange={handleGeneralInputChange}
          />
        
        
        <h3>Margin</h3>
        <input
          type="number"
          name="margin"
          placeholder="Margin"
          value={wall.margin}
          onChange={handleGeneralInputChange}
        />
        
        <h3>Desired Gap</h3>
        <input
          type="number"
          name="desiredGap"
          placeholder="Desired Gap"
          value={wall.desiredGap}
          onChange={handleGeneralInputChange}
        />
        </div>
        {/* <button onClick={handleWallSpecs}>Add WallSpecs</button> */}
        <div id='add-frame-container' className='input-container'>
        <h3>Add a New Frame</h3>
        <input
          type="number"
          name="width"
          placeholder="Width"
          value={newFrame.width}
          onChange={handleFrameInputChange}
          />
          <br/>
        <input
        id='height-input'
          type="number"
          name="height"
          placeholder="Height"
          value={newFrame.height}
          onChange={handleFrameInputChange}
          />
          <br/>
        <button id='add-frame' onClick={handleAddFrame}>Add Frame</button>
        </div>
      </div>
      <FrameDisplay frames={frames} />
      <button id='calculate' onClick={calculate}>Calculate</button>
      
      {calculationResult && (
  <div id='calculation-container' className='input-container'>
    <h3>Calculation Result:</h3>
    {typeof calculationResult === 'string' ? (
      <p>{calculationResult}</p>
    ) : (
      <div>
        <p>Total Width with Margins: {calculationResult.totalWidthMargins}</p>
        <p>Width Difference: {calculationResult.widthDifference}</p>
        <div id='result'>
          <p>Frame Spacing: {calculationResult.frameSpacing}</p>
        </div>
      </div>
    )}
  </div>
  
)}
    </div>
    </div>
  );
};

export default HomePage;

// useEffect(() => {
//   const loadFrames = async () => {
//     try {
//       const data = await fetchFrames();
//       dispatch(setFrames(data));
//     } catch (error) {
//       console.error('Error loading frames:', error);
//     }
//   };

//   loadFrames();
// }, [dispatch]);
