import React from 'react';


function App() {

  let zwierzeta = [
    {id: 1, nazwa: 'lew', waga: 200},
    {id: 2, nazwa: 'slon', waga: 600},
    {id: 3, nazwa: 'tygrys', waga: 150},
  ];

  const klik = zwierze => () => {   // <--- to  () => jezeli jeden argument mozna bez nawiasow
    console.log('klik');
    console.log(zwierze)
  };

  let listaNumerow = zwierzeta.map(zwierze => {   //'zwierze' okreslamy nazwe-indeks elementu

      return (
        <div key={zwierze.id} onClick={klik(zwierze)}>
          <h3>{zwierze.nazwa}</h3>
        </div>
      )
    });

  return (
    <div>
      {listaNumerow}
    </div>
  );
}

export default App;
