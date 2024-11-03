export const fetchFrames = async () => {
    const response = await fetch('calculate-dimensions');
    if (!response.ok) {
      throw new Error('Failed to fetch frames');
    }
    console.log(response)
    return response.json();
  };
  