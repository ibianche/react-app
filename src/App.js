import React, {useState} from 'react';


function App() {

  const [imie, setImie] = useState('');
  const [wybor, setWybor] = useState('tak');

  const wyslij = (evt) => {
    evt.preventDefault();
    console.log('Nasze imie to: ', imie, wybor)
  };

  const zmianaImie = (evt) => {
   setImie(evt.target.value);
  };

  const zmianaWybor = (evt) => {
    setWybor(evt.target.value);
  };


  return (
    <form onSubmit={wyslij}>
      <label>
        Imie:
        <input type='text' value={imie} onChange={zmianaImie}/>
      </label>
      <select value={wybor} onChange={zmianaWybor}>
        <option value='tak'>Tak</option>
        <option value='nie'>Nie</option>
      </select>
      <br/>
      <input type='submit' value='wyslij'/>
    </form>
  );
}

export default App;
