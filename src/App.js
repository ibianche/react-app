import React from 'react';
// import Second from './components/second'
import First from './components/first';

function Zaloguj() {
  return <h1>Zaloguj się</h1>
}

function Wyloguj() {
  return <h1>Wyloguj się</h1>
}

function Auth(props) {
  if(props.zalogowany){
    return <Wyloguj/>
  }else{
    return <Zaloguj/>
  }
}


function App() {

  let mySurname = 'Bianche';

  return (
    <div>
      <Auth zalogowany={false}/>
    </div>
  );
}

export default App;
