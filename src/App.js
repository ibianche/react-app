import React from 'react';
import Second from './components/second'


function App() {

  let mySurname = 'Bianche';
  return (
    <div>
      <Second surname={mySurname}/>
    </div>
  );
}

export default App;
