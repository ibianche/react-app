import React from 'react';

class Second extends React.Component {

  state = {
    name: 'Inna'
  }

  render() {
    return(
      <div>
    <h1>Moje imie to: {this.state.name}</h1>
    <h1 onClick={ (evt) => console.log('kliknalem', evt)}>
      Moje nazwisko to: {this.props.surname}</h1>
      </div>
    )
  }
}

export default Second;
