import React from 'react';

class Second extends React.Component {

  state = {
    name: 'Inna'
  };

  klik = (evt) => {
    this.setState(   //zmiana state za pomoca funkcji setState
      {name: 'Ala'},
      () => console.log('wew', this.state.name)
    );
    console.log('zew', this.state.name);
  }

  zmiana(evt){
    console.log('input zmiana', evt.target.value);
  }

  render() {
    return(
      <div>
    <h1>Moje imie to: {this.state.name}</h1>
    <h1 onClick={this.klik}>
      Moje nazwisko to: {this.props.surname}</h1>
        <input type='text' onChange={this.zmiana}/>
      </div>
    )
  }
}

export default Second;
