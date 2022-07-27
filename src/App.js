import React from 'react';
// import Second from './components/second'
import First from './components/first';

function App() {

  let mySurname = 'Bianche';
  return (
    <div>
      <First surname={mySurname}/>
    </div>
  );
}

export default App;
