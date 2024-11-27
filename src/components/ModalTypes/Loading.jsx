import React from 'react';
import { Loader2 } from 'lucide-react';
import './loader.css';

const Loading = () => {
  return (
   
      <div className="loader">
        <Loader2 className="loader-icon" />
        <span className="loader-text">Compiling.</span>
      </div>
    
  );
};

export default Loading;

/* Loader CSS */
