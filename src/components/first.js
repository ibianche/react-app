import React, {useState, useEffect} from 'react';

function First (props){

  const [name, setName] = useState('Inna');
  const [surname, setSurname] = useState('');
  const [date, setDate] = useState(new Date());

  useEffect(() => {             //zamiast componentDidMount w klasie
    console.log('poczatek komponentu');
      setSurname(props.surname);
      // setInterval(() => {
      //  setDate(new Date())
      // }, 1000);

      return () =>{
        // clearInterval(this.inter);
          console.log('koniec komponentu');

      }
    }, []);


  // componentWillUnmount() {              //zamiast componentWillUnmount() w klasie
  //   clearInterval(this.inter);
  //   console.log('koniec komponentu');
  // }

  const klik = (evt) => {
    setName('Ala'); //metodą setName zmieniamy wartosc name
    console.log(name);
  }
  // zmiana = (evt) => {
  //   this.setState({surname: evt.target.value});
  // };


    return(
      <div>
        <h1>{date.toString()}</h1>
    <h1>Moje imie to: {name}</h1>
    <h1 onClick={klik}>
      Moje nazwisko to: {surname}</h1>
        {/*<input type='text' onChange={this.zmiana}/>*/}
      </div>
    )

}

export default First;

