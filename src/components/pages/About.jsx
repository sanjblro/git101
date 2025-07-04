import React, { useState } from 'react';

function About() {
  const [age, setAge] = useState('');

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-xl">
      <p className="mb-4">How old are you?</p>

      <input
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        placeholder="Enter your age"
        className="p-2 border border-black rounded-full w-60 text-center"
      />
    </div>
  );
}

export default About;

