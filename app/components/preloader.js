import React from 'react';

const Preloader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border-4 border-white border-t-4 border-t-primary-green rounded-full w-16 h-16 animate-spin"></div>
    </div>
  );
};

export default Preloader;
