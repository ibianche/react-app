import React from 'react';

class Second extends React.Component {

  state = {
    name: 'Inna',
    surname:'',
    data: new Date()
  };

  componentDidMount() {
    console.log('poczatek komponentu');
    this.setState({surname: this.props.surname});
    this.inter = setInterval(() => {
      this.setState({data: new Date()})
    }, 1000);
  };

  componentWillUnmount() {
    clearInterval(this.inter);
    console.log('koniec komponentu');
  }

  klik = (evt) => {
    this.setState(   //zmiana state za pomoca funkcji setState
      {name: 'Ala'},
      () => console.log('wew', this.state.name)
    );
    console.log('zew', this.state.name);
  };

  zmiana = (evt) => {
    this.setState({surname: evt.target.value});
  };

  render() {
    return(
      <div>
        <h1>{this.state.data.toString()}</h1>
    <h1>Moje imie to: {this.state.name}</h1>
    <h1 onClick={this.klik}>
      Moje nazwisko to: {this.state.surname}</h1>
        <input type='text' onChange={this.zmiana}/>
      </div>
    )
  }
}

export default Second;
