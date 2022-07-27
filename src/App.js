import React from 'react';


class Second extends React.Component {
  render() {
    return <h1>Moje nazwisko to: {this.props.surname}</h1>
  }
}

function First(props) {
  return <h1>Moje imie to: {props.name}</h1>
}




function App() {

  let myName = 'Inna';
  let mySurname = 'Bianche'
  return (
    <div>
    <First name={myName}/>
    <Second surname={mySurname}/>
    </div>
  );
}

export default App;
