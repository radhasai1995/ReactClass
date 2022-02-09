import React from 'react';


const SampleComponents = ({ data, data2, testFunc }) => {

  setTimeout(() => {
    testFunc();
  }, 3000);

  return (
    <h1>This is Sample Components {data} {data2}</h1>
  )
}




export default SampleComponents;