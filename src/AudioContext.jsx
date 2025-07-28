import React, { createContext, useState, useRef, useEffect } from 'react';

export const AudioContext = createContext();

export const AudioProvider = ({ children }) => {
  const audioRef = useRef(null);
  const [volume, setVolume] = useState(0.12);

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume;
  }, [volume]);

  return (
    <AudioContext.Provider value={{ volume, setVolume }}>
      <audio
        ref={audioRef}
        src={`${import.meta.env.BASE_URL}abc.mp3`}
        loop
        autoPlay
        muted
        onCanPlay={() => {
        audioRef.current.muted = false;
      }}
/>
      {children}
    </AudioContext.Provider>
  );
};
