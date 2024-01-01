
import React from 'react';

const WaviyComponent = () => {
  const Hello=()=>{
    alert('Hello there, Welcome to my Portfolio Wesbite. Have a good day!!');
  }
  return (
    <div className="waviy heading-3" onClick={Hello}>
      <>
        <span style={{ '--i': 1 }}>H</span>
        <span style={{ '--i': 2 }}>E</span>
        <span style={{ '--i': 3 }}>L</span>
        <span style={{ '--i': 4 }}>L</span>
        <span style={{ '--i': 5 }}>O</span>
        <span style={{ '--i': 6 }}>!</span>
        <span style={{ '--i': 7 }}>!</span>
      </>
    </div>
  );
};

export default WaviyComponent;
